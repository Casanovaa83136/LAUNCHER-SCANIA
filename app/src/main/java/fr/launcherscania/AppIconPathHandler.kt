package fr.launcherscania

import android.content.Context
import android.graphics.Bitmap
import android.net.Uri
import android.util.LruCache
import android.webkit.WebResourceResponse
import androidx.core.graphics.drawable.toBitmap
import androidx.webkit.WebViewAssetLoader
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream

/** Sert les icônes des applications installées : /appicon/<paquet>.png */
class AppIconPathHandler(context: Context) : WebViewAssetLoader.PathHandler {

    private val pm = context.applicationContext.packageManager
    private val cache = object : LruCache<String, ByteArray>(6 * 1024 * 1024) {
        override fun sizeOf(key: String, value: ByteArray) = value.size
    }

    override fun handle(path: String): WebResourceResponse? {
        val pkg = Uri.decode(path).removeSuffix(".png")
        val bytes = cache.get(pkg) ?: try {
            val drawable = pm.getApplicationIcon(pkg)
            val bmp = drawable.toBitmap(SIZE, SIZE, Bitmap.Config.ARGB_8888)
            val out = ByteArrayOutputStream()
            bmp.compress(Bitmap.CompressFormat.PNG, 100, out)
            out.toByteArray().also { cache.put(pkg, it) }
        } catch (_: Exception) {
            return null
        }
        return WebResourceResponse("image/png", null, ByteArrayInputStream(bytes)).apply {
            responseHeaders = mapOf("Cache-Control" to "max-age=3600")
        }
    }

    companion object {
        private const val SIZE = 144
    }
}
