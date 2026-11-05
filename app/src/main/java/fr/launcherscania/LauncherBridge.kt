package fr.launcherscania

import android.content.ActivityNotFoundException
import android.content.ContentValues
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.os.SystemClock
import android.provider.MediaStore
import android.provider.Settings
import android.util.AtomicFile
import android.view.KeyEvent
import android.media.AudioManager
import android.webkit.JavascriptInterface
import android.widget.Toast
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

/**
 * Fonctions Android accessibles depuis l'interface web via l'objet JavaScript "Android".
 * Les méthodes sont appelées sur un thread du WebView : tout ce qui touche à l'UI passe par runOnUiThread.
 */
class LauncherBridge(private val activity: MainActivity) {

    private val pm = activity.packageManager
    private val stateFile = AtomicFile(File(activity.filesDir, "state.json"))

    // ---------------- Applications ----------------

    @JavascriptInterface
    fun getApps(): String {
        val intent = Intent(Intent.ACTION_MAIN).addCategory(Intent.CATEGORY_LAUNCHER)
        val list = try {
            @Suppress("DEPRECATION")
            pm.queryIntentActivities(intent, 0)
        } catch (_: Exception) {
            emptyList()
        }
        val seen = HashSet<String>()
        val apps = list.mapNotNull { ri ->
            val pkg = ri.activityInfo.packageName
            if (pkg == activity.packageName || !seen.add(pkg)) null
            else pkg to (ri.loadLabel(pm)?.toString() ?: pkg)
        }.sortedBy { it.second.lowercase(Locale.FRENCH) }
        val arr = JSONArray()
        apps.forEach { (pkg, label) -> arr.put(JSONObject().put("pkg", pkg).put("label", label)) }
        return arr.toString()
    }

    @JavascriptInterface
    fun launchApp(pkg: String) {
        val intent = pm.getLaunchIntentForPackage(pkg)
        if (intent == null) {
            toast("Application introuvable")
            return
        }
        start(intent)
    }

    @JavascriptInterface
    fun appInfo(pkg: String) {
        start(Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:$pkg")))
    }

    // ---------------- Navigation ----------------

    @JavascriptInterface
    fun navigate(query: String, app: String) {
        val q = Uri.encode(query)
        if (app == "waze") {
            val waze = Intent(Intent.ACTION_VIEW, Uri.parse("https://waze.com/ul?q=$q&navigate=yes")).setPackage(WAZE)
            if (canHandle(waze)) start(waze) else { toast("Waze n'est pas installé"); start(Intent(Intent.ACTION_VIEW, Uri.parse("geo:0,0?q=$q"))) }
            return
        }
        val gm = Intent(Intent.ACTION_VIEW, Uri.parse("google.navigation:q=$q")).setPackage(GMAPS)
        when {
            canHandle(gm) -> start(gm)
            else -> start(Intent(Intent.ACTION_VIEW, Uri.parse("geo:0,0?q=$q")))
        }
    }

    @JavascriptInterface
    fun openMap(app: String) {
        val pkg = if (app == "waze") WAZE else GMAPS
        val launch = pm.getLaunchIntentForPackage(pkg)
        if (launch != null) start(launch)
        else {
            toast(if (app == "waze") "Waze n'est pas installé" else "Google Maps n'est pas installé")
            start(Intent(Intent.ACTION_VIEW, Uri.parse("geo:0,0?q=")))
        }
    }

    // ---------------- Musique / téléphone ----------------

    @JavascriptInterface
    fun mediaKey(code: Int) {
        val am = activity.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        val now = SystemClock.uptimeMillis()
        am.dispatchMediaKeyEvent(KeyEvent(now, now, KeyEvent.ACTION_DOWN, code, 0))
        am.dispatchMediaKeyEvent(KeyEvent(now, now, KeyEvent.ACTION_UP, code, 0))
    }

    @JavascriptInterface
    fun openMusic(pkg: String) {
        if (pkg.isNotEmpty() && pm.getLaunchIntentForPackage(pkg) != null) return launchApp(pkg)
        val candidates = listOf(
            Intent.makeMainSelectorActivity(Intent.ACTION_MAIN, Intent.CATEGORY_APP_MUSIC),
        ) + MUSIC_PKGS.mapNotNull { pm.getLaunchIntentForPackage(it) }
        candidates.firstOrNull { canHandle(it) }?.let { start(it) }
            ?: toast("Choisissez l'application musique dans les Réglages")
    }

    @JavascriptInterface
    fun openPhone(pkg: String) {
        if (pkg.isNotEmpty() && pm.getLaunchIntentForPackage(pkg) != null) return launchApp(pkg)
        // Applications Bluetooth "téléphone" habituelles des autoradios chinois, puis le composeur Android
        PHONE_PKGS.firstNotNullOfOrNull { pm.getLaunchIntentForPackage(it) }?.let { return start(it) }
        val dial = Intent(Intent.ACTION_DIAL)
        if (canHandle(dial)) start(dial) else toast("Choisissez l'application téléphone dans les Réglages")
    }

    // ---------------- Système ----------------

    @JavascriptInterface
    fun openSettings(which: String) {
        val action = when (which) {
            "wifi" -> Settings.ACTION_WIFI_SETTINGS
            "bluetooth" -> Settings.ACTION_BLUETOOTH_SETTINGS
            "home" -> Settings.ACTION_HOME_SETTINGS
            else -> Settings.ACTION_SETTINGS
        }
        val intent = Intent(action)
        if (canHandle(intent)) start(intent) else start(Intent(Settings.ACTION_SETTINGS))
    }

    @JavascriptInterface
    fun setFullscreen(on: Boolean) {
        activity.getSharedPreferences("launcher", Context.MODE_PRIVATE).edit().putBoolean("fullscreen", on).apply()
        activity.runOnUiThread { activity.applyFullscreen(on) }
    }

    @JavascriptInterface
    fun appVersion(): String = try {
        pm.getPackageInfo(activity.packageName, 0).versionName ?: "?"
    } catch (_: Exception) {
        "?"
    }

    // ---------------- Données ----------------

    @JavascriptInterface
    fun saveState(json: String) {
        synchronized(stateFile) {
            val out = stateFile.startWrite()
            try {
                out.write(json.toByteArray(Charsets.UTF_8))
                stateFile.finishWrite(out)
            } catch (e: Exception) {
                stateFile.failWrite(out)
            }
        }
    }

    @JavascriptInterface
    fun loadState(): String? = synchronized(stateFile) {
        try {
            String(stateFile.readFully(), Charsets.UTF_8)
        } catch (_: Exception) {
            null
        }
    }

    @JavascriptInterface
    fun exportBackup(json: String): String {
        val name = "launcher-scania-" + SimpleDateFormat("yyyy-MM-dd_HH-mm", Locale.FRANCE).format(Date()) + ".json"
        return try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                val values = ContentValues().apply {
                    put(MediaStore.Downloads.DISPLAY_NAME, name)
                    put(MediaStore.Downloads.MIME_TYPE, "application/json")
                    put(MediaStore.Downloads.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS)
                }
                val uri = activity.contentResolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values)
                    ?: return "Échec de l'export"
                activity.contentResolver.openOutputStream(uri)?.use { it.write(json.toByteArray(Charsets.UTF_8)) }
            } else {
                @Suppress("DEPRECATION")
                val dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
                dir.mkdirs()
                File(dir, name).writeText(json, Charsets.UTF_8)
            }
            "Exporté dans Téléchargements/$name"
        } catch (e: Exception) {
            "Échec de l'export : ${e.message}"
        }
    }

    // ---------------- Utilitaires ----------------

    private fun canHandle(intent: Intent): Boolean = try {
        intent.resolveActivity(pm) != null
    } catch (_: Exception) {
        false
    }

    private fun start(intent: Intent) {
        activity.runOnUiThread {
            try {
                activity.startActivity(intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
            } catch (_: ActivityNotFoundException) {
                toast("Aucune application pour cette action")
            } catch (_: SecurityException) {
                toast("Action non autorisée")
            }
        }
    }

    private fun toast(msg: String) {
        activity.runOnUiThread { Toast.makeText(activity, msg, Toast.LENGTH_SHORT).show() }
    }

    companion object {
        const val GMAPS = "com.google.android.apps.maps"
        const val WAZE = "com.waze"
        val MUSIC_PKGS = listOf(
            "com.syu.music", "com.syu.radio", "com.fyt.music", "com.spotify.music", "deezer.android.app",
            "com.google.android.apps.youtube.music", "com.android.music"
        )
        val PHONE_PKGS = listOf(
            "com.syu.bt", "com.fyt.bt", "com.ts.bt", "com.android.bluetooth.phone", "com.qf.bt"
        )
    }
}
