(()=>{var rm=Object.create;var yl=Object.defineProperty;var sm=Object.getOwnPropertyDescriptor;var am=Object.getOwnPropertyNames;var om=Object.getPrototypeOf,lm=Object.prototype.hasOwnProperty;var cm=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Or=(r,t)=>{for(var e in t)yl(r,e,{get:t[e],enumerable:!0})},um=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of am(t))!lm.call(r,a)&&a!==e&&yl(r,a,{get:()=>t[a],enumerable:!(i=sm(t,a))||i.enumerable});return r};var fm=(r,t,e)=>(e=r!=null?rm(om(r)):{},um(t||!r||!r.__esModule?yl(e,"default",{value:r,enumerable:!0}):e,r));var Jd=cm((Ho,Kd)=>{(function(r,t){typeof Ho=="object"&&typeof Kd<"u"?t(Ho):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(Ho,(function(r){"use strict";var t="1.9.4";function e(n){var s,l,h,_;for(l=1,h=arguments.length;l<h;l++){_=arguments[l];for(s in _)n[s]=_[s]}return n}var i=Object.create||(function(){function n(){}return function(s){return n.prototype=s,new n}})();function a(n,s){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var h=l.call(arguments,2);return function(){return n.apply(s,h.length?h.concat(l.call(arguments)):arguments)}}var o=0;function u(n){return"_leaflet_id"in n||(n._leaflet_id=++o),n._leaflet_id}function c(n,s,l){var h,_,S,O;return O=function(){h=!1,_&&(S.apply(l,_),_=!1)},S=function(){h?_=arguments:(n.apply(l,arguments),setTimeout(O,s),h=!0)},S}function f(n,s,l){var h=s[1],_=s[0],S=h-_;return n===h&&l?n:((n-_)%S+S)%S+_}function d(){return!1}function p(n,s){if(s===!1)return n;var l=Math.pow(10,s===void 0?6:s);return Math.round(n*l)/l}function m(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function v(n){return m(n).split(/\s+/)}function y(n,s){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?i(n.options):{});for(var l in s)n.options[l]=s[l];return n.options}function M(n,s,l){var h=[];for(var _ in n)h.push(encodeURIComponent(l?_.toUpperCase():_)+"="+encodeURIComponent(n[_]));return(!s||s.indexOf("?")===-1?"?":"&")+h.join("&")}var b=/\{ *([\w_ -]+) *\}/g;function x(n,s){return n.replace(b,function(l,h){var _=s[h];if(_===void 0)throw new Error("No value provided for variable "+l);return typeof _=="function"&&(_=_(s)),_})}var g=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function P(n,s){for(var l=0;l<n.length;l++)if(n[l]===s)return l;return-1}var E="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function N(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var z=0;function F(n){var s=+new Date,l=Math.max(0,16-(s-z));return z=s+l,window.setTimeout(n,l)}var D=window.requestAnimationFrame||N("RequestAnimationFrame")||F,$=window.cancelAnimationFrame||N("CancelAnimationFrame")||N("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function nt(n,s,l){if(l&&D===F)n.call(s);else return D.call(window,a(n,s))}function T(n){n&&$.call(window,n)}var I={__proto__:null,extend:e,create:i,bind:a,get lastId(){return o},stamp:u,throttle:c,wrapNum:f,falseFn:d,formatNum:p,trim:m,splitWords:v,setOptions:y,getParamString:M,template:x,isArray:g,indexOf:P,emptyImageUrl:E,requestFn:D,cancelFn:$,requestAnimFrame:nt,cancelAnimFrame:T};function st(){}st.extend=function(n){var s=function(){y(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=s.__super__=this.prototype,h=i(l);h.constructor=s,s.prototype=h;for(var _ in this)Object.prototype.hasOwnProperty.call(this,_)&&_!=="prototype"&&_!=="__super__"&&(s[_]=this[_]);return n.statics&&e(s,n.statics),n.includes&&(ct(n.includes),e.apply(null,[h].concat(n.includes))),e(h,n),delete h.statics,delete h.includes,h.options&&(h.options=l.options?i(l.options):{},e(h.options,n.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,O=h._initHooks.length;S<O;S++)h._initHooks[S].call(this)}},s},st.include=function(n){var s=this.prototype.options;return e(this.prototype,n),n.options&&(this.prototype.options=s,this.mergeOptions(n.options)),this},st.mergeOptions=function(n){return e(this.prototype.options,n),this},st.addInitHook=function(n){var s=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function ct(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=g(n)?n:[n];for(var s=0;s<n.length;s++)n[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var k={on:function(n,s,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],s);else{n=v(n);for(var _=0,S=n.length;_<S;_++)this._on(n[_],s,l)}return this},off:function(n,s,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var h in n)this._off(h,n[h],s);else{n=v(n);for(var _=arguments.length===1,S=0,O=n.length;S<O;S++)_?this._off(n[S]):this._off(n[S],s,l)}return this},_on:function(n,s,l,h){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(n,s,l)===!1){l===this&&(l=void 0);var _={fn:s,ctx:l};h&&(_.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(_)}},_off:function(n,s,l){var h,_,S;if(this._events&&(h=this._events[n],!!h)){if(arguments.length===1){if(this._firingCount)for(_=0,S=h.length;_<S;_++)h[_].fn=d;delete this._events[n];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var O=this._listens(n,s,l);if(O!==!1){var q=h[O];this._firingCount&&(q.fn=d,this._events[n]=h=h.slice()),h.splice(O,1)}}},fire:function(n,s,l){if(!this.listens(n,l))return this;var h=e({},s,{type:n,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var _=this._events[n];if(_){this._firingCount=this._firingCount+1||1;for(var S=0,O=_.length;S<O;S++){var q=_[S],J=q.fn;q.once&&this.off(n,J,q.ctx),J.call(q.ctx||this,h)}this._firingCount--}}return l&&this._propagateEvent(h),this},listens:function(n,s,l,h){typeof n!="string"&&console.warn('"string" type argument expected');var _=s;typeof s!="function"&&(h=!!s,_=void 0,l=void 0);var S=this._events&&this._events[n];if(S&&S.length&&this._listens(n,_,l)!==!1)return!0;if(h){for(var O in this._eventParents)if(this._eventParents[O].listens(n,s,l,h))return!0}return!1},_listens:function(n,s,l){if(!this._events)return!1;var h=this._events[n]||[];if(!s)return!!h.length;l===this&&(l=void 0);for(var _=0,S=h.length;_<S;_++)if(h[_].fn===s&&h[_].ctx===l)return _;return!1},once:function(n,s,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],s,!0);else{n=v(n);for(var _=0,S=n.length;_<S;_++)this._on(n[_],s,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[u(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[u(n)],this},_propagateEvent:function(n){for(var s in this._eventParents)this._eventParents[s].fire(n.type,e({layer:n.target,propagatedFrom:n.target},n),!0)}};k.addEventListener=k.on,k.removeEventListener=k.clearAllEventListeners=k.off,k.addOneTimeEventListener=k.once,k.fireEvent=k.fire,k.hasEventListeners=k.listens;var rt=st.extend(k);function H(n,s,l){this.x=l?Math.round(n):n,this.y=l?Math.round(s):s}var at=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};H.prototype={clone:function(){return new H(this.x,this.y)},add:function(n){return this.clone()._add(W(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(W(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new H(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new H(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=at(this.x),this.y=at(this.y),this},distanceTo:function(n){n=W(n);var s=n.x-this.x,l=n.y-this.y;return Math.sqrt(s*s+l*l)},equals:function(n){return n=W(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=W(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function W(n,s,l){return n instanceof H?n:g(n)?new H(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new H(n.x,n.y):new H(n,s,l)}function Q(n,s){if(n)for(var l=s?[n,s]:n,h=0,_=l.length;h<_;h++)this.extend(l[h])}Q.prototype={extend:function(n){var s,l;if(!n)return this;if(n instanceof H||typeof n[0]=="number"||"x"in n)s=l=W(n);else if(n=Y(n),s=n.min,l=n.max,!s||!l)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=l.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return W((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return W(this.min.x,this.max.y)},getTopRight:function(){return W(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var s,l;return typeof n[0]=="number"||n instanceof H?n=W(n):n=Y(n),n instanceof Q?(s=n.min,l=n.max):s=l=n,s.x>=this.min.x&&l.x<=this.max.x&&s.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=Y(n);var s=this.min,l=this.max,h=n.min,_=n.max,S=_.x>=s.x&&h.x<=l.x,O=_.y>=s.y&&h.y<=l.y;return S&&O},overlaps:function(n){n=Y(n);var s=this.min,l=this.max,h=n.min,_=n.max,S=_.x>s.x&&h.x<l.x,O=_.y>s.y&&h.y<l.y;return S&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var s=this.min,l=this.max,h=Math.abs(s.x-l.x)*n,_=Math.abs(s.y-l.y)*n;return Y(W(s.x-h,s.y-_),W(l.x+h,l.y+_))},equals:function(n){return n?(n=Y(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Y(n,s){return!n||n instanceof Q?n:new Q(n,s)}function ut(n,s){if(n)for(var l=s?[n,s]:n,h=0,_=l.length;h<_;h++)this.extend(l[h])}ut.prototype={extend:function(n){var s=this._southWest,l=this._northEast,h,_;if(n instanceof vt)h=n,_=n;else if(n instanceof ut){if(h=n._southWest,_=n._northEast,!h||!_)return this}else return n?this.extend(V(n)||pt(n)):this;return!s&&!l?(this._southWest=new vt(h.lat,h.lng),this._northEast=new vt(_.lat,_.lng)):(s.lat=Math.min(h.lat,s.lat),s.lng=Math.min(h.lng,s.lng),l.lat=Math.max(_.lat,l.lat),l.lng=Math.max(_.lng,l.lng)),this},pad:function(n){var s=this._southWest,l=this._northEast,h=Math.abs(s.lat-l.lat)*n,_=Math.abs(s.lng-l.lng)*n;return new ut(new vt(s.lat-h,s.lng-_),new vt(l.lat+h,l.lng+_))},getCenter:function(){return new vt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new vt(this.getNorth(),this.getWest())},getSouthEast:function(){return new vt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof vt||"lat"in n?n=V(n):n=pt(n);var s=this._southWest,l=this._northEast,h,_;return n instanceof ut?(h=n.getSouthWest(),_=n.getNorthEast()):h=_=n,h.lat>=s.lat&&_.lat<=l.lat&&h.lng>=s.lng&&_.lng<=l.lng},intersects:function(n){n=pt(n);var s=this._southWest,l=this._northEast,h=n.getSouthWest(),_=n.getNorthEast(),S=_.lat>=s.lat&&h.lat<=l.lat,O=_.lng>=s.lng&&h.lng<=l.lng;return S&&O},overlaps:function(n){n=pt(n);var s=this._southWest,l=this._northEast,h=n.getSouthWest(),_=n.getNorthEast(),S=_.lat>s.lat&&h.lat<l.lat,O=_.lng>s.lng&&h.lng<l.lng;return S&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,s){return n?(n=pt(n),this._southWest.equals(n.getSouthWest(),s)&&this._northEast.equals(n.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function pt(n,s){return n instanceof ut?n:new ut(n,s)}function vt(n,s,l){if(isNaN(n)||isNaN(s))throw new Error("Invalid LatLng object: ("+n+", "+s+")");this.lat=+n,this.lng=+s,l!==void 0&&(this.alt=+l)}vt.prototype={equals:function(n,s){if(!n)return!1;n=V(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(s===void 0?1e-9:s)},toString:function(n){return"LatLng("+p(this.lat,n)+", "+p(this.lng,n)+")"},distanceTo:function(n){return Mt.distance(this,V(n))},wrap:function(){return Mt.wrapLatLng(this)},toBounds:function(n){var s=180*n/40075017,l=s/Math.cos(Math.PI/180*this.lat);return pt([this.lat-s,this.lng-l],[this.lat+s,this.lng+l])},clone:function(){return new vt(this.lat,this.lng,this.alt)}};function V(n,s,l){return n instanceof vt?n:g(n)&&typeof n[0]!="object"?n.length===3?new vt(n[0],n[1],n[2]):n.length===2?new vt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new vt(n.lat,"lng"in n?n.lng:n.lon,n.alt):s===void 0?null:new vt(n,s,l)}var ft={latLngToPoint:function(n,s){var l=this.projection.project(n),h=this.scale(s);return this.transformation._transform(l,h)},pointToLatLng:function(n,s){var l=this.scale(s),h=this.transformation.untransform(n,l);return this.projection.unproject(h)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var s=this.projection.bounds,l=this.scale(n),h=this.transformation.transform(s.min,l),_=this.transformation.transform(s.max,l);return new Q(h,_)},infinite:!1,wrapLatLng:function(n){var s=this.wrapLng?f(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?f(n.lat,this.wrapLat,!0):n.lat,h=n.alt;return new vt(l,s,h)},wrapLatLngBounds:function(n){var s=n.getCenter(),l=this.wrapLatLng(s),h=s.lat-l.lat,_=s.lng-l.lng;if(h===0&&_===0)return n;var S=n.getSouthWest(),O=n.getNorthEast(),q=new vt(S.lat-h,S.lng-_),J=new vt(O.lat-h,O.lng-_);return new ut(q,J)}},Mt=e({},ft,{wrapLng:[-180,180],R:6371e3,distance:function(n,s){var l=Math.PI/180,h=n.lat*l,_=s.lat*l,S=Math.sin((s.lat-n.lat)*l/2),O=Math.sin((s.lng-n.lng)*l/2),q=S*S+Math.cos(h)*Math.cos(_)*O*O,J=2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q));return this.R*J}}),Ht=6378137,Nt={R:Ht,MAX_LATITUDE:85.0511287798,project:function(n){var s=Math.PI/180,l=this.MAX_LATITUDE,h=Math.max(Math.min(l,n.lat),-l),_=Math.sin(h*s);return new H(this.R*n.lng*s,this.R*Math.log((1+_)/(1-_))/2)},unproject:function(n){var s=180/Math.PI;return new vt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*s,n.x*s/this.R)},bounds:(function(){var n=Ht*Math.PI;return new Q([-n,-n],[n,n])})()};function Et(n,s,l,h){if(g(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=s,this._c=l,this._d=h}Et.prototype={transform:function(n,s){return this._transform(n.clone(),s)},_transform:function(n,s){return s=s||1,n.x=s*(this._a*n.x+this._b),n.y=s*(this._c*n.y+this._d),n},untransform:function(n,s){return s=s||1,new H((n.x/s-this._b)/this._a,(n.y/s-this._d)/this._c)}};function fe(n,s,l,h){return new Et(n,s,l,h)}var Wt=e({},Mt,{code:"EPSG:3857",projection:Nt,transformation:(function(){var n=.5/(Math.PI*Nt.R);return fe(n,.5,-n,.5)})()}),X=e({},Wt,{code:"EPSG:900913"});function ke(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Ft(n,s){var l="",h,_,S,O,q,J;for(h=0,S=n.length;h<S;h++){for(q=n[h],_=0,O=q.length;_<O;_++)J=q[_],l+=(_?"L":"M")+J.x+" "+J.y;l+=s?It.svg?"z":"x":""}return l||"M0 0"}var Jt=document.documentElement.style,Vt="ActiveXObject"in window,he=Vt&&!document.addEventListener,te="msLaunchUri"in navigator&&!("documentMode"in document),ee=we("webkit"),Me=we("android"),C=we("android 2")||we("android 3"),w=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),it=Me&&we("Google")&&w<537&&!("AudioNode"in window),ot=!!window.opera,gt=!te&&we("chrome"),dt=we("gecko")&&!ee&&!ot&&!Vt,jt=!gt&&we("safari"),Gt=we("phantom"),yt="OTransition"in Jt,bt=navigator.platform.indexOf("Win")===0,Yt=Vt&&"transition"in Jt,xt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!C,Ce="MozPerspective"in Jt,re=!window.L_DISABLE_3D&&(Yt||xt||Ce)&&!yt&&!Gt,Ot=typeof orientation<"u"||we("mobile"),Lt=Ot&&ee,Ut=Ot&&xt,R=!window.PointerEvent&&window.MSPointerEvent,lt=!!(window.PointerEvent||R),Rt="ontouchstart"in window||!!window.TouchEvent,U=!window.L_NO_TOUCH&&(Rt||lt),_t=Ot&&ot,Z=Ot&&dt,mt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,wt=(function(){var n=!1;try{var s=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",d,s),window.removeEventListener("testPassiveEventSupport",d,s)}catch{}return n})(),oe=(function(){return!!document.createElement("canvas").getContext})(),_e=!!(document.createElementNS&&ke("svg").createSVGRect),ve=!!_e&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Re=!_e&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var s=n.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}})(),me=navigator.platform.indexOf("Mac")===0,be=navigator.platform.indexOf("Linux")===0;function we(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var It={ie:Vt,ielt9:he,edge:te,webkit:ee,android:Me,android23:C,androidStock:it,opera:ot,chrome:gt,gecko:dt,safari:jt,phantom:Gt,opera12:yt,win:bt,ie3d:Yt,webkit3d:xt,gecko3d:Ce,any3d:re,mobile:Ot,mobileWebkit:Lt,mobileWebkit3d:Ut,msPointer:R,pointer:lt,touch:U,touchNative:Rt,mobileOpera:_t,mobileGecko:Z,retina:mt,passiveEvents:wt,canvas:oe,svg:_e,vml:Re,inlineSvg:ve,mac:me,linux:be},$i=It.msPointer?"MSPointerDown":"pointerdown",Yi=It.msPointer?"MSPointerMove":"pointermove",xs=It.msPointer?"MSPointerUp":"pointerup",Ki=It.msPointer?"MSPointerCancel":"pointercancel",Ar={touchstart:$i,touchmove:Yi,touchend:xs,touchcancel:Ki},vs={touchstart:kt,touchmove:Tt,touchend:Tt,touchcancel:Tt},Ti={},la=!1;function Jo(n,s,l){return s==="touchstart"&&K(),vs[s]?(l=vs[s].bind(this,l),n.addEventListener(Ar[s],l,!1),l):(console.warn("wrong event specified:",s),d)}function A(n,s,l){if(!Ar[s]){console.warn("wrong event specified:",s);return}n.removeEventListener(Ar[s],l,!1)}function G(n){Ti[n.pointerId]=n}function j(n){Ti[n.pointerId]&&(Ti[n.pointerId]=n)}function tt(n){delete Ti[n.pointerId]}function K(){la||(document.addEventListener($i,G,!0),document.addEventListener(Yi,j,!0),document.addEventListener(xs,tt,!0),document.addEventListener(Ki,tt,!0),la=!0)}function Tt(n,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var l in Ti)s.touches.push(Ti[l]);s.changedTouches=[s],n(s)}}function kt(n,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Qe(s),Tt(n,s)}function qt(n){var s={},l,h;for(h in n)l=n[h],s[h]=l&&l.bind?l.bind(n):l;return n=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var $t=200;function se(n,s){n.addEventListener("dblclick",s);var l=0,h;function _(S){if(S.detail!==1){h=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var O=sf(S);if(!(O.some(function(J){return J instanceof HTMLLabelElement&&J.attributes.for})&&!O.some(function(J){return J instanceof HTMLInputElement||J instanceof HTMLSelectElement}))){var q=Date.now();q-l<=$t?(h++,h===2&&s(qt(S))):h=1,l=q}}}return n.addEventListener("click",_),{dblclick:s,simDblclick:_}}function ne(n,s){n.removeEventListener("dblclick",s.dblclick),n.removeEventListener("click",s.simDblclick)}var Qt=Ai(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Te=Ai(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),nn=Te==="webkitTransition"||Te==="OTransition"?Te+"End":"transitionend";function Be(n){return typeof n=="string"?document.getElementById(n):n}function hn(n,s){var l=n.style[s]||n.currentStyle&&n.currentStyle[s];if((!l||l==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(n,null);l=h?h[s]:null}return l==="auto"?null:l}function Bt(n,s,l){var h=document.createElement(n);return h.className=s||"",l&&l.appendChild(h),h}function Dt(n){var s=n.parentNode;s&&s.removeChild(n)}function Ei(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function xe(n){var s=n.parentNode;s&&s.lastChild!==n&&s.appendChild(n)}function xn(n){var s=n.parentNode;s&&s.firstChild!==n&&s.insertBefore(n,s.firstChild)}function Cr(n,s){if(n.classList!==void 0)return n.classList.contains(s);var l=Ln(n);return l.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(l)}function Kt(n,s){if(n.classList!==void 0)for(var l=v(s),h=0,_=l.length;h<_;h++)n.classList.add(l[h]);else if(!Cr(n,s)){var S=Ln(n);Ge(n,(S?S+" ":"")+s)}}function Pe(n,s){n.classList!==void 0?n.classList.remove(s):Ge(n,m((" "+Ln(n)+" ").replace(" "+s+" "," ")))}function Ge(n,s){n.className.baseVal===void 0?n.className=s:n.className.baseVal=s}function Ln(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function rn(n,s){"opacity"in n.style?n.style.opacity=s:"filter"in n.style&&vn(n,s)}function vn(n,s){var l=!1,h="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(h)}catch{if(s===1)return}s=Math.round(s*100),l?(l.Enabled=s!==100,l.Opacity=s):n.style.filter+=" progid:"+h+"(opacity="+s+")"}function Ai(n){for(var s=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in s)return n[l];return!1}function ui(n,s,l){var h=s||new H(0,0);n.style[Qt]=(It.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(l?" scale("+l+")":"")}function Oe(n,s){n._leaflet_pos=s,It.any3d?ui(n,s):(n.style.left=s.x+"px",n.style.top=s.y+"px")}function Ji(n){return n._leaflet_pos||new H(0,0)}var ys,Ms,jo;if("onselectstart"in document)ys=function(){ie(window,"selectstart",Qe)},Ms=function(){Ae(window,"selectstart",Qe)};else{var Ss=Ai(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ys=function(){if(Ss){var n=document.documentElement.style;jo=n[Ss],n[Ss]="none"}},Ms=function(){Ss&&(document.documentElement.style[Ss]=jo,jo=void 0)}}function Qo(){ie(window,"dragstart",Qe)}function tl(){Ae(window,"dragstart",Qe)}var ca,el;function nl(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(ua(),ca=n,el=n.style.outlineStyle,n.style.outlineStyle="none",ie(window,"keydown",ua))}function ua(){ca&&(ca.style.outlineStyle=el,ca=void 0,el=void 0,Ae(window,"keydown",ua))}function nf(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function il(n){var s=n.getBoundingClientRect();return{x:s.width/n.offsetWidth||1,y:s.height/n.offsetHeight||1,boundingClientRect:s}}var up={__proto__:null,TRANSFORM:Qt,TRANSITION:Te,TRANSITION_END:nn,get:Be,getStyle:hn,create:Bt,remove:Dt,empty:Ei,toFront:xe,toBack:xn,hasClass:Cr,addClass:Kt,removeClass:Pe,setClass:Ge,getClass:Ln,setOpacity:rn,testProp:Ai,setTransform:ui,setPosition:Oe,getPosition:Ji,get disableTextSelection(){return ys},get enableTextSelection(){return Ms},disableImageDrag:Qo,enableImageDrag:tl,preventOutline:nl,restoreOutline:ua,getSizedParentNode:nf,getScale:il};function ie(n,s,l,h){if(s&&typeof s=="object")for(var _ in s)sl(n,_,s[_],l);else{s=v(s);for(var S=0,O=s.length;S<O;S++)sl(n,s[S],l,h)}return this}var Qn="_leaflet_events";function Ae(n,s,l,h){if(arguments.length===1)rf(n),delete n[Qn];else if(s&&typeof s=="object")for(var _ in s)al(n,_,s[_],l);else if(s=v(s),arguments.length===2)rf(n,function(q){return P(s,q)!==-1});else for(var S=0,O=s.length;S<O;S++)al(n,s[S],l,h);return this}function rf(n,s){for(var l in n[Qn]){var h=l.split(/\d/)[0];(!s||s(h))&&al(n,h,null,null,l)}}var rl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function sl(n,s,l,h){var _=s+u(l)+(h?"_"+u(h):"");if(n[Qn]&&n[Qn][_])return this;var S=function(q){return l.call(h||n,q||window.event)},O=S;!It.touchNative&&It.pointer&&s.indexOf("touch")===0?S=Jo(n,s,S):It.touch&&s==="dblclick"?S=se(n,S):"addEventListener"in n?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?n.addEventListener(rl[s]||s,S,It.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(S=function(q){q=q||window.event,ll(n,q)&&O(q)},n.addEventListener(rl[s],S,!1)):n.addEventListener(s,O,!1):n.attachEvent("on"+s,S),n[Qn]=n[Qn]||{},n[Qn][_]=S}function al(n,s,l,h,_){_=_||s+u(l)+(h?"_"+u(h):"");var S=n[Qn]&&n[Qn][_];if(!S)return this;!It.touchNative&&It.pointer&&s.indexOf("touch")===0?A(n,s,S):It.touch&&s==="dblclick"?ne(n,S):"removeEventListener"in n?n.removeEventListener(rl[s]||s,S,!1):n.detachEvent("on"+s,S),n[Qn][_]=null}function ji(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function ol(n){return sl(n,"wheel",ji),this}function bs(n){return ie(n,"mousedown touchstart dblclick contextmenu",ji),n._leaflet_disable_click=!0,this}function Qe(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Qi(n){return Qe(n),ji(n),this}function sf(n){if(n.composedPath)return n.composedPath();for(var s=[],l=n.target;l;)s.push(l),l=l.parentNode;return s}function af(n,s){if(!s)return new H(n.clientX,n.clientY);var l=il(s),h=l.boundingClientRect;return new H((n.clientX-h.left)/l.x-s.clientLeft,(n.clientY-h.top)/l.y-s.clientTop)}var fp=It.linux&&It.chrome?window.devicePixelRatio:It.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function of(n){return It.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/fp:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ll(n,s){var l=s.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var hp={__proto__:null,on:ie,off:Ae,stopPropagation:ji,disableScrollPropagation:ol,disableClickPropagation:bs,preventDefault:Qe,stop:Qi,getPropagationPath:sf,getMousePosition:af,getWheelDelta:of,isExternalTarget:ll,addListener:ie,removeListener:Ae},lf=rt.extend({run:function(n,s,l,h){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=Ji(n),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=nt(this._animate,this),this._step()},_step:function(n){var s=+new Date-this._startTime,l=this._duration*1e3;s<l?this._runFrame(this._easeOut(s/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,s){var l=this._startPos.add(this._offset.multiplyBy(n));s&&l._round(),Oe(this._el,l),this.fire("step")},_complete:function(){T(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ge=rt.extend({options:{crs:Wt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,s){s=y(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(V(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Te&&It.any3d&&!It.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ie(this._proxy,nn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,s,l){if(s=s===void 0?this._zoom:this._limitZoom(s),n=this._limitCenter(V(n),s,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var h=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,s,l.zoom):this._tryAnimatedPan(n,l.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(n,s,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,s){return this._loaded?this.setView(this.getCenter(),n,{zoom:s}):(this._zoom=n,this)},zoomIn:function(n,s){return n=n||(It.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,s)},zoomOut:function(n,s){return n=n||(It.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,s)},setZoomAround:function(n,s,l){var h=this.getZoomScale(s),_=this.getSize().divideBy(2),S=n instanceof H?n:this.latLngToContainerPoint(n),O=S.subtract(_).multiplyBy(1-1/h),q=this.containerPointToLatLng(_.add(O));return this.setView(q,s,{zoom:l})},_getBoundsCenterZoom:function(n,s){s=s||{},n=n.getBounds?n.getBounds():pt(n);var l=W(s.paddingTopLeft||s.padding||[0,0]),h=W(s.paddingBottomRight||s.padding||[0,0]),_=this.getBoundsZoom(n,!1,l.add(h));if(_=typeof s.maxZoom=="number"?Math.min(s.maxZoom,_):_,_===1/0)return{center:n.getCenter(),zoom:_};var S=h.subtract(l).divideBy(2),O=this.project(n.getSouthWest(),_),q=this.project(n.getNorthEast(),_),J=this.unproject(O.add(q).divideBy(2).add(S),_);return{center:J,zoom:_}},fitBounds:function(n,s){if(n=pt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,s);return this.setView(l.center,l.zoom,s)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,s){return this.setView(n,this._zoom,{pan:s})},panBy:function(n,s){if(n=W(n).round(),s=s||{},!n.x&&!n.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new lf,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){Kt(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,s.duration||.25,s.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,s,l){if(l=l||{},l.animate===!1||!It.any3d)return this.setView(n,s,l);this._stop();var h=this.project(this.getCenter()),_=this.project(n),S=this.getSize(),O=this._zoom;n=V(n),s=s===void 0?O:s;var q=Math.max(S.x,S.y),J=q*this.getZoomScale(O,s),ht=_.distanceTo(h)||1,Ct=1.42,Zt=Ct*Ct;function de(We){var Sa=We?-1:1,tm=We?J:q,em=J*J-q*q+Sa*Zt*Zt*ht*ht,nm=2*tm*Zt*ht,vl=em/nm,Vf=Math.sqrt(vl*vl+1)-vl,im=Vf<1e-9?-18:Math.log(Vf);return im}function dn(We){return(Math.exp(We)-Math.exp(-We))/2}function Je(We){return(Math.exp(We)+Math.exp(-We))/2}function In(We){return dn(We)/Je(We)}var yn=de(0);function Nr(We){return q*(Je(yn)/Je(yn+Ct*We))}function Kp(We){return q*(Je(yn)*In(yn+Ct*We)-dn(yn))/Zt}function Jp(We){return 1-Math.pow(1-We,1.5)}var jp=Date.now(),zf=(de(1)-yn)/Ct,Qp=l.duration?1e3*l.duration:1e3*zf*.8;function Hf(){var We=(Date.now()-jp)/Qp,Sa=Jp(We)*zf;We<=1?(this._flyToFrame=nt(Hf,this),this._move(this.unproject(h.add(_.subtract(h).multiplyBy(Kp(Sa)/ht)),O),this.getScaleZoom(q/Nr(Sa),O),{flyTo:!0})):this._move(n,s)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Hf.call(this),this},flyToBounds:function(n,s){var l=this._getBoundsCenterZoom(n,s);return this.flyTo(l.center,l.zoom,s)},setMaxBounds:function(n){return n=pt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var s=this.options.minZoom;return this.options.minZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var s=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,s){this._enforcingBounds=!0;var l=this.getCenter(),h=this._limitCenter(l,this._zoom,pt(n));return l.equals(h)||this.panTo(h,s),this._enforcingBounds=!1,this},panInside:function(n,s){s=s||{};var l=W(s.paddingTopLeft||s.padding||[0,0]),h=W(s.paddingBottomRight||s.padding||[0,0]),_=this.project(this.getCenter()),S=this.project(n),O=this.getPixelBounds(),q=Y([O.min.add(l),O.max.subtract(h)]),J=q.getSize();if(!q.contains(S)){this._enforcingBounds=!0;var ht=S.subtract(q.getCenter()),Ct=q.extend(S).getSize().subtract(J);_.x+=ht.x<0?-Ct.x:Ct.x,_.y+=ht.y<0?-Ct.y:Ct.y,this.panTo(this.unproject(_),s),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=e({animate:!1,pan:!0},n===!0?{animate:!0}:n);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),h=s.divideBy(2).round(),_=l.divideBy(2).round(),S=h.subtract(_);return!S.x&&!S.y?this:(n.animate&&n.pan?this.panBy(S):(n.pan&&this._rawPanBy(S),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=e({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=a(this._handleGeolocationResponse,this),l=a(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,l,n):navigator.geolocation.getCurrentPosition(s,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var s=n.code,l=n.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var s=n.coords.latitude,l=n.coords.longitude,h=new vt(s,l),_=h.toBounds(n.coords.accuracy*2),S=this._locateOptions;if(S.setView){var O=this.getBoundsZoom(_);this.setView(h,S.maxZoom?Math.min(O,S.maxZoom):O)}var q={latlng:h,bounds:_,timestamp:n.timestamp};for(var J in n.coords)typeof n.coords[J]=="number"&&(q[J]=n.coords[J]);this.fire("locationfound",q)}},addHandler:function(n,s){if(!s)return this;var l=this[n]=new s(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Dt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(T(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Dt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,s){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),h=Bt("div",l,s||this._mapPane);return n&&(this._panes[n]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),s=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new ut(s,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,s,l){n=pt(n),l=W(l||[0,0]);var h=this.getZoom()||0,_=this.getMinZoom(),S=this.getMaxZoom(),O=n.getNorthWest(),q=n.getSouthEast(),J=this.getSize().subtract(l),ht=Y(this.project(q,h),this.project(O,h)).getSize(),Ct=It.any3d?this.options.zoomSnap:1,Zt=J.x/ht.x,de=J.y/ht.y,dn=s?Math.max(Zt,de):Math.min(Zt,de);return h=this.getScaleZoom(dn,h),Ct&&(h=Math.round(h/(Ct/100))*(Ct/100),h=s?Math.ceil(h/Ct)*Ct:Math.floor(h/Ct)*Ct),Math.max(_,Math.min(S,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new H(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,s){var l=this._getTopLeftPoint(n,s);return new Q(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,s){var l=this.options.crs;return s=s===void 0?this._zoom:s,l.scale(n)/l.scale(s)},getScaleZoom:function(n,s){var l=this.options.crs;s=s===void 0?this._zoom:s;var h=l.zoom(n*l.scale(s));return isNaN(h)?1/0:h},project:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(V(n),s)},unproject:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(W(n),s)},layerPointToLatLng:function(n){var s=W(n).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(n){var s=this.project(V(n))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(V(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(pt(n))},distance:function(n,s){return this.options.crs.distance(V(n),V(s))},containerPointToLayerPoint:function(n){return W(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return W(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var s=this.containerPointToLayerPoint(W(n));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(V(n)))},mouseEventToContainerPoint:function(n){return af(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var s=this._container=Be(n);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ie(s,"scroll",this._onScroll,this),this._containerId=u(s)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&It.any3d,Kt(n,"leaflet-container"+(It.touch?" leaflet-touch":"")+(It.retina?" leaflet-retina":"")+(It.ielt9?" leaflet-oldie":"")+(It.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=hn(n,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Oe(this._mapPane,new H(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Kt(n.markerPane,"leaflet-zoom-hide"),Kt(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,s,l){Oe(this._mapPane,new H(0,0));var h=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var _=this._zoom!==s;this._moveStart(_,l)._move(n,s)._moveEnd(_),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(n,s){return n&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(n,s,l,h){s===void 0&&(s=this._zoom);var _=this._zoom!==s;return this._zoom=s,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),h?l&&l.pinch&&this.fire("zoom",l):((_||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return T(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Oe(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[u(this._container)]=this;var s=n?Ae:ie;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),It.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){T(this._resizeRequest),this._resizeRequest=nt(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,s){for(var l=[],h,_=s==="mouseout"||s==="mouseover",S=n.target||n.srcElement,O=!1;S;){if(h=this._targets[u(S)],h&&(s==="click"||s==="preclick")&&this._draggableMoved(h)){O=!0;break}if(h&&h.listens(s,!0)&&(_&&!ll(S,n)||(l.push(h),_))||S===this._container)break;S=S.parentNode}return!l.length&&!O&&!_&&this.listens(s,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var s=n.target||n.srcElement;if(!(!this._loaded||s._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(s))){var l=n.type;l==="mousedown"&&nl(s),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,s,l){if(n.type==="click"){var h=e({},n);h.type="preclick",this._fireDOMEvent(h,h.type,l)}var _=this._findEventTargets(n,s);if(l){for(var S=[],O=0;O<l.length;O++)l[O].listens(s,!0)&&S.push(l[O]);_=S.concat(_)}if(_.length){s==="contextmenu"&&Qe(n);var q=_[0],J={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ht=q.getLatLng&&(!q._radius||q._radius<=10);J.containerPoint=ht?this.latLngToContainerPoint(q.getLatLng()):this.mouseEventToContainerPoint(n),J.layerPoint=this.containerPointToLayerPoint(J.containerPoint),J.latlng=ht?q.getLatLng():this.layerPointToLatLng(J.layerPoint)}for(O=0;O<_.length;O++)if(_[O].fire(s,J,!0),J.originalEvent._stopped||_[O].options.bubblingMouseEvents===!1&&P(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,s=this._handlers.length;n<s;n++)this._handlers[n].disable()},whenReady:function(n,s){return this._loaded?n.call(s||this,{target:this}):this.on("load",n,s),this},_getMapPanePos:function(){return Ji(this._mapPane)||new H(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,s){var l=n&&s!==void 0?this._getNewPixelOrigin(n,s):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,s){var l=this.getSize()._divideBy(2);return this.project(n,s)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,s,l){var h=this._getNewPixelOrigin(l,s);return this.project(n,s)._subtract(h)},_latLngBoundsToNewLayerBounds:function(n,s,l){var h=this._getNewPixelOrigin(l,s);return Y([this.project(n.getSouthWest(),s)._subtract(h),this.project(n.getNorthWest(),s)._subtract(h),this.project(n.getSouthEast(),s)._subtract(h),this.project(n.getNorthEast(),s)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,s,l){if(!l)return n;var h=this.project(n,s),_=this.getSize().divideBy(2),S=new Q(h.subtract(_),h.add(_)),O=this._getBoundsOffset(S,l,s);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?n:this.unproject(h.add(O),s)},_limitOffset:function(n,s){if(!s)return n;var l=this.getPixelBounds(),h=new Q(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(h,s))},_getBoundsOffset:function(n,s,l){var h=Y(this.project(s.getNorthEast(),l),this.project(s.getSouthWest(),l)),_=h.min.subtract(n.min),S=h.max.subtract(n.max),O=this._rebound(_.x,-S.x),q=this._rebound(_.y,-S.y);return new H(O,q)},_rebound:function(n,s){return n+s>0?Math.round(n-s)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(s))},_limitZoom:function(n){var s=this.getMinZoom(),l=this.getMaxZoom(),h=It.any3d?this.options.zoomSnap:1;return h&&(n=Math.round(n/h)*h),Math.max(s,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Pe(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,s){var l=this._getCenterOffset(n)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,s),!0)},_createAnimProxy:function(){var n=this._proxy=Bt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(s){var l=Qt,h=this._proxy.style[l];ui(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),h===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Dt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),s=this.getZoom();ui(this._proxy,this.project(n,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,s,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(s),_=this._getCenterOffset(n)._divideBy(1-1/h);return l.animate!==!0&&!this.getSize().contains(_)?!1:(nt(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,s,!0)},this),!0)},_animateZoom:function(n,s,l,h){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=s,Kt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:s,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Pe(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function dp(n,s){return new ge(n,s)}var Fn=st.extend({options:{position:"topright"},initialize:function(n){y(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var s=this._map;return s&&s.removeControl(this),this.options.position=n,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var s=this._container=this.onAdd(n),l=this.getPosition(),h=n._controlCorners[l];return Kt(s,"leaflet-control"),l.indexOf("bottom")!==-1?h.insertBefore(s,h.firstChild):h.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Dt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),ws=function(n){return new Fn(n)};ge.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},s="leaflet-",l=this._controlContainer=Bt("div",s+"control-container",this._container);function h(_,S){var O=s+_+" "+s+S;n[_+S]=Bt("div",O,l)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Dt(this._controlCorners[n]);Dt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var cf=Fn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,s,l,h){return l<h?-1:h<l?1:0}},initialize:function(n,s,l){y(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in n)this._addLayer(n[h],h);for(h in s)this._addLayer(s[h],h,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return Fn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,s){return this._addLayer(n,s),this._map?this._update():this},addOverlay:function(n,s){return this._addLayer(n,s,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var s=this._getLayer(u(n));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){Kt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Kt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Pe(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Pe(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",s=this._container=Bt("div",n),l=this.options.collapsed;s.setAttribute("aria-haspopup",!0),bs(s),ol(s);var h=this._section=Bt("section",n+"-list");l&&(this._map.on("click",this.collapse,this),ie(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var _=this._layersLink=Bt("a",n+"-toggle",s);_.href="#",_.title="Layers",_.setAttribute("role","button"),ie(_,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){Qe(S),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=Bt("div",n+"-base",h),this._separator=Bt("div",n+"-separator",h),this._overlaysList=Bt("div",n+"-overlays",h),s.appendChild(h)},_getLayer:function(n){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&u(this._layers[s].layer)===n)return this._layers[s]},_addLayer:function(n,s,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:s,overlay:l}),this.options.sortLayers&&this._layers.sort(a(function(h,_){return this.options.sortFunction(h.layer,_.layer,h.name,_.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ei(this._baseLayersList),Ei(this._overlaysList),this._layerControlInputs=[];var n,s,l,h,_=0;for(l=0;l<this._layers.length;l++)h=this._layers[l],this._addItem(h),s=s||h.overlay,n=n||!h.overlay,_+=h.overlay?0:1;return this.options.hideSingleBase&&(n=n&&_>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=s&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var s=this._getLayer(u(n.target)),l=s.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,s)},_createRadioElement:function(n,s){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(s?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=l,h.firstChild},_addItem:function(n){var s=document.createElement("label"),l=this._map.hasLayer(n.layer),h;n.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=l):h=this._createRadioElement("leaflet-base-layers_"+u(this),l),this._layerControlInputs.push(h),h.layerId=u(n.layer),ie(h,"click",this._onInputClick,this);var _=document.createElement("span");_.innerHTML=" "+n.name;var S=document.createElement("span");s.appendChild(S),S.appendChild(h),S.appendChild(_);var O=n.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,s,l,h=[],_=[];this._handlingClick=!0;for(var S=n.length-1;S>=0;S--)s=n[S],l=this._getLayer(s.layerId).layer,s.checked?h.push(l):s.checked||_.push(l);for(S=0;S<_.length;S++)this._map.hasLayer(_[S])&&this._map.removeLayer(_[S]);for(S=0;S<h.length;S++)this._map.hasLayer(h[S])||this._map.addLayer(h[S]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,s,l,h=this._map.getZoom(),_=n.length-1;_>=0;_--)s=n[_],l=this._getLayer(s.layerId).layer,s.disabled=l.options.minZoom!==void 0&&h<l.options.minZoom||l.options.maxZoom!==void 0&&h>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,ie(n,"click",Qe),this.expand();var s=this;setTimeout(function(){Ae(n,"click",Qe),s._preventClick=!1})}}),pp=function(n,s,l){return new cf(n,s,l)},cl=Fn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var s="leaflet-control-zoom",l=Bt("div",s+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,s+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,s+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,s,l,h,_){var S=Bt("a",l,h);return S.innerHTML=n,S.href="#",S.title=s,S.setAttribute("role","button"),S.setAttribute("aria-label",s),bs(S),ie(S,"click",Qi),ie(S,"click",_,this),ie(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var n=this._map,s="leaflet-disabled";Pe(this._zoomInButton,s),Pe(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Kt(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Kt(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});ge.mergeOptions({zoomControl:!0}),ge.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new cl,this.addControl(this.zoomControl))});var mp=function(n){return new cl(n)},uf=Fn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var s="leaflet-control-scale",l=Bt("div",s),h=this.options;return this._addScales(h,s+"-line",l),n.on(h.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,s,l){n.metric&&(this._mScale=Bt("div",s,l)),n.imperial&&(this._iScale=Bt("div",s,l))},_update:function(){var n=this._map,s=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,s]),n.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var s=this._getRoundNum(n),l=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,l,s/n)},_updateImperial:function(n){var s=n*3.2808399,l,h,_;s>5280?(l=s/5280,h=this._getRoundNum(l),this._updateScale(this._iScale,h+" mi",h/l)):(_=this._getRoundNum(s),this._updateScale(this._iScale,_+" ft",_/s))},_updateScale:function(n,s,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=s},_getRoundNum:function(n){var s=Math.pow(10,(Math.floor(n)+"").length-1),l=n/s;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,s*l}}),gp=function(n){return new uf(n)},_p='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ul=Fn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(It.inlineSvg?_p+" ":"")+"Leaflet</a>"},initialize:function(n){y(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=Bt("div","leaflet-control-attribution"),bs(this._container);for(var s in n._layers)n._layers[s].getAttribution&&this.addAttribution(n._layers[s].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var s in this._attributions)this._attributions[s]&&n.push(s);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});ge.mergeOptions({attributionControl:!0}),ge.addInitHook(function(){this.options.attributionControl&&new ul().addTo(this)});var xp=function(n){return new ul(n)};Fn.Layers=cf,Fn.Zoom=cl,Fn.Scale=uf,Fn.Attribution=ul,ws.layers=pp,ws.zoom=mp,ws.scale=gp,ws.attribution=xp;var ti=st.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ti.addTo=function(n,s){return n.addHandler(s,this),this};var vp={Events:k},ff=It.touch?"touchstart mousedown":"mousedown",Ci=rt.extend({options:{clickTolerance:3},initialize:function(n,s,l,h){y(this,h),this._element=n,this._dragStartTarget=s||n,this._preventOutline=l},enable:function(){this._enabled||(ie(this._dragStartTarget,ff,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Ci._dragging===this&&this.finishDrag(!0),Ae(this._dragStartTarget,ff,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Cr(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Ci._dragging===this&&this.finishDrag();return}if(!(Ci._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Ci._dragging=this,this._preventOutline&&nl(this._element),Qo(),ys(),!this._moving)){this.fire("down");var s=n.touches?n.touches[0]:n,l=nf(this._element);this._startPoint=new H(s.clientX,s.clientY),this._startPos=Ji(this._element),this._parentScale=il(l);var h=n.type==="mousedown";ie(document,h?"mousemove":"touchmove",this._onMove,this),ie(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var s=n.touches&&n.touches.length===1?n.touches[0]:n,l=new H(s.clientX,s.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Qe(n),this._moved||(this.fire("dragstart"),this._moved=!0,Kt(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Kt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Oe(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Pe(document.body,"leaflet-dragging"),this._lastTarget&&(Pe(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ae(document,"mousemove touchmove",this._onMove,this),Ae(document,"mouseup touchend touchcancel",this._onUp,this),tl(),Ms();var s=this._moved&&this._moving;this._moving=!1,Ci._dragging=!1,s&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function hf(n,s,l){var h,_=[1,4,2,8],S,O,q,J,ht,Ct,Zt,de;for(S=0,Ct=n.length;S<Ct;S++)n[S]._code=tr(n[S],s);for(q=0;q<4;q++){for(Zt=_[q],h=[],S=0,Ct=n.length,O=Ct-1;S<Ct;O=S++)J=n[S],ht=n[O],J._code&Zt?ht._code&Zt||(de=fa(ht,J,Zt,s,l),de._code=tr(de,s),h.push(de)):(ht._code&Zt&&(de=fa(ht,J,Zt,s,l),de._code=tr(de,s),h.push(de)),h.push(J));n=h}return n}function df(n,s){var l,h,_,S,O,q,J,ht,Ct;if(!n||n.length===0)throw new Error("latlngs not passed");Rn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Zt=V([0,0]),de=pt(n),dn=de.getNorthWest().distanceTo(de.getSouthWest())*de.getNorthEast().distanceTo(de.getNorthWest());dn<1700&&(Zt=fl(n));var Je=n.length,In=[];for(l=0;l<Je;l++){var yn=V(n[l]);In.push(s.project(V([yn.lat-Zt.lat,yn.lng-Zt.lng])))}for(q=J=ht=0,l=0,h=Je-1;l<Je;h=l++)_=In[l],S=In[h],O=_.y*S.x-S.y*_.x,J+=(_.x+S.x)*O,ht+=(_.y+S.y)*O,q+=O*3;q===0?Ct=In[0]:Ct=[J/q,ht/q];var Nr=s.unproject(W(Ct));return V([Nr.lat+Zt.lat,Nr.lng+Zt.lng])}function fl(n){for(var s=0,l=0,h=0,_=0;_<n.length;_++){var S=V(n[_]);s+=S.lat,l+=S.lng,h++}return V([s/h,l/h])}var yp={__proto__:null,clipPolygon:hf,polygonCenter:df,centroid:fl};function pf(n,s){if(!s||!n.length)return n.slice();var l=s*s;return n=bp(n,l),n=Sp(n,l),n}function mf(n,s,l){return Math.sqrt(Ts(n,s,l,!0))}function Mp(n,s,l){return Ts(n,s,l)}function Sp(n,s){var l=n.length,h=typeof Uint8Array<"u"?Uint8Array:Array,_=new h(l);_[0]=_[l-1]=1,hl(n,_,s,0,l-1);var S,O=[];for(S=0;S<l;S++)_[S]&&O.push(n[S]);return O}function hl(n,s,l,h,_){var S=0,O,q,J;for(q=h+1;q<=_-1;q++)J=Ts(n[q],n[h],n[_],!0),J>S&&(O=q,S=J);S>l&&(s[O]=1,hl(n,s,l,h,O),hl(n,s,l,O,_))}function bp(n,s){for(var l=[n[0]],h=1,_=0,S=n.length;h<S;h++)wp(n[h],n[_])>s&&(l.push(n[h]),_=h);return _<S-1&&l.push(n[S-1]),l}var gf;function _f(n,s,l,h,_){var S=h?gf:tr(n,l),O=tr(s,l),q,J,ht;for(gf=O;;){if(!(S|O))return[n,s];if(S&O)return!1;q=S||O,J=fa(n,s,q,l,_),ht=tr(J,l),q===S?(n=J,S=ht):(s=J,O=ht)}}function fa(n,s,l,h,_){var S=s.x-n.x,O=s.y-n.y,q=h.min,J=h.max,ht,Ct;return l&8?(ht=n.x+S*(J.y-n.y)/O,Ct=J.y):l&4?(ht=n.x+S*(q.y-n.y)/O,Ct=q.y):l&2?(ht=J.x,Ct=n.y+O*(J.x-n.x)/S):l&1&&(ht=q.x,Ct=n.y+O*(q.x-n.x)/S),new H(ht,Ct,_)}function tr(n,s){var l=0;return n.x<s.min.x?l|=1:n.x>s.max.x&&(l|=2),n.y<s.min.y?l|=4:n.y>s.max.y&&(l|=8),l}function wp(n,s){var l=s.x-n.x,h=s.y-n.y;return l*l+h*h}function Ts(n,s,l,h){var _=s.x,S=s.y,O=l.x-_,q=l.y-S,J=O*O+q*q,ht;return J>0&&(ht=((n.x-_)*O+(n.y-S)*q)/J,ht>1?(_=l.x,S=l.y):ht>0&&(_+=O*ht,S+=q*ht)),O=n.x-_,q=n.y-S,h?O*O+q*q:new H(_,S)}function Rn(n){return!g(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function xf(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Rn(n)}function vf(n,s){var l,h,_,S,O,q,J,ht;if(!n||n.length===0)throw new Error("latlngs not passed");Rn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Ct=V([0,0]),Zt=pt(n),de=Zt.getNorthWest().distanceTo(Zt.getSouthWest())*Zt.getNorthEast().distanceTo(Zt.getNorthWest());de<1700&&(Ct=fl(n));var dn=n.length,Je=[];for(l=0;l<dn;l++){var In=V(n[l]);Je.push(s.project(V([In.lat-Ct.lat,In.lng-Ct.lng])))}for(l=0,h=0;l<dn-1;l++)h+=Je[l].distanceTo(Je[l+1])/2;if(h===0)ht=Je[0];else for(l=0,S=0;l<dn-1;l++)if(O=Je[l],q=Je[l+1],_=O.distanceTo(q),S+=_,S>h){J=(S-h)/_,ht=[q.x-J*(q.x-O.x),q.y-J*(q.y-O.y)];break}var yn=s.unproject(W(ht));return V([yn.lat+Ct.lat,yn.lng+Ct.lng])}var Tp={__proto__:null,simplify:pf,pointToSegmentDistance:mf,closestPointOnSegment:Mp,clipSegment:_f,_getEdgeIntersection:fa,_getBitCode:tr,_sqClosestPointOnSegment:Ts,isFlat:Rn,_flat:xf,polylineCenter:vf},dl={project:function(n){return new H(n.lng,n.lat)},unproject:function(n){return new vt(n.y,n.x)},bounds:new Q([-180,-90],[180,90])},pl={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Q([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var s=Math.PI/180,l=this.R,h=n.lat*s,_=this.R_MINOR/l,S=Math.sqrt(1-_*_),O=S*Math.sin(h),q=Math.tan(Math.PI/4-h/2)/Math.pow((1-O)/(1+O),S/2);return h=-l*Math.log(Math.max(q,1e-10)),new H(n.lng*s*l,h)},unproject:function(n){for(var s=180/Math.PI,l=this.R,h=this.R_MINOR/l,_=Math.sqrt(1-h*h),S=Math.exp(-n.y/l),O=Math.PI/2-2*Math.atan(S),q=0,J=.1,ht;q<15&&Math.abs(J)>1e-7;q++)ht=_*Math.sin(O),ht=Math.pow((1-ht)/(1+ht),_/2),J=Math.PI/2-2*Math.atan(S*ht)-O,O+=J;return new vt(O*s,n.x*s/l)}},Ep={__proto__:null,LonLat:dl,Mercator:pl,SphericalMercator:Nt},Ap=e({},Mt,{code:"EPSG:3395",projection:pl,transformation:(function(){var n=.5/(Math.PI*pl.R);return fe(n,.5,-n,.5)})()}),yf=e({},Mt,{code:"EPSG:4326",projection:dl,transformation:fe(1/180,1,-1/180,.5)}),Cp=e({},ft,{projection:dl,transformation:fe(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,s){var l=s.lng-n.lng,h=s.lat-n.lat;return Math.sqrt(l*l+h*h)},infinite:!0});ft.Earth=Mt,ft.EPSG3395=Ap,ft.EPSG3857=Wt,ft.EPSG900913=X,ft.EPSG4326=yf,ft.Simple=Cp;var Bn=rt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[u(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[u(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var s=n.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var l=this.getEvents();s.on(l,this),this.once("remove",function(){s.off(l,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});ge.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var s=u(n);return this._layers[s]?this:(this._layers[s]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var s=u(n);return this._layers[s]?(this._loaded&&n.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return u(n)in this._layers},eachLayer:function(n,s){for(var l in this._layers)n.call(s,this._layers[l]);return this},_addLayers:function(n){n=n?g(n)?n:[n]:[];for(var s=0,l=n.length;s<l;s++)this.addLayer(n[s])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[u(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var s=u(n);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,s=-1/0,l=this._getZoomSpan();for(var h in this._zoomBoundLayers){var _=this._zoomBoundLayers[h].options;n=_.minZoom===void 0?n:Math.min(n,_.minZoom),s=_.maxZoom===void 0?s:Math.max(s,_.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Pr=Bn.extend({initialize:function(n,s){y(this,s),this._layers={};var l,h;if(n)for(l=0,h=n.length;l<h;l++)this.addLayer(n[l])},addLayer:function(n){var s=this.getLayerId(n);return this._layers[s]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var s=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(n){var s=typeof n=="number"?n:this.getLayerId(n);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var s=Array.prototype.slice.call(arguments,1),l,h;for(l in this._layers)h=this._layers[l],h[n]&&h[n].apply(h,s);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,s){for(var l in this._layers)n.call(s,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return u(n)}}),Pp=function(n,s){return new Pr(n,s)},fi=Pr.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Pr.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Pr.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new ut;for(var s in this._layers){var l=this._layers[s];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),Lp=function(n,s){return new fi(n,s)},Lr=st.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){y(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,s){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(l,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(h,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(n,s){var l=this.options,h=l[s+"Size"];typeof h=="number"&&(h=[h,h]);var _=W(h),S=W(s==="shadow"&&l.shadowAnchor||l.iconAnchor||_&&_.divideBy(2,!0));n.className="leaflet-marker-"+s+" "+(l.className||""),S&&(n.style.marginLeft=-S.x+"px",n.style.marginTop=-S.y+"px"),_&&(n.style.width=_.x+"px",n.style.height=_.y+"px")},_createImg:function(n,s){return s=s||document.createElement("img"),s.src=n,s},_getIconUrl:function(n){return It.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function Rp(n){return new Lr(n)}var Es=Lr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Es.imagePath!="string"&&(Es.imagePath=this._detectIconPath()),(this.options.imagePath||Es.imagePath)+Lr.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var s=function(l,h,_){var S=h.exec(l);return S&&S[_]};return n=s(n,/^url\((['"])?(.+)\1\)$/,2),n&&s(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=Bt("div","leaflet-default-icon-path",document.body),s=hn(n,"background-image")||hn(n,"backgroundImage");if(document.body.removeChild(n),s=this._stripUrl(s),s)return s;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Mf=ti.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Ci(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Kt(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Pe(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var s=this._marker,l=s._map,h=this._marker.options.autoPanSpeed,_=this._marker.options.autoPanPadding,S=Ji(s._icon),O=l.getPixelBounds(),q=l.getPixelOrigin(),J=Y(O.min._subtract(q).add(_),O.max._subtract(q).subtract(_));if(!J.contains(S)){var ht=W((Math.max(J.max.x,S.x)-J.max.x)/(O.max.x-J.max.x)-(Math.min(J.min.x,S.x)-J.min.x)/(O.min.x-J.min.x),(Math.max(J.max.y,S.y)-J.max.y)/(O.max.y-J.max.y)-(Math.min(J.min.y,S.y)-J.min.y)/(O.min.y-J.min.y)).multiplyBy(h);l.panBy(ht,{animate:!1}),this._draggable._newPos._add(ht),this._draggable._startPos._add(ht),Oe(s._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=nt(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(T(this._panRequest),this._panRequest=nt(this._adjustPan.bind(this,n)))},_onDrag:function(n){var s=this._marker,l=s._shadow,h=Ji(s._icon),_=s._map.layerPointToLatLng(h);l&&Oe(l,h),s._latlng=_,n.latlng=_,n.oldLatLng=this._oldLatLng,s.fire("move",n).fire("drag",n)},_onDragEnd:function(n){T(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),ha=Bn.extend({options:{icon:new Es,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,s){y(this,s),this._latlng=V(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var s=this._latlng;return this._latlng=V(n),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),h=!1;l!==this._icon&&(this._icon&&this._removeIcon(),h=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),Kt(l,s),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ie(l,"focus",this._panOnFocus,this);var _=n.icon.createShadow(this._shadow),S=!1;_!==this._shadow&&(this._removeShadow(),S=!0),_&&(Kt(_,s),_.alt=""),this._shadow=_,n.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),_&&S&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ae(this._icon,"focus",this._panOnFocus,this),Dt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Dt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Oe(this._icon,n),this._shadow&&Oe(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(Kt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Mf)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Mf(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&rn(this._icon,n),this._shadow&&rn(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var s=this.options.icon.options,l=s.iconSize?W(s.iconSize):W(0,0),h=s.iconAnchor?W(s.iconAnchor):W(0,0);n.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:l.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Ip(n,s){return new ha(n,s)}var Pi=Bn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return y(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),da=Pi.extend({options:{fill:!0,radius:10},initialize:function(n,s){y(this,s),this._latlng=V(n),this._radius=this.options.radius},setLatLng:function(n){var s=this._latlng;return this._latlng=V(n),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var s=n&&n.radius||this._radius;return Pi.prototype.setStyle.call(this,n),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,s=this._radiusY||n,l=this._clickTolerance(),h=[n+l,s+l];this._pxBounds=new Q(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Dp(n,s){return new da(n,s)}var ml=da.extend({initialize:function(n,s,l){if(typeof s=="number"&&(s=e({},l,{radius:s})),y(this,s),this._latlng=V(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new ut(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Pi.prototype.setStyle,_project:function(){var n=this._latlng.lng,s=this._latlng.lat,l=this._map,h=l.options.crs;if(h.distance===Mt.distance){var _=Math.PI/180,S=this._mRadius/Mt.R/_,O=l.project([s+S,n]),q=l.project([s-S,n]),J=O.add(q).divideBy(2),ht=l.unproject(J).lat,Ct=Math.acos((Math.cos(S*_)-Math.sin(s*_)*Math.sin(ht*_))/(Math.cos(s*_)*Math.cos(ht*_)))/_;(isNaN(Ct)||Ct===0)&&(Ct=S/Math.cos(Math.PI/180*s)),this._point=J.subtract(l.getPixelOrigin()),this._radius=isNaN(Ct)?0:J.x-l.project([ht,n-Ct]).x,this._radiusY=J.y-O.y}else{var Zt=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(Zt).x}this._updateBounds()}});function Np(n,s,l){return new ml(n,s,l)}var hi=Pi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,s){y(this,s),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var s=1/0,l=null,h=Ts,_,S,O=0,q=this._parts.length;O<q;O++)for(var J=this._parts[O],ht=1,Ct=J.length;ht<Ct;ht++){_=J[ht-1],S=J[ht];var Zt=h(n,_,S,!0);Zt<s&&(s=Zt,l=h(n,_,S))}return l&&(l.distance=Math.sqrt(s)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return vf(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,s){return s=s||this._defaultShape(),n=V(n),s.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new ut,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return Rn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var s=[],l=Rn(n),h=0,_=n.length;h<_;h++)l?(s[h]=V(n[h]),this._bounds.extend(s[h])):s[h]=this._convertLatLngs(n[h]);return s},_project:function(){var n=new Q;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),s=new H(n,n);this._rawPxBounds&&(this._pxBounds=new Q([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(n,s,l){var h=n[0]instanceof vt,_=n.length,S,O;if(h){for(O=[],S=0;S<_;S++)O[S]=this._map.latLngToLayerPoint(n[S]),l.extend(O[S]);s.push(O)}else for(S=0;S<_;S++)this._projectLatlngs(n[S],s,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,l,h,_,S,O,q,J;for(l=0,_=0,S=this._rings.length;l<S;l++)for(J=this._rings[l],h=0,O=J.length;h<O-1;h++)q=_f(J[h],J[h+1],n,h,!0),q&&(s[_]=s[_]||[],s[_].push(q[0]),(q[1]!==J[h+1]||h===O-2)&&(s[_].push(q[1]),_++))}},_simplifyPoints:function(){for(var n=this._parts,s=this.options.smoothFactor,l=0,h=n.length;l<h;l++)n[l]=pf(n[l],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,s){var l,h,_,S,O,q,J=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,S=this._parts.length;l<S;l++)for(q=this._parts[l],h=0,O=q.length,_=O-1;h<O;_=h++)if(!(!s&&h===0)&&mf(n,q[_],q[h])<=J)return!0;return!1}});function Op(n,s){return new hi(n,s)}hi._flat=xf;var Rr=hi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return df(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var s=hi.prototype._convertLatLngs.call(this,n),l=s.length;return l>=2&&s[0]instanceof vt&&s[0].equals(s[l-1])&&s.pop(),s},_setLatLngs:function(n){hi.prototype._setLatLngs.call(this,n),Rn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Rn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,s=this.options.weight,l=new H(s,s);if(n=new Q(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,_=this._rings.length,S;h<_;h++)S=hf(this._rings[h],n,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var s=!1,l,h,_,S,O,q,J,ht;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(S=0,J=this._parts.length;S<J;S++)for(l=this._parts[S],O=0,ht=l.length,q=ht-1;O<ht;q=O++)h=l[O],_=l[q],h.y>n.y!=_.y>n.y&&n.x<(_.x-h.x)*(n.y-h.y)/(_.y-h.y)+h.x&&(s=!s);return s||hi.prototype._containsPoint.call(this,n,!0)}});function Up(n,s){return new Rr(n,s)}var di=fi.extend({initialize:function(n,s){y(this,s),this._layers={},n&&this.addData(n)},addData:function(n){var s=g(n)?n:n.features,l,h,_;if(s){for(l=0,h=s.length;l<h;l++)_=s[l],(_.geometries||_.geometry||_.features||_.coordinates)&&this.addData(_);return this}var S=this.options;if(S.filter&&!S.filter(n))return this;var O=pa(n,S);return O?(O.feature=_a(n),O.defaultOptions=O.options,this.resetStyle(O),S.onEachFeature&&S.onEachFeature(n,O),this.addLayer(O)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=e({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(s){this._setLayerStyle(s,n)},this)},_setLayerStyle:function(n,s){n.setStyle&&(typeof s=="function"&&(s=s(n.feature)),n.setStyle(s))}});function pa(n,s){var l=n.type==="Feature"?n.geometry:n,h=l?l.coordinates:null,_=[],S=s&&s.pointToLayer,O=s&&s.coordsToLatLng||gl,q,J,ht,Ct;if(!h&&!l)return null;switch(l.type){case"Point":return q=O(h),Sf(S,n,q,s);case"MultiPoint":for(ht=0,Ct=h.length;ht<Ct;ht++)q=O(h[ht]),_.push(Sf(S,n,q,s));return new fi(_);case"LineString":case"MultiLineString":return J=ma(h,l.type==="LineString"?0:1,O),new hi(J,s);case"Polygon":case"MultiPolygon":return J=ma(h,l.type==="Polygon"?1:2,O),new Rr(J,s);case"GeometryCollection":for(ht=0,Ct=l.geometries.length;ht<Ct;ht++){var Zt=pa({geometry:l.geometries[ht],type:"Feature",properties:n.properties},s);Zt&&_.push(Zt)}return new fi(_);case"FeatureCollection":for(ht=0,Ct=l.features.length;ht<Ct;ht++){var de=pa(l.features[ht],s);de&&_.push(de)}return new fi(_);default:throw new Error("Invalid GeoJSON object.")}}function Sf(n,s,l,h){return n?n(s,l):new ha(l,h&&h.markersInheritOptions&&h)}function gl(n){return new vt(n[1],n[0],n[2])}function ma(n,s,l){for(var h=[],_=0,S=n.length,O;_<S;_++)O=s?ma(n[_],s-1,l):(l||gl)(n[_]),h.push(O);return h}function _l(n,s){return n=V(n),n.alt!==void 0?[p(n.lng,s),p(n.lat,s),p(n.alt,s)]:[p(n.lng,s),p(n.lat,s)]}function ga(n,s,l,h){for(var _=[],S=0,O=n.length;S<O;S++)_.push(s?ga(n[S],Rn(n[S])?0:s-1,l,h):_l(n[S],h));return!s&&l&&_.length>0&&_.push(_[0].slice()),_}function Ir(n,s){return n.feature?e({},n.feature,{geometry:s}):_a(s)}function _a(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var xl={toGeoJSON:function(n){return Ir(this,{type:"Point",coordinates:_l(this.getLatLng(),n)})}};ha.include(xl),ml.include(xl),da.include(xl),hi.include({toGeoJSON:function(n){var s=!Rn(this._latlngs),l=ga(this._latlngs,s?1:0,!1,n);return Ir(this,{type:(s?"Multi":"")+"LineString",coordinates:l})}}),Rr.include({toGeoJSON:function(n){var s=!Rn(this._latlngs),l=s&&!Rn(this._latlngs[0]),h=ga(this._latlngs,l?2:s?1:0,!0,n);return s||(h=[h]),Ir(this,{type:(l?"Multi":"")+"Polygon",coordinates:h})}}),Pr.include({toMultiPoint:function(n){var s=[];return this.eachLayer(function(l){s.push(l.toGeoJSON(n).geometry.coordinates)}),Ir(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(n){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(n);var l=s==="GeometryCollection",h=[];return this.eachLayer(function(_){if(_.toGeoJSON){var S=_.toGeoJSON(n);if(l)h.push(S.geometry);else{var O=_a(S);O.type==="FeatureCollection"?h.push.apply(h,O.features):h.push(O)}}}),l?Ir(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function bf(n,s){return new di(n,s)}var kp=bf,xa=Bn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,s,l){this._url=n,this._bounds=pt(s),y(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Kt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Dt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&xe(this._image),this},bringToBack:function(){return this._map&&xn(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=pt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",s=this._image=n?this._url:Bt("img");if(Kt(s,"leaflet-image-layer"),this._zoomAnimated&&Kt(s,"leaflet-zoom-animated"),this.options.className&&Kt(s,this.options.className),s.onselectstart=d,s.onmousemove=d,s.onload=a(this.fire,this,"load"),s.onerror=a(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(n){var s=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;ui(this._image,l,s)},_reset:function(){var n=this._image,s=new Q(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=s.getSize();Oe(n,s.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){rn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Fp=function(n,s,l){return new xa(n,s,l)},wf=xa.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",s=this._image=n?this._url:Bt("video");if(Kt(s,"leaflet-image-layer"),this._zoomAnimated&&Kt(s,"leaflet-zoom-animated"),this.options.className&&Kt(s,this.options.className),s.onselectstart=d,s.onmousemove=d,s.onloadeddata=a(this.fire,this,"load"),n){for(var l=s.getElementsByTagName("source"),h=[],_=0;_<l.length;_++)h.push(l[_].src);this._url=l.length>0?h:[s.src];return}g(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var O=Bt("source");O.src=this._url[S],s.appendChild(O)}}});function Bp(n,s,l){return new wf(n,s,l)}var Tf=xa.extend({_initImage:function(){var n=this._image=this._url;Kt(n,"leaflet-image-layer"),this._zoomAnimated&&Kt(n,"leaflet-zoom-animated"),this.options.className&&Kt(n,this.options.className),n.onselectstart=d,n.onmousemove=d}});function zp(n,s,l){return new Tf(n,s,l)}var ei=Bn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,s){n&&(n instanceof vt||g(n))?(this._latlng=V(n),y(this,s)):(y(this,n),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&rn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&rn(this._container,1),this.bringToFront(),this.options.interactive&&(Kt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(rn(this._container,0),this._removeTimeout=setTimeout(a(Dt,void 0,this._container),200)):Dt(this._container),this.options.interactive&&(Pe(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=V(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&xe(this._container),this},bringToBack:function(){return this._map&&xn(this._container),this},_prepareOpen:function(n){var s=this._source;if(!s._map)return!1;if(s instanceof fi){s=null;var l=this._source._layers;for(var h in l)if(l[h]._map){s=l[h];break}if(!s)return!1;this._source=s}if(!n)if(s.getCenter)n=s.getCenter();else if(s.getLatLng)n=s.getLatLng();else if(s.getBounds)n=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")n.innerHTML=s;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),s=W(this.options.offset),l=this._getAnchor();this._zoomAnimated?Oe(this._container,n.add(l)):s=s.add(n).add(l);var h=this._containerBottom=-s.y,_=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=h+"px",this._container.style.left=_+"px"}},_getAnchor:function(){return[0,0]}});ge.include({_initOverlay:function(n,s,l,h){var _=s;return _ instanceof n||(_=new n(h).setContent(s)),l&&_.setLatLng(l),_}}),Bn.include({_initOverlay:function(n,s,l,h){var _=l;return _ instanceof n?(y(_,h),_._source=this):(_=s&&!h?s:new n(h,this),_.setContent(l)),_}});var va=ei.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,ei.prototype.openOn.call(this,n)},onAdd:function(n){ei.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Pi||this._source.on("preclick",ji))},onRemove:function(n){ei.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Pi||this._source.off("preclick",ji))},getEvents:function(){var n=ei.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",s=this._container=Bt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=Bt("div",n+"-content-wrapper",s);if(this._contentNode=Bt("div",n+"-content",l),bs(s),ol(this._contentNode),ie(s,"contextmenu",ji),this._tipContainer=Bt("div",n+"-tip-container",s),this._tip=Bt("div",n+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=Bt("a",n+"-close-button",s);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',ie(h,"click",function(_){Qe(_),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,s=n.style;s.width="",s.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),s.width=l+1+"px",s.whiteSpace="",s.height="";var h=n.offsetHeight,_=this.options.maxHeight,S="leaflet-popup-scrolled";_&&h>_?(s.height=_+"px",Kt(n,S)):Pe(n,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();Oe(this._container,s.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,s=parseInt(hn(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+s,h=this._containerWidth,_=new H(this._containerLeft,-l-this._containerBottom);_._add(Ji(this._container));var S=n.layerPointToContainerPoint(_),O=W(this.options.autoPanPadding),q=W(this.options.autoPanPaddingTopLeft||O),J=W(this.options.autoPanPaddingBottomRight||O),ht=n.getSize(),Ct=0,Zt=0;S.x+h+J.x>ht.x&&(Ct=S.x+h-ht.x+J.x),S.x-Ct-q.x<0&&(Ct=S.x-q.x),S.y+l+J.y>ht.y&&(Zt=S.y+l-ht.y+J.y),S.y-Zt-q.y<0&&(Zt=S.y-q.y),(Ct||Zt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Ct,Zt]))}},_getAnchor:function(){return W(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Hp=function(n,s){return new va(n,s)};ge.mergeOptions({closePopupOnClick:!0}),ge.include({openPopup:function(n,s,l){return this._initOverlay(va,n,s,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Bn.include({bindPopup:function(n,s){return this._popup=this._initOverlay(va,this._popup,n,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof fi||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Qi(n);var s=n.layer||n.target;if(this._popup._source===s&&!(s instanceof Pi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=s,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var ya=ei.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){ei.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){ei.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=ei.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",s=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Bt("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var s,l,h=this._map,_=this._container,S=h.latLngToContainerPoint(h.getCenter()),O=h.layerPointToContainerPoint(n),q=this.options.direction,J=_.offsetWidth,ht=_.offsetHeight,Ct=W(this.options.offset),Zt=this._getAnchor();q==="top"?(s=J/2,l=ht):q==="bottom"?(s=J/2,l=0):q==="center"?(s=J/2,l=ht/2):q==="right"?(s=0,l=ht/2):q==="left"?(s=J,l=ht/2):O.x<S.x?(q="right",s=0,l=ht/2):(q="left",s=J+(Ct.x+Zt.x)*2,l=ht/2),n=n.subtract(W(s,l,!0)).add(Ct).add(Zt),Pe(_,"leaflet-tooltip-right"),Pe(_,"leaflet-tooltip-left"),Pe(_,"leaflet-tooltip-top"),Pe(_,"leaflet-tooltip-bottom"),Kt(_,"leaflet-tooltip-"+q),Oe(_,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&rn(this._container,n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(s)},_getAnchor:function(){return W(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Vp=function(n,s){return new ya(n,s)};ge.include({openTooltip:function(n,s,l){return this._initOverlay(ya,n,s,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Bn.include({bindTooltip:function(n,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ya,this._tooltip,n,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var s=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[s](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof fi||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&(ie(s,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),ie(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var s=n.latlng,l,h;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),h=this._map.containerPointToLayerPoint(l),s=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(s)}});var Ef=Lr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var s=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(Ei(s),s.appendChild(l.html)):s.innerHTML=l.html!==!1?l.html:"",l.bgPos){var h=W(l.bgPos);s.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Gp(n){return new Ef(n)}Lr.Default=Es;var As=Bn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:It.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){y(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Dt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(xe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(xn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=c(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof H?n:new H(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var s=this.getPane().children,l=-n(-1/0,1/0),h=0,_=s.length,S;h<_;h++)S=s[h].style.zIndex,s[h]!==this._container&&S&&(l=n(l,+S));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!It.ielt9){rn(this._container,this.options.opacity);var n=+new Date,s=!1,l=!1;for(var h in this._tiles){var _=this._tiles[h];if(!(!_.current||!_.loaded)){var S=Math.min(1,(n-_.loaded)/200);rn(_.el,S),S<1?s=!0:(_.active?l=!0:this._onOpaqueTile(_),_.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),s&&(T(this._fadeFrame),this._fadeFrame=nt(this._updateOpacity,this))}},_onOpaqueTile:d,_initContainer:function(){this._container||(this._container=Bt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,s=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=s-Math.abs(n-l),this._onUpdateLevel(l)):(Dt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var h=this._levels[n],_=this._map;return h||(h=this._levels[n]={},h.el=Bt("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=s,h.origin=_.project(_.unproject(_.getPixelOrigin()),n).round(),h.zoom=n,this._setZoomTransform(h,_.getCenter(),_.getZoom()),d(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:d,_onRemoveLevel:d,_onCreateLevel:d,_pruneTiles:function(){if(this._map){var n,s,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)s=this._tiles[n],s.retain=s.current;for(n in this._tiles)if(s=this._tiles[n],s.current&&!s.active){var h=s.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var s in this._tiles)this._tiles[s].coords.z===n&&this._removeTile(s)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Dt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,s,l,h){var _=Math.floor(n/2),S=Math.floor(s/2),O=l-1,q=new H(+_,+S);q.z=+O;var J=this._tileCoordsToKey(q),ht=this._tiles[J];return ht&&ht.active?(ht.retain=!0,!0):(ht&&ht.loaded&&(ht.retain=!0),O>h?this._retainParent(_,S,O,h):!1)},_retainChildren:function(n,s,l,h){for(var _=2*n;_<2*n+2;_++)for(var S=2*s;S<2*s+2;S++){var O=new H(_,S);O.z=l+1;var q=this._tileCoordsToKey(O),J=this._tiles[q];if(J&&J.active){J.retain=!0;continue}else J&&J.loaded&&(J.retain=!0);l+1<h&&this._retainChildren(_,S,l+1,h)}},_resetView:function(n){var s=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var s=this.options;return s.minNativeZoom!==void 0&&n<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<n?s.maxNativeZoom:n},_setView:function(n,s,l,h){var _=Math.round(s);this.options.maxZoom!==void 0&&_>this.options.maxZoom||this.options.minZoom!==void 0&&_<this.options.minZoom?_=void 0:_=this._clampZoom(_);var S=this.options.updateWhenZooming&&_!==this._tileZoom;(!h||S)&&(this._tileZoom=_,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),_!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,s)},_setZoomTransforms:function(n,s){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,s)},_setZoomTransform:function(n,s,l){var h=this._map.getZoomScale(l,n.zoom),_=n.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(s,l)).round();It.any3d?ui(n.el,_,h):Oe(n.el,_)},_resetGrid:function(){var n=this._map,s=n.options.crs,l=this._tileSize=this.getTileSize(),h=this._tileZoom,_=this._map.getPixelWorldBounds(this._tileZoom);_&&(this._globalTileRange=this._pxBoundsToTileRange(_)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,s.wrapLng[0]],h).x/l.x),Math.ceil(n.project([0,s.wrapLng[1]],h).x/l.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([s.wrapLat[0],0],h).y/l.x),Math.ceil(n.project([s.wrapLat[1],0],h).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var s=this._map,l=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),h=s.getZoomScale(l,this._tileZoom),_=s.project(n,this._tileZoom).floor(),S=s.getSize().divideBy(h*2);return new Q(_.subtract(S),_.add(S))},_update:function(n){var s=this._map;if(s){var l=this._clampZoom(s.getZoom());if(n===void 0&&(n=s.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(n),_=this._pxBoundsToTileRange(h),S=_.getCenter(),O=[],q=this.options.keepBuffer,J=new Q(_.getBottomLeft().subtract([q,-q]),_.getTopRight().add([q,-q]));if(!(isFinite(_.min.x)&&isFinite(_.min.y)&&isFinite(_.max.x)&&isFinite(_.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ht in this._tiles){var Ct=this._tiles[ht].coords;(Ct.z!==this._tileZoom||!J.contains(new H(Ct.x,Ct.y)))&&(this._tiles[ht].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var Zt=_.min.y;Zt<=_.max.y;Zt++)for(var de=_.min.x;de<=_.max.x;de++){var dn=new H(de,Zt);if(dn.z=this._tileZoom,!!this._isValidTile(dn)){var Je=this._tiles[this._tileCoordsToKey(dn)];Je?Je.current=!0:O.push(dn)}}if(O.sort(function(yn,Nr){return yn.distanceTo(S)-Nr.distanceTo(S)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var In=document.createDocumentFragment();for(de=0;de<O.length;de++)this._addTile(O[de],In);this._level.el.appendChild(In)}}}},_isValidTile:function(n){var s=this._map.options.crs;if(!s.infinite){var l=this._globalTileRange;if(!s.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!s.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(n);return pt(this.options.bounds).overlaps(h)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var s=this._map,l=this.getTileSize(),h=n.scaleBy(l),_=h.add(l),S=s.unproject(h,n.z),O=s.unproject(_,n.z);return[S,O]},_tileCoordsToBounds:function(n){var s=this._tileCoordsToNwSe(n),l=new ut(s[0],s[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var s=n.split(":"),l=new H(+s[0],+s[1]);return l.z=+s[2],l},_removeTile:function(n){var s=this._tiles[n];s&&(Dt(s.el),delete this._tiles[n],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Kt(n,"leaflet-tile");var s=this.getTileSize();n.style.width=s.x+"px",n.style.height=s.y+"px",n.onselectstart=d,n.onmousemove=d,It.ielt9&&this.options.opacity<1&&rn(n,this.options.opacity)},_addTile:function(n,s){var l=this._getTilePos(n),h=this._tileCoordsToKey(n),_=this.createTile(this._wrapCoords(n),a(this._tileReady,this,n));this._initTile(_),this.createTile.length<2&&nt(a(this._tileReady,this,n,null,_)),Oe(_,l),this._tiles[h]={el:_,coords:n,current:!0},s.appendChild(_),this.fire("tileloadstart",{tile:_,coords:n})},_tileReady:function(n,s,l){s&&this.fire("tileerror",{error:s,tile:l,coords:n});var h=this._tileCoordsToKey(n);l=this._tiles[h],l&&(l.loaded=+new Date,this._map._fadeAnimated?(rn(l.el,0),T(this._fadeFrame),this._fadeFrame=nt(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),s||(Kt(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),It.ielt9||!this._map._fadeAnimated?nt(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var s=new H(this._wrapX?f(n.x,this._wrapX):n.x,this._wrapY?f(n.y,this._wrapY):n.y);return s.z=n.z,s},_pxBoundsToTileRange:function(n){var s=this.getTileSize();return new Q(n.min.unscaleBy(s).floor(),n.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Wp(n){return new As(n)}var Dr=As.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,s){this._url=n,s=y(this,s),s.detectRetina&&It.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,s){return this._url===n&&s===void 0&&(s=!0),this._url=n,s||this.redraw(),this},createTile:function(n,s){var l=document.createElement("img");return ie(l,"load",a(this._tileOnLoad,this,s,l)),ie(l,"error",a(this._tileOnError,this,s,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var s={r:It.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(s.y=l),s["-y"]=l}return x(this._url,e(s,this.options))},_tileOnLoad:function(n,s){It.ielt9?setTimeout(a(n,this,null,s),0):n(null,s)},_tileOnError:function(n,s,l){var h=this.options.errorTileUrl;h&&s.getAttribute("src")!==h&&(s.src=h),n(l,s)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,s=this.options.maxZoom,l=this.options.zoomReverse,h=this.options.zoomOffset;return l&&(n=s-n),n+h},_getSubdomain:function(n){var s=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var n,s;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(s=this._tiles[n].el,s.onload=d,s.onerror=d,!s.complete)){s.src=E;var l=this._tiles[n].coords;Dt(s),delete this._tiles[n],this.fire("tileabort",{tile:s,coords:l})}},_removeTile:function(n){var s=this._tiles[n];if(s)return s.el.setAttribute("src",E),As.prototype._removeTile.call(this,n)},_tileReady:function(n,s,l){if(!(!this._map||l&&l.getAttribute("src")===E))return As.prototype._tileReady.call(this,n,s,l)}});function Af(n,s){return new Dr(n,s)}var Cf=Dr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,s){this._url=n;var l=e({},this.defaultWmsParams);for(var h in s)h in this.options||(l[h]=s[h]);s=y(this,s);var _=s.detectRetina&&It.retina?2:1,S=this.getTileSize();l.width=S.x*_,l.height=S.y*_,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Dr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var s=this._tileCoordsToNwSe(n),l=this._crs,h=Y(l.project(s[0]),l.project(s[1])),_=h.min,S=h.max,O=(this._wmsVersion>=1.3&&this._crs===yf?[_.y,_.x,S.y,S.x]:[_.x,_.y,S.x,S.y]).join(","),q=Dr.prototype.getTileUrl.call(this,n);return q+M(this.wmsParams,q,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(n,s){return e(this.wmsParams,n),s||this.redraw(),this}});function qp(n,s){return new Cf(n,s)}Dr.WMS=Cf,Af.wms=qp;var pi=Bn.extend({options:{padding:.1},initialize:function(n){y(this,n),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Kt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,s){var l=this._map.getZoomScale(s,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),_=this._map.project(this._center,s),S=h.multiplyBy(-l).add(_).subtract(this._map._getNewPixelOrigin(n,s));It.any3d?ui(this._container,S,l):Oe(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,s=this._map.getSize(),l=this._map.containerPointToLayerPoint(s.multiplyBy(-n)).round();this._bounds=new Q(l,l.add(s.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Pf=pi.extend({options:{tolerance:0},getEvents:function(){var n=pi.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){pi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");ie(n,"mousemove",this._onMouseMove,this),ie(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ie(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){T(this._redrawRequest),delete this._ctx,Dt(this._container),Ae(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var s in this._layers)n=this._layers[s],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){pi.prototype._update.call(this);var n=this._bounds,s=this._container,l=n.getSize(),h=It.retina?2:1;Oe(s,n.min),s.width=h*l.x,s.height=h*l.y,s.style.width=l.x+"px",s.style.height=l.y+"px",It.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){pi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[u(n)]=n;var s=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var s=n._order,l=s.next,h=s.prev;l?l.prev=h:this._drawLast=h,h?h.next=l:this._drawFirst=l,delete n._order,delete this._layers[u(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var s=n.options.dashArray.split(/[, ]+/),l=[],h,_;for(_=0;_<s.length;_++){if(h=Number(s[_]),isNaN(h))return;l.push(h)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||nt(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var s=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Q,this._redrawBounds.extend(n._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(n._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var s=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,s=this._redrawBounds;if(this._ctx.save(),s){var l=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)n=h.layer,(!s||n._pxBounds&&n._pxBounds.intersects(s))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,s){if(this._drawing){var l,h,_,S,O=n._parts,q=O.length,J=this._ctx;if(q){for(J.beginPath(),l=0;l<q;l++){for(h=0,_=O[l].length;h<_;h++)S=O[l][h],J[h?"lineTo":"moveTo"](S.x,S.y);s&&J.closePath()}this._fillStroke(J,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var s=n._point,l=this._ctx,h=Math.max(Math.round(n._radius),1),_=(Math.max(Math.round(n._radiusY),1)||h)/h;_!==1&&(l.save(),l.scale(1,_)),l.beginPath(),l.arc(s.x,s.y/_,h,0,Math.PI*2,!1),_!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,s){var l=s.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(s.options&&s.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var s=this._map.mouseEventToLayerPoint(n),l,h,_=this._drawFirst;_;_=_.next)l=_.layer,l.options.interactive&&l._containsPoint(s)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(h=l);this._fireEvent(h?[h]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,s)}},_handleMouseOut:function(n){var s=this._hoveredLayer;s&&(Pe(this._container,"leaflet-interactive"),this._fireEvent([s],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,s){if(!this._mouseHoverThrottled){for(var l,h,_=this._drawFirst;_;_=_.next)l=_.layer,l.options.interactive&&l._containsPoint(s)&&(h=l);h!==this._hoveredLayer&&(this._handleMouseOut(n),h&&(Kt(this._container,"leaflet-interactive"),this._fireEvent([h],n,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(a(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,s,l){this._map._fireDOMEvent(s,l||s.type,n)},_bringToFront:function(n){var s=n._order;if(s){var l=s.next,h=s.prev;if(l)l.prev=h;else return;h?h.next=l:l&&(this._drawFirst=l),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(n)}},_bringToBack:function(n){var s=n._order;if(s){var l=s.next,h=s.prev;if(h)h.next=l;else return;l?l.prev=h:h&&(this._drawLast=h),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(n)}}});function Lf(n){return It.canvas?new Pf(n):null}var Cs=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Xp={_initContainer:function(){this._container=Bt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(pi.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var s=n._container=Cs("shape");Kt(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",n._path=Cs("path"),s.appendChild(n._path),this._updateStyle(n),this._layers[u(n)]=n},_addPath:function(n){var s=n._container;this._container.appendChild(s),n.options.interactive&&n.addInteractiveTarget(s)},_removePath:function(n){var s=n._container;Dt(s),n.removeInteractiveTarget(s),delete this._layers[u(n)]},_updateStyle:function(n){var s=n._stroke,l=n._fill,h=n.options,_=n._container;_.stroked=!!h.stroke,_.filled=!!h.fill,h.stroke?(s||(s=n._stroke=Cs("stroke")),_.appendChild(s),s.weight=h.weight+"px",s.color=h.color,s.opacity=h.opacity,h.dashArray?s.dashStyle=g(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=h.lineCap.replace("butt","flat"),s.joinstyle=h.lineJoin):s&&(_.removeChild(s),n._stroke=null),h.fill?(l||(l=n._fill=Cs("fill")),_.appendChild(l),l.color=h.fillColor||h.color,l.opacity=h.fillOpacity):l&&(_.removeChild(l),n._fill=null)},_updateCircle:function(n){var s=n._point.round(),l=Math.round(n._radius),h=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+s.x+","+s.y+" "+l+","+h+" 0,"+65535*360)},_setPath:function(n,s){n._path.v=s},_bringToFront:function(n){xe(n._container)},_bringToBack:function(n){xn(n._container)}},Ma=It.vml?Cs:ke,Ps=pi.extend({_initContainer:function(){this._container=Ma("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ma("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Dt(this._container),Ae(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){pi.prototype._update.call(this);var n=this._bounds,s=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,l.setAttribute("width",s.x),l.setAttribute("height",s.y)),Oe(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(n){var s=n._path=Ma("path");n.options.className&&Kt(s,n.options.className),n.options.interactive&&Kt(s,"leaflet-interactive"),this._updateStyle(n),this._layers[u(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Dt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[u(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var s=n._path,l=n.options;s&&(l.stroke?(s.setAttribute("stroke",l.color),s.setAttribute("stroke-opacity",l.opacity),s.setAttribute("stroke-width",l.weight),s.setAttribute("stroke-linecap",l.lineCap),s.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?s.setAttribute("stroke-dasharray",l.dashArray):s.removeAttribute("stroke-dasharray"),l.dashOffset?s.setAttribute("stroke-dashoffset",l.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),l.fill?(s.setAttribute("fill",l.fillColor||l.color),s.setAttribute("fill-opacity",l.fillOpacity),s.setAttribute("fill-rule",l.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(n,s){this._setPath(n,Ft(n._parts,s))},_updateCircle:function(n){var s=n._point,l=Math.max(Math.round(n._radius),1),h=Math.max(Math.round(n._radiusY),1)||l,_="a"+l+","+h+" 0 1,0 ",S=n._empty()?"M0 0":"M"+(s.x-l)+","+s.y+_+l*2+",0 "+_+-l*2+",0 ";this._setPath(n,S)},_setPath:function(n,s){n._path.setAttribute("d",s)},_bringToFront:function(n){xe(n._path)},_bringToBack:function(n){xn(n._path)}});It.vml&&Ps.include(Xp);function Rf(n){return It.svg||It.vml?new Ps(n):null}ge.include({getRenderer:function(n){var s=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var s=this._paneRenderers[n];return s===void 0&&(s=this._createRenderer({pane:n}),this._paneRenderers[n]=s),s},_createRenderer:function(n){return this.options.preferCanvas&&Lf(n)||Rf(n)}});var If=Rr.extend({initialize:function(n,s){Rr.prototype.initialize.call(this,this._boundsToLatLngs(n),s)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=pt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Zp(n,s){return new If(n,s)}Ps.create=Ma,Ps.pointsToPath=Ft,di.geometryToLayer=pa,di.coordsToLatLng=gl,di.coordsToLatLngs=ma,di.latLngToCoords=_l,di.latLngsToCoords=ga,di.getFeature=Ir,di.asFeature=_a,ge.mergeOptions({boxZoom:!0});var Df=ti.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){ie(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ae(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Dt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ys(),Qo(),this._startPoint=this._map.mouseEventToContainerPoint(n),ie(document,{contextmenu:Qi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=Bt("div","leaflet-zoom-box",this._container),Kt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var s=new Q(this._point,this._startPoint),l=s.getSize();Oe(this._box,s.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(Dt(this._box),Pe(this._container,"leaflet-crosshair")),Ms(),tl(),Ae(document,{contextmenu:Qi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0);var s=new ut(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ge.addInitHook("addHandler","boxZoom",Df),ge.mergeOptions({doubleClickZoom:!0});var Nf=ti.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var s=this._map,l=s.getZoom(),h=s.options.zoomDelta,_=n.originalEvent.shiftKey?l-h:l+h;s.options.doubleClickZoom==="center"?s.setZoom(_):s.setZoomAround(n.containerPoint,_)}});ge.addInitHook("addHandler","doubleClickZoom",Nf),ge.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Of=ti.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Ci(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Kt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Pe(this._map._container,"leaflet-grab"),Pe(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=pt(this._map.options.maxBounds);this._offsetLimit=Y(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var s=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(s),this._prunePositions(s)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,s){return n-(n-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;n.x<s.min.x&&(n.x=this._viscousLimit(n.x,s.min.x)),n.y<s.min.y&&(n.y=this._viscousLimit(n.y,s.min.y)),n.x>s.max.x&&(n.x=this._viscousLimit(n.x,s.max.x)),n.y>s.max.y&&(n.y=this._viscousLimit(n.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,s=Math.round(n/2),l=this._initialWorldOffset,h=this._draggable._newPos.x,_=(h-s+l)%n+s-l,S=(h+s+l)%n-s-l,O=Math.abs(_+l)<Math.abs(S+l)?_:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(n){var s=this._map,l=s.options,h=!l.inertia||n.noInertia||this._times.length<2;if(s.fire("dragend",n),h)s.fire("moveend");else{this._prunePositions(+new Date);var _=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,O=l.easeLinearity,q=_.multiplyBy(O/S),J=q.distanceTo([0,0]),ht=Math.min(l.inertiaMaxSpeed,J),Ct=q.multiplyBy(ht/J),Zt=ht/(l.inertiaDeceleration*O),de=Ct.multiplyBy(-Zt/2).round();!de.x&&!de.y?s.fire("moveend"):(de=s._limitOffset(de,s.options.maxBounds),nt(function(){s.panBy(de,{duration:Zt,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});ge.addInitHook("addHandler","dragging",Of),ge.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Uf=ti.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),ie(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ae(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,s=document.documentElement,l=n.scrollTop||s.scrollTop,h=n.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(h,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var s=this._panKeys={},l=this.keyCodes,h,_;for(h=0,_=l.left.length;h<_;h++)s[l.left[h]]=[-1*n,0];for(h=0,_=l.right.length;h<_;h++)s[l.right[h]]=[n,0];for(h=0,_=l.down.length;h<_;h++)s[l.down[h]]=[0,n];for(h=0,_=l.up.length;h<_;h++)s[l.up[h]]=[0,-1*n]},_setZoomDelta:function(n){var s=this._zoomKeys={},l=this.keyCodes,h,_;for(h=0,_=l.zoomIn.length;h<_;h++)s[l.zoomIn[h]]=n;for(h=0,_=l.zoomOut.length;h<_;h++)s[l.zoomOut[h]]=-n},_addHooks:function(){ie(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ae(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var s=n.keyCode,l=this._map,h;if(s in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(h=this._panKeys[s],n.shiftKey&&(h=W(h).multiplyBy(3)),l.options.maxBounds&&(h=l._limitOffset(W(h),l.options.maxBounds)),l.options.worldCopyJump){var _=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(h)));l.panTo(_)}else l.panBy(h)}else if(s in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Qi(n)}}});ge.addInitHook("addHandler","keyboard",Uf),ge.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var kf=ti.extend({addHooks:function(){ie(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ae(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var s=of(n),l=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var h=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),h),Qi(n)},_performZoom:function(){var n=this._map,s=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),_=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,S=l?Math.ceil(_/l)*l:_,O=n._limitZoom(s+(this._delta>0?S:-S))-s;this._delta=0,this._startTime=null,O&&(n.options.scrollWheelZoom==="center"?n.setZoom(s+O):n.setZoomAround(this._lastMousePos,s+O))}});ge.addInitHook("addHandler","scrollWheelZoom",kf);var $p=600;ge.mergeOptions({tapHold:It.touchNative&&It.safari&&It.mobile,tapTolerance:15});var Ff=ti.extend({addHooks:function(){ie(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ae(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var s=n.touches[0];this._startPos=this._newPos=new H(s.clientX,s.clientY),this._holdTimeout=setTimeout(a(function(){this._cancel(),this._isTapValid()&&(ie(document,"touchend",Qe),ie(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),$p),ie(document,"touchend touchcancel contextmenu",this._cancel,this),ie(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){Ae(document,"touchend",Qe),Ae(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),Ae(document,"touchend touchcancel contextmenu",this._cancel,this),Ae(document,"touchmove",this._onMove,this)},_onMove:function(n){var s=n.touches[0];this._newPos=new H(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,s){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});l._simulated=!0,s.target.dispatchEvent(l)}});ge.addInitHook("addHandler","tapHold",Ff),ge.mergeOptions({touchZoom:It.touch,bounceAtZoomLimits:!0});var Bf=ti.extend({addHooks:function(){Kt(this._map._container,"leaflet-touch-zoom"),ie(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Pe(this._map._container,"leaflet-touch-zoom"),Ae(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var s=this._map;if(!(!n.touches||n.touches.length!==2||s._animatingZoom||this._zooming)){var l=s.mouseEventToContainerPoint(n.touches[0]),h=s.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(l.add(h)._divideBy(2))),this._startDist=l.distanceTo(h),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),ie(document,"touchmove",this._onTouchMove,this),ie(document,"touchend touchcancel",this._onTouchEnd,this),Qe(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var s=this._map,l=s.mouseEventToContainerPoint(n.touches[0]),h=s.mouseEventToContainerPoint(n.touches[1]),_=l.distanceTo(h)/this._startDist;if(this._zoom=s.getScaleZoom(_,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&_<1||this._zoom>s.getMaxZoom()&&_>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,_===1)return}else{var S=l._add(h)._divideBy(2)._subtract(this._centerPoint);if(_===1&&S.x===0&&S.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),T(this._animRequest);var O=a(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=nt(O,this,!0),Qe(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,T(this._animRequest),Ae(document,"touchmove",this._onTouchMove,this),Ae(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ge.addInitHook("addHandler","touchZoom",Bf),ge.BoxZoom=Df,ge.DoubleClickZoom=Nf,ge.Drag=Of,ge.Keyboard=Uf,ge.ScrollWheelZoom=kf,ge.TapHold=Ff,ge.TouchZoom=Bf,r.Bounds=Q,r.Browser=It,r.CRS=ft,r.Canvas=Pf,r.Circle=ml,r.CircleMarker=da,r.Class=st,r.Control=Fn,r.DivIcon=Ef,r.DivOverlay=ei,r.DomEvent=hp,r.DomUtil=up,r.Draggable=Ci,r.Evented=rt,r.FeatureGroup=fi,r.GeoJSON=di,r.GridLayer=As,r.Handler=ti,r.Icon=Lr,r.ImageOverlay=xa,r.LatLng=vt,r.LatLngBounds=ut,r.Layer=Bn,r.LayerGroup=Pr,r.LineUtil=Tp,r.Map=ge,r.Marker=ha,r.Mixin=vp,r.Path=Pi,r.Point=H,r.PolyUtil=yp,r.Polygon=Rr,r.Polyline=hi,r.Popup=va,r.PosAnimation=lf,r.Projection=Ep,r.Rectangle=If,r.Renderer=pi,r.SVG=Ps,r.SVGOverlay=Tf,r.TileLayer=Dr,r.Tooltip=ya,r.Transformation=Et,r.Util=I,r.VideoOverlay=wf,r.bind=a,r.bounds=Y,r.canvas=Lf,r.circle=Np,r.circleMarker=Dp,r.control=ws,r.divIcon=Gp,r.extend=e,r.featureGroup=Lp,r.geoJSON=bf,r.geoJson=kp,r.gridLayer=Wp,r.icon=Rp,r.imageOverlay=Fp,r.latLng=V,r.latLngBounds=pt,r.layerGroup=Pp,r.map=dp,r.marker=Ip,r.point=W,r.polygon=Up,r.polyline=Op,r.popup=Hp,r.rectangle=Zp,r.setOptions=y,r.stamp=u,r.svg=Rf,r.svgOverlay=zp,r.tileLayer=Af,r.tooltip=Vp,r.transformation=fe,r.version=t,r.videoOverlay=Bp;var Yp=window.L;r.noConflict=function(){return window.L=Yp,this},window.L=r}))});var ba=typeof window<"u"?window.Android:void 0,hm=!!ba,dm=[["com.google.android.apps.maps","Maps"],["com.waze","Waze"],["com.spotify.music","Spotify"],["com.google.android.youtube","YouTube"],["com.android.chrome","Chrome"],["com.whatsapp","WhatsApp"],["com.android.settings","Param\xE8tres"],["com.deezer.android","Deezer"],["fr.radiofrance","Radio France"],["com.android.bluetooth","Bluetooth"],["com.android.camera","Cam\xE9ra"],["com.android.music","Musique"],["com.google.android.gm","Gmail"],["com.android.vending","Play Store"],["com.sygic.truck","Sygic Truck"],["com.android.files","Fichiers"]].map(([r,t])=>({pkg:r,label:t}));function Mn(r,...t){if(ba&&typeof ba[r]=="function")return ba[r](...t)}var Ee={getApps(){let r=Mn("getApps");if(r===void 0)return dm;try{return JSON.parse(r)}catch{return[]}},iconUrl(r){return hm?`/appicon/${encodeURIComponent(r)}.png`:""},launchApp(r){Mn("launchApp",r)===void 0&&console.log("[mock] launch",r)},appInfo(r){Mn("appInfo",r)},navigate(r,t="google"){Mn("navigate",r,t)===void 0&&window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(r)}`)},openMap(r="google"){Mn("openMap",r)===void 0&&console.log("[mock] openMap",r)},mediaKey(r){Mn("mediaKey",r)},openMusic(r){Mn("openMusic",r||"")===void 0&&console.log("[mock] music")},openPhone(r){Mn("openPhone",r||"")===void 0&&console.log("[mock] phone")},openSettings(r){Mn("openSettings",r)},setFullscreen(r){Mn("setFullscreen",!!r)},saveState(r){Mn("saveState",r)},loadState(){return Mn("loadState")||null},exportBackup(r){let t=Mn("exportBackup",r);if(t===void 0){let e=document.createElement("a");return e.href=URL.createObjectURL(new Blob([r],{type:"application/json"})),e.download="launcher-scania-sauvegarde.json",e.click(),"T\xE9l\xE9chargement lanc\xE9"}return t},appVersion(){return Mn("appVersion")||"web"}},Ls={PLAY_PAUSE:85,NEXT:87,PREVIOUS:88};var Xf="scania-launcher-state-v1",Dn=()=>new Date().toISOString().slice(0,10),pm=Date.now(),zn=()=>(pm++).toString(36),nr={moteur:{label:"Moteur",icon:"Cog"},transmission:{label:"Transmission",icon:"Settings2"},freins:{label:"Freins",icon:"Disc3"},pneus:{label:"Pneus",icon:"CircleDot"},carburant:{label:"Carburant",icon:"Fuel"},sellette:{label:"Sellette / Ch\xE2ssis",icon:"Link"},cabine:{label:"Cabine / Papiers",icon:"FileText"}};function mm(r){let t=Dn(),e=(i,a,o,u,c="")=>({id:zn(),name:i,category:a,everyKm:o,everyMonths:u,lastKm:r,lastDate:t,note:c});return[e("Vidange huile moteur","moteur",6e4,12,"Huile 10W-40 LDF-4"),e("Filtre \xE0 huile","moteur",6e4,12),e("Filtres \xE0 gasoil","moteur",6e4,12),e("Filtre \xE0 air","moteur",12e4,24),e("Liquide de refroidissement","moteur",0,48),e("Courroie accessoires","moteur",24e4,0),e("Filtre AdBlue","carburant",18e4,36),e("Huile bo\xEEte de vitesses","transmission",27e4,36),e("Huile pont arri\xE8re","transmission",27e4,36),e("Plaquettes de frein AV","freins",15e4,0),e("Plaquettes de frein AR","freins",15e4,0),e("Cartouche dessiccateur","freins",0,12),e("Graissage ch\xE2ssis","sellette",15e3,1),e("Graissage sellette","sellette",1e4,1),e("Contr\xF4le technique","cabine",0,12),e("Chronotachygraphe","cabine",0,24),e("Filtre habitacle","cabine",6e4,12)]}var er={"4x2":[{id:"AV",label:"Essieu avant (directeur)",twin:!1},{id:"AR",label:"Pont moteur",twin:!0}],"6x2":[{id:"AV",label:"Essieu avant (directeur)",twin:!1},{id:"AR",label:"Pont moteur",twin:!0},{id:"SU",label:"Essieu suiveur",twin:!1}],"6x4":[{id:"AV",label:"Essieu avant (directeur)",twin:!1},{id:"AR1",label:"Pont moteur 1",twin:!0},{id:"AR2",label:"Pont moteur 2",twin:!0}]};function Li(r){let t=[];for(let e of er[r]||er["4x2"]){let i=e.twin?[["G-ext","Gauche ext."],["G-int","Gauche int."],["D-int","Droite int."],["D-ext","Droite ext."]]:[["G","Gauche"],["D","Droite"]];for(let[a,o]of i)t.push({pos:`${e.id}-${a}`,axle:e.id,label:`${e.id} ${o}`})}return t}function wa(){return{version:1,truck:{name:"Mon Scania",plate:"AB-123-CD",km:45e4,kmDate:Dn(),axles:"4x2",cabColor:"#e8ecf1",tankLiters:700},settings:{accent:"#3b82f6",fullscreen:!1,autoRotate:!0,quality:"auto",googleMapsKey:"",mapStyle:"dark",musicPkg:"",phonePkg:"",glass:!1,hotspotLabels:!0,wallpaper:"sunset"},maintenance:mm(45e4),history:[],tires:{defaultLifeKm:15e4,minDepth:3,list:{}},fuel:[],favorites:[],places:[{id:zn(),name:"Maison",address:""},{id:zn(),name:"D\xE9p\xF4t",address:""}]}}function Zf(r,t){if(!t||typeof t!="object")return r;let e={...r,...t};for(let i of["truck","settings","tires"])e[i]={...r[i],...t[i]||{}};return e}function gm(){let r=null;try{r=Ee.loadState()}catch{}if(!r)try{r=localStorage.getItem(Xf)}catch{}try{return Zf(wa(),r?JSON.parse(r):null)}catch{return wa()}}var et=gm(),Ml=new Set,Nn=r=>(Ml.add(r),()=>Ml.delete(r)),Gf=null;function ye(){clearTimeout(Gf),Gf=setTimeout(()=>{let r=JSON.stringify(et);try{localStorage.setItem(Xf,r)}catch{}try{Ee.saveState(r)}catch{}},150),Ml.forEach(r=>{try{r()}catch(t){console.error(t)}})}function Sl(r){let t=Zf(wa(),r);Object.keys(et).forEach(e=>delete et[e]),Object.assign(et,t),ye()}function $f(){Sl(wa())}function Ta(r){return r=Math.round(Number(r)),!Number.isFinite(r)||r<=0||r<et.truck.km?!1:(et.truck.km=r,et.truck.kmDate=Dn(),!0)}var Wf=30.44*24*3600*1e3;function Hn(r,t=et.truck.km){let e=0,i=null,a=null;if(r.everyKm>0){let u=t-(r.lastKm||0);i=r.everyKm-u,e=Math.max(e,u/r.everyKm)}if(r.everyMonths>0&&r.lastDate){let u=new Date(r.lastDate).getTime()+r.everyMonths*Wf;a=Math.round((u-Date.now())/864e5);let c=(Date.now()-new Date(r.lastDate).getTime())/(r.everyMonths*Wf);e=Math.max(e,c)}let o="ok";return e>=1?o="late":(e>=.85||i!==null&&i<5e3||a!==null&&a<30)&&(o="soon"),{ratio:Math.max(0,e),remainingKm:i,remainingDays:a,level:o}}var qf={ok:0,soon:1,late:2};function Rs(r){return r.reduce((t,e)=>qf[e]>qf[t]?e:t,"ok")}function mi(r,t=et.truck.km){if(!r)return{level:"none",ratio:0,remainingKm:null};let e=Number(r.lifeKm)||et.tires.defaultLifeKm,i=t-(Number(r.mountKm)||t),a=e-i,o=i/e,u=o>=1?"late":o>=.85?"soon":"ok";if(r.depth!==""&&r.depth!=null){let c=Number(r.depth);c<=et.tires.minDepth?u="late":c<=et.tires.minDepth+2&&u==="ok"&&(u="soon")}return{level:u,ratio:Math.max(0,o),remainingKm:a}}function ir(r){if(r==="pneus"){let t=Li(et.truck.axles).map(e=>mi(et.tires.list[e.pos]).level).filter(e=>e!=="none");return Rs(t)}return Rs(et.maintenance.filter(t=>t.category===r).map(t=>Hn(t).level))}function Is(r){return Rs(Li(et.truck.axles).filter(t=>r.includes(t.axle)).map(t=>mi(et.tires.list[t.pos]).level).filter(t=>t!=="none"))}function Yf(r,t=et.truck.km,e=Dn(),i="",a=""){r.lastKm=Number(t),r.lastDate=e,et.history.unshift({id:zn(),itemId:r.id,name:r.name,km:Number(t),date:e,cost:i,note:a})}function rr(){let r=[...et.fuel].sort((y,M)=>y.km-M.km||y.date.localeCompare(M.date)),t=[],e=null,i=0;for(let y of r)e&&(i+=Number(y.liters)||0),y.full&&(e&&y.km>e.km&&t.push({id:y.id,date:y.date,km:y.km,dist:y.km-e.km,liters:i,l100:i/(y.km-e.km)*100}),e=y,i=0);let a=r.reduce((y,M)=>y+(Number(M.liters)||0),0),o=r.reduce((y,M)=>y+(Number(M.liters)||0)*(Number(M.price)||0),0),u=r.reduce((y,M)=>y+(Number(M.adblue)||0),0),c=t.reduce((y,M)=>y+M.dist,0),f=t.reduce((y,M)=>y+M.liters,0),d=c>0?f/c*100:null,p=r.length>1?r[r.length-1].km-r[0].km:0,m=r.filter(y=>Number(y.price)>0),v=m.length?Number(m[m.length-1].price):null;return{segments:t,avg:d,last:t.length?t[t.length-1].l100:null,totalLiters:a,totalCost:o,totalAdblue:u,dist:p,costPerKm:d!==null&&v?d/100*v:null,adbluePct:a>0?u/a*100:null,lastPrice:v}}var fc={};Or(fc,{Bluetooth:()=>bl,Calendar:()=>wl,Check:()=>Tl,ChevronRight:()=>El,Circle:()=>Ds,CircleDot:()=>Al,Clock:()=>Cl,Cog:()=>Pl,Disc3:()=>Ll,Download:()=>Rl,Droplet:()=>Il,Droplets:()=>Dl,Euro:()=>Nl,FileText:()=>Ol,Fuel:()=>Ul,Gauge:()=>kl,History:()=>Pa,House:()=>Aa,Info:()=>Fl,Layers:()=>Ca,LayoutGrid:()=>Bl,Link:()=>zl,LocateFixed:()=>Hl,Map:()=>Gl,MapPin:()=>Vl,Music:()=>Ea,Navigation:()=>Wl,Pause:()=>ql,Phone:()=>Xl,Play:()=>Zl,Plus:()=>$l,Route:()=>Yl,Search:()=>Kl,Settings:()=>jl,Settings2:()=>Jl,ShieldCheck:()=>Ql,SkipBack:()=>tc,SkipForward:()=>ec,Smartphone:()=>nc,Sparkles:()=>La,Star:()=>rc,StarOff:()=>ic,Sun:()=>sc,Trash2:()=>Ra,Truck:()=>ac,Upload:()=>oc,Wifi:()=>lc,Wrench:()=>cc,X:()=>uc});var bl=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]];var wl=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}]];var Tl=[["path",{d:"M20 6 9 17l-5-5"}]];var El=[["path",{d:"m9 18 6-6-6-6"}]];var Al=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"12",r:"10"}]];var Ds=[["circle",{cx:"12",cy:"12",r:"10"}]];var Cl=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];var Pl=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];var Ll=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]];var Rl=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];var Il=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]];var Dl=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];var Ea=[["path",{d:"M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19"}],["circle",{cx:"18",cy:"16",r:"3"}],["circle",{cx:"6",cy:"19",r:"3"}]];var Nl=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];var Ol=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];var Ul=[["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"}],["path",{d:"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"}],["path",{d:"M2 21h13"}],["path",{d:"M3 9h11"}]];var kl=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];var Aa=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];var Fl=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];var Ca=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];var Bl=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];var zl=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];var Hl=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]];var Vl=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];var Gl=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]];var Wl=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]];var ql=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];var Xl=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];var Zl=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];var $l=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];var Pa=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];var Yl=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]];var Kl=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];var Jl=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];var jl=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];var Ql=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];var tc=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"}],["path",{d:"M3 20V4"}]];var ec=[["path",{d:"M21 4v16"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"}]];var nc=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];var La=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];var ic=[["path",{d:"m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152"}],["path",{d:"m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099"}],["path",{d:"m2 2 20 20"}]];var rc=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];var sc=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];var Ra=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];var ac=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];var oc=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];var lc=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];var cc=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];var uc=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];function At(r,t=24,e=""){let a=(fc[r]||Ds).map(([o,u])=>`<${o} ${Object.entries(u).map(([c,f])=>`${c}="${f}"`).join(" ")}/>`).join("");return`<svg class="ico ${e}" xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a}</svg>`}var zt=r=>String(r!=null?r:"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function sn(r){let t=document.createElement("template");return t.innerHTML=r.trim(),t.content.firstElementChild}var Pt=(r,t=document)=>t.querySelector(r),Ia=(r,t=document)=>[...t.querySelectorAll(r)],_m=new Intl.NumberFormat("fr-FR"),ze=r=>r==null||!Number.isFinite(Number(r))?"\u2014":`${_m.format(Math.round(r))} km`,Fe=(r,t=1)=>r==null||!Number.isFinite(Number(r))?"\u2014":Number(r).toLocaleString("fr-FR",{minimumFractionDigits:t,maximumFractionDigits:t}),Os=r=>r==null||!Number.isFinite(Number(r))?"\u2014":Number(r).toLocaleString("fr-FR",{style:"currency",currency:"EUR"});function sr(r){if(!r)return"\u2014";let t=new Date(r);return Number.isNaN(t.getTime())?"\u2014":t.toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"})}function ar(r){let t=[];if(r.remainingKm!==null&&r.remainingKm!==void 0&&t.push(r.remainingKm>=0?`dans ${ze(r.remainingKm)}`:`d\xE9pass\xE9 de ${ze(-r.remainingKm)}`),r.remainingDays!==null&&r.remainingDays!==void 0){let e=r.remainingDays,i=Math.abs(e)>60?`${Math.round(Math.abs(e)/30.4)} mois`:`${Math.abs(e)} j`;t.push(e>=0?`dans ${i}`:`en retard de ${i}`)}return t.join(" \xB7 ")||"\u2014"}var or={ok:"OK",soon:"Bient\xF4t",late:"\xC0 faire",none:"Non renseign\xE9"},Ns=[];function Ze({title:r,body:t,actions:e=[],wide:i=!1,onClose:a}){let o=sn(`
    <div class="modal-backdrop">
      <div class="modal ${i?"wide":""}" role="dialog">
        <header><h2>${zt(r)}</h2><button class="icon-btn close" aria-label="Fermer">${At("X")}</button></header>
        <div class="modal-body"></div>
        <footer></footer>
      </div>
    </div>`),u=Pt(".modal-body",o);typeof t=="string"?u.innerHTML=t:t&&u.appendChild(t);let c=Pt("footer",o);e.length||c.remove();let f=()=>{o.classList.add("closing"),setTimeout(()=>o.remove(),160),Ns=Ns.filter(p=>p!==d),a&&a()};for(let p of e){let m=sn(`<button class="btn ${p.kind||""}">${p.icon?At(p.icon,20):""}<span>${zt(p.label)}</span></button>`);m.onclick=async()=>{var y;await((y=p.onClick)==null?void 0:y.call(p,u))!==!1&&f()},c.appendChild(m)}Pt(".close",o).onclick=f,o.addEventListener("pointerdown",p=>{p.target===o&&f()}),document.body.appendChild(o);let d={root:o,body:u,close:f};return Ns.push(d),d}function hc(){let r=Ns[Ns.length-1];return r?(r.close(),!0):!1}function Ri(r,t,e="Confirmer"){return new Promise(i=>{let a=!1;Ze({title:r,body:`<p class="muted">${zt(t)}</p>`,actions:[{label:"Annuler",onClick:()=>{a=!0,i(!1)}},{label:e,kind:"danger",onClick:()=>{a=!0,i(!0)}}],onClose:()=>{a||i(!1)}})})}function ni(r){return`<form class="form" onsubmit="return false">${r.map(t=>{var o;let e=`f_${t.key}`,i=t.half?"field half":"field";if(t.type==="checkbox")return`<label class="${i} check"><input type="checkbox" id="${e}" name="${t.key}" ${t.value?"checked":""}/><span>${zt(t.label)}</span></label>`;if(t.type==="select")return`<label class="${i}"><span>${zt(t.label)}</span><select id="${e}" name="${t.key}">${t.options.map(([u,c])=>`<option value="${zt(u)}" ${String(u)===String(t.value)?"selected":""}>${zt(c)}</option>`).join("")}</select></label>`;let a=t.type==="number";return`<label class="${i}"><span>${zt(t.label)}</span><input id="${e}" name="${t.key}" type="${t.type||"text"}" ${a?`inputmode="decimal" step="${t.step||"any"}"`:""} value="${zt((o=t.value)!=null?o:"")}" placeholder="${zt(t.placeholder||"")}"/>${t.hint?`<small>${zt(t.hint)}</small>`:""}</label>`}).join("")}</form>`}function ii(r,t){let e={};for(let i of t){let a=r.querySelector(`[name="${i.key}"]`);a&&(i.type==="checkbox"?e[i.key]=a.checked:i.type==="number"?e[i.key]=a.value===""?"":Number(String(a.value).replace(",",".")):e[i.key]=a.value.trim())}return e}function Ue(r,t=""){let e=sn(`<div class="toast ${t}">${zt(r)}</div>`);document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("show")),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2600)}function Da(r,t,e=550){let i=null,a=!1,o=0,u=0;r.addEventListener("pointerdown",f=>{a=!1,o=f.clientX,u=f.clientY,i=setTimeout(()=>{a=!0,t(f)},e)});let c=()=>clearTimeout(i);r.addEventListener("pointerup",c),r.addEventListener("pointerleave",c),r.addEventListener("pointermove",f=>{Math.hypot(f.clientX-o,f.clientY-u)>10&&c()}),r.addEventListener("contextmenu",f=>f.preventDefault()),r.addEventListener("click",f=>{a&&(f.stopImmediatePropagation(),f.preventDefault())},!0)}var dc=new Set,tn={last:null,watchId:null,on(r){return dc.add(r),this.last&&r(this.last),()=>dc.delete(r)},start(){!("geolocation"in navigator)||this.watchId!==null||(this.watchId=navigator.geolocation.watchPosition(r=>{let t=this.last,e=r.coords.speed;if((e==null||Number.isNaN(e))&&t){let i=(r.timestamp-t.time)/1e3;i>.5&&(e=xm(t,{lat:r.coords.latitude,lng:r.coords.longitude})/i)}this.last={lat:r.coords.latitude,lng:r.coords.longitude,speedKmh:e!=null&&!Number.isNaN(e)?Math.max(0,e*3.6):0,heading:r.coords.heading,accuracy:r.coords.accuracy,time:r.timestamp},dc.forEach(i=>i(this.last))},()=>{},{enableHighAccuracy:!0,maximumAge:1e3,timeout:2e4}))}};function xm(r,t){let i=c=>c*Math.PI/180,a=i(t.lat-r.lat),o=i(t.lng-r.lng),u=Math.sin(a/2)**2+Math.cos(i(r.lat))*Math.cos(i(t.lat))*Math.sin(o/2)**2;return 2*6371e3*Math.asin(Math.sqrt(u))}var Gu={};Or(Gu,{hide:()=>Wy,init:()=>Hy,show:()=>Gy,tickClock:()=>Vu,toast:()=>Ue});var Ii=(r,t)=>window.__go&&window.__go(r,t);function Us(){let r=[{key:"km",label:"Kilom\xE9trage actuel au compteur",type:"number",value:et.truck.km,hint:`Derni\xE8re mise \xE0 jour : ${sr(et.truck.kmDate)}`}],t=Ze({title:"Kilom\xE9trage",body:ni(r),actions:[{label:"Annuler"},{label:"Enregistrer",kind:"primary",icon:"Check",onClick:e=>{let{km:i}=ii(e,r);return i!==""&&i<et.truck.km?(Ri("Kilom\xE9trage plus bas",`Le compteur indiquait ${ze(et.truck.km)}. Remplacer quand m\xEAme par ${ze(i)} ?`,"Remplacer").then(a=>{a&&(et.truck.km=Math.round(i),et.truck.kmDate=Dn(),ye(),t.close())}),!1):Ta(i)?(ye(),Ue("Kilom\xE9trage mis \xE0 jour","ok"),!0):(Ue("Kilom\xE9trage invalide","err"),!1)}}]});setTimeout(()=>{var e;return(e=t.body.querySelector("input"))==null?void 0:e.select()},200)}function lr(r){var i,a,o,u,c;let t=r||{},e=[{key:"date",label:"Date",type:"date",value:t.date||Dn(),half:!0},{key:"km",label:"Kilom\xE9trage",type:"number",value:(i=t.km)!=null?i:et.truck.km,half:!0},{key:"liters",label:"Gasoil (litres)",type:"number",value:(a=t.liters)!=null?a:"",half:!0},{key:"price",label:"Prix au litre (\u20AC)",type:"number",value:(o=t.price)!=null?o:rr().lastPrice||"",half:!0},{key:"adblue",label:"AdBlue (litres)",type:"number",value:(u=t.adblue)!=null?u:"",half:!0},{key:"station",label:"Station",type:"text",value:t.station||"",half:!0},{key:"full",label:"Plein complet (n\xE9cessaire pour calculer la conso)",type:"checkbox",value:(c=t.full)!=null?c:!0}];Ze({title:r?"Modifier le plein":"Nouveau plein",body:ni(e),actions:[...r?[{label:"Supprimer",kind:"danger",icon:"Trash2",onClick:()=>{et.fuel=et.fuel.filter(f=>f.id!==r.id),ye(),Ue("Plein supprim\xE9")}}]:[],{label:"Annuler"},{label:"Enregistrer",kind:"primary",icon:"Check",onClick:f=>{let d=ii(f,e);if(!(d.liters>0)||!(d.km>0))return Ue("Indique au moins les litres et le kilom\xE9trage","err"),!1;r?Object.assign(r,d):et.fuel.push({id:zn(),...d}),Ta(d.km),ye();let p=rr();return Ue(p.last?`Enregistr\xE9 \u2014 derni\xE8re conso ${Fe(p.last)} L/100`:"Plein enregistr\xE9","ok"),!0}}]})}function pc(r){let t=[{key:"km",label:"Fait \xE0 (km)",type:"number",value:et.truck.km,half:!0},{key:"date",label:"Date",type:"date",value:Dn(),half:!0},{key:"cost",label:"Co\xFBt (\u20AC)",type:"number",value:"",half:!0},{key:"note",label:"Note (garage, pi\xE8ces\u2026)",type:"text",value:"",half:!0}];Ze({title:`${r.name} \u2014 fait`,body:ni(t),actions:[{label:"Annuler"},{label:"Valider",kind:"primary",icon:"Check",onClick:e=>{let i=ii(e,t);return i.km>0?(Yf(r,i.km,i.date||Dn(),i.cost,i.note),Ta(i.km),ye(),Ue("Entretien enregistr\xE9","ok"),!0):(Ue("Kilom\xE9trage invalide","err"),!1)}}]})}function Ua(r){let t=!r||!!r.__new;r&&delete r.__new;let e=r||{id:zn(),name:"",category:"moteur",everyKm:0,everyMonths:12,lastKm:et.truck.km,lastDate:Dn(),note:""},i=[{key:"name",label:"Nom",type:"text",value:e.name},{key:"category",label:"Cat\xE9gorie (carr\xE9 sur le camion)",type:"select",value:e.category,options:Object.entries(nr).filter(([a])=>a!=="pneus").map(([a,o])=>[a,o.label])},{key:"everyKm",label:"Tous les \u2026 km (0 = aucun)",type:"number",value:e.everyKm,half:!0},{key:"everyMonths",label:"Tous les \u2026 mois (0 = aucun)",type:"number",value:e.everyMonths,half:!0},{key:"lastKm",label:"Derni\xE8re fois \xE0 (km)",type:"number",value:e.lastKm,half:!0},{key:"lastDate",label:"Derni\xE8re fois le",type:"date",value:e.lastDate,half:!0},{key:"note",label:"Note (r\xE9f\xE9rence huile, filtre\u2026)",type:"text",value:e.note}];Ze({title:t?"Nouvel entretien":"Modifier l\u2019entretien",body:ni(i),actions:[...t?[]:[{label:"Supprimer",kind:"danger",icon:"Trash2",onClick:async()=>await Ri("Supprimer",`Supprimer \xAB ${e.name} \xBB ?`,"Supprimer")?(et.maintenance=et.maintenance.filter(a=>a.id!==e.id),ye(),!0):!1}],{label:"Annuler"},{label:"Enregistrer",kind:"primary",icon:"Check",onClick:a=>{let o=ii(a,i);return o.name?(o.everyKm=Number(o.everyKm)||0,o.everyMonths=Number(o.everyMonths)||0,o.lastKm=Number(o.lastKm)||0,Object.assign(e,o),t&&et.maintenance.push(e),ye(),!0):(Ue("Donne un nom","err"),!1)}}]})}function ka(r){var o,u,c;let t=Li(et.truck.axles).find(f=>f.pos===r),e=et.tires.list[r]||{},i=[{key:"brand",label:"Marque",type:"text",value:e.brand||"",half:!0,placeholder:"Michelin, Continental\u2026"},{key:"model",label:"Mod\xE8le",type:"text",value:e.model||"",half:!0},{key:"size",label:"Dimension",type:"text",value:e.size||"315/70 R22.5",half:!0},{key:"depth",label:"Profondeur sculpture (mm)",type:"number",value:(o=e.depth)!=null?o:"",half:!0},{key:"mountKm",label:"Mont\xE9 \xE0 (km)",type:"number",value:(u=e.mountKm)!=null?u:et.truck.km,half:!0},{key:"mountDate",label:"Mont\xE9 le",type:"date",value:e.mountDate||Dn(),half:!0},{key:"lifeKm",label:"Dur\xE9e de vie estim\xE9e (km)",type:"number",value:e.lifeKm||et.tires.defaultLifeKm,half:!0},{key:"pressure",label:"Pression (bar)",type:"number",value:(c=e.pressure)!=null?c:"",half:!0}],a=mi(et.tires.list[r]);Ze({title:`Pneu ${t?t.label:r}`,body:`${et.tires.list[r]?`<p class="muted" style="margin-bottom:.8rem">\xC9tat : <b class="lvl-${a.level}">${or[a.level]}</b> \u2014 ${a.remainingKm>=0?`encore ~${ze(a.remainingKm)}`:`d\xE9pass\xE9 de ${ze(-a.remainingKm)}`}</p>`:""}${ni(i)}`,actions:[...et.tires.list[r]?[{label:"Retirer",kind:"danger",icon:"Trash2",onClick:()=>{delete et.tires.list[r],ye()}}]:[],{label:"Annuler"},{label:"Enregistrer",kind:"primary",icon:"Check",onClick:f=>{let d=ii(f,i),p=et.tires.list[r];return p&&(p.mountKm!==d.mountKm||p.brand!==d.brand)&&et.history.unshift({id:zn(),itemId:`tire:${r}`,name:`Pneu ${r} : ${d.brand||""} ${d.model||""}`.trim(),km:d.mountKm,date:d.mountDate,cost:"",note:""}),et.tires.list[r]=d,ye(),!0}}]})}function Kf(r){if(r==="pneus_av"||r==="pneus_ar"){let a=r==="pneus_av"?["AV"]:["AR","AR1","AR2","SU"],o=Li(et.truck.axles).filter(c=>a.includes(c.axle)),u=Ze({title:r==="pneus_av"?"Pneus avant":"Pneus arri\xE8re",body:`<div class="list">${o.map(c=>{let f=et.tires.list[c.pos],d=mi(f);return`<button class="row-item" style="width:100%" data-pos="${c.pos}">
          <div class="ic lvl-${d.level}">${At("CircleDot")}</div>
          <div class="txt"><b>${zt(c.label)}</b><small>${f?`${zt(f.brand||"Pneu")} ${zt(f.size||"")} \xB7 mont\xE9 \xE0 ${ze(f.mountKm)}`:"Touchez pour renseigner"}</small>
          ${f?`<div class="bar ${d.level}"><i style="width:${Math.min(100,d.ratio*100)}%"></i></div>`:""}</div>
          <div class="right lvl-${d.level}">${f?d.remainingKm>=0?ze(d.remainingKm):"\xC0 changer":"\u2014"}<small>${f&&f.depth!==""&&f.depth!=null?`${Fe(f.depth)} mm`:""}</small></div>
        </button>`}).join("")}</div>`,actions:[{label:"Voir tous les pneus",icon:"ChevronRight",onClick:()=>Ii("vehicle",{tab:"pneus"})}]});u.body.querySelectorAll("[data-pos]").forEach(c=>{c.onclick=()=>{u.close(),ka(c.dataset.pos)}});return}if(r==="carburant"){let a=rr(),o=et.maintenance.filter(c=>c.category==="carburant"),u=Ze({title:"Carburant",body:`<div class="stats" style="margin-bottom:.8rem">
        <div class="stat">${At("Gauge")}<div><small>Conso moyenne</small><b>${a.avg?`${Fe(a.avg)} L/100`:"\u2014"}</b></div></div>
        <div class="stat">${At("Fuel")}<div><small>Dernier plein</small><b>${a.last?`${Fe(a.last)} L/100`:"\u2014"}</b></div></div>
        <div class="stat">${At("Euro")}<div><small>Co\xFBt au km</small><b>${a.costPerKm?`${Fe(a.costPerKm,3)} \u20AC`:"\u2014"}</b></div></div>
        <div class="stat">${At("Droplets")}<div><small>AdBlue / gasoil</small><b>${a.adbluePct?`${Fe(a.adbluePct)} %`:"\u2014"}</b></div></div>
      </div>${Na(o)}`,actions:[{label:"Historique",icon:"History",onClick:()=>Ii("vehicle",{tab:"carburant"})},{label:"Ajouter un plein",kind:"primary",icon:"Plus",onClick:()=>lr()}]});Oa(u);return}let t=nr[r],e=et.maintenance.filter(a=>a.category===r),i=Ze({title:t?t.label:"Entretien",body:e.length?Na(e):'<p class="empty">Aucun entretien dans cette cat\xE9gorie.</p>',actions:[{label:"Ajouter",icon:"Plus",onClick:()=>{Ua({id:zn(),name:"",category:r,everyKm:0,everyMonths:12,lastKm:et.truck.km,lastDate:Dn(),note:"",__new:!0})}},{label:"Tout l\u2019entretien",kind:"primary",icon:"ChevronRight",onClick:()=>Ii("vehicle",{tab:"entretien"})}]});Oa(i)}function Na(r){return`<div class="list">${r.map(t=>{var i;let e=Hn(t);return`<div class="row-item" data-item="${t.id}">
      <div class="ic lvl-${e.level}">${At(((i=nr[t.category])==null?void 0:i.icon)||"Wrench")}</div>
      <div class="txt"><b>${zt(t.name)}</b><small>Fait le ${sr(t.lastDate)} \xE0 ${ze(t.lastKm)}${t.note?` \xB7 ${zt(t.note)}`:""}</small>
        <div class="bar ${e.level}"><i style="width:${Math.min(100,e.ratio*100)}%"></i></div></div>
      <div class="right lvl-${e.level}">${zt(ar(e))}<small>${or[e.level]}</small></div>
      <button class="btn small" data-done="${t.id}">${At("Check",18)}Fait</button>
    </div>`}).join("")}</div>`}function Oa(r){let t=r.body||r;t.querySelectorAll("[data-done]").forEach(e=>{e.onclick=i=>{var o;i.stopPropagation();let a=et.maintenance.find(u=>u.id===e.dataset.done);a&&((o=r.close)==null||o.call(r),pc(a))}}),t.querySelectorAll("[data-item]").forEach(e=>{e.onclick=()=>{var a;let i=et.maintenance.find(o=>o.id===e.dataset.item);i&&((a=r.close)==null||a.call(r),Ua(i))}})}var Tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vm=0,Jf=1,ym=2;var bd=1,Mm=2,Mi=3,Wi=0,un=1,An=2,Hi=0,ns=1,ao=2,jf=3,Qf=4,Sm=5,gr=100,bm=101,wm=102,th=103,eh=104,Tm=200,Em=201,Am=202,Cm=203,$c=204,Yc=205,Pm=206,Lm=207,Rm=208,Im=209,Dm=210,Nm=211,Om=212,Um=213,km=214,Fm=0,Bm=1,zm=2,oo=3,Hm=4,Vm=5,Gm=6,Wm=7,wd=0,qm=1,Xm=2,Vi=0,Zm=1,$m=2,Ym=3,Lu=4,Km=5,Jm=6,jm=7;var Td=300,ss=301,as=302,Kc=303,Jc=304,No=306,jc=1e3,Xn=1001,Qc=1002,gn=1003,nh=1004;var ks=1005;var Sn=1006,mc=1007;var xr=1008;var Gi=1009,Qm=1010,tg=1011,Ru=1012,Ed=1013,zi=1014,Si=1015,Xs=1016,Ad=1017,Cd=1018,vr=1020,eg=1021,Zn=1023,ng=1024,ig=1025,yr=1026,os=1027,rg=1028,Pd=1029,sg=1030,Ld=1031,Rd=1033,gc=33776,_c=33777,xc=33778,vc=33779,ih=35840,rh=35841,sh=35842,ah=35843,Id=36196,oh=37492,lh=37496,ch=37808,uh=37809,fh=37810,hh=37811,dh=37812,ph=37813,mh=37814,gh=37815,_h=37816,xh=37817,vh=37818,yh=37819,Mh=37820,Sh=37821,yc=36492,bh=36494,wh=36495,ag=36283,Th=36284,Eh=36285,Ah=36286;var lo=2300,co=2301,Mc=2302,Ch=2400,Ph=2401,Lh=2402;var og=3200,lg=3201,Dd=0,cg=1,Bi="",En="srgb",qi="srgb-linear",Iu="display-p3",Oo="display-p3-linear",uo="linear",Le="srgb",fo="rec709",ho="p3";var Ur=7680;var Rh=519,ug=512,fg=513,hg=514,Nd=515,dg=516,pg=517,mg=518,gg=519,Ih=35044;var Dh="300 es",tu=1035,bi=2e3,po=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let a=this._listeners[t];if(a!==void 0){let o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=1234567,Gs=Math.PI/180,Zs=180/Math.PI;function ds(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ln(r,t,e){return Math.max(t,Math.min(e,r))}function Du(r,t){return(r%t+t)%t}function _g(r,t,e,i,a){return i+(r-t)*(a-i)/(e-t)}function xg(r,t,e){return r!==t?(e-r)/(t-r):0}function Ws(r,t,e){return(1-e)*r+e*t}function vg(r,t,e,i){return Ws(r,t,1-Math.exp(-e*i))}function yg(r,t=1){return t-Math.abs(Du(r,t*2)-t)}function Mg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Sg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function bg(r,t){return r+Math.floor(Math.random()*(t-r+1))}function wg(r,t){return r+Math.random()*(t-r)}function Tg(r){return r*(.5-Math.random())}function Eg(r){r!==void 0&&(Nh=r);let t=Nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ag(r){return r*Gs}function Cg(r){return r*Zs}function eu(r){return(r&r-1)===0&&r!==0}function Pg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lg(r,t,e,i,a){let o=Math.cos,u=Math.sin,c=o(e/2),f=u(e/2),d=o((t+i)/2),p=u((t+i)/2),m=o((t-i)/2),v=u((t-i)/2),y=o((i-t)/2),M=u((i-t)/2);switch(a){case"XYX":r.set(c*p,f*m,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*m,c*d);break;case"ZXZ":r.set(f*m,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*M,f*y,c*d);break;case"YXY":r.set(f*y,c*p,f*M,c*d);break;case"ZYZ":r.set(f*M,f*y,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function jr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Od={DEG2RAD:Gs,RAD2DEG:Zs,generateUUID:ds,clamp:ln,euclideanModulo:Du,mapLinear:_g,inverseLerp:xg,lerp:Ws,damp:vg,pingpong:yg,smoothstep:Mg,smootherstep:Sg,randInt:bg,randFloat:wg,randFloatSpread:Tg,seededRandom:Eg,degToRad:Ag,radToDeg:Cg,isPowerOfTwo:eu,ceilPowerOfTwo:Pg,floorPowerOfTwo:mo,setQuaternionFromProperEuler:Lg,normalize:pn,denormalize:jr},Xt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),a=Math.sin(e),o=this.x-t.x,u=this.y-t.y;return this.x=o*i-u*a+t.x,this.y=o*a+u*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class r{constructor(t,e,i,a,o,u,c,f,d){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,u,c,f,d)}set(t,e,i,a,o,u,c,f,d){let p=this.elements;return p[0]=t,p[1]=a,p[2]=c,p[3]=e,p[4]=o,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,a=e.elements,o=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],m=i[7],v=i[2],y=i[5],M=i[8],b=a[0],x=a[3],g=a[6],P=a[1],E=a[4],N=a[7],z=a[2],F=a[5],D=a[8];return o[0]=u*b+c*P+f*z,o[3]=u*x+c*E+f*F,o[6]=u*g+c*N+f*D,o[1]=d*b+p*P+m*z,o[4]=d*x+p*E+m*F,o[7]=d*g+p*N+m*D,o[2]=v*b+y*P+M*z,o[5]=v*x+y*E+M*F,o[8]=v*g+y*N+M*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],u=t[4],c=t[5],f=t[6],d=t[7],p=t[8];return e*u*p-e*c*d-i*o*p+i*c*f+a*o*d-a*u*f}invert(){let t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],u=t[4],c=t[5],f=t[6],d=t[7],p=t[8],m=p*u-c*d,v=c*f-p*o,y=d*o-u*f,M=e*m+i*v+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/M;return t[0]=m*b,t[1]=(a*d-p*i)*b,t[2]=(c*i-a*u)*b,t[3]=v*b,t[4]=(p*e-a*f)*b,t[5]=(a*o-c*e)*b,t[6]=y*b,t[7]=(i*f-d*e)*b,t[8]=(u*e-i*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,o,u,c){let f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*u+d*c)+u+t,-a*d,a*f,-a*(-d*u+f*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sc=new ce;function Ud(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function go(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rg(){let r=go("canvas");return r.style.display="block",r}var Oh={};function Ig(r){r in Oh||(Oh[r]=!0,console.warn(r))}var Uh=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kh=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fa={[qi]:{transfer:uo,primaries:fo,toReference:r=>r,fromReference:r=>r},[En]:{transfer:Le,primaries:fo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Oo]:{transfer:uo,primaries:ho,toReference:r=>r.applyMatrix3(kh),fromReference:r=>r.applyMatrix3(Uh)},[Iu]:{transfer:Le,primaries:ho,toReference:r=>r.convertSRGBToLinear().applyMatrix3(kh),fromReference:r=>r.applyMatrix3(Uh).convertLinearToSRGB()}},Dg=new Set([qi,Oo]),Se={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Dg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=Fa[t].toReference,a=Fa[e].fromReference;return a(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Fa[r].primaries},getTransfer:function(r){return r===Bi?uo:Fa[r].transfer}};function is(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var kr,_o=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kr===void 0&&(kr=go("canvas")),kr.width=t.width,kr.height=t.height;let i=kr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=kr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=is(o[u]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(is(e[i]/255)*255):e[i]=is(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ng=0,xo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?o.push(wc(a[u].image)):o.push(wc(a[u]))}else o=wc(a);i.url=o}return e||(t.images[this.uuid]=i),i}};function wc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_o.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Og=0,Cn=class r extends ai{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Xn,a=Xn,o=Sn,u=xr,c=Zn,f=Gi,d=r.DEFAULT_ANISOTROPY,p=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ds(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jc:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jc:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Td;Cn.DEFAULT_ANISOTROPY=1;var De=class r{constructor(t=0,e=0,i=0,a=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,a=this.z,o=this.w,u=t.elements;return this.x=u[0]*e+u[4]*i+u[8]*a+u[12]*o,this.y=u[1]*e+u[5]*i+u[9]*a+u[13]*o,this.z=u[2]*e+u[6]*i+u[10]*a+u[14]*o,this.w=u[3]*e+u[7]*i+u[11]*a+u[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,o,f=t.elements,d=f[0],p=f[4],m=f[8],v=f[1],y=f[5],M=f[9],b=f[2],x=f[6],g=f[10];if(Math.abs(p-v)<.01&&Math.abs(m-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+b)<.1&&Math.abs(M+x)<.1&&Math.abs(d+y+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(d+1)/2,N=(y+1)/2,z=(g+1)/2,F=(p+v)/4,D=(m+b)/4,$=(M+x)/4;return E>N&&E>z?E<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(E),a=F/i,o=D/i):N>z?N<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(N),i=F/a,o=$/a):z<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(z),i=D/o,a=$/o),this.set(i,a,o,e),this}let P=Math.sqrt((x-M)*(x-M)+(m-b)*(m-b)+(v-p)*(v-p));return Math.abs(P)<.001&&(P=1),this.x=(x-M)/P,this.y=(m-b)/P,this.z=(v-p)/P,this.w=Math.acos((d+y+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nu=class extends ai{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let a={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let o=new Cn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];let u=i.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wi=class extends nu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vo=class extends Cn{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var iu=class extends Cn{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,o,u,c){let f=i[a+0],d=i[a+1],p=i[a+2],m=i[a+3],v=o[u+0],y=o[u+1],M=o[u+2],b=o[u+3];if(c===0){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(c===1){t[e+0]=v,t[e+1]=y,t[e+2]=M,t[e+3]=b;return}if(m!==b||f!==v||d!==y||p!==M){let x=1-c,g=f*v+d*y+p*M+m*b,P=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){let z=Math.sqrt(E),F=Math.atan2(z,g*P);x=Math.sin(x*F)/z,c=Math.sin(c*F)/z}let N=c*P;if(f=f*x+v*N,d=d*x+y*N,p=p*x+M*N,m=m*x+b*N,x===1-c){let z=1/Math.sqrt(f*f+d*d+p*p+m*m);f*=z,d*=z,p*=z,m*=z}}t[e]=f,t[e+1]=d,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,a,o,u){let c=i[a],f=i[a+1],d=i[a+2],p=i[a+3],m=o[u],v=o[u+1],y=o[u+2],M=o[u+3];return t[e]=c*M+p*m+f*y-d*v,t[e+1]=f*M+p*v+d*m-c*y,t[e+2]=d*M+p*y+c*v-f*m,t[e+3]=p*M-c*m-f*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,a=t._y,o=t._z,u=t._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(a/2),m=c(o/2),v=f(i/2),y=f(a/2),M=f(o/2);switch(u){case"XYZ":this._x=v*p*m+d*y*M,this._y=d*y*m-v*p*M,this._z=d*p*M+v*y*m,this._w=d*p*m-v*y*M;break;case"YXZ":this._x=v*p*m+d*y*M,this._y=d*y*m-v*p*M,this._z=d*p*M-v*y*m,this._w=d*p*m+v*y*M;break;case"ZXY":this._x=v*p*m-d*y*M,this._y=d*y*m+v*p*M,this._z=d*p*M+v*y*m,this._w=d*p*m-v*y*M;break;case"ZYX":this._x=v*p*m-d*y*M,this._y=d*y*m+v*p*M,this._z=d*p*M-v*y*m,this._w=d*p*m+v*y*M;break;case"YZX":this._x=v*p*m+d*y*M,this._y=d*y*m+v*p*M,this._z=d*p*M-v*y*m,this._w=d*p*m-v*y*M;break;case"XZY":this._x=v*p*m-d*y*M,this._y=d*y*m-v*p*M,this._z=d*p*M+v*y*m,this._w=d*p*m+v*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],a=e[4],o=e[8],u=e[1],c=e[5],f=e[9],d=e[2],p=e[6],m=e[10],v=i+c+m;if(v>0){let y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-f)*y,this._y=(o-d)*y,this._z=(u-a)*y}else if(i>c&&i>m){let y=2*Math.sqrt(1+i-c-m);this._w=(p-f)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(o+d)/y}else if(c>m){let y=2*Math.sqrt(1+c-i-m);this._w=(o-d)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(f+p)/y}else{let y=2*Math.sqrt(1+m-i-c);this._w=(u-a)/y,this._x=(o+d)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ln(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,a=t._y,o=t._z,u=t._w,c=e._x,f=e._y,d=e._z,p=e._w;return this._x=i*p+u*c+a*d-o*f,this._y=a*p+u*f+o*c-i*d,this._z=o*p+u*d+i*f-a*c,this._w=u*p-i*c-a*f-o*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,a=this._y,o=this._z,u=this._w,c=u*t._w+i*t._x+a*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=u,this._x=i,this._y=a,this._z=o,this;let f=1-c*c;if(f<=Number.EPSILON){let y=1-e;return this._w=y*u+e*this._w,this._x=y*i+e*this._x,this._y=y*a+e*this._y,this._z=y*o+e*this._z,this.normalize(),this}let d=Math.sqrt(f),p=Math.atan2(d,c),m=Math.sin((1-e)*p)/d,v=Math.sin(e*p)/d;return this._w=u*m+this._w*v,this._x=i*m+this._x*v,this._y=a*m+this._y*v,this._z=o*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*a,this.y=o[1]*e+o[4]*i+o[7]*a,this.z=o[2]*e+o[5]*i+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,a=this.z,o=t.elements,u=1/(o[3]*e+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*a+o[12])*u,this.y=(o[1]*e+o[5]*i+o[9]*a+o[13])*u,this.z=(o[2]*e+o[6]*i+o[10]*a+o[14])*u,this}applyQuaternion(t){let e=this.x,i=this.y,a=this.z,o=t.x,u=t.y,c=t.z,f=t.w,d=2*(u*a-c*i),p=2*(c*e-o*a),m=2*(o*i-u*e);return this.x=e+f*d+u*m-c*p,this.y=i+f*p+c*d-o*m,this.z=a+f*m+o*p-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*a,this.y=o[1]*e+o[5]*i+o[9]*a,this.z=o[2]*e+o[6]*i+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,a=t.y,o=t.z,u=e.x,c=e.y,f=e.z;return this.x=a*f-o*c,this.y=o*u-i*f,this.z=i*c-a*u,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Tc.copy(this).projectOnVector(t),this.sub(Tc)}reflect(t){return this.sub(Tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tc=new B,Fh=new $n,Mr=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)t.isMesh===!0?t.getVertexPosition(u,Vn):Vn.fromBufferAttribute(o,u),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ba.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(t.matrixWorld),this.union(Ba)}let a=t.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),za.subVectors(this.max,Fs),Fr.subVectors(t.a,Fs),Br.subVectors(t.b,Fs),zr.subVectors(t.c,Fs),Di.subVectors(Br,Fr),Ni.subVectors(zr,Br),cr.subVectors(Fr,zr);let e=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-cr.z,cr.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,cr.z,0,-cr.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-cr.y,cr.x,0];return!Ec(e,Fr,Br,zr,za)||(e=[1,0,0,0,1,0,0,0,1],!Ec(e,Fr,Br,zr,za))?!1:(Ha.crossVectors(Di,Ni),e=[Ha.x,Ha.y,Ha.z],Ec(e,Fr,Br,zr,za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gi=[new B,new B,new B,new B,new B,new B,new B,new B],Vn=new B,Ba=new Mr,Fr=new B,Br=new B,zr=new B,Di=new B,Ni=new B,cr=new B,Fs=new B,za=new B,Ha=new B,ur=new B;function Ec(r,t,e,i,a){for(let o=0,u=r.length-3;o<=u;o+=3){ur.fromArray(r,o);let c=a.x*Math.abs(ur.x)+a.y*Math.abs(ur.y)+a.z*Math.abs(ur.z),f=t.dot(ur),d=e.dot(ur),p=i.dot(ur);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}var Ug=new Mr,Bs=new B,Ac=new B,$s=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ug.setFromPoints(t).getCenter(i);let a=0;for(let o=0,u=t.length;o<u;o++)a=Math.max(a,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(Bs,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Ac)),this.expandByPoint(Bs.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new B,Cc=new B,Va=new B,Oi=new B,Pc=new B,Ga=new B,Lc=new B,Ys=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){Cc.copy(t).add(e).multiplyScalar(.5),Va.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(Cc);let o=t.distanceTo(e)*.5,u=-this.direction.dot(Va),c=Oi.dot(this.direction),f=-Oi.dot(Va),d=Oi.lengthSq(),p=Math.abs(1-u*u),m,v,y,M;if(p>0)if(m=u*f-c,v=u*c-f,M=o*p,m>=0)if(v>=-M)if(v<=M){let b=1/p;m*=b,v*=b,y=m*(m+u*v+2*c)+v*(u*m+v+2*f)+d}else v=o,m=Math.max(0,-(u*v+c)),y=-m*m+v*(v+2*f)+d;else v=-o,m=Math.max(0,-(u*v+c)),y=-m*m+v*(v+2*f)+d;else v<=-M?(m=Math.max(0,-(-u*o+c)),v=m>0?-o:Math.min(Math.max(-o,-f),o),y=-m*m+v*(v+2*f)+d):v<=M?(m=0,v=Math.min(Math.max(-o,-f),o),y=v*(v+2*f)+d):(m=Math.max(0,-(u*o+c)),v=m>0?o:Math.min(Math.max(-o,-f),o),y=-m*m+v*(v+2*f)+d);else v=u>0?-o:o,m=Math.max(0,-(u*v+c)),y=-m*m+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(Cc).addScaledVector(Va,v),y}intersectSphere(t,e){_i.subVectors(t.center,this.origin);let i=_i.dot(this.direction),a=_i.dot(_i)-i*i,o=t.radius*t.radius;if(a>o)return null;let u=Math.sqrt(o-a),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,o,u,c,f,d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return d>=0?(i=(t.min.x-v.x)*d,a=(t.max.x-v.x)*d):(i=(t.max.x-v.x)*d,a=(t.min.x-v.x)*d),p>=0?(o=(t.min.y-v.y)*p,u=(t.max.y-v.y)*p):(o=(t.max.y-v.y)*p,u=(t.min.y-v.y)*p),i>u||o>a||((o>i||isNaN(i))&&(i=o),(u<a||isNaN(a))&&(a=u),m>=0?(c=(t.min.z-v.z)*m,f=(t.max.z-v.z)*m):(c=(t.max.z-v.z)*m,f=(t.min.z-v.z)*m),i>f||c>a)||((c>i||i!==i)&&(i=c),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,i,a,o){Pc.subVectors(e,t),Ga.subVectors(i,t),Lc.crossVectors(Pc,Ga);let u=this.direction.dot(Lc),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Oi.subVectors(this.origin,t);let f=c*this.direction.dot(Ga.crossVectors(Oi,Ga));if(f<0)return null;let d=c*this.direction.dot(Pc.cross(Oi));if(d<0||f+d>u)return null;let p=-c*Oi.dot(Lc);return p<0?null:this.at(p/u,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class r{constructor(t,e,i,a,o,u,c,f,d,p,m,v,y,M,b,x){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,u,c,f,d,p,m,v,y,M,b,x)}set(t,e,i,a,o,u,c,f,d,p,m,v,y,M,b,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=a,g[1]=o,g[5]=u,g[9]=c,g[13]=f,g[2]=d,g[6]=p,g[10]=m,g[14]=v,g[3]=y,g[7]=M,g[11]=b,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,a=1/Hr.setFromMatrixColumn(t,0).length(),o=1/Hr.setFromMatrixColumn(t,1).length(),u=1/Hr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*u,e[9]=i[9]*u,e[10]=i[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,a=t.y,o=t.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(a),d=Math.sin(a),p=Math.cos(o),m=Math.sin(o);if(t.order==="XYZ"){let v=u*p,y=u*m,M=c*p,b=c*m;e[0]=f*p,e[4]=-f*m,e[8]=d,e[1]=y+M*d,e[5]=v-b*d,e[9]=-c*f,e[2]=b-v*d,e[6]=M+y*d,e[10]=u*f}else if(t.order==="YXZ"){let v=f*p,y=f*m,M=d*p,b=d*m;e[0]=v+b*c,e[4]=M*c-y,e[8]=u*d,e[1]=u*m,e[5]=u*p,e[9]=-c,e[2]=y*c-M,e[6]=b+v*c,e[10]=u*f}else if(t.order==="ZXY"){let v=f*p,y=f*m,M=d*p,b=d*m;e[0]=v-b*c,e[4]=-u*m,e[8]=M+y*c,e[1]=y+M*c,e[5]=u*p,e[9]=b-v*c,e[2]=-u*d,e[6]=c,e[10]=u*f}else if(t.order==="ZYX"){let v=u*p,y=u*m,M=c*p,b=c*m;e[0]=f*p,e[4]=M*d-y,e[8]=v*d+b,e[1]=f*m,e[5]=b*d+v,e[9]=y*d-M,e[2]=-d,e[6]=c*f,e[10]=u*f}else if(t.order==="YZX"){let v=u*f,y=u*d,M=c*f,b=c*d;e[0]=f*p,e[4]=b-v*m,e[8]=M*m+y,e[1]=m,e[5]=u*p,e[9]=-c*p,e[2]=-d*p,e[6]=y*m+M,e[10]=v-b*m}else if(t.order==="XZY"){let v=u*f,y=u*d,M=c*f,b=c*d;e[0]=f*p,e[4]=-m,e[8]=d*p,e[1]=v*m+b,e[5]=u*p,e[9]=y*m-M,e[2]=M*m-y,e[6]=c*p,e[10]=b*m+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kg,t,Fg)}lookAt(t,e,i){let a=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ui.crossVectors(i,wn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ui.crossVectors(i,wn)),Ui.normalize(),Wa.crossVectors(wn,Ui),a[0]=Ui.x,a[4]=Wa.x,a[8]=wn.x,a[1]=Ui.y,a[5]=Wa.y,a[9]=wn.y,a[2]=Ui.z,a[6]=Wa.z,a[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,a=e.elements,o=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],m=i[5],v=i[9],y=i[13],M=i[2],b=i[6],x=i[10],g=i[14],P=i[3],E=i[7],N=i[11],z=i[15],F=a[0],D=a[4],$=a[8],nt=a[12],T=a[1],I=a[5],st=a[9],ct=a[13],k=a[2],rt=a[6],H=a[10],at=a[14],W=a[3],Q=a[7],Y=a[11],ut=a[15];return o[0]=u*F+c*T+f*k+d*W,o[4]=u*D+c*I+f*rt+d*Q,o[8]=u*$+c*st+f*H+d*Y,o[12]=u*nt+c*ct+f*at+d*ut,o[1]=p*F+m*T+v*k+y*W,o[5]=p*D+m*I+v*rt+y*Q,o[9]=p*$+m*st+v*H+y*Y,o[13]=p*nt+m*ct+v*at+y*ut,o[2]=M*F+b*T+x*k+g*W,o[6]=M*D+b*I+x*rt+g*Q,o[10]=M*$+b*st+x*H+g*Y,o[14]=M*nt+b*ct+x*at+g*ut,o[3]=P*F+E*T+N*k+z*W,o[7]=P*D+E*I+N*rt+z*Q,o[11]=P*$+E*st+N*H+z*Y,o[15]=P*nt+E*ct+N*at+z*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],a=t[8],o=t[12],u=t[1],c=t[5],f=t[9],d=t[13],p=t[2],m=t[6],v=t[10],y=t[14],M=t[3],b=t[7],x=t[11],g=t[15];return M*(+o*f*m-a*d*m-o*c*v+i*d*v+a*c*y-i*f*y)+b*(+e*f*y-e*d*v+o*u*v-a*u*y+a*d*p-o*f*p)+x*(+e*d*m-e*c*y-o*u*m+i*u*y+o*c*p-i*d*p)+g*(-a*c*p-e*f*m+e*c*v+a*u*m-i*u*v+i*f*p)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],u=t[4],c=t[5],f=t[6],d=t[7],p=t[8],m=t[9],v=t[10],y=t[11],M=t[12],b=t[13],x=t[14],g=t[15],P=m*x*d-b*v*d+b*f*y-c*x*y-m*f*g+c*v*g,E=M*v*d-p*x*d-M*f*y+u*x*y+p*f*g-u*v*g,N=p*b*d-M*m*d+M*c*y-u*b*y-p*c*g+u*m*g,z=M*m*f-p*b*f-M*c*v+u*b*v+p*c*x-u*m*x,F=e*P+i*E+a*N+o*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/F;return t[0]=P*D,t[1]=(b*v*o-m*x*o-b*a*y+i*x*y+m*a*g-i*v*g)*D,t[2]=(c*x*o-b*f*o+b*a*d-i*x*d-c*a*g+i*f*g)*D,t[3]=(m*f*o-c*v*o-m*a*d+i*v*d+c*a*y-i*f*y)*D,t[4]=E*D,t[5]=(p*x*o-M*v*o+M*a*y-e*x*y-p*a*g+e*v*g)*D,t[6]=(M*f*o-u*x*o-M*a*d+e*x*d+u*a*g-e*f*g)*D,t[7]=(u*v*o-p*f*o+p*a*d-e*v*d-u*a*y+e*f*y)*D,t[8]=N*D,t[9]=(M*m*o-p*b*o-M*i*y+e*b*y+p*i*g-e*m*g)*D,t[10]=(u*b*o-M*c*o+M*i*d-e*b*d-u*i*g+e*c*g)*D,t[11]=(p*c*o-u*m*o-p*i*d+e*m*d+u*i*y-e*c*y)*D,t[12]=z*D,t[13]=(p*b*a-M*m*a+M*i*v-e*b*v-p*i*x+e*m*x)*D,t[14]=(M*c*a-u*b*a-M*i*f+e*b*f+u*i*x-e*c*x)*D,t[15]=(u*m*a-p*c*a+p*i*f-e*m*f-u*i*v+e*c*v)*D,this}scale(t){let e=this.elements,i=t.x,a=t.y,o=t.z;return e[0]*=i,e[4]*=a,e[8]*=o,e[1]*=i,e[5]*=a,e[9]*=o,e[2]*=i,e[6]*=a,e[10]*=o,e[3]*=i,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),a=Math.sin(e),o=1-i,u=t.x,c=t.y,f=t.z,d=o*u,p=o*c;return this.set(d*u+i,d*c-a*f,d*f+a*c,0,d*c+a*f,p*c+i,p*f-a*u,0,d*f-a*c,p*f+a*u,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,o,u){return this.set(1,i,o,0,t,1,u,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){let a=this.elements,o=e._x,u=e._y,c=e._z,f=e._w,d=o+o,p=u+u,m=c+c,v=o*d,y=o*p,M=o*m,b=u*p,x=u*m,g=c*m,P=f*d,E=f*p,N=f*m,z=i.x,F=i.y,D=i.z;return a[0]=(1-(b+g))*z,a[1]=(y+N)*z,a[2]=(M-E)*z,a[3]=0,a[4]=(y-N)*F,a[5]=(1-(v+g))*F,a[6]=(x+P)*F,a[7]=0,a[8]=(M+E)*D,a[9]=(x-P)*D,a[10]=(1-(v+b))*D,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){let a=this.elements,o=Hr.set(a[0],a[1],a[2]).length(),u=Hr.set(a[4],a[5],a[6]).length(),c=Hr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],Gn.copy(this);let d=1/o,p=1/u,m=1/c;return Gn.elements[0]*=d,Gn.elements[1]*=d,Gn.elements[2]*=d,Gn.elements[4]*=p,Gn.elements[5]*=p,Gn.elements[6]*=p,Gn.elements[8]*=m,Gn.elements[9]*=m,Gn.elements[10]*=m,e.setFromRotationMatrix(Gn),i.x=o,i.y=u,i.z=c,this}makePerspective(t,e,i,a,o,u,c=bi){let f=this.elements,d=2*o/(e-t),p=2*o/(i-a),m=(e+t)/(e-t),v=(i+a)/(i-a),y,M;if(c===bi)y=-(u+o)/(u-o),M=-2*u*o/(u-o);else if(c===po)y=-u/(u-o),M=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,a,o,u,c=bi){let f=this.elements,d=1/(e-t),p=1/(i-a),m=1/(u-o),v=(e+t)*d,y=(i+a)*p,M,b;if(c===bi)M=(u+o)*m,b=-2*m;else if(c===po)M=o*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=b,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Hr=new B,Gn=new He,kg=new B(0,0,0),Fg=new B(1,1,1),Ui=new B,Wa=new B,wn=new B,Bh=new He,zh=new $n,oi=class r{constructor(t=0,e=0,i=0,a=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let a=t.elements,o=a[0],u=a[4],c=a[8],f=a[1],d=a[5],p=a[9],m=a[2],v=a[6],y=a[10];switch(e){case"XYZ":this._y=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(ln(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-ln(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var yo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bg=0,Hh=new B,Vr=new $n,xi=new He,qa=new B,zs=new B,zg=new B,Hg=new $n,Vh=new B(1,0,0),Gh=new B(0,1,0),Wh=new B(0,0,1),Vg={type:"added"},Gg={type:"removed"},Rc={type:"childadded",child:null},Ic={type:"childremoved",child:null},_n=class r extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new B,e=new oi,i=new $n,a=new B(1,1,1);function o(){i.setFromEuler(e,!1)}function u(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new He},normalMatrix:{value:new ce}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vr.setFromAxisAngle(t,e),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(t,e){return Vr.setFromAxisAngle(t,e),this.quaternion.premultiply(Vr),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Wh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qa.copy(t):qa.set(t,e,i);let a=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(zs,qa,this.up):xi.lookAt(qa,zs,this.up),this.quaternion.setFromRotationMatrix(xi),a&&(xi.extractRotation(a.matrixWorld),Vr.setFromRotationMatrix(xi),this.quaternion.premultiply(Vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vg),Rc.child=t,this.dispatchEvent(Rc),Rc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gg),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){let u=this.children[i].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,zg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Hg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,a=e.length;i<a;i++){let o=e[i];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let a=this.children;for(let o=0,u=a.length;o<u;o++){let c=a[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){let m=f[d];o(t.shapes,m)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(o(t.materials,this.material[f]));a.material=c}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){let f=this.animations[c];a.animations.push(o(t.animations,f))}}if(e){let c=u(t.geometries),f=u(t.materials),d=u(t.textures),p=u(t.images),m=u(t.shapes),v=u(t.skeletons),y=u(t.animations),M=u(t.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=a,i;function u(c){let f=[];for(let d in c){let p=c[d];delete p.metadata,f.push(p)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};_n.DEFAULT_UP=new B(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new B,vi=new B,Dc=new B,yi=new B,Gr=new B,Wr=new B,qh=new B,Nc=new B,Oc=new B,Uc=new B,Qr=class r{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),Wn.subVectors(t,e),a.cross(Wn);let o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,i,a,o){Wn.subVectors(a,e),vi.subVectors(i,e),Dc.subVectors(t,e);let u=Wn.dot(Wn),c=Wn.dot(vi),f=Wn.dot(Dc),d=vi.dot(vi),p=vi.dot(Dc),m=u*d-c*c;if(m===0)return o.set(0,0,0),null;let v=1/m,y=(d*f-c*p)*v,M=(u*p-c*f)*v;return o.set(1-y-M,M,y)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,i,a,o,u,c,f){return this.getBarycoord(t,e,i,a,yi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,yi.x),f.addScaledVector(u,yi.y),f.addScaledVector(c,yi.z),f)}static isFrontFacing(t,e,i,a){return Wn.subVectors(i,e),vi.subVectors(t,e),Wn.cross(vi).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Wn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,o){return r.getInterpolation(t,this.a,this.b,this.c,e,i,a,o)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,a=this.b,o=this.c,u,c;Gr.subVectors(a,i),Wr.subVectors(o,i),Nc.subVectors(t,i);let f=Gr.dot(Nc),d=Wr.dot(Nc);if(f<=0&&d<=0)return e.copy(i);Oc.subVectors(t,a);let p=Gr.dot(Oc),m=Wr.dot(Oc);if(p>=0&&m<=p)return e.copy(a);let v=f*m-p*d;if(v<=0&&f>=0&&p<=0)return u=f/(f-p),e.copy(i).addScaledVector(Gr,u);Uc.subVectors(t,o);let y=Gr.dot(Uc),M=Wr.dot(Uc);if(M>=0&&y<=M)return e.copy(o);let b=y*d-f*M;if(b<=0&&d>=0&&M<=0)return c=d/(d-M),e.copy(i).addScaledVector(Wr,c);let x=p*M-y*m;if(x<=0&&m-p>=0&&y-M>=0)return qh.subVectors(o,a),c=(m-p)/(m-p+(y-M)),e.copy(a).addScaledVector(qh,c);let g=1/(x+b+v);return u=b*g,c=v*g,e.copy(i).addScaledVector(Gr,u).addScaledVector(Wr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function kc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var pe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,a=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.toWorkingColorSpace(this,a),this}setHSL(t,e,i,a=Se.workingColorSpace){if(t=Du(t,1),e=ln(e,0,1),i=ln(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,u=2*i-o;this.r=kc(u,o,t+1/3),this.g=kc(u,o,t),this.b=kc(u,o,t-1/3)}return Se.toWorkingColorSpace(this,a),this}setStyle(t,e=En){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let i=kd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=bc(t.r),this.g=bc(t.g),this.b=bc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Se.fromWorkingColorSpace(on.copy(this),t),Math.round(ln(on.r*255,0,255))*65536+Math.round(ln(on.g*255,0,255))*256+Math.round(ln(on.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(on.copy(this),e);let i=on.r,a=on.g,o=on.b,u=Math.max(i,a,o),c=Math.min(i,a,o),f,d,p=(c+u)/2;if(c===u)f=0,d=0;else{let m=u-c;switch(d=p<=.5?m/(u+c):m/(2-u-c),u){case i:f=(a-o)/m+(a<o?6:0);break;case a:f=(o-i)/m+2;break;case o:f=(i-a)/m+4;break}f/=6}return t.h=f,t.s=d,t.l=p,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=En){Se.fromWorkingColorSpace(on.copy(this),t);let e=on.r,i=on.g,a=on.b;return t!==En?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Xa);let i=Ws(ki.h,Xa.h,e),a=Ws(ki.s,Xa.s,e),o=Ws(ki.l,Xa.l,e);return this.setHSL(i,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*a,this.g=o[1]*e+o[4]*i+o[7]*a,this.b=o[2]*e+o[5]*i+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new pe;pe.NAMES=kd;var Wg=0,Sr=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=ns,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Yc,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$c&&(i.blendSrc=this.blendSrc),this.blendDst!==Yc&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){let u=[];for(let c in o){let f=o[c];delete f.metadata,u.push(f)}return u}if(e){let o=a(t.textures),u=a(t.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let a=e.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},li=class extends Sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new B,Za=new Xt,Un=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ig("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Za.fromBufferAttribute(this,e),Za.applyMatrix3(t),this.setXY(e,Za.x,Za.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=jr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array),a=pn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,o){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array),a=pn(a,this.array),o=pn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}};var Mo=class extends Un{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var So=class extends Un{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ve=class extends Un{constructor(t,e,i){super(new Float32Array(t),e,i)}},qg=0,On=new He,Fc=new _n,qr=new B,Tn=new Mr,Hs=new Mr,je=new B,Yn=class r extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?So:Mo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new ce().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,i){return On.makeTranslation(t,e,i),this.applyMatrix4(On),this}scale(t,e,i){return On.makeScale(t,e,i),this.applyMatrix4(On),this}lookAt(t){return Fc.lookAt(t),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(t){let e=[];for(let i=0,a=t.length;i<a;i++){let o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){let o=e[i];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let o=0,u=e.length;o<u;o++){let c=e[o];Hs.setFromBufferAttribute(c),this.morphTargetsRelative?(je.addVectors(Tn.min,Hs.min),Tn.expandByPoint(je),je.addVectors(Tn.max,Hs.max),Tn.expandByPoint(je)):(Tn.expandByPoint(Hs.min),Tn.expandByPoint(Hs.max))}Tn.getCenter(i);let a=0;for(let o=0,u=t.count;o<u;o++)je.fromBufferAttribute(t,o),a=Math.max(a,i.distanceToSquared(je));if(e)for(let o=0,u=e.length;o<u;o++){let c=e[o],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)je.fromBufferAttribute(c,d),f&&(qr.fromBufferAttribute(t,d),je.add(qr)),a=Math.max(a,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));let u=this.getAttribute("tangent"),c=[],f=[];for(let $=0;$<i.count;$++)c[$]=new B,f[$]=new B;let d=new B,p=new B,m=new B,v=new Xt,y=new Xt,M=new Xt,b=new B,x=new B;function g($,nt,T){d.fromBufferAttribute(i,$),p.fromBufferAttribute(i,nt),m.fromBufferAttribute(i,T),v.fromBufferAttribute(o,$),y.fromBufferAttribute(o,nt),M.fromBufferAttribute(o,T),p.sub(d),m.sub(d),y.sub(v),M.sub(v);let I=1/(y.x*M.y-M.x*y.y);isFinite(I)&&(b.copy(p).multiplyScalar(M.y).addScaledVector(m,-y.y).multiplyScalar(I),x.copy(m).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(I),c[$].add(b),c[nt].add(b),c[T].add(b),f[$].add(x),f[nt].add(x),f[T].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let $=0,nt=P.length;$<nt;++$){let T=P[$],I=T.start,st=T.count;for(let ct=I,k=I+st;ct<k;ct+=3)g(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}let E=new B,N=new B,z=new B,F=new B;function D($){z.fromBufferAttribute(a,$),F.copy(z);let nt=c[$];E.copy(nt),E.sub(z.multiplyScalar(z.dot(nt))).normalize(),N.crossVectors(F,nt);let I=N.dot(f[$])<0?-1:1;u.setXYZW($,E.x,E.y,E.z,I)}for(let $=0,nt=P.length;$<nt;++$){let T=P[$],I=T.start,st=T.count;for(let ct=I,k=I+st;ct<k;ct+=3)D(t.getX(ct+0)),D(t.getX(ct+1)),D(t.getX(ct+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);let a=new B,o=new B,u=new B,c=new B,f=new B,d=new B,p=new B,m=new B;if(t)for(let v=0,y=t.count;v<y;v+=3){let M=t.getX(v+0),b=t.getX(v+1),x=t.getX(v+2);a.fromBufferAttribute(e,M),o.fromBufferAttribute(e,b),u.fromBufferAttribute(e,x),p.subVectors(u,o),m.subVectors(a,o),p.cross(m),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),c.add(p),f.add(p),d.add(p),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let v=0,y=e.count;v<y;v+=3)a.fromBufferAttribute(e,v+0),o.fromBufferAttribute(e,v+1),u.fromBufferAttribute(e,v+2),p.subVectors(u,o),m.subVectors(a,o),p.cross(m),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(c,f){let d=c.array,p=c.itemSize,m=c.normalized,v=new d.constructor(f.length*p),y=0,M=0;for(let b=0,x=f.length;b<x;b++){c.isInterleavedBufferAttribute?y=f[b]*c.data.stride+c.offset:y=f[b]*p;for(let g=0;g<p;g++)v[M++]=d[y++]}return new Un(v,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,a=this.attributes;for(let c in a){let f=a[c],d=t(f,i);e.setAttribute(c,d)}let o=this.morphAttributes;for(let c in o){let f=[],d=o[c];for(let p=0,m=d.length;p<m;p++){let v=d[p],y=t(v,i);f.push(y)}e.morphAttributes[c]=f}e.morphTargetsRelative=this.morphTargetsRelative;let u=this.groups;for(let c=0,f=u.length;c<f;c++){let d=u[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let a={},o=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],p=[];for(let m=0,v=d.length;m<v;m++){let y=d[m];p.push(y.toJSON(t.data))}p.length>0&&(a[f]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let a=t.attributes;for(let d in a){let p=a[d];this.setAttribute(d,p.clone(e))}let o=t.morphAttributes;for(let d in o){let p=[],m=o[d];for(let v=0,y=m.length;v<y;v++)p.push(m[v].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;let u=t.groups;for(let d=0,p=u.length;d<p;d++){let m=u[d];this.addGroup(m.start,m.count,m.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xh=new He,fr=new Ys,$a=new $s,Zh=new B,Xr=new B,Zr=new B,$r=new B,Bc=new B,Ya=new B,Ka=new Xt,Ja=new Xt,ja=new Xt,$h=new B,Yh=new B,Kh=new B,Qa=new B,to=new B,ae=class extends _n{constructor(t=new Yn,e=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){let c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){let i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;e.fromBufferAttribute(a,t);let c=this.morphTargetInfluences;if(o&&c){Ya.set(0,0,0);for(let f=0,d=o.length;f<d;f++){let p=c[f],m=o[f];p!==0&&(Bc.fromBufferAttribute(m,t),u?Ya.addScaledVector(Bc,p):Ya.addScaledVector(Bc.sub(e),p))}e.add(Ya)}return e}raycast(t,e){let i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(o),fr.copy(t.ray).recast(t.near),!($a.containsPoint(fr.origin)===!1&&(fr.intersectSphere($a,Zh)===null||fr.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&(Xh.copy(o).invert(),fr.copy(t.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,i){let a,o=this.geometry,u=this.material,c=o.index,f=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,v=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){let x=v[M],g=u[x.materialIndex],P=Math.max(x.start,y.start),E=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let N=P,z=E;N<z;N+=3){let F=c.getX(N),D=c.getX(N+1),$=c.getX(N+2);a=eo(this,g,t,i,d,p,m,F,D,$),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{let M=Math.max(0,y.start),b=Math.min(c.count,y.start+y.count);for(let x=M,g=b;x<g;x+=3){let P=c.getX(x),E=c.getX(x+1),N=c.getX(x+2);a=eo(this,u,t,i,d,p,m,P,E,N),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){let x=v[M],g=u[x.materialIndex],P=Math.max(x.start,y.start),E=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let N=P,z=E;N<z;N+=3){let F=N,D=N+1,$=N+2;a=eo(this,g,t,i,d,p,m,F,D,$),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{let M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let x=M,g=b;x<g;x+=3){let P=x,E=x+1,N=x+2;a=eo(this,u,t,i,d,p,m,P,E,N),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}}};function Xg(r,t,e,i,a,o,u,c){let f;if(t.side===un?f=i.intersectTriangle(u,o,a,!0,c):f=i.intersectTriangle(a,o,u,t.side===Wi,c),f===null)return null;to.copy(c),to.applyMatrix4(r.matrixWorld);let d=e.ray.origin.distanceTo(to);return d<e.near||d>e.far?null:{distance:d,point:to.clone(),object:r}}function eo(r,t,e,i,a,o,u,c,f,d){r.getVertexPosition(c,Xr),r.getVertexPosition(f,Zr),r.getVertexPosition(d,$r);let p=Xg(r,t,e,i,Xr,Zr,$r,Qa);if(p){a&&(Ka.fromBufferAttribute(a,c),Ja.fromBufferAttribute(a,f),ja.fromBufferAttribute(a,d),p.uv=Qr.getInterpolation(Qa,Xr,Zr,$r,Ka,Ja,ja,new Xt)),o&&(Ka.fromBufferAttribute(o,c),Ja.fromBufferAttribute(o,f),ja.fromBufferAttribute(o,d),p.uv1=Qr.getInterpolation(Qa,Xr,Zr,$r,Ka,Ja,ja,new Xt)),u&&($h.fromBufferAttribute(u,c),Yh.fromBufferAttribute(u,f),Kh.fromBufferAttribute(u,d),p.normal=Qr.getInterpolation(Qa,Xr,Zr,$r,$h,Yh,Kh,new B),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let m={a:c,b:f,c:d,normal:new B,materialIndex:0};Qr.getNormal(Xr,Zr,$r,m.normal),p.face=m}return p}var Kn=class r extends Yn{constructor(t=1,e=1,i=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:o,depthSegments:u};let c=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);let f=[],d=[],p=[],m=[],v=0,y=0;M("z","y","x",-1,-1,i,e,t,u,o,0),M("z","y","x",1,-1,i,e,-t,u,o,1),M("x","z","y",1,1,t,i,e,a,u,2),M("x","z","y",1,-1,t,i,-e,a,u,3),M("x","y","z",1,-1,t,e,i,a,o,4),M("x","y","z",-1,-1,t,e,-i,a,o,5),this.setIndex(f),this.setAttribute("position",new Ve(d,3)),this.setAttribute("normal",new Ve(p,3)),this.setAttribute("uv",new Ve(m,2));function M(b,x,g,P,E,N,z,F,D,$,nt){let T=N/D,I=z/$,st=N/2,ct=z/2,k=F/2,rt=D+1,H=$+1,at=0,W=0,Q=new B;for(let Y=0;Y<H;Y++){let ut=Y*I-ct;for(let pt=0;pt<rt;pt++){let vt=pt*T-st;Q[b]=vt*P,Q[x]=ut*E,Q[g]=k,d.push(Q.x,Q.y,Q.z),Q[b]=0,Q[x]=0,Q[g]=F>0?1:-1,p.push(Q.x,Q.y,Q.z),m.push(pt/D),m.push(1-Y/$),at+=1}}for(let Y=0;Y<$;Y++)for(let ut=0;ut<D;ut++){let pt=v+ut+rt*Y,vt=v+ut+rt*(Y+1),V=v+(ut+1)+rt*(Y+1),ft=v+(ut+1)+rt*Y;f.push(pt,vt,ft),f.push(vt,V,ft),W+=6}c.addGroup(y,W,nt),y+=W,v+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ls(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let a=r[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function mn(r){let t={};for(let e=0;e<r.length;e++){let i=ls(r[e]);for(let a in i)t[a]=i[a]}return t}function Zg(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Fd(r){return r.getRenderTarget()===null?r.outputColorSpace:Se.workingColorSpace}var $g={clone:ls,merge:mn},Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends Sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=Kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let a in this.uniforms){let u=this.uniforms[a].value;u&&u.isTexture?e.uniforms[a]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[a]={type:"m4",value:u.toArray()}:e.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},bo=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fi=new B,Jh=new Xt,jh=new Xt,cn=class extends bo{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,jh),e.subVectors(jh,Jh)}setViewOffset(t,e,i,a,o,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,o=-.5*a,u=this.view;if(this.view!==null&&this.view.enabled){let f=u.fullWidth,d=u.fullHeight;o+=u.offsetX*a/f,e-=u.offsetY*i/d,a*=u.width/f,i*=u.height/d}let c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yr=-90,Kr=1,ru=class extends _n{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new cn(Yr,Kr,t,e);a.layers=this.layers,this.add(a);let o=new cn(Yr,Kr,t,e);o.layers=this.layers,this.add(o);let u=new cn(Yr,Kr,t,e);u.layers=this.layers,this.add(u);let c=new cn(Yr,Kr,t,e);c.layers=this.layers,this.add(c);let f=new cn(Yr,Kr,t,e);f.layers=this.layers,this.add(f);let d=new cn(Yr,Kr,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,a,o,u,c,f]=e;for(let d of e)this.remove(d);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,u,c,f,d,p]=this.children,m=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,o),t.setRenderTarget(i,1,a),t.render(e,u),t.setRenderTarget(i,2,a),t.render(e,c),t.setRenderTarget(i,3,a),t.render(e,f),t.setRenderTarget(i,4,a),t.render(e,d),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,a),t.render(e,p),t.setRenderTarget(m,v,y),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}},wo=class extends Cn{constructor(t,e,i,a,o,u,c,f,d,p){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,i,a,o,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},su=class extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new wo(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Kn(5,5,5),o=new ci({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Hi});o.uniforms.tEquirect.value=e;let u=new ae(a,o),c=e.minFilter;return e.minFilter===xr&&(e.minFilter=Sn),new ru(1,10,this).update(t,u),e.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(t,e,i,a){let o=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,i,a);t.setRenderTarget(o)}},zc=new B,Jg=new B,jg=new ce,qn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let a=zc.subVectors(i,e).cross(Jg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(zc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jg.getNormalMatrix(t),a=this.coplanarPoint(zc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hr=new $s,no=new B,Ks=class{constructor(t=new qn,e=new qn,i=new qn,a=new qn,o=new qn,u=new qn){this.planes=[t,e,i,a,o,u]}set(t,e,i,a,o,u){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(a),c[4].copy(o),c[5].copy(u),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi){let i=this.planes,a=t.elements,o=a[0],u=a[1],c=a[2],f=a[3],d=a[4],p=a[5],m=a[6],v=a[7],y=a[8],M=a[9],b=a[10],x=a[11],g=a[12],P=a[13],E=a[14],N=a[15];if(i[0].setComponents(f-o,v-d,x-y,N-g).normalize(),i[1].setComponents(f+o,v+d,x+y,N+g).normalize(),i[2].setComponents(f+u,v+p,x+M,N+P).normalize(),i[3].setComponents(f-u,v-p,x-M,N-P).normalize(),i[4].setComponents(f-c,v-m,x-b,N-E).normalize(),e===bi)i[5].setComponents(f+c,v+m,x+b,N+E).normalize();else if(e===po)i[5].setComponents(c,m,b,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){let e=this.planes,i=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let a=e[i];if(no.x=a.normal.x>0?t.max.x:t.min.x,no.y=a.normal.y>0?t.max.y:t.min.y,no.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bd(){let r=null,t=!1,e=null,i=null;function a(o,u){e(o,u),i=r.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(a),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){r=o}}}function Qg(r,t){let e=t.isWebGL2,i=new WeakMap;function a(d,p){let m=d.array,v=d.usage,y=m.byteLength,M=r.createBuffer();r.bindBuffer(p,M),r.bufferData(p,m,v),d.onUploadCallback();let b;if(m instanceof Float32Array)b=r.FLOAT;else if(m instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=r.SHORT;else if(m instanceof Uint32Array)b=r.UNSIGNED_INT;else if(m instanceof Int32Array)b=r.INT;else if(m instanceof Int8Array)b=r.BYTE;else if(m instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:M,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function o(d,p,m){let v=p.array,y=p._updateRange,M=p.updateRanges;if(r.bindBuffer(m,d),y.count===-1&&M.length===0&&r.bufferSubData(m,0,v),M.length!==0){for(let b=0,x=M.length;b<x;b++){let g=M[b];e?r.bufferSubData(m,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):r.bufferSubData(m,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}p.clearUpdateRanges()}y.count!==-1&&(e?r.bufferSubData(m,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count):r.bufferSubData(m,y.offset*v.BYTES_PER_ELEMENT,v.subarray(y.offset,y.offset+y.count)),y.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);let p=i.get(d);p&&(r.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){let v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);let m=i.get(d);if(m===void 0)i.set(d,a(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(m.buffer,d,p),m.version=d.version}}return{get:u,remove:c,update:f}}var cs=class r extends Yn{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};let o=t/2,u=e/2,c=Math.floor(i),f=Math.floor(a),d=c+1,p=f+1,m=t/c,v=e/f,y=[],M=[],b=[],x=[];for(let g=0;g<p;g++){let P=g*v-u;for(let E=0;E<d;E++){let N=E*m-o;M.push(N,-P,0),b.push(0,0,1),x.push(E/c),x.push(1-g/f)}}for(let g=0;g<f;g++)for(let P=0;P<c;P++){let E=P+d*g,N=P+d*(g+1),z=P+1+d*(g+1),F=P+1+d*g;y.push(E,N,F),y.push(N,z,F)}this.setIndex(y),this.setAttribute("position",new Ve(M,3)),this.setAttribute("normal",new Ve(b,3)),this.setAttribute("uv",new Ve(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},t_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,u_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L_="gl_FragColor = linearToOutputTexel( gl_FragColor );",R_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,I_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,G_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ix=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ev=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Av=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:t_,alphahash_pars_fragment:e_,alphamap_fragment:n_,alphamap_pars_fragment:i_,alphatest_fragment:r_,alphatest_pars_fragment:s_,aomap_fragment:a_,aomap_pars_fragment:o_,batching_pars_vertex:l_,batching_vertex:c_,begin_vertex:u_,beginnormal_vertex:f_,bsdfs:h_,iridescence_fragment:d_,bumpmap_pars_fragment:p_,clipping_planes_fragment:m_,clipping_planes_pars_fragment:g_,clipping_planes_pars_vertex:__,clipping_planes_vertex:x_,color_fragment:v_,color_pars_fragment:y_,color_pars_vertex:M_,color_vertex:S_,common:b_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:T_,displacementmap_pars_vertex:E_,displacementmap_vertex:A_,emissivemap_fragment:C_,emissivemap_pars_fragment:P_,colorspace_fragment:L_,colorspace_pars_fragment:R_,envmap_fragment:I_,envmap_common_pars_fragment:D_,envmap_pars_fragment:N_,envmap_pars_vertex:O_,envmap_physical_pars_fragment:Z_,envmap_vertex:U_,fog_vertex:k_,fog_pars_vertex:F_,fog_fragment:B_,fog_pars_fragment:z_,gradientmap_pars_fragment:H_,lightmap_fragment:V_,lightmap_pars_fragment:G_,lights_lambert_fragment:W_,lights_lambert_pars_fragment:q_,lights_pars_begin:X_,lights_toon_fragment:$_,lights_toon_pars_fragment:Y_,lights_phong_fragment:K_,lights_phong_pars_fragment:J_,lights_physical_fragment:j_,lights_physical_pars_fragment:Q_,lights_fragment_begin:tx,lights_fragment_maps:ex,lights_fragment_end:nx,logdepthbuf_fragment:ix,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:ax,map_fragment:ox,map_pars_fragment:lx,map_particle_fragment:cx,map_particle_pars_fragment:ux,metalnessmap_fragment:fx,metalnessmap_pars_fragment:hx,morphinstance_vertex:dx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:_x,normal_fragment_begin:xx,normal_fragment_maps:vx,normal_pars_fragment:yx,normal_pars_vertex:Mx,normal_vertex:Sx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Ax,opaque_fragment:Cx,packing:Px,premultiplied_alpha_fragment:Lx,project_vertex:Rx,dithering_fragment:Ix,dithering_pars_fragment:Dx,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:kx,shadowmap_vertex:Fx,shadowmask_pars_fragment:Bx,skinbase_vertex:zx,skinning_pars_vertex:Hx,skinning_vertex:Vx,skinnormal_vertex:Gx,specularmap_fragment:Wx,specularmap_pars_fragment:qx,tonemapping_fragment:Xx,tonemapping_pars_fragment:Zx,transmission_fragment:$x,transmission_pars_fragment:Yx,uv_pars_fragment:Kx,uv_pars_vertex:Jx,uv_vertex:jx,worldpos_vertex:Qx,background_vert:tv,background_frag:ev,backgroundCube_vert:nv,backgroundCube_frag:iv,cube_vert:rv,cube_frag:sv,depth_vert:av,depth_frag:ov,distanceRGBA_vert:lv,distanceRGBA_frag:cv,equirect_vert:uv,equirect_frag:fv,linedashed_vert:hv,linedashed_frag:dv,meshbasic_vert:pv,meshbasic_frag:mv,meshlambert_vert:gv,meshlambert_frag:_v,meshmatcap_vert:xv,meshmatcap_frag:vv,meshnormal_vert:yv,meshnormal_frag:Mv,meshphong_vert:Sv,meshphong_frag:bv,meshphysical_vert:wv,meshphysical_frag:Tv,meshtoon_vert:Ev,meshtoon_frag:Av,points_vert:Cv,points_frag:Pv,shadow_vert:Lv,shadow_frag:Rv,sprite_vert:Iv,sprite_frag:Dv},St={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ri={basic:{uniforms:mn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:mn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new pe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:mn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:mn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:mn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new pe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:mn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:mn([St.points,St.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:mn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:mn([St.common,St.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:mn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:mn([St.sprite,St.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:mn([St.common,St.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:mn([St.lights,St.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ri.physical={uniforms:mn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var io={r:0,b:0,g:0},dr=new oi,Nv=new He;function Ov(r,t,e,i,a,o,u){let c=new pe(0),f=o===!0?0:1,d,p,m=null,v=0,y=null;function M(x,g){let P=!1,E=g.isScene===!0?g.background:null;E&&E.isTexture&&(E=(g.backgroundBlurriness>0?e:t).get(E)),E===null?b(c,f):E&&E.isColor&&(b(E,1),P=!0);let N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||P)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),E&&(E.isCubeTexture||E.mapping===No)?(p===void 0&&(p=new ae(new Kn(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ls(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,F,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),dr.copy(g.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),p.material.uniforms.envMap.value=E,p.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(dr)),p.material.toneMapped=Se.getTransfer(E.colorSpace)!==Le,(m!==E||v!==E.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,m=E,v=E.version,y=r.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):E&&E.isTexture&&(d===void 0&&(d=new ae(new cs(2,2),new ci({name:"BackgroundMaterial",uniforms:ls(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=E,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=Se.getTransfer(E.colorSpace)!==Le,E.matrixAutoUpdate===!0&&E.updateMatrix(),d.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||v!==E.version||y!==r.toneMapping)&&(d.material.needsUpdate=!0,m=E,v=E.version,y=r.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function b(x,g){x.getRGB(io,Fd(r)),i.buffers.color.setClear(io.r,io.g,io.b,g,u)}return{getClearColor:function(){return c},setClearColor:function(x,g=1){c.set(x),f=g,b(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(x){f=x,b(c,f)},render:M}}function Uv(r,t,e,i){let a=r.getParameter(r.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:t.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},f=x(null),d=f,p=!1;function m(k,rt,H,at,W){let Q=!1;if(u){let Y=b(at,H,rt);d!==Y&&(d=Y,y(d.object)),Q=g(k,at,H,W),Q&&P(k,at,H,W)}else{let Y=rt.wireframe===!0;(d.geometry!==at.id||d.program!==H.id||d.wireframe!==Y)&&(d.geometry=at.id,d.program=H.id,d.wireframe=Y,Q=!0)}W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(Q||p)&&(p=!1,$(k,rt,H,at),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function v(){return i.isWebGL2?r.createVertexArray():o.createVertexArrayOES()}function y(k){return i.isWebGL2?r.bindVertexArray(k):o.bindVertexArrayOES(k)}function M(k){return i.isWebGL2?r.deleteVertexArray(k):o.deleteVertexArrayOES(k)}function b(k,rt,H){let at=H.wireframe===!0,W=c[k.id];W===void 0&&(W={},c[k.id]=W);let Q=W[rt.id];Q===void 0&&(Q={},W[rt.id]=Q);let Y=Q[at];return Y===void 0&&(Y=x(v()),Q[at]=Y),Y}function x(k){let rt=[],H=[],at=[];for(let W=0;W<a;W++)rt[W]=0,H[W]=0,at[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:H,attributeDivisors:at,object:k,attributes:{},index:null}}function g(k,rt,H,at){let W=d.attributes,Q=rt.attributes,Y=0,ut=H.getAttributes();for(let pt in ut)if(ut[pt].location>=0){let V=W[pt],ft=Q[pt];if(ft===void 0&&(pt==="instanceMatrix"&&k.instanceMatrix&&(ft=k.instanceMatrix),pt==="instanceColor"&&k.instanceColor&&(ft=k.instanceColor)),V===void 0||V.attribute!==ft||ft&&V.data!==ft.data)return!0;Y++}return d.attributesNum!==Y||d.index!==at}function P(k,rt,H,at){let W={},Q=rt.attributes,Y=0,ut=H.getAttributes();for(let pt in ut)if(ut[pt].location>=0){let V=Q[pt];V===void 0&&(pt==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),pt==="instanceColor"&&k.instanceColor&&(V=k.instanceColor));let ft={};ft.attribute=V,V&&V.data&&(ft.data=V.data),W[pt]=ft,Y++}d.attributes=W,d.attributesNum=Y,d.index=at}function E(){let k=d.newAttributes;for(let rt=0,H=k.length;rt<H;rt++)k[rt]=0}function N(k){z(k,0)}function z(k,rt){let H=d.newAttributes,at=d.enabledAttributes,W=d.attributeDivisors;H[k]=1,at[k]===0&&(r.enableVertexAttribArray(k),at[k]=1),W[k]!==rt&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,rt),W[k]=rt)}function F(){let k=d.newAttributes,rt=d.enabledAttributes;for(let H=0,at=rt.length;H<at;H++)rt[H]!==k[H]&&(r.disableVertexAttribArray(H),rt[H]=0)}function D(k,rt,H,at,W,Q,Y){Y===!0?r.vertexAttribIPointer(k,rt,H,W,Q):r.vertexAttribPointer(k,rt,H,at,W,Q)}function $(k,rt,H,at){if(i.isWebGL2===!1&&(k.isInstancedMesh||at.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();let W=at.attributes,Q=H.getAttributes(),Y=rt.defaultAttributeValues;for(let ut in Q){let pt=Q[ut];if(pt.location>=0){let vt=W[ut];if(vt===void 0&&(ut==="instanceMatrix"&&k.instanceMatrix&&(vt=k.instanceMatrix),ut==="instanceColor"&&k.instanceColor&&(vt=k.instanceColor)),vt!==void 0){let V=vt.normalized,ft=vt.itemSize,Mt=e.get(vt);if(Mt===void 0)continue;let Ht=Mt.buffer,Nt=Mt.type,Et=Mt.bytesPerElement,fe=i.isWebGL2===!0&&(Nt===r.INT||Nt===r.UNSIGNED_INT||vt.gpuType===Ed);if(vt.isInterleavedBufferAttribute){let Wt=vt.data,X=Wt.stride,ke=vt.offset;if(Wt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<pt.locationSize;Ft++)z(pt.location+Ft,Wt.meshPerAttribute);k.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let Ft=0;Ft<pt.locationSize;Ft++)N(pt.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,Ht);for(let Ft=0;Ft<pt.locationSize;Ft++)D(pt.location+Ft,ft/pt.locationSize,Nt,V,X*Et,(ke+ft/pt.locationSize*Ft)*Et,fe)}else{if(vt.isInstancedBufferAttribute){for(let Wt=0;Wt<pt.locationSize;Wt++)z(pt.location+Wt,vt.meshPerAttribute);k.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Wt=0;Wt<pt.locationSize;Wt++)N(pt.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,Ht);for(let Wt=0;Wt<pt.locationSize;Wt++)D(pt.location+Wt,ft/pt.locationSize,Nt,V,ft*Et,ft/pt.locationSize*Wt*Et,fe)}}else if(Y!==void 0){let V=Y[ut];if(V!==void 0)switch(V.length){case 2:r.vertexAttrib2fv(pt.location,V);break;case 3:r.vertexAttrib3fv(pt.location,V);break;case 4:r.vertexAttrib4fv(pt.location,V);break;default:r.vertexAttrib1fv(pt.location,V)}}}}F()}function nt(){st();for(let k in c){let rt=c[k];for(let H in rt){let at=rt[H];for(let W in at)M(at[W].object),delete at[W];delete rt[H]}delete c[k]}}function T(k){if(c[k.id]===void 0)return;let rt=c[k.id];for(let H in rt){let at=rt[H];for(let W in at)M(at[W].object),delete at[W];delete rt[H]}delete c[k.id]}function I(k){for(let rt in c){let H=c[rt];if(H[k.id]===void 0)continue;let at=H[k.id];for(let W in at)M(at[W].object),delete at[W];delete H[k.id]}}function st(){ct(),p=!0,d!==f&&(d=f,y(d.object))}function ct(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:m,reset:st,resetDefaultState:ct,dispose:nt,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:N,disableUnusedAttributes:F}}function kv(r,t,e,i){let a=i.isWebGL2,o;function u(p){o=p}function c(p,m){r.drawArrays(o,p,m),e.update(m,o,1)}function f(p,m,v){if(v===0)return;let y,M;if(a)y=r,M="drawArraysInstanced";else if(y=t.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[M](o,p,m,v),e.update(m,o,v)}function d(p,m,v){if(v===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<v;M++)this.render(p[M],m[M]);else{y.multiDrawArraysWEBGL(o,p,0,m,0,v);let M=0;for(let b=0;b<v;b++)M+=m[b];e.update(M,o,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function Fv(r,t,e){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",c=e.precision!==void 0?e.precision:"highp",f=o(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=u||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,N=u||t.has("OES_texture_float"),z=E&&N,F=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:P,vertexTextures:E,floatFragmentTextures:N,floatVertexTextures:z,maxSamples:F}}function Bv(r){let t=this,e=null,i=0,a=!1,o=!1,u=new qn,c=new ce,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){let y=m.length!==0||v||i!==0||a;return a=v,i=m.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,v){e=p(m,v,0)},this.setState=function(m,v,y){let M=m.clippingPlanes,b=m.clipIntersection,x=m.clipShadows,g=r.get(m);if(!a||M===null||M.length===0||o&&!x)o?p(null):d();else{let P=o?0:i,E=P*4,N=g.clippingState||null;f.value=N,N=p(M,v,E,y);for(let z=0;z!==E;++z)N[z]=e[z];g.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(m,v,y,M){let b=m!==null?m.length:0,x=null;if(b!==0){if(x=f.value,M!==!0||x===null){let g=y+b*4,P=v.matrixWorldInverse;c.getNormalMatrix(P),(x===null||x.length<g)&&(x=new Float32Array(g));for(let E=0,N=y;E!==b;++E,N+=4)u.copy(m[E]).applyMatrix4(P,c),u.normal.toArray(x,N),x[N+3]=u.constant}f.value=x,f.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function zv(r){let t=new WeakMap;function e(u,c){return c===Kc?u.mapping=ss:c===Jc&&(u.mapping=as),u}function i(u){if(u&&u.isTexture){let c=u.mapping;if(c===Kc||c===Jc)if(t.has(u)){let f=t.get(u).texture;return e(f,u.mapping)}else{let f=u.image;if(f&&f.height>0){let d=new su(f.height);return d.fromEquirectangularTexture(r,u),t.set(u,d),u.addEventListener("dispose",a),e(d.texture,u.mapping)}else return null}}return u}function a(u){let c=u.target;c.removeEventListener("dispose",a);let f=t.get(c);f!==void 0&&(t.delete(c),f.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var To=class extends bo{constructor(t=-1,e=1,i=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,o=i-t,u=i+t,c=a+e,f=a-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,u=o+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,Qh=[.125,.215,.35,.446,.526,.582],_r=20,Hc=new To,td=new pe,Vc=null,Gc=0,Wc=0,mr=(1+Math.sqrt(5))/2,Jr=1/mr,ed=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,mr,Jr),new B(0,mr,-Jr),new B(Jr,0,mr),new B(-Jr,0,mr),new B(mr,Jr,0),new B(-mr,Jr,0)],us=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,a,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vc,Gc,Wc),t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Xs,format:Zn,colorSpace:qi,depthBuffer:!1},a=nd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hv(o)),this._blurMaterial=Vv(o,t,e)}return a}_compileMaterial(t){let e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Hc)}_sceneToCubeUV(t,e,i,a){let c=new cn(90,1,e,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,v=p.toneMapping;p.getClearColor(td),p.toneMapping=Vi,p.autoClear=!1;let y=new li({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),M=new ae(new Kn,y),b=!1,x=t.background;x?x.isColor&&(y.color.copy(x),t.background=null,b=!0):(y.color.copy(td),b=!0);for(let g=0;g<6;g++){let P=g%3;P===0?(c.up.set(0,f[g],0),c.lookAt(d[g],0,0)):P===1?(c.up.set(0,0,f[g]),c.lookAt(0,d[g],0)):(c.up.set(0,f[g],0),c.lookAt(0,0,d[g]));let E=this._cubeSize;ro(a,P*E,g>2?E:0,E,E),p.setRenderTarget(a),b&&p.render(M,c),p.render(t,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=v,p.autoClear=m,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,a=t.mapping===ss||t.mapping===as;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());let o=a?this._cubemapMaterial:this._equirectMaterial,u=new ae(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;let f=this._cubeSize;ro(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(u,Hc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){let o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=ed[(a-1)%ed.length];this._blur(t,a-1,a,o,u)}e.autoClear=i}_blur(t,e,i,a,o){let u=this._pingPongRenderTarget;this._halfBlur(t,u,e,i,a,"latitudinal",o),this._halfBlur(u,t,i,i,a,"longitudinal",o)}_halfBlur(t,e,i,a,o,u,c){let f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,m=new ae(this._lodPlanes[a],d),v=d.uniforms,y=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*_r-1),b=o/M,x=isFinite(o)?1+Math.floor(p*b):_r;x>_r&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_r}`);let g=[],P=0;for(let D=0;D<_r;++D){let $=D/b,nt=Math.exp(-$*$/2);g.push(nt),D===0?P+=nt:D<x&&(P+=2*nt)}for(let D=0;D<g.length;D++)g[D]=g[D]/P;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=g,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);let{_lodMax:E}=this;v.dTheta.value=M,v.mipInt.value=E-i;let N=this._sizeLods[a],z=3*N*(a>E-ts?a-E+ts:0),F=4*(this._cubeSize-N);ro(e,z,F,3*N,2*N),f.setRenderTarget(e),f.render(m,Hc)}};function Hv(r){let t=[],e=[],i=[],a=r,o=r-ts+1+Qh.length;for(let u=0;u<o;u++){let c=Math.pow(2,a);e.push(c);let f=1/c;u>r-ts?f=Qh[u-r+ts-1]:u===0&&(f=0),i.push(f);let d=1/(c-2),p=-d,m=1+d,v=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,M=6,b=3,x=2,g=1,P=new Float32Array(b*M*y),E=new Float32Array(x*M*y),N=new Float32Array(g*M*y);for(let F=0;F<y;F++){let D=F%3*2/3-1,$=F>2?0:-1,nt=[D,$,0,D+2/3,$,0,D+2/3,$+1,0,D,$,0,D+2/3,$+1,0,D,$+1,0];P.set(nt,b*M*F),E.set(v,x*M*F);let T=[F,F,F,F,F,F];N.set(T,g*M*F)}let z=new Yn;z.setAttribute("position",new Un(P,b)),z.setAttribute("uv",new Un(E,x)),z.setAttribute("faceIndex",new Un(N,g)),t.push(z),a>ts&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function nd(r,t,e){let i=new wi(r,t,e);return i.texture.mapping=No,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(r,t,e,i,a){r.viewport.set(t,e,i,a),r.scissor.set(t,e,i,a)}function Vv(r,t,e){let i=new Float32Array(_r),a=new B(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function id(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function rd(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gv(r){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){let f=c.mapping,d=f===Kc||f===Jc,p=f===ss||f===as;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let m=t.get(c);return e===null&&(e=new us(r)),m=d?e.fromEquirectangular(c,m):e.fromCubemap(c,m),t.set(c,m),m.texture}else{if(t.has(c))return t.get(c).texture;{let m=c.image;if(d&&m&&m.height>0||p&&m&&a(m)){e===null&&(e=new us(r));let v=d?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,v),c.addEventListener("dispose",o),v.texture}else return null}}}return c}function a(c){let f=0,d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function o(c){let f=c.target;f.removeEventListener("dispose",o);let d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:u}}function Wv(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let a=e(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function qv(r,t,e,i){let a={},o=new WeakMap;function u(m){let v=m.target;v.index!==null&&t.remove(v.index);for(let M in v.attributes)t.remove(v.attributes[M]);for(let M in v.morphAttributes){let b=v.morphAttributes[M];for(let x=0,g=b.length;x<g;x++)t.remove(b[x])}v.removeEventListener("dispose",u),delete a[v.id];let y=o.get(v);y&&(t.remove(y),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function c(m,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,e.memory.geometries++),v}function f(m){let v=m.attributes;for(let M in v)t.update(v[M],r.ARRAY_BUFFER);let y=m.morphAttributes;for(let M in y){let b=y[M];for(let x=0,g=b.length;x<g;x++)t.update(b[x],r.ARRAY_BUFFER)}}function d(m){let v=[],y=m.index,M=m.attributes.position,b=0;if(y!==null){let P=y.array;b=y.version;for(let E=0,N=P.length;E<N;E+=3){let z=P[E+0],F=P[E+1],D=P[E+2];v.push(z,F,F,D,D,z)}}else if(M!==void 0){let P=M.array;b=M.version;for(let E=0,N=P.length/3-1;E<N;E+=3){let z=E+0,F=E+1,D=E+2;v.push(z,F,F,D,D,z)}}else return;let x=new(Ud(v)?So:Mo)(v,1);x.version=b;let g=o.get(m);g&&t.remove(g),o.set(m,x)}function p(m){let v=o.get(m);if(v){let y=m.index;y!==null&&v.version<y.version&&d(m)}else d(m);return o.get(m)}return{get:c,update:f,getWireframeAttribute:p}}function Xv(r,t,e,i){let a=i.isWebGL2,o;function u(y){o=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,M){r.drawElements(o,M,c,y*f),e.update(M,o,1)}function m(y,M,b){if(b===0)return;let x,g;if(a)x=r,g="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](o,M,c,y*f,b),e.update(M,o,b)}function v(y,M,b){if(b===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<b;g++)this.render(y[g]/f,M[g]);else{x.multiDrawElementsWEBGL(o,M,0,c,y,0,b);let g=0;for(let P=0;P<b;P++)g+=M[P];e.update(g,o,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function Zv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(e.calls++,u){case r.TRIANGLES:e.triangles+=c*(o/3);break;case r.LINES:e.lines+=c*(o/2);break;case r.LINE_STRIP:e.lines+=c*(o-1);break;case r.LINE_LOOP:e.lines+=c*o;break;case r.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function $v(r,t){return r[0]-t[0]}function Yv(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Kv(r,t,e){let i={},a=new Float32Array(8),o=new WeakMap,u=new De,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function f(d,p,m){let v=d.morphTargetInfluences;if(t.isWebGL2===!0){let y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=y!==void 0?y.length:0,b=o.get(p);if(b===void 0||b.count!==M){let st=function(){T.dispose(),o.delete(p),p.removeEventListener("dispose",st)};b!==void 0&&b.texture.dispose();let x=p.morphAttributes.position!==void 0,g=p.morphAttributes.normal!==void 0,P=p.morphAttributes.color!==void 0,E=p.morphAttributes.position||[],N=p.morphAttributes.normal||[],z=p.morphAttributes.color||[],F=0;x===!0&&(F=1),g===!0&&(F=2),P===!0&&(F=3);let D=p.attributes.position.count*F,$=1;D>t.maxTextureSize&&($=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let nt=new Float32Array(D*$*4*M),T=new vo(nt,D,$,M);T.type=Si,T.needsUpdate=!0;let I=F*4;for(let ct=0;ct<M;ct++){let k=E[ct],rt=N[ct],H=z[ct],at=D*$*4*ct;for(let W=0;W<k.count;W++){let Q=W*I;x===!0&&(u.fromBufferAttribute(k,W),nt[at+Q+0]=u.x,nt[at+Q+1]=u.y,nt[at+Q+2]=u.z,nt[at+Q+3]=0),g===!0&&(u.fromBufferAttribute(rt,W),nt[at+Q+4]=u.x,nt[at+Q+5]=u.y,nt[at+Q+6]=u.z,nt[at+Q+7]=0),P===!0&&(u.fromBufferAttribute(H,W),nt[at+Q+8]=u.x,nt[at+Q+9]=u.y,nt[at+Q+10]=u.z,nt[at+Q+11]=H.itemSize===4?u.w:1)}}b={count:M,texture:T,size:new Xt(D,$)},o.set(p,b),p.addEventListener("dispose",st)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,e);else{let x=0;for(let P=0;P<v.length;P++)x+=v[P];let g=p.morphTargetsRelative?1:1-x;m.getUniforms().setValue(r,"morphTargetBaseInfluence",g),m.getUniforms().setValue(r,"morphTargetInfluences",v)}m.getUniforms().setValue(r,"morphTargetsTexture",b.texture,e),m.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}else{let y=v===void 0?0:v.length,M=i[p.id];if(M===void 0||M.length!==y){M=[];for(let E=0;E<y;E++)M[E]=[E,0];i[p.id]=M}for(let E=0;E<y;E++){let N=M[E];N[0]=E,N[1]=v[E]}M.sort(Yv);for(let E=0;E<8;E++)E<y&&M[E][1]?(c[E][0]=M[E][0],c[E][1]=M[E][1]):(c[E][0]=Number.MAX_SAFE_INTEGER,c[E][1]=0);c.sort($v);let b=p.morphAttributes.position,x=p.morphAttributes.normal,g=0;for(let E=0;E<8;E++){let N=c[E],z=N[0],F=N[1];z!==Number.MAX_SAFE_INTEGER&&F?(b&&p.getAttribute("morphTarget"+E)!==b[z]&&p.setAttribute("morphTarget"+E,b[z]),x&&p.getAttribute("morphNormal"+E)!==x[z]&&p.setAttribute("morphNormal"+E,x[z]),a[E]=F,g+=F):(b&&p.hasAttribute("morphTarget"+E)===!0&&p.deleteAttribute("morphTarget"+E),x&&p.hasAttribute("morphNormal"+E)===!0&&p.deleteAttribute("morphNormal"+E),a[E]=0)}let P=p.morphTargetsRelative?1:1-g;m.getUniforms().setValue(r,"morphTargetBaseInfluence",P),m.getUniforms().setValue(r,"morphTargetInfluences",a)}}return{update:f}}function Jv(r,t,e,i){let a=new WeakMap;function o(f){let d=i.render.frame,p=f.geometry,m=t.get(f,p);if(a.get(m)!==d&&(t.update(m),a.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),a.get(f)!==d&&(e.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,r.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){let v=f.skeleton;a.get(v)!==d&&(v.update(),a.set(v,d))}return m}function u(){a=new WeakMap}function c(f){let d=f.target;d.removeEventListener("dispose",c),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:u}}var Eo=class extends Cn{constructor(t,e,i,a,o,u,c,f,d,p){if(p=p!==void 0?p:yr,p!==yr&&p!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===yr&&(i=zi),i===void 0&&p===os&&(i=vr),super(null,a,o,u,c,f,p,i,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:gn,this.minFilter=f!==void 0?f:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zd=new Cn,Hd=new Eo(1,1);Hd.compareFunction=Nd;var Vd=new vo,Gd=new iu,Wd=new wo,sd=[],ad=[],od=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function ps(r,t,e){let i=r[0];if(i<=0||i>0)return r;let a=t*e,o=sd[a];if(o===void 0&&(o=new Float32Array(a),sd[a]=o),t!==0){i.toArray(o,0);for(let u=1,c=0;u!==t;++u)c+=e,r[u].toArray(o,c)}return o}function $e(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ye(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Uo(r,t){let e=ad[t];e===void 0&&(e=new Int32Array(t),ad[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function jv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Qv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2fv(this.addr,t),Ye(e,t)}}function t0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;r.uniform3fv(this.addr,t),Ye(e,t)}}function e0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4fv(this.addr,t),Ye(e,t)}}function n0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,i))return;cd.set(i),r.uniformMatrix2fv(this.addr,!1,cd),Ye(e,i)}}function i0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,i))return;ld.set(i),r.uniformMatrix3fv(this.addr,!1,ld),Ye(e,i)}}function r0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,i))return;od.set(i),r.uniformMatrix4fv(this.addr,!1,od),Ye(e,i)}}function s0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function a0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2iv(this.addr,t),Ye(e,t)}}function o0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3iv(this.addr,t),Ye(e,t)}}function l0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4iv(this.addr,t),Ye(e,t)}}function c0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function u0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2uiv(this.addr,t),Ye(e,t)}}function f0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3uiv(this.addr,t),Ye(e,t)}}function h0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4uiv(this.addr,t),Ye(e,t)}}function d0(r,t,e){let i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o=this.type===r.SAMPLER_2D_SHADOW?Hd:zd;e.setTexture2D(t||o,a)}function p0(r,t,e){let i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||Gd,a)}function m0(r,t,e){let i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Wd,a)}function g0(r,t,e){let i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||Vd,a)}function _0(r){switch(r){case 5126:return jv;case 35664:return Qv;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return r0;case 5124:case 35670:return s0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return f0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(r,t){r.uniform1fv(this.addr,t)}function v0(r,t){let e=ps(t,this.size,2);r.uniform2fv(this.addr,e)}function y0(r,t){let e=ps(t,this.size,3);r.uniform3fv(this.addr,e)}function M0(r,t){let e=ps(t,this.size,4);r.uniform4fv(this.addr,e)}function S0(r,t){let e=ps(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function b0(r,t){let e=ps(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function w0(r,t){let e=ps(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function T0(r,t){r.uniform1iv(this.addr,t)}function E0(r,t){r.uniform2iv(this.addr,t)}function A0(r,t){r.uniform3iv(this.addr,t)}function C0(r,t){r.uniform4iv(this.addr,t)}function P0(r,t){r.uniform1uiv(this.addr,t)}function L0(r,t){r.uniform2uiv(this.addr,t)}function R0(r,t){r.uniform3uiv(this.addr,t)}function I0(r,t){r.uniform4uiv(this.addr,t)}function D0(r,t,e){let i=this.cache,a=t.length,o=Uo(e,a);$e(i,o)||(r.uniform1iv(this.addr,o),Ye(i,o));for(let u=0;u!==a;++u)e.setTexture2D(t[u]||zd,o[u])}function N0(r,t,e){let i=this.cache,a=t.length,o=Uo(e,a);$e(i,o)||(r.uniform1iv(this.addr,o),Ye(i,o));for(let u=0;u!==a;++u)e.setTexture3D(t[u]||Gd,o[u])}function O0(r,t,e){let i=this.cache,a=t.length,o=Uo(e,a);$e(i,o)||(r.uniform1iv(this.addr,o),Ye(i,o));for(let u=0;u!==a;++u)e.setTextureCube(t[u]||Wd,o[u])}function U0(r,t,e){let i=this.cache,a=t.length,o=Uo(e,a);$e(i,o)||(r.uniform1iv(this.addr,o),Ye(i,o));for(let u=0;u!==a;++u)e.setTexture2DArray(t[u]||Vd,o[u])}function k0(r){switch(r){case 5126:return x0;case 35664:return v0;case 35665:return y0;case 35666:return M0;case 35674:return S0;case 35675:return b0;case 35676:return w0;case 5124:case 35670:return T0;case 35667:case 35671:return E0;case 35668:case 35672:return A0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return L0;case 36295:return R0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return U0}}var au=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}},ou=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}},lu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let a=this.seq;for(let o=0,u=a.length;o!==u;++o){let c=a[o];c.setValue(t,e[c.id],i)}}},qc=/(\w+)(\])?(\[|\.)?/g;function ud(r,t){r.seq.push(t),r.map[t.id]=t}function F0(r,t,e){let i=r.name,a=i.length;for(qc.lastIndex=0;;){let o=qc.exec(i),u=qc.lastIndex,c=o[1],f=o[2]==="]",d=o[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===a){ud(e,d===void 0?new au(c,r,t):new ou(c,r,t));break}else{let m=e.map[c];m===void 0&&(m=new lu(c),ud(e,m)),e=m}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),u=t.getUniformLocation(e,o.name);F0(o,u,this)}}setValue(t,e,i,a){let o=this.map[e];o!==void 0&&o.setValue(t,i,a)}setOptional(t,e,i){let a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let o=0,u=e.length;o!==u;++o){let c=e[o],f=i[c.id];f.needsUpdate!==!1&&c.setValue(t,f.value,a)}}static seqWithValue(t,e){let i=[];for(let a=0,o=t.length;a!==o;++a){let u=t[a];u.id in e&&i.push(u)}return i}};function fd(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var B0=37297,z0=0;function H0(r,t){let e=r.split(`
`),i=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let u=a;u<o;u++){let c=u+1;i.push(`${c===t?">":" "} ${c}: ${e[u]}`)}return i.join(`
`)}function V0(r){let t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(r),i;switch(t===e?i="":t===ho&&e===fo?i="LinearDisplayP3ToLinearSRGB":t===fo&&e===ho&&(i="LinearSRGBToLinearDisplayP3"),r){case qi:case Oo:return[i,"LinearTransferOETF"];case En:case Iu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function hd(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),a=r.getShaderInfoLog(t).trim();if(i&&a==="")return"";let o=/ERROR: 0:(\d+)/.exec(a);if(o){let u=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+H0(r.getShaderSource(t),u)}else return a}function G0(r,t){let e=V0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function W0(r,t){let e;switch(t){case Zm:e="Linear";break;case $m:e="Reinhard";break;case Ym:e="OptimizedCineon";break;case Lu:e="ACESFilmic";break;case Jm:e="AgX";break;case jm:e="Neutral";break;case Km:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function q0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function X0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function Z0(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $0(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let o=r.getActiveAttrib(t,a),u=o.name,c=1;o.type===r.FLOAT_MAT2&&(c=2),o.type===r.FLOAT_MAT3&&(c=3),o.type===r.FLOAT_MAT4&&(c=4),e[u]={type:o.type,location:r.getAttribLocation(t,u),locationSize:c}}return e}function es(r){return r!==""}function dd(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(r){return r.replace(Y0,J0)}var K0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function J0(r,t){let e=le[t];if(e===void 0){let i=K0.get(t);if(i!==void 0)e=le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return cu(e)}var j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(r){return r.replace(j0,Q0)}function Q0(r,t,e,i){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function gd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(t+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ty(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mm?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function ey(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ss:case as:t="ENVMAP_TYPE_CUBE";break;case No:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ny(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===as&&(t="ENVMAP_MODE_REFRACTION"),t}function iy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wd:t="ENVMAP_BLENDING_MULTIPLY";break;case qm:t="ENVMAP_BLENDING_MIX";break;case Xm:t="ENVMAP_BLENDING_ADD";break}return t}function ry(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function sy(r,t,e,i){let a=r.getContext(),o=e.defines,u=e.vertexShader,c=e.fragmentShader,f=ty(e),d=ey(e),p=ny(e),m=iy(e),v=ry(e),y=e.isWebGL2?"":q0(e),M=X0(e),b=Z0(o),x=a.createProgram(),g,P,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(es).join(`
`),g.length>0&&(g+=`
`),P=[y,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(es).join(`
`),P.length>0&&(P+=`
`)):(g=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),P=[y,gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?le.tonemapping_pars_fragment:"",e.toneMapping!==Vi?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,G0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),u=cu(u),u=dd(u,e),u=pd(u,e),c=cu(c),c=dd(c,e),c=pd(c,e),u=md(u),c=md(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,P=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);let N=E+g+u,z=E+P+c,F=fd(a,a.VERTEX_SHADER,N),D=fd(a,a.FRAGMENT_SHADER,z);a.attachShader(x,F),a.attachShader(x,D),e.index0AttributeName!==void 0?a.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function $(st){if(r.debug.checkShaderErrors){let ct=a.getProgramInfoLog(x).trim(),k=a.getShaderInfoLog(F).trim(),rt=a.getShaderInfoLog(D).trim(),H=!0,at=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,x,F,D);else{let W=hd(a,F,"vertex"),Q=hd(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+st.name+`
Material Type: `+st.type+`

Program Info Log: `+ct+`
`+W+`
`+Q)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(k===""||rt==="")&&(at=!1);at&&(st.diagnostics={runnable:H,programLog:ct,vertexShader:{log:k,prefix:g},fragmentShader:{log:rt,prefix:P}})}a.deleteShader(F),a.deleteShader(D),nt=new rs(a,x),T=$0(a,x)}let nt;this.getUniforms=function(){return nt===void 0&&$(this),nt};let T;this.getAttributes=function(){return T===void 0&&$(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(x,B0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=D,this}var ay=0,uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(t);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new fu(t),e.set(t,i)),i}},fu=class{constructor(t){this.id=ay++,this.code=t,this.usedTimes=0}};function oy(r,t,e,i,a,o,u){let c=new yo,f=new uu,d=new Set,p=[],m=a.isWebGL2,v=a.logarithmicDepthBuffer,y=a.vertexTextures,M=a.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return d.add(T),T===0?"uv":`uv${T}`}function g(T,I,st,ct,k){let rt=ct.fog,H=k.geometry,at=T.isMeshStandardMaterial?ct.environment:null,W=(T.isMeshStandardMaterial?e:t).get(T.envMap||at),Q=W&&W.mapping===No?W.image.height:null,Y=b[T.type];T.precision!==null&&(M=a.getMaxPrecision(T.precision),M!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));let ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=ut!==void 0?ut.length:0,vt=0;H.morphAttributes.position!==void 0&&(vt=1),H.morphAttributes.normal!==void 0&&(vt=2),H.morphAttributes.color!==void 0&&(vt=3);let V,ft,Mt,Ht;if(Y){let _e=ri[Y];V=_e.vertexShader,ft=_e.fragmentShader}else V=T.vertexShader,ft=T.fragmentShader,f.update(T),Mt=f.getVertexShaderID(T),Ht=f.getFragmentShaderID(T);let Nt=r.getRenderTarget(),Et=k.isInstancedMesh===!0,fe=k.isBatchedMesh===!0,Wt=!!T.map,X=!!T.matcap,ke=!!W,Ft=!!T.aoMap,Jt=!!T.lightMap,Vt=!!T.bumpMap,he=!!T.normalMap,te=!!T.displacementMap,ee=!!T.emissiveMap,Me=!!T.metalnessMap,C=!!T.roughnessMap,w=T.anisotropy>0,it=T.clearcoat>0,ot=T.iridescence>0,gt=T.sheen>0,dt=T.transmission>0,jt=w&&!!T.anisotropyMap,Gt=it&&!!T.clearcoatMap,yt=it&&!!T.clearcoatNormalMap,bt=it&&!!T.clearcoatRoughnessMap,Yt=ot&&!!T.iridescenceMap,xt=ot&&!!T.iridescenceThicknessMap,Ce=gt&&!!T.sheenColorMap,re=gt&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Lt=!!T.specularColorMap,Ut=!!T.specularIntensityMap,R=dt&&!!T.transmissionMap,lt=dt&&!!T.thicknessMap,Rt=!!T.gradientMap,U=!!T.alphaMap,_t=T.alphaTest>0,Z=!!T.alphaHash,mt=!!T.extensions,wt=Vi;T.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(wt=r.toneMapping);let oe={isWebGL2:m,shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:V,fragmentShader:ft,defines:T.defines,customVertexShaderID:Mt,customFragmentShaderID:Ht,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:fe,instancing:Et,instancingColor:Et&&k.instanceColor!==null,instancingMorph:Et&&k.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Nt===null?r.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:qi,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:X,envMap:ke,envMapMode:ke&&W.mapping,envMapCubeUVHeight:Q,aoMap:Ft,lightMap:Jt,bumpMap:Vt,normalMap:he,displacementMap:y&&te,emissiveMap:ee,normalMapObjectSpace:he&&T.normalMapType===cg,normalMapTangentSpace:he&&T.normalMapType===Dd,metalnessMap:Me,roughnessMap:C,anisotropy:w,anisotropyMap:jt,clearcoat:it,clearcoatMap:Gt,clearcoatNormalMap:yt,clearcoatRoughnessMap:bt,iridescence:ot,iridescenceMap:Yt,iridescenceThicknessMap:xt,sheen:gt,sheenColorMap:Ce,sheenRoughnessMap:re,specularMap:Ot,specularColorMap:Lt,specularIntensityMap:Ut,transmission:dt,transmissionMap:R,thicknessMap:lt,gradientMap:Rt,opaque:T.transparent===!1&&T.blending===ns&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:_t,alphaHash:Z,combine:T.combine,mapUv:Wt&&x(T.map.channel),aoMapUv:Ft&&x(T.aoMap.channel),lightMapUv:Jt&&x(T.lightMap.channel),bumpMapUv:Vt&&x(T.bumpMap.channel),normalMapUv:he&&x(T.normalMap.channel),displacementMapUv:te&&x(T.displacementMap.channel),emissiveMapUv:ee&&x(T.emissiveMap.channel),metalnessMapUv:Me&&x(T.metalnessMap.channel),roughnessMapUv:C&&x(T.roughnessMap.channel),anisotropyMapUv:jt&&x(T.anisotropyMap.channel),clearcoatMapUv:Gt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:yt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:re&&x(T.sheenRoughnessMap.channel),specularMapUv:Ot&&x(T.specularMap.channel),specularColorMapUv:Lt&&x(T.specularColorMap.channel),specularIntensityMapUv:Ut&&x(T.specularIntensityMap.channel),transmissionMapUv:R&&x(T.transmissionMap.channel),thicknessMapUv:lt&&x(T.thicknessMap.channel),alphaMapUv:U&&x(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(he||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Wt||U),fog:!!rt,useFog:T.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:vt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&st.length>0,shadowMapType:r.shadowMap.type,toneMapping:wt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&Se.getTransfer(T.map.colorSpace)===Le,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===An,flipSided:T.side===un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:mt&&T.extensions.derivatives===!0,extensionFragDepth:mt&&T.extensions.fragDepth===!0,extensionDrawBuffers:mt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mt&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return oe.vertexUv1s=d.has(1),oe.vertexUv2s=d.has(2),oe.vertexUv3s=d.has(3),d.clear(),oe}function P(T){let I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(let st in T.defines)I.push(st),I.push(T.defines[st]);return T.isRawShaderMaterial===!1&&(E(I,T),N(I,T),I.push(r.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function E(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function N(T,I){c.disableAll(),I.isWebGL2&&c.enable(0),I.supportsVertexTextures&&c.enable(1),I.instancing&&c.enable(2),I.instancingColor&&c.enable(3),I.instancingMorph&&c.enable(4),I.matcap&&c.enable(5),I.envMap&&c.enable(6),I.normalMapObjectSpace&&c.enable(7),I.normalMapTangentSpace&&c.enable(8),I.clearcoat&&c.enable(9),I.iridescence&&c.enable(10),I.alphaTest&&c.enable(11),I.vertexColors&&c.enable(12),I.vertexAlphas&&c.enable(13),I.vertexUv1s&&c.enable(14),I.vertexUv2s&&c.enable(15),I.vertexUv3s&&c.enable(16),I.vertexTangents&&c.enable(17),I.anisotropy&&c.enable(18),I.alphaHash&&c.enable(19),I.batching&&c.enable(20),T.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.skinning&&c.enable(4),I.morphTargets&&c.enable(5),I.morphNormals&&c.enable(6),I.morphColors&&c.enable(7),I.premultipliedAlpha&&c.enable(8),I.shadowMapEnabled&&c.enable(9),I.useLegacyLights&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.alphaToCoverage&&c.enable(20),T.push(c.mask)}function z(T){let I=b[T.type],st;if(I){let ct=ri[I];st=$g.clone(ct.uniforms)}else st=T.uniforms;return st}function F(T,I){let st;for(let ct=0,k=p.length;ct<k;ct++){let rt=p[ct];if(rt.cacheKey===I){st=rt,++st.usedTimes;break}}return st===void 0&&(st=new sy(r,I,T,o),p.push(st)),st}function D(T){if(--T.usedTimes===0){let I=p.indexOf(T);p[I]=p[p.length-1],p.pop(),T.destroy()}}function $(T){f.remove(T)}function nt(){f.dispose()}return{getParameters:g,getProgramCacheKey:P,getUniforms:z,acquireProgram:F,releaseProgram:D,releaseShaderCache:$,programs:p,dispose:nt}}function ly(){let r=new WeakMap;function t(o){let u=r.get(o);return u===void 0&&(u={},r.set(o,u)),u}function e(o){r.delete(o)}function i(o,u,c){r.get(o)[u]=c}function a(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:a}}function cy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function _d(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xd(){let r=[],t=0,e=[],i=[],a=[];function o(){t=0,e.length=0,i.length=0,a.length=0}function u(m,v,y,M,b,x){let g=r[t];return g===void 0?(g={id:m.id,object:m,geometry:v,material:y,groupOrder:M,renderOrder:m.renderOrder,z:b,group:x},r[t]=g):(g.id=m.id,g.object=m,g.geometry=v,g.material=y,g.groupOrder=M,g.renderOrder=m.renderOrder,g.z=b,g.group=x),t++,g}function c(m,v,y,M,b,x){let g=u(m,v,y,M,b,x);y.transmission>0?i.push(g):y.transparent===!0?a.push(g):e.push(g)}function f(m,v,y,M,b,x){let g=u(m,v,y,M,b,x);y.transmission>0?i.unshift(g):y.transparent===!0?a.unshift(g):e.unshift(g)}function d(m,v){e.length>1&&e.sort(m||cy),i.length>1&&i.sort(v||_d),a.length>1&&a.sort(v||_d)}function p(){for(let m=t,v=r.length;m<v;m++){let y=r[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:a,init:o,push:c,unshift:f,finish:p,sort:d}}function uy(){let r=new WeakMap;function t(i,a){let o=r.get(i),u;return o===void 0?(u=new xd,r.set(i,[u])):a>=o.length?(u=new xd,o.push(u)):u=o[a],u}function e(){r=new WeakMap}return{get:t,dispose:e}}function fy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new pe};break;case"SpotLight":e={position:new B,direction:new B,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function hy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var dy=0;function py(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function my(r,t){let e=new fy,i=hy(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new B);let o=new B,u=new He,c=new He;function f(p,m){let v=0,y=0,M=0;for(let st=0;st<9;st++)a.probe[st].set(0,0,0);let b=0,x=0,g=0,P=0,E=0,N=0,z=0,F=0,D=0,$=0,nt=0;p.sort(py);let T=m===!0?Math.PI:1;for(let st=0,ct=p.length;st<ct;st++){let k=p[st],rt=k.color,H=k.intensity,at=k.distance,W=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=rt.r*H*T,y+=rt.g*H*T,M+=rt.b*H*T;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)a.probe[Q].addScaledVector(k.sh.coefficients[Q],H);nt++}else if(k.isDirectionalLight){let Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){let Y=k.shadow,ut=i.get(k);ut.shadowBias=Y.bias,ut.shadowNormalBias=Y.normalBias,ut.shadowRadius=Y.radius,ut.shadowMapSize=Y.mapSize,a.directionalShadow[b]=ut,a.directionalShadowMap[b]=W,a.directionalShadowMatrix[b]=k.shadow.matrix,N++}a.directional[b]=Q,b++}else if(k.isSpotLight){let Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(rt).multiplyScalar(H*T),Q.distance=at,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,a.spot[g]=Q;let Y=k.shadow;if(k.map&&(a.spotLightMap[D]=k.map,D++,Y.updateMatrices(k),k.castShadow&&$++),a.spotLightMatrix[g]=Y.matrix,k.castShadow){let ut=i.get(k);ut.shadowBias=Y.bias,ut.shadowNormalBias=Y.normalBias,ut.shadowRadius=Y.radius,ut.shadowMapSize=Y.mapSize,a.spotShadow[g]=ut,a.spotShadowMap[g]=W,F++}g++}else if(k.isRectAreaLight){let Q=e.get(k);Q.color.copy(rt).multiplyScalar(H),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),a.rectArea[P]=Q,P++}else if(k.isPointLight){let Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity*T),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){let Y=k.shadow,ut=i.get(k);ut.shadowBias=Y.bias,ut.shadowNormalBias=Y.normalBias,ut.shadowRadius=Y.radius,ut.shadowMapSize=Y.mapSize,ut.shadowCameraNear=Y.camera.near,ut.shadowCameraFar=Y.camera.far,a.pointShadow[x]=ut,a.pointShadowMap[x]=W,a.pointShadowMatrix[x]=k.shadow.matrix,z++}a.point[x]=Q,x++}else if(k.isHemisphereLight){let Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(H*T),Q.groundColor.copy(k.groundColor).multiplyScalar(H*T),a.hemi[E]=Q,E++}}P>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=St.LTC_FLOAT_1,a.rectAreaLTC2=St.LTC_FLOAT_2):(a.rectAreaLTC1=St.LTC_HALF_1,a.rectAreaLTC2=St.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=St.LTC_FLOAT_1,a.rectAreaLTC2=St.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=St.LTC_HALF_1,a.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=y,a.ambient[2]=M;let I=a.hash;(I.directionalLength!==b||I.pointLength!==x||I.spotLength!==g||I.rectAreaLength!==P||I.hemiLength!==E||I.numDirectionalShadows!==N||I.numPointShadows!==z||I.numSpotShadows!==F||I.numSpotMaps!==D||I.numLightProbes!==nt)&&(a.directional.length=b,a.spot.length=g,a.rectArea.length=P,a.point.length=x,a.hemi.length=E,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=z,a.pointShadowMap.length=z,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=z,a.spotLightMatrix.length=F+D-$,a.spotLightMap.length=D,a.numSpotLightShadowsWithMaps=$,a.numLightProbes=nt,I.directionalLength=b,I.pointLength=x,I.spotLength=g,I.rectAreaLength=P,I.hemiLength=E,I.numDirectionalShadows=N,I.numPointShadows=z,I.numSpotShadows=F,I.numSpotMaps=D,I.numLightProbes=nt,a.version=dy++)}function d(p,m){let v=0,y=0,M=0,b=0,x=0,g=m.matrixWorldInverse;for(let P=0,E=p.length;P<E;P++){let N=p[P];if(N.isDirectionalLight){let z=a.directional[v];z.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(g),v++}else if(N.isSpotLight){let z=a.spot[M];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(g),z.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(g),M++}else if(N.isRectAreaLight){let z=a.rectArea[b];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(g),c.identity(),u.copy(N.matrixWorld),u.premultiply(g),c.extractRotation(u),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),z.halfWidth.applyMatrix4(c),z.halfHeight.applyMatrix4(c),b++}else if(N.isPointLight){let z=a.point[y];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(g),y++}else if(N.isHemisphereLight){let z=a.hemi[x];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(g),x++}}}return{setup:f,setupView:d,state:a}}function vd(r,t){let e=new my(r,t),i=[],a=[];function o(){i.length=0,a.length=0}function u(m){i.push(m)}function c(m){a.push(m)}function f(m){e.setup(i,m)}function d(m){e.setupView(i,m)}return{init:o,state:{lightsArray:i,shadowsArray:a,lights:e},setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function gy(r,t){let e=new WeakMap;function i(o,u=0){let c=e.get(o),f;return c===void 0?(f=new vd(r,t),e.set(o,[f])):u>=c.length?(f=new vd(r,t),c.push(f)):f=c[u],f}function a(){e=new WeakMap}return{get:i,dispose:a}}var hu=class extends Sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},du=class extends Sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vy(r,t,e){let i=new Ks,a=new Xt,o=new Xt,u=new De,c=new hu({depthPacking:lg}),f=new du,d={},p=e.maxTextureSize,m={[Wi]:un,[un]:Wi,[An]:An},v=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:_y,fragmentShader:xy}),y=v.clone();y.defines.HORIZONTAL_PASS=1;let M=new Yn;M.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ae(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let g=this.type;this.render=function(F,D,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;let nt=r.getRenderTarget(),T=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),st=r.state;st.setBlending(Hi),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let ct=g!==Mi&&this.type===Mi,k=g===Mi&&this.type!==Mi;for(let rt=0,H=F.length;rt<H;rt++){let at=F[rt],W=at.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);let Q=W.getFrameExtents();if(a.multiply(Q),o.copy(W.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/Q.x),a.x=o.x*Q.x,W.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/Q.y),a.y=o.y*Q.y,W.mapSize.y=o.y)),W.map===null||ct===!0||k===!0){let ut=this.type!==Mi?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new wi(a.x,a.y,ut),W.map.texture.name=at.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let Y=W.getViewportCount();for(let ut=0;ut<Y;ut++){let pt=W.getViewport(ut);u.set(o.x*pt.x,o.y*pt.y,o.x*pt.z,o.y*pt.w),st.viewport(u),W.updateMatrices(at,ut),i=W.getFrustum(),N(D,$,W.camera,at,this.type)}W.isPointLightShadow!==!0&&this.type===Mi&&P(W,$),W.needsUpdate=!1}g=this.type,x.needsUpdate=!1,r.setRenderTarget(nt,T,I)};function P(F,D){let $=t.update(b);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new wi(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(D,null,$,v,b,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(D,null,$,y,b,null)}function E(F,D,$,nt){let T=null,I=$.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)T=I;else if(T=$.isPointLight===!0?f:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let st=T.uuid,ct=D.uuid,k=d[st];k===void 0&&(k={},d[st]=k);let rt=k[ct];rt===void 0&&(rt=T.clone(),k[ct]=rt,D.addEventListener("dispose",z)),T=rt}if(T.visible=D.visible,T.wireframe=D.wireframe,nt===Mi?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:m[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,$.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let st=r.properties.get(T);st.light=$}return T}function N(F,D,$,nt,T){if(F.visible===!1)return;if(F.layers.test(D.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===Mi)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,F.matrixWorld);let ct=t.update(F),k=F.material;if(Array.isArray(k)){let rt=ct.groups;for(let H=0,at=rt.length;H<at;H++){let W=rt[H],Q=k[W.materialIndex];if(Q&&Q.visible){let Y=E(F,Q,nt,T);F.onBeforeShadow(r,F,D,$,ct,Y,W),r.renderBufferDirect($,null,ct,Y,F,W),F.onAfterShadow(r,F,D,$,ct,Y,W)}}}else if(k.visible){let rt=E(F,k,nt,T);F.onBeforeShadow(r,F,D,$,ct,rt,null),r.renderBufferDirect($,null,ct,rt,F,null),F.onAfterShadow(r,F,D,$,ct,rt,null)}}let st=F.children;for(let ct=0,k=st.length;ct<k;ct++)N(st[ct],D,$,nt,T)}function z(F){F.target.removeEventListener("dispose",z);for(let $ in d){let nt=d[$],T=F.target.uuid;T in nt&&(nt[T].dispose(),delete nt[T])}}}function yy(r,t,e){let i=e.isWebGL2;function a(){let U=!1,_t=new De,Z=null,mt=new De(0,0,0,0);return{setMask:function(wt){Z!==wt&&!U&&(r.colorMask(wt,wt,wt,wt),Z=wt)},setLocked:function(wt){U=wt},setClear:function(wt,oe,_e,ve,Re){Re===!0&&(wt*=ve,oe*=ve,_e*=ve),_t.set(wt,oe,_e,ve),mt.equals(_t)===!1&&(r.clearColor(wt,oe,_e,ve),mt.copy(_t))},reset:function(){U=!1,Z=null,mt.set(-1,0,0,0)}}}function o(){let U=!1,_t=null,Z=null,mt=null;return{setTest:function(wt){wt?Et(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(wt){_t!==wt&&!U&&(r.depthMask(wt),_t=wt)},setFunc:function(wt){if(Z!==wt){switch(wt){case Fm:r.depthFunc(r.NEVER);break;case Bm:r.depthFunc(r.ALWAYS);break;case zm:r.depthFunc(r.LESS);break;case oo:r.depthFunc(r.LEQUAL);break;case Hm:r.depthFunc(r.EQUAL);break;case Vm:r.depthFunc(r.GEQUAL);break;case Gm:r.depthFunc(r.GREATER);break;case Wm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=wt}},setLocked:function(wt){U=wt},setClear:function(wt){mt!==wt&&(r.clearDepth(wt),mt=wt)},reset:function(){U=!1,_t=null,Z=null,mt=null}}}function u(){let U=!1,_t=null,Z=null,mt=null,wt=null,oe=null,_e=null,ve=null,Re=null;return{setTest:function(me){U||(me?Et(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(me){_t!==me&&!U&&(r.stencilMask(me),_t=me)},setFunc:function(me,be,we){(Z!==me||mt!==be||wt!==we)&&(r.stencilFunc(me,be,we),Z=me,mt=be,wt=we)},setOp:function(me,be,we){(oe!==me||_e!==be||ve!==we)&&(r.stencilOp(me,be,we),oe=me,_e=be,ve=we)},setLocked:function(me){U=me},setClear:function(me){Re!==me&&(r.clearStencil(me),Re=me)},reset:function(){U=!1,_t=null,Z=null,mt=null,wt=null,oe=null,_e=null,ve=null,Re=null}}}let c=new a,f=new o,d=new u,p=new WeakMap,m=new WeakMap,v={},y={},M=new WeakMap,b=[],x=null,g=!1,P=null,E=null,N=null,z=null,F=null,D=null,$=null,nt=new pe(0,0,0),T=0,I=!1,st=null,ct=null,k=null,rt=null,H=null,at=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Q=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=Q>=2);let ut=null,pt={},vt=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),ft=new De().fromArray(vt),Mt=new De().fromArray(V);function Ht(U,_t,Z,mt){let wt=new Uint8Array(4),oe=r.createTexture();r.bindTexture(U,oe),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _e=0;_e<Z;_e++)i&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(_t,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(_t+_e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return oe}let Nt={};Nt[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),Nt[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Nt[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Nt[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Et(r.DEPTH_TEST),f.setFunc(oo),te(!1),ee(Jf),Et(r.CULL_FACE),Vt(Hi);function Et(U){v[U]!==!0&&(r.enable(U),v[U]=!0)}function fe(U){v[U]!==!1&&(r.disable(U),v[U]=!1)}function Wt(U,_t){return y[U]!==_t?(r.bindFramebuffer(U,_t),y[U]=_t,i&&(U===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=_t),U===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=_t)),!0):!1}function X(U,_t){let Z=b,mt=!1;if(U){Z=M.get(_t),Z===void 0&&(Z=[],M.set(_t,Z));let wt=U.textures;if(Z.length!==wt.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let oe=0,_e=wt.length;oe<_e;oe++)Z[oe]=r.COLOR_ATTACHMENT0+oe;Z.length=wt.length,mt=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,mt=!0);if(mt)if(e.isWebGL2)r.drawBuffers(Z);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ke(U){return x!==U?(r.useProgram(U),x=U,!0):!1}let Ft={[gr]:r.FUNC_ADD,[bm]:r.FUNC_SUBTRACT,[wm]:r.FUNC_REVERSE_SUBTRACT};if(i)Ft[th]=r.MIN,Ft[eh]=r.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(Ft[th]=U.MIN_EXT,Ft[eh]=U.MAX_EXT)}let Jt={[Tm]:r.ZERO,[Em]:r.ONE,[Am]:r.SRC_COLOR,[$c]:r.SRC_ALPHA,[Dm]:r.SRC_ALPHA_SATURATE,[Rm]:r.DST_COLOR,[Pm]:r.DST_ALPHA,[Cm]:r.ONE_MINUS_SRC_COLOR,[Yc]:r.ONE_MINUS_SRC_ALPHA,[Im]:r.ONE_MINUS_DST_COLOR,[Lm]:r.ONE_MINUS_DST_ALPHA,[Nm]:r.CONSTANT_COLOR,[Om]:r.ONE_MINUS_CONSTANT_COLOR,[Um]:r.CONSTANT_ALPHA,[km]:r.ONE_MINUS_CONSTANT_ALPHA};function Vt(U,_t,Z,mt,wt,oe,_e,ve,Re,me){if(U===Hi){g===!0&&(fe(r.BLEND),g=!1);return}if(g===!1&&(Et(r.BLEND),g=!0),U!==Sm){if(U!==P||me!==I){if((E!==gr||F!==gr)&&(r.blendEquation(r.FUNC_ADD),E=gr,F=gr),me)switch(U){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ao:r.blendFunc(r.ONE,r.ONE);break;case jf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ao:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case jf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}N=null,z=null,D=null,$=null,nt.set(0,0,0),T=0,P=U,I=me}return}wt=wt||_t,oe=oe||Z,_e=_e||mt,(_t!==E||wt!==F)&&(r.blendEquationSeparate(Ft[_t],Ft[wt]),E=_t,F=wt),(Z!==N||mt!==z||oe!==D||_e!==$)&&(r.blendFuncSeparate(Jt[Z],Jt[mt],Jt[oe],Jt[_e]),N=Z,z=mt,D=oe,$=_e),(ve.equals(nt)===!1||Re!==T)&&(r.blendColor(ve.r,ve.g,ve.b,Re),nt.copy(ve),T=Re),P=U,I=!1}function he(U,_t){U.side===An?fe(r.CULL_FACE):Et(r.CULL_FACE);let Z=U.side===un;_t&&(Z=!Z),te(Z),U.blending===ns&&U.transparent===!1?Vt(Hi):Vt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),f.setFunc(U.depthFunc),f.setTest(U.depthTest),f.setMask(U.depthWrite),c.setMask(U.colorWrite);let mt=U.stencilWrite;d.setTest(mt),mt&&(d.setMask(U.stencilWriteMask),d.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),d.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Et(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){st!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),st=U)}function ee(U){U!==vm?(Et(r.CULL_FACE),U!==ct&&(U===Jf?r.cullFace(r.BACK):U===ym?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),ct=U}function Me(U){U!==k&&(W&&r.lineWidth(U),k=U)}function C(U,_t,Z){U?(Et(r.POLYGON_OFFSET_FILL),(rt!==_t||H!==Z)&&(r.polygonOffset(_t,Z),rt=_t,H=Z)):fe(r.POLYGON_OFFSET_FILL)}function w(U){U?Et(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function it(U){U===void 0&&(U=r.TEXTURE0+at-1),ut!==U&&(r.activeTexture(U),ut=U)}function ot(U,_t,Z){Z===void 0&&(ut===null?Z=r.TEXTURE0+at-1:Z=ut);let mt=pt[Z];mt===void 0&&(mt={type:void 0,texture:void 0},pt[Z]=mt),(mt.type!==U||mt.texture!==_t)&&(ut!==Z&&(r.activeTexture(Z),ut=Z),r.bindTexture(U,_t||Nt[U]),mt.type=U,mt.texture=_t)}function gt(){let U=pt[ut];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function dt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function jt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){ft.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ft.copy(U))}function Ut(U){Mt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Mt.copy(U))}function R(U,_t){let Z=m.get(_t);Z===void 0&&(Z=new WeakMap,m.set(_t,Z));let mt=Z.get(U);mt===void 0&&(mt=r.getUniformBlockIndex(_t,U.name),Z.set(U,mt))}function lt(U,_t){let mt=m.get(_t).get(U);p.get(_t)!==mt&&(r.uniformBlockBinding(_t,mt,U.__bindingPointIndex),p.set(_t,mt))}function Rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ut=null,pt={},y={},M=new WeakMap,b=[],x=null,g=!1,P=null,E=null,N=null,z=null,F=null,D=null,$=null,nt=new pe(0,0,0),T=0,I=!1,st=null,ct=null,k=null,rt=null,H=null,ft.set(0,0,r.canvas.width,r.canvas.height),Mt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Et,disable:fe,bindFramebuffer:Wt,drawBuffers:X,useProgram:ke,setBlending:Vt,setMaterial:he,setFlipSided:te,setCullFace:ee,setLineWidth:Me,setPolygonOffset:C,setScissorTest:w,activeTexture:it,bindTexture:ot,unbindTexture:gt,compressedTexImage2D:dt,compressedTexImage3D:jt,texImage2D:re,texImage3D:Ot,updateUBOMapping:R,uniformBlockBinding:lt,texStorage2D:xt,texStorage3D:Ce,texSubImage2D:Gt,texSubImage3D:yt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Yt,scissor:Lt,viewport:Ut,reset:Rt}}function My(r,t,e,i,a,o,u){let c=a.isWebGL2,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,m=new WeakMap,v,y=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,w){return M?new OffscreenCanvas(C,w):go("canvas")}function x(C,w,it,ot){let gt=1,dt=Me(C);if((dt.width>ot||dt.height>ot)&&(gt=ot/Math.max(dt.width,dt.height)),gt<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let jt=w?mo:Math.floor,Gt=jt(gt*dt.width),yt=jt(gt*dt.height);v===void 0&&(v=b(Gt,yt));let bt=it?b(Gt,yt):v;return bt.width=Gt,bt.height=yt,bt.getContext("2d").drawImage(C,0,0,Gt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Gt+"x"+yt+")."),bt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),C;return C}function g(C){let w=Me(C);return eu(w.width)&&eu(w.height)}function P(C){return c?!1:C.wrapS!==Xn||C.wrapT!==Xn||C.minFilter!==gn&&C.minFilter!==Sn}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==gn&&C.minFilter!==Sn}function N(C){r.generateMipmap(C)}function z(C,w,it,ot,gt=!1){if(c===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt=w;if(w===r.RED&&(it===r.FLOAT&&(dt=r.R32F),it===r.HALF_FLOAT&&(dt=r.R16F),it===r.UNSIGNED_BYTE&&(dt=r.R8)),w===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(dt=r.R8UI),it===r.UNSIGNED_SHORT&&(dt=r.R16UI),it===r.UNSIGNED_INT&&(dt=r.R32UI),it===r.BYTE&&(dt=r.R8I),it===r.SHORT&&(dt=r.R16I),it===r.INT&&(dt=r.R32I)),w===r.RG&&(it===r.FLOAT&&(dt=r.RG32F),it===r.HALF_FLOAT&&(dt=r.RG16F),it===r.UNSIGNED_BYTE&&(dt=r.RG8)),w===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(dt=r.RG8UI),it===r.UNSIGNED_SHORT&&(dt=r.RG16UI),it===r.UNSIGNED_INT&&(dt=r.RG32UI),it===r.BYTE&&(dt=r.RG8I),it===r.SHORT&&(dt=r.RG16I),it===r.INT&&(dt=r.RG32I)),w===r.RGBA){let jt=gt?uo:Se.getTransfer(ot);it===r.FLOAT&&(dt=r.RGBA32F),it===r.HALF_FLOAT&&(dt=r.RGBA16F),it===r.UNSIGNED_BYTE&&(dt=jt===Le?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function F(C,w,it){return E(C,it)===!0||C.isFramebufferTexture&&C.minFilter!==gn&&C.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function D(C){return C===gn||C===nh||C===ks?r.NEAREST:r.LINEAR}function $(C){let w=C.target;w.removeEventListener("dispose",$),T(w),w.isVideoTexture&&m.delete(w)}function nt(C){let w=C.target;w.removeEventListener("dispose",nt),st(w)}function T(C){let w=i.get(C);if(w.__webglInit===void 0)return;let it=C.source,ot=y.get(it);if(ot){let gt=ot[w.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&I(C),Object.keys(ot).length===0&&y.delete(it)}i.remove(C)}function I(C){let w=i.get(C);r.deleteTexture(w.__webglTexture);let it=C.source,ot=y.get(it);delete ot[w.__cacheKey],u.memory.textures--}function st(C){let w=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let gt=0;gt<w.__webglFramebuffer[ot].length;gt++)r.deleteFramebuffer(w.__webglFramebuffer[ot][gt]);else r.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)r.deleteFramebuffer(w.__webglFramebuffer[ot]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let it=C.textures;for(let ot=0,gt=it.length;ot<gt;ot++){let dt=i.get(it[ot]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),u.memory.textures--),i.remove(it[ot])}i.remove(C)}let ct=0;function k(){ct=0}function rt(){let C=ct;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),ct+=1,C}function H(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function at(C,w){let it=i.get(C);if(C.isVideoTexture&&te(C),C.isRenderTargetTexture===!1&&C.version>0&&it.__version!==C.version){let ot=C.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(it,C,w);return}}e.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+w)}function W(C,w){let it=i.get(C);if(C.version>0&&it.__version!==C.version){Mt(it,C,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+w)}function Q(C,w){let it=i.get(C);if(C.version>0&&it.__version!==C.version){Mt(it,C,w);return}e.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+w)}function Y(C,w){let it=i.get(C);if(C.version>0&&it.__version!==C.version){Ht(it,C,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+w)}let ut={[jc]:r.REPEAT,[Xn]:r.CLAMP_TO_EDGE,[Qc]:r.MIRRORED_REPEAT},pt={[gn]:r.NEAREST,[nh]:r.NEAREST_MIPMAP_NEAREST,[ks]:r.NEAREST_MIPMAP_LINEAR,[Sn]:r.LINEAR,[mc]:r.LINEAR_MIPMAP_NEAREST,[xr]:r.LINEAR_MIPMAP_LINEAR},vt={[ug]:r.NEVER,[gg]:r.ALWAYS,[fg]:r.LESS,[Nd]:r.LEQUAL,[hg]:r.EQUAL,[mg]:r.GEQUAL,[dg]:r.GREATER,[pg]:r.NOTEQUAL};function V(C,w,it){if(w.type===Si&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Sn||w.magFilter===mc||w.magFilter===ks||w.magFilter===xr||w.minFilter===Sn||w.minFilter===mc||w.minFilter===ks||w.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),it?(r.texParameteri(C,r.TEXTURE_WRAP_S,ut[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ut[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ut[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,pt[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,pt[w.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Xn||w.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,D(w.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,D(w.minFilter)),w.minFilter!==gn&&w.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,vt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gn||w.minFilter!==ks&&w.minFilter!==xr||w.type===Si&&t.has("OES_texture_float_linear")===!1||c===!1&&w.type===Xs&&t.has("OES_texture_half_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let ot=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ft(C,w){let it=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",$));let ot=w.source,gt=y.get(ot);gt===void 0&&(gt={},y.set(ot,gt));let dt=H(w);if(dt!==C.__cacheKey){gt[dt]===void 0&&(gt[dt]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,it=!0),gt[dt].usedTimes++;let jt=gt[C.__cacheKey];jt!==void 0&&(gt[C.__cacheKey].usedTimes--,jt.usedTimes===0&&I(w)),C.__cacheKey=dt,C.__webglTexture=gt[dt].texture}return it}function Mt(C,w,it){let ot=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ot=r.TEXTURE_3D);let gt=ft(C,w),dt=w.source;e.bindTexture(ot,C.__webglTexture,r.TEXTURE0+it);let jt=i.get(dt);if(dt.version!==jt.__version||gt===!0){e.activeTexture(r.TEXTURE0+it);let Gt=Se.getPrimaries(Se.workingColorSpace),yt=w.colorSpace===Bi?null:Se.getPrimaries(w.colorSpace),bt=w.colorSpace===Bi||Gt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Yt=P(w)&&g(w.image)===!1,xt=x(w.image,Yt,!1,a.maxTextureSize);xt=ee(w,xt);let Ce=g(xt)||c,re=o.convert(w.format,w.colorSpace),Ot=o.convert(w.type),Lt=z(w.internalFormat,re,Ot,w.colorSpace,w.isVideoTexture);V(ot,w,Ce);let Ut,R=w.mipmaps,lt=c&&w.isVideoTexture!==!0&&Lt!==Id,Rt=jt.__version===void 0||gt===!0,U=dt.dataReady,_t=F(w,xt,Ce);if(w.isDepthTexture)Lt=r.DEPTH_COMPONENT,c?w.type===Si?Lt=r.DEPTH_COMPONENT32F:w.type===zi?Lt=r.DEPTH_COMPONENT24:w.type===vr?Lt=r.DEPTH24_STENCIL8:Lt=r.DEPTH_COMPONENT16:w.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===yr&&Lt===r.DEPTH_COMPONENT&&w.type!==Ru&&w.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=zi,Ot=o.convert(w.type)),w.format===os&&Lt===r.DEPTH_COMPONENT&&(Lt=r.DEPTH_STENCIL,w.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=vr,Ot=o.convert(w.type))),Rt&&(lt?e.texStorage2D(r.TEXTURE_2D,1,Lt,xt.width,xt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,xt.width,xt.height,0,re,Ot,null));else if(w.isDataTexture)if(R.length>0&&Ce){lt&&Rt&&e.texStorage2D(r.TEXTURE_2D,_t,Lt,R[0].width,R[0].height);for(let Z=0,mt=R.length;Z<mt;Z++)Ut=R[Z],lt?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Ut.width,Ut.height,re,Ot,Ut.data):e.texImage2D(r.TEXTURE_2D,Z,Lt,Ut.width,Ut.height,0,re,Ot,Ut.data);w.generateMipmaps=!1}else lt?(Rt&&e.texStorage2D(r.TEXTURE_2D,_t,Lt,xt.width,xt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt.width,xt.height,re,Ot,xt.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,xt.width,xt.height,0,re,Ot,xt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&Rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Lt,R[0].width,R[0].height,xt.depth);for(let Z=0,mt=R.length;Z<mt;Z++)Ut=R[Z],w.format!==Zn?re!==null?lt?U&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Ut.width,Ut.height,xt.depth,re,Ut.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Lt,Ut.width,Ut.height,xt.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Ut.width,Ut.height,xt.depth,re,Ot,Ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,Lt,Ut.width,Ut.height,xt.depth,0,re,Ot,Ut.data)}else{lt&&Rt&&e.texStorage2D(r.TEXTURE_2D,_t,Lt,R[0].width,R[0].height);for(let Z=0,mt=R.length;Z<mt;Z++)Ut=R[Z],w.format!==Zn?re!==null?lt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Ut.width,Ut.height,re,Ut.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,Lt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Ut.width,Ut.height,re,Ot,Ut.data):e.texImage2D(r.TEXTURE_2D,Z,Lt,Ut.width,Ut.height,0,re,Ot,Ut.data)}else if(w.isDataArrayTexture)lt?(Rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Lt,xt.width,xt.height,xt.depth),U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,re,Ot,xt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,xt.width,xt.height,xt.depth,0,re,Ot,xt.data);else if(w.isData3DTexture)lt?(Rt&&e.texStorage3D(r.TEXTURE_3D,_t,Lt,xt.width,xt.height,xt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,re,Ot,xt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,xt.width,xt.height,xt.depth,0,re,Ot,xt.data);else if(w.isFramebufferTexture){if(Rt)if(lt)e.texStorage2D(r.TEXTURE_2D,_t,Lt,xt.width,xt.height);else{let Z=xt.width,mt=xt.height;for(let wt=0;wt<_t;wt++)e.texImage2D(r.TEXTURE_2D,wt,Lt,Z,mt,0,re,Ot,null),Z>>=1,mt>>=1}}else if(R.length>0&&Ce){if(lt&&Rt){let Z=Me(R[0]);e.texStorage2D(r.TEXTURE_2D,_t,Lt,Z.width,Z.height)}for(let Z=0,mt=R.length;Z<mt;Z++)Ut=R[Z],lt?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,re,Ot,Ut):e.texImage2D(r.TEXTURE_2D,Z,Lt,re,Ot,Ut);w.generateMipmaps=!1}else if(lt){if(Rt){let Z=Me(xt);e.texStorage2D(r.TEXTURE_2D,_t,Lt,Z.width,Z.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,re,Ot,xt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,re,Ot,xt);E(w,Ce)&&N(ot),jt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ht(C,w,it){if(w.image.length!==6)return;let ot=ft(C,w),gt=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+it);let dt=i.get(gt);if(gt.version!==dt.__version||ot===!0){e.activeTexture(r.TEXTURE0+it);let jt=Se.getPrimaries(Se.workingColorSpace),Gt=w.colorSpace===Bi?null:Se.getPrimaries(w.colorSpace),yt=w.colorSpace===Bi||jt===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let bt=w.isCompressedTexture||w.image[0].isCompressedTexture,Yt=w.image[0]&&w.image[0].isDataTexture,xt=[];for(let Z=0;Z<6;Z++)!bt&&!Yt?xt[Z]=x(w.image[Z],!1,!0,a.maxCubemapSize):xt[Z]=Yt?w.image[Z].image:w.image[Z],xt[Z]=ee(w,xt[Z]);let Ce=xt[0],re=g(Ce)||c,Ot=o.convert(w.format,w.colorSpace),Lt=o.convert(w.type),Ut=z(w.internalFormat,Ot,Lt,w.colorSpace),R=c&&w.isVideoTexture!==!0,lt=dt.__version===void 0||ot===!0,Rt=gt.dataReady,U=F(w,Ce,re);V(r.TEXTURE_CUBE_MAP,w,re);let _t;if(bt){R&&lt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,U,Ut,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){_t=xt[Z].mipmaps;for(let mt=0;mt<_t.length;mt++){let wt=_t[mt];w.format!==Zn?Ot!==null?R?Rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,wt.width,wt.height,Ot,wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Ut,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,wt.width,wt.height,Ot,Lt,wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Ut,wt.width,wt.height,0,Ot,Lt,wt.data)}}}else{if(_t=w.mipmaps,R&&lt){_t.length>0&&U++;let Z=Me(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,U,Ut,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Yt){R?Rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xt[Z].width,xt[Z].height,Ot,Lt,xt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ut,xt[Z].width,xt[Z].height,0,Ot,Lt,xt[Z].data);for(let mt=0;mt<_t.length;mt++){let oe=_t[mt].image[Z].image;R?Rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,oe.width,oe.height,Ot,Lt,oe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Ut,oe.width,oe.height,0,Ot,Lt,oe.data)}}else{R?Rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ot,Lt,xt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ut,Ot,Lt,xt[Z]);for(let mt=0;mt<_t.length;mt++){let wt=_t[mt];R?Rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,Ot,Lt,wt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Ut,Ot,Lt,wt.image[Z])}}}E(w,re)&&N(r.TEXTURE_CUBE_MAP),dt.__version=gt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Nt(C,w,it,ot,gt,dt){let jt=o.convert(it.format,it.colorSpace),Gt=o.convert(it.type),yt=z(it.internalFormat,jt,Gt,it.colorSpace);if(!i.get(w).__hasExternalTextures){let Yt=Math.max(1,w.width>>dt),xt=Math.max(1,w.height>>dt);gt===r.TEXTURE_3D||gt===r.TEXTURE_2D_ARRAY?e.texImage3D(gt,dt,yt,Yt,xt,w.depth,0,jt,Gt,null):e.texImage2D(gt,dt,yt,Yt,xt,0,jt,Gt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),he(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,gt,i.get(it).__webglTexture,0,Vt(w)):(gt===r.TEXTURE_2D||gt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,gt,i.get(it).__webglTexture,dt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(C,w,it){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let ot=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(it||he(w)){let gt=w.depthTexture;gt&&gt.isDepthTexture&&(gt.type===Si?ot=r.DEPTH_COMPONENT32F:gt.type===zi&&(ot=r.DEPTH_COMPONENT24));let dt=Vt(w);he(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,ot,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,ot,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,ot,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let ot=Vt(w);it&&he(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,w.width,w.height):he(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{let ot=w.textures;for(let gt=0;gt<ot.length;gt++){let dt=ot[gt],jt=o.convert(dt.format,dt.colorSpace),Gt=o.convert(dt.type),yt=z(dt.internalFormat,jt,Gt,dt.colorSpace),bt=Vt(w);it&&he(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,yt,w.width,w.height):he(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,bt,yt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,yt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),at(w.depthTexture,0);let ot=i.get(w.depthTexture).__webglTexture,gt=Vt(w);if(w.depthTexture.format===yr)he(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,gt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(w.depthTexture.format===os)he(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,gt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Wt(C){let w=i.get(C),it=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,C)}else if(it){w.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ot]),w.__webglDepthbuffer[ot]=r.createRenderbuffer(),Et(w.__webglDepthbuffer[ot],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Et(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function X(C,w,it){let ot=i.get(C);w!==void 0&&Nt(ot.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&Wt(C)}function ke(C){let w=C.texture,it=i.get(C),ot=i.get(w);C.addEventListener("dispose",nt);let gt=C.textures,dt=C.isWebGLCubeRenderTarget===!0,jt=gt.length>1,Gt=g(C)||c;if(jt||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=w.version,u.memory.textures++),dt){it.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(c&&w.mipmaps&&w.mipmaps.length>0){it.__webglFramebuffer[yt]=[];for(let bt=0;bt<w.mipmaps.length;bt++)it.__webglFramebuffer[yt][bt]=r.createFramebuffer()}else it.__webglFramebuffer[yt]=r.createFramebuffer()}else{if(c&&w.mipmaps&&w.mipmaps.length>0){it.__webglFramebuffer=[];for(let yt=0;yt<w.mipmaps.length;yt++)it.__webglFramebuffer[yt]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(jt)if(a.drawBuffers)for(let yt=0,bt=gt.length;yt<bt;yt++){let Yt=i.get(gt[yt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&he(C)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let yt=0;yt<gt.length;yt++){let bt=gt[yt];it.__webglColorRenderbuffer[yt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[yt]);let Yt=o.convert(bt.format,bt.colorSpace),xt=o.convert(bt.type),Ce=z(bt.internalFormat,Yt,xt,bt.colorSpace,C.isXRRenderTarget===!0),re=Vt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,re,Ce,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,it.__webglColorRenderbuffer[yt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),Et(it.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),V(r.TEXTURE_CUBE_MAP,w,Gt);for(let yt=0;yt<6;yt++)if(c&&w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)Nt(it.__webglFramebuffer[yt][bt],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,bt);else Nt(it.__webglFramebuffer[yt],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);E(w,Gt)&&N(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(jt){for(let yt=0,bt=gt.length;yt<bt;yt++){let Yt=gt[yt],xt=i.get(Yt);e.bindTexture(r.TEXTURE_2D,xt.__webglTexture),V(r.TEXTURE_2D,Yt,Gt),Nt(it.__webglFramebuffer,C,Yt,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,0),E(Yt,Gt)&&N(r.TEXTURE_2D)}e.unbindTexture()}else{let yt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?yt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(yt,ot.__webglTexture),V(yt,w,Gt),c&&w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)Nt(it.__webglFramebuffer[bt],C,w,r.COLOR_ATTACHMENT0,yt,bt);else Nt(it.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,yt,0);E(w,Gt)&&N(yt),e.unbindTexture()}C.depthBuffer&&Wt(C)}function Ft(C){let w=g(C)||c,it=C.textures;for(let ot=0,gt=it.length;ot<gt;ot++){let dt=it[ot];if(E(dt,w)){let jt=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Gt=i.get(dt).__webglTexture;e.bindTexture(jt,Gt),N(jt),e.unbindTexture()}}}function Jt(C){if(c&&C.samples>0&&he(C)===!1){let w=C.textures,it=C.width,ot=C.height,gt=r.COLOR_BUFFER_BIT,dt=[],jt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=i.get(C),yt=w.length>1;if(yt)for(let bt=0;bt<w.length;bt++)e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let bt=0;bt<w.length;bt++){dt.push(r.COLOR_ATTACHMENT0+bt),C.depthBuffer&&dt.push(jt);let Yt=Gt.__ignoreDepthValues!==void 0?Gt.__ignoreDepthValues:!1;if(Yt===!1&&(C.depthBuffer&&(gt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(gt|=r.STENCIL_BUFFER_BIT)),yt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[bt]),Yt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[jt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[jt])),yt){let xt=i.get(w[bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xt,0)}r.blitFramebuffer(0,0,it,ot,0,0,it,ot,gt,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),yt)for(let bt=0;bt<w.length;bt++){e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[bt]);let Yt=i.get(w[bt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}}function Vt(C){return Math.min(a.maxSamples,C.samples)}function he(C){let w=i.get(C);return c&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function te(C){let w=u.render.frame;m.get(C)!==w&&(m.set(C,w),C.update())}function ee(C,w){let it=C.colorSpace,ot=C.format,gt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===tu||it!==qi&&it!==Bi&&(Se.getTransfer(it)===Le?c===!1?t.has("EXT_sRGB")===!0&&ot===Zn?(C.format=tu,C.minFilter=Sn,C.generateMipmaps=!1):w=_o.sRGBToLinear(w):(ot!==Zn||gt!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),w}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=k,this.setTexture2D=at,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=X,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=he}function Sy(r,t,e){let i=e.isWebGL2;function a(o,u=Bi){let c,f=Se.getTransfer(u);if(o===Gi)return r.UNSIGNED_BYTE;if(o===Ad)return r.UNSIGNED_SHORT_4_4_4_4;if(o===Cd)return r.UNSIGNED_SHORT_5_5_5_1;if(o===Qm)return r.BYTE;if(o===tg)return r.SHORT;if(o===Ru)return r.UNSIGNED_SHORT;if(o===Ed)return r.INT;if(o===zi)return r.UNSIGNED_INT;if(o===Si)return r.FLOAT;if(o===Xs)return i?r.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===eg)return r.ALPHA;if(o===Zn)return r.RGBA;if(o===ng)return r.LUMINANCE;if(o===ig)return r.LUMINANCE_ALPHA;if(o===yr)return r.DEPTH_COMPONENT;if(o===os)return r.DEPTH_STENCIL;if(o===tu)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===rg)return r.RED;if(o===Pd)return r.RED_INTEGER;if(o===sg)return r.RG;if(o===Ld)return r.RG_INTEGER;if(o===Rd)return r.RGBA_INTEGER;if(o===gc||o===_c||o===xc||o===vc)if(f===Le)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===_c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===_c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ih||o===rh||o===sh||o===ah)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===ih)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Id)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===oh||o===lh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(o===oh)return f===Le?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===lh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===ch||o===uh||o===fh||o===hh||o===dh||o===ph||o===mh||o===gh||o===_h||o===xh||o===vh||o===yh||o===Mh||o===Sh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(o===ch)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===uh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===fh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===hh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===dh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ph)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===mh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===gh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===_h)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===xh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===vh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===yh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Mh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Sh)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===yc||o===bh||o===wh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(o===yc)return f===Le?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===ag||o===Th||o===Eh||o===Ah)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(o===yc)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Th)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Eh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ah)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===vr?i?r.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[o]!==void 0?r[o]:null}return{convert:a}}var pu=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},si=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},by={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,o=null,u=null,c=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(let b of t.hand.values()){let x=e.getJointPose(b,i),g=this._getHandJoint(d,b);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],v=p.position.distanceTo(m.position),y=.02,M=.005;d.inputState.pinching&&v>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(by)))}return c!==null&&(c.visible=a!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new si;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let a=new Cn,o=t.properties.get(a);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}render(t,e){if(this.texture!==null){if(this.mesh===null){let i=e.cameras[0].viewport,a=new ci({extensions:{fragDepth:!0},vertexShader:wy,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ae(new cs(20,20),a)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},gu=class extends ai{constructor(t,e){super();let i=this,a=null,o=1,u=null,c="local-floor",f=1,d=null,p=null,m=null,v=null,y=null,M=null,b=new mu,x=e.getContextAttributes(),g=null,P=null,E=[],N=[],z=new Xt,F=null,D=new cn;D.layers.enable(1),D.viewport=new De;let $=new cn;$.layers.enable(2),$.viewport=new De;let nt=[D,$],T=new pu;T.layers.enable(1),T.layers.enable(2);let I=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ft=E[V];return ft===void 0&&(ft=new qs,E[V]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(V){let ft=E[V];return ft===void 0&&(ft=new qs,E[V]=ft),ft.getGripSpace()},this.getHand=function(V){let ft=E[V];return ft===void 0&&(ft=new qs,E[V]=ft),ft.getHandSpace()};function ct(V){let ft=N.indexOf(V.inputSource);if(ft===-1)return;let Mt=E[ft];Mt!==void 0&&(Mt.update(V.inputSource,V.frame,d||u),Mt.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){a.removeEventListener("select",ct),a.removeEventListener("selectstart",ct),a.removeEventListener("selectend",ct),a.removeEventListener("squeeze",ct),a.removeEventListener("squeezestart",ct),a.removeEventListener("squeezeend",ct),a.removeEventListener("end",k),a.removeEventListener("inputsourceschange",rt);for(let V=0;V<E.length;V++){let ft=N[V];ft!==null&&(N[V]=null,E[V].disconnect(ft))}I=null,st=null,b.reset(),t.setRenderTarget(g),y=null,v=null,m=null,a=null,P=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){c=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(V){d=V},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(V){if(a=V,a!==null){if(g=t.getRenderTarget(),a.addEventListener("select",ct),a.addEventListener("selectstart",ct),a.addEventListener("selectend",ct),a.addEventListener("squeeze",ct),a.addEventListener("squeezestart",ct),a.addEventListener("squeezeend",ct),a.addEventListener("end",k),a.addEventListener("inputsourceschange",rt),x.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(z),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ft={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(a,e,ft),a.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new wi(y.framebufferWidth,y.framebufferHeight,{format:Zn,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ft=null,Mt=null,Ht=null;x.depth&&(Ht=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=x.stencil?os:yr,Mt=x.stencil?vr:zi);let Nt={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:o};m=new XRWebGLBinding(a,e),v=m.createProjectionLayer(Nt),a.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),P=new wi(v.textureWidth,v.textureHeight,{format:Zn,type:Gi,depthTexture:new Eo(v.textureWidth,v.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Et=t.properties.get(P);Et.__ignoreDepthValues=v.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await a.requestReferenceSpace(c),vt.setContext(a),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function rt(V){for(let ft=0;ft<V.removed.length;ft++){let Mt=V.removed[ft],Ht=N.indexOf(Mt);Ht>=0&&(N[Ht]=null,E[Ht].disconnect(Mt))}for(let ft=0;ft<V.added.length;ft++){let Mt=V.added[ft],Ht=N.indexOf(Mt);if(Ht===-1){for(let Et=0;Et<E.length;Et++)if(Et>=N.length){N.push(Mt),Ht=Et;break}else if(N[Et]===null){N[Et]=Mt,Ht=Et;break}if(Ht===-1)break}let Nt=E[Ht];Nt&&Nt.connect(Mt)}}let H=new B,at=new B;function W(V,ft,Mt){H.setFromMatrixPosition(ft.matrixWorld),at.setFromMatrixPosition(Mt.matrixWorld);let Ht=H.distanceTo(at),Nt=ft.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,fe=Nt[14]/(Nt[10]-1),Wt=Nt[14]/(Nt[10]+1),X=(Nt[9]+1)/Nt[5],ke=(Nt[9]-1)/Nt[5],Ft=(Nt[8]-1)/Nt[0],Jt=(Et[8]+1)/Et[0],Vt=fe*Ft,he=fe*Jt,te=Ht/(-Ft+Jt),ee=te*-Ft;ft.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ee),V.translateZ(te),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let Me=fe+te,C=Wt+te,w=Vt-ee,it=he+(Ht-ee),ot=X*Wt/C*Me,gt=ke*Wt/C*Me;V.projectionMatrix.makePerspective(w,it,ot,gt,Me,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Q(V,ft){ft===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ft.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(a===null)return;b.texture!==null&&(V.near=b.depthNear,V.far=b.depthFar),T.near=$.near=D.near=V.near,T.far=$.far=D.far=V.far,(I!==T.near||st!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,st=T.far,D.near=I,D.far=st,$.near=I,$.far=st,D.updateProjectionMatrix(),$.updateProjectionMatrix(),V.updateProjectionMatrix());let ft=V.parent,Mt=T.cameras;Q(T,ft);for(let Ht=0;Ht<Mt.length;Ht++)Q(Mt[Ht],ft);Mt.length===2?W(T,D,$):T.projectionMatrix.copy(D.projectionMatrix),Y(V,T,ft)};function Y(V,ft,Mt){Mt===null?V.matrix.copy(ft.matrixWorld):(V.matrix.copy(Mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(ft.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ft.projectionMatrix),V.projectionMatrixInverse.copy(ft.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Zs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&y===null))return f},this.setFoveation=function(V){f=V,v!==null&&(v.fixedFoveation=V),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=V)},this.hasDepthSensing=function(){return b.texture!==null};let ut=null;function pt(V,ft){if(p=ft.getViewerPose(d||u),M=ft,p!==null){let Mt=p.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Ht=!1;Mt.length!==T.cameras.length&&(T.cameras.length=0,Ht=!0);for(let Et=0;Et<Mt.length;Et++){let fe=Mt[Et],Wt=null;if(y!==null)Wt=y.getViewport(fe);else{let ke=m.getViewSubImage(v,fe);Wt=ke.viewport,Et===0&&(t.setRenderTargetTextures(P,ke.colorTexture,v.ignoreDepthValues?void 0:ke.depthStencilTexture),t.setRenderTarget(P))}let X=nt[Et];X===void 0&&(X=new cn,X.layers.enable(Et),X.viewport=new De,nt[Et]=X),X.matrix.fromArray(fe.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(fe.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Et===0&&(T.matrix.copy(X.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ht===!0&&T.cameras.push(X)}let Nt=a.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Et=m.getDepthInformation(Mt[0]);Et&&Et.isValid&&Et.texture&&b.init(t,Et,a.renderState)}}for(let Mt=0;Mt<E.length;Mt++){let Ht=N[Mt],Nt=E[Mt];Ht!==null&&Nt!==void 0&&Nt.update(Ht,ft,d||u)}b.render(t,T),ut&&ut(V,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),M=null}let vt=new Bd;vt.setAnimationLoop(pt),this.setAnimationLoop=function(V){ut=V},this.dispose=function(){}}},pr=new oi,Ey=new He;function Ay(r,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,Fd(r)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function a(x,g,P,E,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(x,g):g.isMeshToonMaterial?(o(x,g),m(x,g)):g.isMeshPhongMaterial?(o(x,g),p(x,g)):g.isMeshStandardMaterial?(o(x,g),v(x,g),g.isMeshPhysicalMaterial&&y(x,g,N)):g.isMeshMatcapMaterial?(o(x,g),M(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),b(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(u(x,g),g.isLineDashedMaterial&&c(x,g)):g.isPointsMaterial?f(x,g,P,E):g.isSpriteMaterial?d(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===un&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===un&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let P=t.get(g),E=P.envMap,N=P.envMapRotation;if(E&&(x.envMap.value=E,pr.copy(N),pr.x*=-1,pr.y*=-1,pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),x.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(pr)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;let z=r._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*z,e(g.lightMap,x.lightMapTransform)}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function c(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function f(x,g,P,E){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*P,x.scale.value=E*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function m(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function v(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),t.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,P){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,g){g.matcap&&(x.matcap.value=g.matcap)}function b(x,g){let P=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Cy(r,t,e,i){let a={},o={},u=[],c=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(P,E){let N=E.program;i.uniformBlockBinding(P,N)}function d(P,E){let N=a[P.id];N===void 0&&(M(P),N=p(P),a[P.id]=N,P.addEventListener("dispose",x));let z=E.program;i.updateUBOMapping(P,z);let F=t.render.frame;o[P.id]!==F&&(v(P),o[P.id]=F)}function p(P){let E=m();P.__bindingPointIndex=E;let N=r.createBuffer(),z=P.__size,F=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,N),N}function m(){for(let P=0;P<c;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){let E=a[P.id],N=P.uniforms,z=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let F=0,D=N.length;F<D;F++){let $=Array.isArray(N[F])?N[F]:[N[F]];for(let nt=0,T=$.length;nt<T;nt++){let I=$[nt];if(y(I,F,nt,z)===!0){let st=I.__offset,ct=Array.isArray(I.value)?I.value:[I.value],k=0;for(let rt=0;rt<ct.length;rt++){let H=ct[rt],at=b(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,st+k,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,k),k+=at.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,E,N,z){let F=P.value,D=E+"_"+N;if(z[D]===void 0)return typeof F=="number"||typeof F=="boolean"?z[D]=F:z[D]=F.clone(),!0;{let $=z[D];if(typeof F=="number"||typeof F=="boolean"){if($!==F)return z[D]=F,!0}else if($.equals(F)===!1)return $.copy(F),!0}return!1}function M(P){let E=P.uniforms,N=0,z=16;for(let D=0,$=E.length;D<$;D++){let nt=Array.isArray(E[D])?E[D]:[E[D]];for(let T=0,I=nt.length;T<I;T++){let st=nt[T],ct=Array.isArray(st.value)?st.value:[st.value];for(let k=0,rt=ct.length;k<rt;k++){let H=ct[k],at=b(H),W=N%z;W!==0&&z-W<at.boundary&&(N+=z-W),st.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=N,N+=at.storage}}}let F=N%z;return F>0&&(N+=z-F),P.__size=N,P.__cache={},this}function b(P){let E={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(E.boundary=4,E.storage=4):P.isVector2?(E.boundary=8,E.storage=8):P.isVector3||P.isColor?(E.boundary=16,E.storage=12):P.isVector4?(E.boundary=16,E.storage=16):P.isMatrix3?(E.boundary=48,E.storage=48):P.isMatrix4?(E.boundary=64,E.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),E}function x(P){let E=P.target;E.removeEventListener("dispose",x);let N=u.indexOf(E.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(a[E.id]),delete a[E.id],delete o[E.id]}function g(){for(let P in a)r.deleteBuffer(a[P]);u=[],a={},o={}}return{bind:f,update:d,dispose:g}}var Js=class{constructor(t={}){let{canvas:e=Rg(),context:i=null,depth:a=!0,stencil:o=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;let y=new Uint32Array(4),M=new Int32Array(4),b=null,x=null,g=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;let E=this,N=!1,z=0,F=0,D=null,$=-1,nt=null,T=new De,I=new De,st=null,ct=new pe(0),k=0,rt=e.width,H=e.height,at=1,W=null,Q=null,Y=new De(0,0,rt,H),ut=new De(0,0,rt,H),pt=!1,vt=new Ks,V=!1,ft=!1,Mt=null,Ht=new He,Nt=new Xt,Et=new B,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return D===null?at:1}let X=i;function ke(A,G){for(let j=0;j<A.length;j++){let tt=A[j],K=e.getContext(tt,G);if(K!==null)return K}return null}try{let A={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r162"),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",_t,!1),X===null){let G=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&G.shift(),X=ke(G,A),X===null)throw ke(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ft,Jt,Vt,he,te,ee,Me,C,w,it,ot,gt,dt,jt,Gt,yt,bt,Yt,xt,Ce,re,Ot,Lt,Ut;function R(){Ft=new Wv(X),Jt=new Fv(X,Ft,t),Ft.init(Jt),Ot=new Sy(X,Ft,Jt),Vt=new yy(X,Ft,Jt),he=new Zv(X),te=new ly,ee=new My(X,Ft,Vt,te,Jt,Ot,he),Me=new zv(E),C=new Gv(E),w=new Qg(X,Jt),Lt=new Uv(X,Ft,w,Jt),it=new qv(X,w,he,Lt),ot=new Jv(X,it,w,he),xt=new Kv(X,Jt,ee),yt=new Bv(te),gt=new oy(E,Me,C,Ft,Jt,Lt,yt),dt=new Ay(E,te),jt=new uy,Gt=new gy(Ft,Jt),Yt=new Ov(E,Me,C,Vt,ot,v,f),bt=new vy(E,ot,Jt),Ut=new Cy(X,he,Jt,Vt),Ce=new kv(X,Ft,he,Jt),re=new Xv(X,Ft,he,Jt),he.programs=gt.programs,E.capabilities=Jt,E.extensions=Ft,E.properties=te,E.renderLists=jt,E.shadowMap=bt,E.state=Vt,E.info=he}R();let lt=new gu(E,X);this.xr=lt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let A=Ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(A){A!==void 0&&(at=A,this.setSize(rt,H,!1))},this.getSize=function(A){return A.set(rt,H)},this.setSize=function(A,G,j=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,H=G,e.width=Math.floor(A*at),e.height=Math.floor(G*at),j===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(rt*at,H*at).floor()},this.setDrawingBufferSize=function(A,G,j){rt=A,H=G,at=j,e.width=Math.floor(A*j),e.height=Math.floor(G*j),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(Y)},this.setViewport=function(A,G,j,tt){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,G,j,tt),Vt.viewport(T.copy(Y).multiplyScalar(at).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,G,j,tt){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,G,j,tt),Vt.scissor(I.copy(ut).multiplyScalar(at).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){Vt.setScissorTest(pt=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(A=!0,G=!0,j=!0){let tt=0;if(A){let K=!1;if(D!==null){let Tt=D.texture.format;K=Tt===Rd||Tt===Ld||Tt===Pd}if(K){let Tt=D.texture.type,kt=Tt===Gi||Tt===zi||Tt===Ru||Tt===vr||Tt===Ad||Tt===Cd,qt=Yt.getClearColor(),$t=Yt.getClearAlpha(),se=qt.r,ne=qt.g,Qt=qt.b;kt?(y[0]=se,y[1]=ne,y[2]=Qt,y[3]=$t,X.clearBufferuiv(X.COLOR,0,y)):(M[0]=se,M[1]=ne,M[2]=Qt,M[3]=$t,X.clearBufferiv(X.COLOR,0,M))}else tt|=X.COLOR_BUFFER_BIT}G&&(tt|=X.DEPTH_BUFFER_BIT),j&&(tt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),jt.dispose(),Gt.dispose(),te.dispose(),Me.dispose(),C.dispose(),ot.dispose(),Lt.dispose(),Ut.dispose(),gt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Re),lt.removeEventListener("sessionend",me),Mt&&(Mt.dispose(),Mt=null),be.stop()};function Rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let A=he.autoReset,G=bt.enabled,j=bt.autoUpdate,tt=bt.needsUpdate,K=bt.type;R(),he.autoReset=A,bt.enabled=G,bt.autoUpdate=j,bt.needsUpdate=tt,bt.type=K}function _t(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z(A){let G=A.target;G.removeEventListener("dispose",Z),mt(G)}function mt(A){wt(A),te.remove(A)}function wt(A){let G=te.get(A).programs;G!==void 0&&(G.forEach(function(j){gt.releaseProgram(j)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,j,tt,K,Tt){G===null&&(G=fe);let kt=K.isMesh&&K.matrixWorld.determinant()<0,qt=Ti(A,G,j,tt,K);Vt.setMaterial(tt,kt);let $t=j.index,se=1;if(tt.wireframe===!0){if($t=it.getWireframeAttribute(j),$t===void 0)return;se=2}let ne=j.drawRange,Qt=j.attributes.position,Te=ne.start*se,nn=(ne.start+ne.count)*se;Tt!==null&&(Te=Math.max(Te,Tt.start*se),nn=Math.min(nn,(Tt.start+Tt.count)*se)),$t!==null?(Te=Math.max(Te,0),nn=Math.min(nn,$t.count)):Qt!=null&&(Te=Math.max(Te,0),nn=Math.min(nn,Qt.count));let Be=nn-Te;if(Be<0||Be===1/0)return;Lt.setup(K,tt,qt,j,$t);let hn,Bt=Ce;if($t!==null&&(hn=w.get($t),Bt=re,Bt.setIndex(hn)),K.isMesh)tt.wireframe===!0?(Vt.setLineWidth(tt.wireframeLinewidth*Wt()),Bt.setMode(X.LINES)):Bt.setMode(X.TRIANGLES);else if(K.isLine){let Dt=tt.linewidth;Dt===void 0&&(Dt=1),Vt.setLineWidth(Dt*Wt()),K.isLineSegments?Bt.setMode(X.LINES):K.isLineLoop?Bt.setMode(X.LINE_LOOP):Bt.setMode(X.LINE_STRIP)}else K.isPoints?Bt.setMode(X.POINTS):K.isSprite&&Bt.setMode(X.TRIANGLES);if(K.isBatchedMesh)Bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Bt.renderInstances(Te,Be,K.count);else if(j.isInstancedBufferGeometry){let Dt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ei=Math.min(j.instanceCount,Dt);Bt.renderInstances(Te,Be,Ei)}else Bt.render(Te,Be)};function oe(A,G,j){A.transparent===!0&&A.side===An&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,Ki(A,G,j),A.side=Wi,A.needsUpdate=!0,Ki(A,G,j),A.side=An):Ki(A,G,j)}this.compile=function(A,G,j=null){j===null&&(j=A),x=Gt.get(j),x.init(),P.push(x),j.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),A!==j&&A.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights(E._useLegacyLights);let tt=new Set;return A.traverse(function(K){let Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let kt=0;kt<Tt.length;kt++){let qt=Tt[kt];oe(qt,j,K),tt.add(qt)}else oe(Tt,j,K),tt.add(Tt)}),P.pop(),x=null,tt},this.compileAsync=function(A,G,j=null){let tt=this.compile(A,G,j);return new Promise(K=>{function Tt(){if(tt.forEach(function(kt){te.get(kt).currentProgram.isReady()&&tt.delete(kt)}),tt.size===0){K(A);return}setTimeout(Tt,10)}Ft.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _e=null;function ve(A){_e&&_e(A)}function Re(){be.stop()}function me(){be.start()}let be=new Bd;be.setAnimationLoop(ve),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(A){_e=A,lt.setAnimationLoop(A),A===null?be.stop():be.start()},lt.addEventListener("sessionstart",Re),lt.addEventListener("sessionend",me),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(G),G=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,G,D),x=Gt.get(A,P.length),x.init(),P.push(x),Ht.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),vt.setFromProjectionMatrix(Ht),ft=this.localClippingEnabled,V=yt.init(this.clippingPlanes,ft),b=jt.get(A,g.length),b.init(),g.push(b),we(A,G,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(W,Q),this.info.render.frame++,V===!0&&yt.beginShadows();let j=x.state.shadowsArray;if(bt.render(j,A,G),V===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1)&&Yt.render(b,A),x.setupLights(E._useLegacyLights),G.isArrayCamera){let tt=G.cameras;for(let K=0,Tt=tt.length;K<Tt;K++){let kt=tt[K];It(b,A,kt,kt.viewport)}}else It(b,A,G);D!==null&&(ee.updateMultisampleRenderTarget(D),ee.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(E,A,G),Lt.resetDefaultState(),$=-1,nt=null,P.pop(),P.length>0?x=P[P.length-1]:x=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function we(A,G,j,tt){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){tt&&Et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);let kt=ot.update(A),qt=A.material;qt.visible&&b.push(A,kt,qt,j,Et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){let kt=ot.update(A),qt=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Et.copy(A.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Et.copy(kt.boundingSphere.center)),Et.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(qt)){let $t=kt.groups;for(let se=0,ne=$t.length;se<ne;se++){let Qt=$t[se],Te=qt[Qt.materialIndex];Te&&Te.visible&&b.push(A,kt,Te,j,Et.z,Qt)}}else qt.visible&&b.push(A,kt,qt,j,Et.z,null)}}let Tt=A.children;for(let kt=0,qt=Tt.length;kt<qt;kt++)we(Tt[kt],G,j,tt)}function It(A,G,j,tt){let K=A.opaque,Tt=A.transmissive,kt=A.transparent;x.setupLightsView(j),V===!0&&yt.setGlobalState(E.clippingPlanes,j),Tt.length>0&&$i(K,Tt,G,j),tt&&Vt.viewport(T.copy(tt)),K.length>0&&Yi(K,G,j),Tt.length>0&&Yi(Tt,G,j),kt.length>0&&Yi(kt,G,j),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function $i(A,G,j,tt){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Tt=Jt.isWebGL2;Mt===null&&(Mt=new wi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")?Xs:Gi,minFilter:xr,samples:Tt?4:0})),E.getDrawingBufferSize(Nt),Tt?Mt.setSize(Nt.x,Nt.y):Mt.setSize(mo(Nt.x),mo(Nt.y));let kt=E.getRenderTarget();E.setRenderTarget(Mt),E.getClearColor(ct),k=E.getClearAlpha(),k<1&&E.setClearColor(16777215,.5),E.clear();let qt=E.toneMapping;E.toneMapping=Vi,Yi(A,j,tt),ee.updateMultisampleRenderTarget(Mt),ee.updateRenderTargetMipmap(Mt);let $t=!1;for(let se=0,ne=G.length;se<ne;se++){let Qt=G[se],Te=Qt.object,nn=Qt.geometry,Be=Qt.material,hn=Qt.group;if(Be.side===An&&Te.layers.test(tt.layers)){let Bt=Be.side;Be.side=un,Be.needsUpdate=!0,xs(Te,j,tt,nn,Be,hn),Be.side=Bt,Be.needsUpdate=!0,$t=!0}}$t===!0&&(ee.updateMultisampleRenderTarget(Mt),ee.updateRenderTargetMipmap(Mt)),E.setRenderTarget(kt),E.setClearColor(ct,k),E.toneMapping=qt}function Yi(A,G,j){let tt=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Tt=A.length;K<Tt;K++){let kt=A[K],qt=kt.object,$t=kt.geometry,se=tt===null?kt.material:tt,ne=kt.group;qt.layers.test(j.layers)&&xs(qt,G,j,$t,se,ne)}}function xs(A,G,j,tt,K,Tt){A.onBeforeRender(E,G,j,tt,K,Tt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(E,G,j,tt,A,Tt),K.transparent===!0&&K.side===An&&K.forceSinglePass===!1?(K.side=un,K.needsUpdate=!0,E.renderBufferDirect(j,G,tt,K,A,Tt),K.side=Wi,K.needsUpdate=!0,E.renderBufferDirect(j,G,tt,K,A,Tt),K.side=An):E.renderBufferDirect(j,G,tt,K,A,Tt),A.onAfterRender(E,G,j,tt,K,Tt)}function Ki(A,G,j){G.isScene!==!0&&(G=fe);let tt=te.get(A),K=x.state.lights,Tt=x.state.shadowsArray,kt=K.state.version,qt=gt.getParameters(A,K.state,Tt,G,j),$t=gt.getProgramCacheKey(qt),se=tt.programs;tt.environment=A.isMeshStandardMaterial?G.environment:null,tt.fog=G.fog,tt.envMap=(A.isMeshStandardMaterial?C:Me).get(A.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,se===void 0&&(A.addEventListener("dispose",Z),se=new Map,tt.programs=se);let ne=se.get($t);if(ne!==void 0){if(tt.currentProgram===ne&&tt.lightsStateVersion===kt)return vs(A,qt),ne}else qt.uniforms=gt.getUniforms(A),A.onBuild(j,qt,E),A.onBeforeCompile(qt,E),ne=gt.acquireProgram(qt,$t),se.set($t,ne),tt.uniforms=qt.uniforms;let Qt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qt.clippingPlanes=yt.uniform),vs(A,qt),tt.needsLights=Jo(A),tt.lightsStateVersion=kt,tt.needsLights&&(Qt.ambientLightColor.value=K.state.ambient,Qt.lightProbe.value=K.state.probe,Qt.directionalLights.value=K.state.directional,Qt.directionalLightShadows.value=K.state.directionalShadow,Qt.spotLights.value=K.state.spot,Qt.spotLightShadows.value=K.state.spotShadow,Qt.rectAreaLights.value=K.state.rectArea,Qt.ltc_1.value=K.state.rectAreaLTC1,Qt.ltc_2.value=K.state.rectAreaLTC2,Qt.pointLights.value=K.state.point,Qt.pointLightShadows.value=K.state.pointShadow,Qt.hemisphereLights.value=K.state.hemi,Qt.directionalShadowMap.value=K.state.directionalShadowMap,Qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qt.spotShadowMap.value=K.state.spotShadowMap,Qt.spotLightMatrix.value=K.state.spotLightMatrix,Qt.spotLightMap.value=K.state.spotLightMap,Qt.pointShadowMap.value=K.state.pointShadowMap,Qt.pointShadowMatrix.value=K.state.pointShadowMatrix),tt.currentProgram=ne,tt.uniformsList=null,ne}function Ar(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=rs.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function vs(A,G){let j=te.get(A);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function Ti(A,G,j,tt,K){G.isScene!==!0&&(G=fe),ee.resetTextureUnits();let Tt=G.fog,kt=tt.isMeshStandardMaterial?G.environment:null,qt=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qi,$t=(tt.isMeshStandardMaterial?C:Me).get(tt.envMap||kt),se=tt.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ne=!!j.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Qt=!!j.morphAttributes.position,Te=!!j.morphAttributes.normal,nn=!!j.morphAttributes.color,Be=Vi;tt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Be=E.toneMapping);let hn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Bt=hn!==void 0?hn.length:0,Dt=te.get(tt),Ei=x.state.lights;if(V===!0&&(ft===!0||A!==nt)){let vn=A===nt&&tt.id===$;yt.setState(tt,A,vn)}let xe=!1;tt.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ei.state.version||Dt.outputColorSpace!==qt||K.isBatchedMesh&&Dt.batching===!1||!K.isBatchedMesh&&Dt.batching===!0||K.isInstancedMesh&&Dt.instancing===!1||!K.isInstancedMesh&&Dt.instancing===!0||K.isSkinnedMesh&&Dt.skinning===!1||!K.isSkinnedMesh&&Dt.skinning===!0||K.isInstancedMesh&&Dt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Dt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Dt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Dt.instancingMorph===!1&&K.morphTexture!==null||Dt.envMap!==$t||tt.fog===!0&&Dt.fog!==Tt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==yt.numPlanes||Dt.numIntersection!==yt.numIntersection)||Dt.vertexAlphas!==se||Dt.vertexTangents!==ne||Dt.morphTargets!==Qt||Dt.morphNormals!==Te||Dt.morphColors!==nn||Dt.toneMapping!==Be||Jt.isWebGL2===!0&&Dt.morphTargetsCount!==Bt)&&(xe=!0):(xe=!0,Dt.__version=tt.version);let xn=Dt.currentProgram;xe===!0&&(xn=Ki(tt,G,K));let Cr=!1,Kt=!1,Pe=!1,Ge=xn.getUniforms(),Ln=Dt.uniforms;if(Vt.useProgram(xn.program)&&(Cr=!0,Kt=!0,Pe=!0),tt.id!==$&&($=tt.id,Kt=!0),Cr||nt!==A){Ge.setValue(X,"projectionMatrix",A.projectionMatrix),Ge.setValue(X,"viewMatrix",A.matrixWorldInverse);let vn=Ge.map.cameraPosition;vn!==void 0&&vn.setValue(X,Et.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&Ge.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ge.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),nt!==A&&(nt=A,Kt=!0,Pe=!0)}if(K.isSkinnedMesh){Ge.setOptional(X,K,"bindMatrix"),Ge.setOptional(X,K,"bindMatrixInverse");let vn=K.skeleton;vn&&(Jt.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ge.setValue(X,"boneTexture",vn.boneTexture,ee)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Ge.setOptional(X,K,"batchingTexture"),Ge.setValue(X,"batchingTexture",K._matricesTexture,ee));let rn=j.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0&&Jt.isWebGL2===!0)&&xt.update(K,j,xn),(Kt||Dt.receiveShadow!==K.receiveShadow)&&(Dt.receiveShadow=K.receiveShadow,Ge.setValue(X,"receiveShadow",K.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Ln.envMap.value=$t,Ln.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),Kt&&(Ge.setValue(X,"toneMappingExposure",E.toneMappingExposure),Dt.needsLights&&la(Ln,Pe),Tt&&tt.fog===!0&&dt.refreshFogUniforms(Ln,Tt),dt.refreshMaterialUniforms(Ln,tt,at,H,Mt),rs.upload(X,Ar(Dt),Ln,ee)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(rs.upload(X,Ar(Dt),Ln,ee),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ge.setValue(X,"center",K.center),Ge.setValue(X,"modelViewMatrix",K.modelViewMatrix),Ge.setValue(X,"normalMatrix",K.normalMatrix),Ge.setValue(X,"modelMatrix",K.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let vn=tt.uniformsGroups;for(let Ai=0,ui=vn.length;Ai<ui;Ai++)if(Jt.isWebGL2){let Oe=vn[Ai];Ut.update(Oe,xn),Ut.bind(Oe,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function la(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Jo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,G,j){te.get(A.texture).__webglTexture=G,te.get(A.depthTexture).__webglTexture=j;let tt=te.get(A);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=j===void 0,tt.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){let j=te.get(A);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,j=0){D=A,z=G,F=j;let tt=!0,K=null,Tt=!1,kt=!1;if(A){let $t=te.get(A);$t.__useDefaultFramebuffer!==void 0?(Vt.bindFramebuffer(X.FRAMEBUFFER,null),tt=!1):$t.__webglFramebuffer===void 0?ee.setupRenderTarget(A):$t.__hasExternalTextures&&ee.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);let se=A.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(kt=!0);let ne=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[G])?K=ne[G][j]:K=ne[G],Tt=!0):Jt.isWebGL2&&A.samples>0&&ee.useMultisampledRTT(A)===!1?K=te.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[j]:K=ne,T.copy(A.viewport),I.copy(A.scissor),st=A.scissorTest}else T.copy(Y).multiplyScalar(at).floor(),I.copy(ut).multiplyScalar(at).floor(),st=pt;if(Vt.bindFramebuffer(X.FRAMEBUFFER,K)&&Jt.drawBuffers&&tt&&Vt.drawBuffers(A,K),Vt.viewport(T),Vt.scissor(I),Vt.setScissorTest(st),Tt){let $t=te.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,$t.__webglTexture,j)}else if(kt){let $t=te.get(A.texture),se=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,$t.__webglTexture,j||0,se)}$=-1},this.readRenderTargetPixels=function(A,G,j,tt,K,Tt,kt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(qt=qt[kt]),qt){Vt.bindFramebuffer(X.FRAMEBUFFER,qt);try{let $t=A.texture,se=$t.format,ne=$t.type;if(se!==Zn&&Ot.convert(se)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qt=ne===Xs&&(Ft.has("EXT_color_buffer_half_float")||Jt.isWebGL2&&Ft.has("EXT_color_buffer_float"));if(ne!==Gi&&Ot.convert(ne)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ne===Si&&(Jt.isWebGL2||Ft.has("OES_texture_float")||Ft.has("WEBGL_color_buffer_float")))&&!Qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-tt&&j>=0&&j<=A.height-K&&X.readPixels(G,j,tt,K,Ot.convert(se),Ot.convert(ne),Tt)}finally{let $t=D!==null?te.get(D).__webglFramebuffer:null;Vt.bindFramebuffer(X.FRAMEBUFFER,$t)}}},this.copyFramebufferToTexture=function(A,G,j=0){let tt=Math.pow(2,-j),K=Math.floor(G.image.width*tt),Tt=Math.floor(G.image.height*tt);ee.setTexture2D(G,0),X.copyTexSubImage2D(X.TEXTURE_2D,j,0,0,A.x,A.y,K,Tt),Vt.unbindTexture()},this.copyTextureToTexture=function(A,G,j,tt=0){let K=G.image.width,Tt=G.image.height,kt=Ot.convert(j.format),qt=Ot.convert(j.type);ee.setTexture2D(j,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment),G.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,tt,A.x,A.y,K,Tt,kt,qt,G.image.data):G.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,tt,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,kt,G.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,tt,A.x,A.y,kt,qt,G.image),tt===0&&j.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(A,G,j,tt,K=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Tt=Math.round(A.max.x-A.min.x),kt=Math.round(A.max.y-A.min.y),qt=A.max.z-A.min.z+1,$t=Ot.convert(tt.format),se=Ot.convert(tt.type),ne;if(tt.isData3DTexture)ee.setTexture3D(tt,0),ne=X.TEXTURE_3D;else if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)ee.setTexture2DArray(tt,0),ne=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,tt.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,tt.unpackAlignment);let Qt=X.getParameter(X.UNPACK_ROW_LENGTH),Te=X.getParameter(X.UNPACK_IMAGE_HEIGHT),nn=X.getParameter(X.UNPACK_SKIP_PIXELS),Be=X.getParameter(X.UNPACK_SKIP_ROWS),hn=X.getParameter(X.UNPACK_SKIP_IMAGES),Bt=j.isCompressedTexture?j.mipmaps[K]:j.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Bt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Bt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,A.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,A.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,A.min.z),j.isDataTexture||j.isData3DTexture?X.texSubImage3D(ne,K,G.x,G.y,G.z,Tt,kt,qt,$t,se,Bt.data):tt.isCompressedArrayTexture?X.compressedTexSubImage3D(ne,K,G.x,G.y,G.z,Tt,kt,qt,$t,Bt.data):X.texSubImage3D(ne,K,G.x,G.y,G.z,Tt,kt,qt,$t,se,Bt),X.pixelStorei(X.UNPACK_ROW_LENGTH,Qt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Te),X.pixelStorei(X.UNPACK_SKIP_PIXELS,nn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Be),X.pixelStorei(X.UNPACK_SKIP_IMAGES,hn),K===0&&tt.generateMipmaps&&X.generateMipmap(ne),Vt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),Vt.unbindTexture()},this.resetState=function(){z=0,F=0,D=null,Vt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Iu?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===Oo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},_u=class extends Js{};_u.prototype.isWebGL1Renderer=!0;var fs=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ao=class extends Cn{constructor(t,e,i,a,o,u,c,f,d){super(t,e,i,a,o,u,c,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Co=class r extends Yn{constructor(t=1,e=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:a},e=Math.max(3,e);let o=[],u=[],c=[],f=[],d=new B,p=new Xt;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let m=0,v=3;m<=e;m++,v+=3){let y=i+m/e*a;d.x=t*Math.cos(y),d.y=t*Math.sin(y),u.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(u[v]/t+1)/2,p.y=(u[v+1]/t+1)/2,f.push(p.x,p.y)}for(let m=1;m<=e;m++)o.push(m,m+1,0);this.setIndex(o),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Jn=class r extends Yn{constructor(t=1,e=1,i=1,a=32,o=1,u=!1,c=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:a,heightSegments:o,openEnded:u,thetaStart:c,thetaLength:f};let d=this;a=Math.floor(a),o=Math.floor(o);let p=[],m=[],v=[],y=[],M=0,b=[],x=i/2,g=0;P(),u===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(p),this.setAttribute("position",new Ve(m,3)),this.setAttribute("normal",new Ve(v,3)),this.setAttribute("uv",new Ve(y,2));function P(){let N=new B,z=new B,F=0,D=(e-t)/i;for(let $=0;$<=o;$++){let nt=[],T=$/o,I=T*(e-t)+t;for(let st=0;st<=a;st++){let ct=st/a,k=ct*f+c,rt=Math.sin(k),H=Math.cos(k);z.x=I*rt,z.y=-T*i+x,z.z=I*H,m.push(z.x,z.y,z.z),N.set(rt,D,H).normalize(),v.push(N.x,N.y,N.z),y.push(ct,1-T),nt.push(M++)}b.push(nt)}for(let $=0;$<a;$++)for(let nt=0;nt<o;nt++){let T=b[nt][$],I=b[nt+1][$],st=b[nt+1][$+1],ct=b[nt][$+1];p.push(T,I,ct),p.push(I,st,ct),F+=6}d.addGroup(g,F,0),g+=F}function E(N){let z=M,F=new Xt,D=new B,$=0,nt=N===!0?t:e,T=N===!0?1:-1;for(let st=1;st<=a;st++)m.push(0,x*T,0),v.push(0,T,0),y.push(.5,.5),M++;let I=M;for(let st=0;st<=a;st++){let k=st/a*f+c,rt=Math.cos(k),H=Math.sin(k);D.x=nt*H,D.y=x*T,D.z=nt*rt,m.push(D.x,D.y,D.z),v.push(0,T,0),F.x=rt*.5+.5,F.y=H*.5*T+.5,y.push(F.x,F.y),M++}for(let st=0;st<a;st++){let ct=z+st,k=I+st;N===!0?p.push(k,k+1,ct):p.push(k+1,k,ct),$+=3}d.addGroup(g,$,N===!0?1:2),g+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Po=class r extends Yn{constructor(t=.5,e=1,i=32,a=1,o=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:a,thetaStart:o,thetaLength:u},i=Math.max(3,i),a=Math.max(1,a);let c=[],f=[],d=[],p=[],m=t,v=(e-t)/a,y=new B,M=new Xt;for(let b=0;b<=a;b++){for(let x=0;x<=i;x++){let g=o+x/i*u;y.x=m*Math.cos(g),y.y=m*Math.sin(g),f.push(y.x,y.y,y.z),d.push(0,0,1),M.x=(y.x/e+1)/2,M.y=(y.y/e+1)/2,p.push(M.x,M.y)}m+=v}for(let b=0;b<a;b++){let x=b*(i+1);for(let g=0;g<i;g++){let P=g+x,E=P,N=P+i+1,z=P+i+2,F=P+1;c.push(E,N,F),c.push(N,z,F)}}this.setIndex(c),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Lo=class r extends Yn{constructor(t=1,e=.4,i=12,a=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:a,arc:o},i=Math.floor(i),a=Math.floor(a);let u=[],c=[],f=[],d=[],p=new B,m=new B,v=new B;for(let y=0;y<=i;y++)for(let M=0;M<=a;M++){let b=M/a*o,x=y/i*Math.PI*2;m.x=(t+e*Math.cos(x))*Math.cos(b),m.y=(t+e*Math.cos(x))*Math.sin(b),m.z=e*Math.sin(x),c.push(m.x,m.y,m.z),p.x=t*Math.cos(b),p.y=t*Math.sin(b),v.subVectors(m,p).normalize(),f.push(v.x,v.y,v.z),d.push(M/a),d.push(y/i)}for(let y=1;y<=i;y++)for(let M=1;M<=a;M++){let b=(a+1)*y+M-1,x=(a+1)*(y-1)+M-1,g=(a+1)*(y-1)+M,P=(a+1)*y+M;u.push(b,x,P),u.push(x,g,P)}this.setIndex(u),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xe=class extends Sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function so(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Py(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var hs=class{constructor(t,e,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,a=e[i],o=e[i-1];n:{t:{let u;e:{i:if(!(t<a)){for(let c=i+2;;){if(a===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(o=a,a=e[++i],t<a)break t}u=e.length;break e}if(!(t>=o)){let c=e[1];t<c&&(i=2,o=c);for(let f=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(a=o,o=e[--i-1],t>=o)break t}u=i,i=0;break e}break n}for(;i<u;){let c=i+u>>>1;t<e[c]?u=c:i=c+1}if(a=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,a)}return this.interpolate_(i,o,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=t*a;for(let u=0;u!==a;++u)e[u]=i[o+u];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xu=class extends hs{constructor(t,e,i,a){super(t,e,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(t,e,i){let a=this.parameterPositions,o=t-2,u=t+1,c=a[o],f=a[u];if(c===void 0)switch(this.getSettings_().endingStart){case Ph:o=t,c=2*e-i;break;case Lh:o=a.length-2,c=e+a[o]-a[o+1];break;default:o=t,c=i}if(f===void 0)switch(this.getSettings_().endingEnd){case Ph:u=t,f=2*i-e;break;case Lh:u=1,f=i+a[1]-a[0];break;default:u=t-1,f=e}let d=(i-e)*.5,p=this.valueSize;this._weightPrev=d/(e-c),this._weightNext=d/(f-i),this._offsetPrev=o*p,this._offsetNext=u*p}interpolate_(t,e,i,a){let o=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=t*c,d=f-c,p=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,y=this._weightNext,M=(i-e)/(a-e),b=M*M,x=b*M,g=-v*x+2*v*b-v*M,P=(1+v)*x+(-1.5-2*v)*b+(-.5+v)*M+1,E=(-1-y)*x+(1.5+y)*b+.5*M,N=y*x-y*b;for(let z=0;z!==c;++z)o[z]=g*u[p+z]+P*u[d+z]+E*u[f+z]+N*u[m+z];return o}},vu=class extends hs{constructor(t,e,i,a){super(t,e,i,a)}interpolate_(t,e,i,a){let o=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=t*c,d=f-c,p=(i-e)/(a-e),m=1-p;for(let v=0;v!==c;++v)o[v]=u[d+v]*m+u[f+v]*p;return o}},yu=class extends hs{constructor(t,e,i,a){super(t,e,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},jn=class{constructor(t,e,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=so(e,this.TimeBufferType),this.values=so(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:so(t.times,Array),values:so(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new yu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case co:e=this.InterpolantFactoryMethodLinear;break;case Mc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,a=e.length;i!==a;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,a=e.length;i!==a;++i)e[i]*=t}return this}trim(t,e){let i=this.times,a=i.length,o=0,u=a-1;for(;o!==a&&i[o]<t;)++o;for(;u!==-1&&i[u]>e;)--u;if(++u,o!==0||u!==a){o>=u&&(u=Math.max(u,1),o=u-1);let c=this.getValueSize();this.times=i.slice(o,u),this.values=this.values.slice(o*c,u*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let u=null;for(let c=0;c!==o;c++){let f=i[c];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,f),t=!1;break}if(u!==null&&u>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,f,u),t=!1;break}u=f}if(a!==void 0&&Py(a))for(let c=0,f=a.length;c!==f;++c){let d=a[c];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Mc,o=t.length-1,u=1;for(let c=1;c<o;++c){let f=!1,d=t[c],p=t[c+1];if(d!==p&&(c!==1||d!==t[0]))if(a)f=!0;else{let m=c*i,v=m-i,y=m+i;for(let M=0;M!==i;++M){let b=e[m+M];if(b!==e[v+M]||b!==e[y+M]){f=!0;break}}}if(f){if(c!==u){t[u]=t[c];let m=c*i,v=u*i;for(let y=0;y!==i;++y)e[v+y]=e[m+y]}++u}}if(o>0){t[u]=t[o];for(let c=o*i,f=u*i,d=0;d!==i;++d)e[f+d]=e[c+d];++u}return u!==t.length?(this.times=t.slice(0,u),this.values=e.slice(0,u*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,a=new i(this.name,t,e);return a.createInterpolant=this.createInterpolant,a}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=co;var br=class extends jn{};br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=lo;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends jn{};Mu.prototype.ValueTypeName="color";var Su=class extends jn{};Su.prototype.ValueTypeName="number";var bu=class extends hs{constructor(t,e,i,a){super(t,e,i,a)}interpolate_(t,e,i,a){let o=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=(i-e)/(a-e),d=t*c;for(let p=d+c;d!==p;d+=4)$n.slerpFlat(o,0,u,d-c,u,d,f);return o}},js=class extends jn{InterpolantFactoryMethodLinear(t){return new bu(this.times,this.values,this.getValueSize(),t)}};js.prototype.ValueTypeName="quaternion";js.prototype.DefaultInterpolation=co;js.prototype.InterpolantFactoryMethodSmooth=void 0;var wr=class extends jn{};wr.prototype.ValueTypeName="string";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=lo;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var wu=class extends jn{};wu.prototype.ValueTypeName="vector";var Tu=class{constructor(t,e,i){let a=this,o=!1,u=0,c=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(p){c++,o===!1&&a.onStart!==void 0&&a.onStart(p,u,c),o=!0},this.itemEnd=function(p){u++,a.onProgress!==void 0&&a.onProgress(p,u,c),u===c&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){let m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,v=d.length;m<v;m+=2){let y=d[m],M=d[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return M}return null}}},Ly=new Tu,Eu=class{constructor(t){this.manager=t!==void 0?t:Ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(a,o){i.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Eu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ro=class extends Qs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Xc=new He,yd=new B,Md=new B,Io=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(yd),Md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Md),e.updateMatrixWorld(),Xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sd=new He,Vs=new B,Zc=new B,Au=class extends Io{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,a=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vs),Zc.copy(i.position),Zc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Zc),i.updateMatrixWorld(),a.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd)}},Do=class extends Qs{constructor(t,e,i=0,a=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Au}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cu=class extends Io{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends Qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new Cu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ou="\\[\\]\\.:\\/",Ry=new RegExp("["+Ou+"]","g"),Uu="[^"+Ou+"]",Iy="[^"+Ou.replace("\\.","")+"]",Dy=/((?:WC+[\/:])*)/.source.replace("WC",Uu),Ny=/(WCOD+)?/.source.replace("WCOD",Iy),Oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uu),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uu),ky=new RegExp("^"+Dy+Ny+Oy+Uy+"$"),Fy=["material","materials","bones","map"],Pu=class{constructor(t,e,i){let a=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,a)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=i.length;a!==o;++a)i[a].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ry,"")}static parseTrackName(t){let e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let o=i.nodeName.substring(a+1);Fy.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let u=0;u<o.length;u++){let c=o[u];if(c.name===e||c.uuid===e)return c;let f=i(c.children);if(f)return f}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)t[e++]=i[a]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,a=e.propertyName,o=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===d){d=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let u=t[a];if(u===void 0){let d=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+a+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=o}else u.fromArray!==void 0&&u.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(f=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=a;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Pu;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _b=new Float32Array(1);var ea=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ln(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"162"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="162");var qd={type:"change"},ku={type:"start"},Xd={type:"end"},ko=new Ys,Zd=new qn,zy=Math.cos(70*Od.DEG2RAD),Fo=class extends ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Gt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Gt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(qd),i.update(),o=a.NONE},this.update=(function(){let R=new B,lt=new $n().setFromUnitVectors(t.up,new B(0,1,0)),Rt=lt.clone().invert(),U=new B,_t=new $n,Z=new B,mt=2*Math.PI;return function(oe=null){let _e=i.object.position;R.copy(_e).sub(i.target),R.applyQuaternion(lt),c.setFromVector3(R),i.autoRotate&&o===a.NONE&&st(T(oe)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let ve=i.minAzimuthAngle,Re=i.maxAzimuthAngle;isFinite(ve)&&isFinite(Re)&&(ve<-Math.PI?ve+=mt:ve>Math.PI&&(ve-=mt),Re<-Math.PI?Re+=mt:Re>Math.PI&&(Re-=mt),ve<=Re?c.theta=Math.max(ve,Math.min(Re,c.theta)):c.theta=c.theta>(ve+Re)/2?Math.max(ve,c.theta):Math.min(Re,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let me=!1;if(i.zoomToCursor&&F||i.object.isOrthographicCamera)c.radius=Y(c.radius);else{let be=c.radius;c.radius=Y(c.radius*d),me=be!=c.radius}if(R.setFromSpherical(c),R.applyQuaternion(Rt),_e.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&F){let be=null;if(i.object.isPerspectiveCamera){let we=R.length();be=Y(we*d);let It=we-be;i.object.position.addScaledVector(N,It),i.object.updateMatrixWorld(),me=!!It}else if(i.object.isOrthographicCamera){let we=new B(z.x,z.y,0);we.unproject(i.object);let It=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),me=It!==i.object.zoom;let $i=new B(z.x,z.y,0);$i.unproject(i.object),i.object.position.sub($i).add(we),i.object.updateMatrixWorld(),be=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;be!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(be).add(i.object.position):(ko.origin.copy(i.object.position),ko.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ko.direction))<zy?t.lookAt(i.target):(Zd.setFromNormalAndCoplanarPoint(i.object.up,i.target),ko.intersectPlane(Zd,i.target))))}else if(i.object.isOrthographicCamera){let be=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),be!==i.object.zoom&&(i.object.updateProjectionMatrix(),me=!0)}return d=1,F=!1,me||U.distanceToSquared(i.object.position)>u||8*(1-_t.dot(i.object.quaternion))>u||Z.distanceToSquared(i.target)>u?(i.dispatchEvent(qd),U.copy(i.object.position),_t.copy(i.object.quaternion),Z.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Yt),i.domElement.removeEventListener("pointerdown",ee),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",ot),i.domElement.removeEventListener("pointermove",Me),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",dt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Gt),i._domElementKeyEvents=null)};let i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},o=a.NONE,u=1e-6,c=new ea,f=new ea,d=1,p=new B,m=new Xt,v=new Xt,y=new Xt,M=new Xt,b=new Xt,x=new Xt,g=new Xt,P=new Xt,E=new Xt,N=new B,z=new Xt,F=!1,D=[],$={},nt=!1;function T(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function I(R){let lt=Math.abs(R*.01);return Math.pow(.95,i.zoomSpeed*lt)}function st(R){f.theta-=R}function ct(R){f.phi-=R}let k=(function(){let R=new B;return function(Rt,U){R.setFromMatrixColumn(U,0),R.multiplyScalar(-Rt),p.add(R)}})(),rt=(function(){let R=new B;return function(Rt,U){i.screenSpacePanning===!0?R.setFromMatrixColumn(U,1):(R.setFromMatrixColumn(U,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(Rt),p.add(R)}})(),H=(function(){let R=new B;return function(Rt,U){let _t=i.domElement;if(i.object.isPerspectiveCamera){let Z=i.object.position;R.copy(Z).sub(i.target);let mt=R.length();mt*=Math.tan(i.object.fov/2*Math.PI/180),k(2*Rt*mt/_t.clientHeight,i.object.matrix),rt(2*U*mt/_t.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(Rt*(i.object.right-i.object.left)/i.object.zoom/_t.clientWidth,i.object.matrix),rt(U*(i.object.top-i.object.bottom)/i.object.zoom/_t.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function at(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(R,lt){if(!i.zoomToCursor)return;F=!0;let Rt=i.domElement.getBoundingClientRect(),U=R-Rt.left,_t=lt-Rt.top,Z=Rt.width,mt=Rt.height;z.x=U/Z*2-1,z.y=-(_t/mt)*2+1,N.set(z.x,z.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function ut(R){m.set(R.clientX,R.clientY)}function pt(R){Q(R.clientX,R.clientX),g.set(R.clientX,R.clientY)}function vt(R){M.set(R.clientX,R.clientY)}function V(R){v.set(R.clientX,R.clientY),y.subVectors(v,m).multiplyScalar(i.rotateSpeed);let lt=i.domElement;st(2*Math.PI*y.x/lt.clientHeight),ct(2*Math.PI*y.y/lt.clientHeight),m.copy(v),i.update()}function ft(R){P.set(R.clientX,R.clientY),E.subVectors(P,g),E.y>0?at(I(E.y)):E.y<0&&W(I(E.y)),g.copy(P),i.update()}function Mt(R){b.set(R.clientX,R.clientY),x.subVectors(b,M).multiplyScalar(i.panSpeed),H(x.x,x.y),M.copy(b),i.update()}function Ht(R){Q(R.clientX,R.clientY),R.deltaY<0?W(I(R.deltaY)):R.deltaY>0&&at(I(R.deltaY)),i.update()}function Nt(R){let lt=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?ct(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),lt=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?ct(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),lt=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?st(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),lt=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?st(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),lt=!0;break}lt&&(R.preventDefault(),i.update())}function Et(R){if(D.length===1)m.set(R.pageX,R.pageY);else{let lt=Lt(R),Rt=.5*(R.pageX+lt.x),U=.5*(R.pageY+lt.y);m.set(Rt,U)}}function fe(R){if(D.length===1)M.set(R.pageX,R.pageY);else{let lt=Lt(R),Rt=.5*(R.pageX+lt.x),U=.5*(R.pageY+lt.y);M.set(Rt,U)}}function Wt(R){let lt=Lt(R),Rt=R.pageX-lt.x,U=R.pageY-lt.y,_t=Math.sqrt(Rt*Rt+U*U);g.set(0,_t)}function X(R){i.enableZoom&&Wt(R),i.enablePan&&fe(R)}function ke(R){i.enableZoom&&Wt(R),i.enableRotate&&Et(R)}function Ft(R){if(D.length==1)v.set(R.pageX,R.pageY);else{let Rt=Lt(R),U=.5*(R.pageX+Rt.x),_t=.5*(R.pageY+Rt.y);v.set(U,_t)}y.subVectors(v,m).multiplyScalar(i.rotateSpeed);let lt=i.domElement;st(2*Math.PI*y.x/lt.clientHeight),ct(2*Math.PI*y.y/lt.clientHeight),m.copy(v)}function Jt(R){if(D.length===1)b.set(R.pageX,R.pageY);else{let lt=Lt(R),Rt=.5*(R.pageX+lt.x),U=.5*(R.pageY+lt.y);b.set(Rt,U)}x.subVectors(b,M).multiplyScalar(i.panSpeed),H(x.x,x.y),M.copy(b)}function Vt(R){let lt=Lt(R),Rt=R.pageX-lt.x,U=R.pageY-lt.y,_t=Math.sqrt(Rt*Rt+U*U);P.set(0,_t),E.set(0,Math.pow(P.y/g.y,i.zoomSpeed)),at(E.y),g.copy(P);let Z=(R.pageX+lt.x)*.5,mt=(R.pageY+lt.y)*.5;Q(Z,mt)}function he(R){i.enableZoom&&Vt(R),i.enablePan&&Jt(R)}function te(R){i.enableZoom&&Vt(R),i.enableRotate&&Ft(R)}function ee(R){i.enabled!==!1&&(D.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",Me),i.domElement.addEventListener("pointerup",C)),!re(R)&&(xt(R),R.pointerType==="touch"?yt(R):w(R)))}function Me(R){i.enabled!==!1&&(R.pointerType==="touch"?bt(R):it(R))}function C(R){switch(Ce(R),D.length){case 0:i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",Me),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(Xd),o=a.NONE;break;case 1:let lt=D[0],Rt=$[lt];yt({pointerId:lt,pageX:Rt.x,pageY:Rt.y});break}}function w(R){let lt;switch(R.button){case 0:lt=i.mouseButtons.LEFT;break;case 1:lt=i.mouseButtons.MIDDLE;break;case 2:lt=i.mouseButtons.RIGHT;break;default:lt=-1}switch(lt){case Tr.DOLLY:if(i.enableZoom===!1)return;pt(R),o=a.DOLLY;break;case Tr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;vt(R),o=a.PAN}else{if(i.enableRotate===!1)return;ut(R),o=a.ROTATE}break;case Tr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;ut(R),o=a.ROTATE}else{if(i.enablePan===!1)return;vt(R),o=a.PAN}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(ku)}function it(R){switch(o){case a.ROTATE:if(i.enableRotate===!1)return;V(R);break;case a.DOLLY:if(i.enableZoom===!1)return;ft(R);break;case a.PAN:if(i.enablePan===!1)return;Mt(R);break}}function ot(R){i.enabled===!1||i.enableZoom===!1||o!==a.NONE||(R.preventDefault(),i.dispatchEvent(ku),Ht(gt(R)),i.dispatchEvent(Xd))}function gt(R){let lt=R.deltaMode,Rt={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(lt){case 1:Rt.deltaY*=16;break;case 2:Rt.deltaY*=100;break}return R.ctrlKey&&!nt&&(Rt.deltaY*=10),Rt}function dt(R){R.key==="Control"&&(nt=!0,i.domElement.getRootNode().addEventListener("keyup",jt,{passive:!0,capture:!0}))}function jt(R){R.key==="Control"&&(nt=!1,i.domElement.getRootNode().removeEventListener("keyup",jt,{passive:!0,capture:!0}))}function Gt(R){i.enabled===!1||i.enablePan===!1||Nt(R)}function yt(R){switch(Ot(R),D.length){case 1:switch(i.touches.ONE){case Er.ROTATE:if(i.enableRotate===!1)return;Et(R),o=a.TOUCH_ROTATE;break;case Er.PAN:if(i.enablePan===!1)return;fe(R),o=a.TOUCH_PAN;break;default:o=a.NONE}break;case 2:switch(i.touches.TWO){case Er.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;X(R),o=a.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(R),o=a.TOUCH_DOLLY_ROTATE;break;default:o=a.NONE}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(ku)}function bt(R){switch(Ot(R),o){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ft(R),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;Jt(R),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(R),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(R),i.update();break;default:o=a.NONE}}function Yt(R){i.enabled!==!1&&R.preventDefault()}function xt(R){D.push(R.pointerId)}function Ce(R){delete $[R.pointerId];for(let lt=0;lt<D.length;lt++)if(D[lt]==R.pointerId){D.splice(lt,1);return}}function re(R){for(let lt=0;lt<D.length;lt++)if(D[lt]==R.pointerId)return!0;return!1}function Ot(R){let lt=$[R.pointerId];lt===void 0&&(lt=new Xt,$[R.pointerId]=lt),lt.set(R.pageX,R.pageY)}function Lt(R){let lt=R.pointerId===D[0]?D[1]:D[0];return $[lt]}i.domElement.addEventListener("contextmenu",Yt),i.domElement.addEventListener("pointerdown",ee),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",ot,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}};var na=new B;function kn(r,t,e,i,a,o){let u=2*Math.PI*a/4,c=Math.max(o-2*a,0),f=Math.PI/4;na.copy(t),na[i]=0,na.normalize();let d=.5*u/(u+c),p=1-na.angleTo(r)/f;return Math.sign(na[e])===1?p*d:c/(u+c)+d+d*(1-p)}var ms=class extends Kn{constructor(t=1,e=1,i=1,a=2,o=.1){if(a=a*2+1,o=Math.min(t/2,e/2,i/2,o),super(1,1,1,a,a,a),a===1)return;let u=this.toNonIndexed();this.index=null,this.attributes.position=u.attributes.position,this.attributes.normal=u.attributes.normal,this.attributes.uv=u.attributes.uv;let c=new B,f=new B,d=new B(t,e,i).divideScalar(2).subScalar(o),p=this.attributes.position.array,m=this.attributes.normal.array,v=this.attributes.uv.array,y=p.length/6,M=new B,b=.5/a;for(let x=0,g=0;x<p.length;x+=3,g+=2)switch(c.fromArray(p,x),f.copy(c),f.x-=Math.sign(f.x)*b,f.y-=Math.sign(f.y)*b,f.z-=Math.sign(f.z)*b,f.normalize(),p[x+0]=d.x*Math.sign(c.x)+f.x*o,p[x+1]=d.y*Math.sign(c.y)+f.y*o,p[x+2]=d.z*Math.sign(c.z)+f.z*o,m[x+0]=f.x,m[x+1]=f.y,m[x+2]=f.z,Math.floor(x/y)){case 0:M.set(1,0,0),v[g+0]=kn(M,f,"z","y",o,i),v[g+1]=1-kn(M,f,"y","z",o,e);break;case 1:M.set(-1,0,0),v[g+0]=1-kn(M,f,"z","y",o,i),v[g+1]=1-kn(M,f,"y","z",o,e);break;case 2:M.set(0,1,0),v[g+0]=1-kn(M,f,"x","z",o,t),v[g+1]=kn(M,f,"z","x",o,i);break;case 3:M.set(0,-1,0),v[g+0]=1-kn(M,f,"x","z",o,t),v[g+1]=1-kn(M,f,"z","x",o,i);break;case 4:M.set(0,0,1),v[g+0]=1-kn(M,f,"x","y",o,t),v[g+1]=1-kn(M,f,"y","x",o,e);break;case 5:M.set(0,0,-1),v[g+0]=kn(M,f,"x","y",o,t),v[g+1]=1-kn(M,f,"y","x",o,e);break}}};var Bo=class extends fs{constructor(t=null){super();let e=new Kn;e.deleteAttribute("uv");let i=new Xe({side:un}),a=new Xe,o=5;t!==null&&t._useLegacyLights===!1&&(o=900);let u=new Do(16777215,o,28,2);u.position.set(.418,16.199,.3),this.add(u);let c=new ae(e,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);let f=new ae(e,a);f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),this.add(f);let d=new ae(e,a);d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),this.add(d);let p=new ae(e,a);p.position.set(6.167,.857,7.803),p.rotation.set(0,.561,0),p.scale.set(3.927,6.285,3.687),this.add(p);let m=new ae(e,a);m.position.set(-2.017,.018,6.124),m.rotation.set(0,.333,0),m.scale.set(2.002,4.566,2.064),this.add(m);let v=new ae(e,a);v.position.set(2.291,-.756,-2.621),v.rotation.set(0,-.286,0),v.scale.set(1.546,1.552,1.496),this.add(v);let y=new ae(e,a);y.position.set(-2.193,-.369,-5.547),y.rotation.set(0,.516,0),y.scale.set(3.875,3.487,2.986),this.add(y);let M=new ae(e,gs(50));M.position.set(-16.116,14.37,8.208),M.scale.set(.1,2.428,2.739),this.add(M);let b=new ae(e,gs(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);let x=new ae(e,gs(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);let g=new ae(e,gs(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let P=new ae(e,gs(20));P.position.set(3.235,11.486,-12.541),P.scale.set(2.5,2,.1),this.add(P);let E=new ae(e,gs(100));E.position.set(0,20,0),E.scale.set(1,.1,1),this.add(E)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function gs(r){let t=new li;return t.color.setScalar(r),t}function $d(r,t=256){let e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d"),a=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(let[u,c]of r)a.addColorStop(u,c);i.fillStyle=a,i.fillRect(0,0,t,t);let o=new Ao(e);return o.colorSpace=En,o}function ue(r,t,e,i,a,o,u,c=0){let f=c>0?new ms(r,t,e,3,c):new Kn(r,t,e),d=new ae(f,i);return d.position.set(a,o,u),d}var zo=class{constructor(t,{cabColor:e="#e8ecf1",accent:i="#3b82f6",axles:a="4x2",quality:o="auto"}={}){this.container=t,this.hotspots=[],this.running=!1,this.autoRotate=!0,this.lastFrame=0,this.t0=performance.now(),this.userInteracting=!1,this.idleSince=performance.now();let u=new Js({antialias:!0,alpha:!0,powerPreference:"high-performance"}),c=window.devicePixelRatio||1;u.setPixelRatio(o==="high"?Math.min(c,2):o==="low"?Math.min(c,.85):Math.min(c,1.25)),u.outputColorSpace=En,u.toneMapping=Lu,u.toneMappingExposure=1.05,u.domElement.className="truck-canvas",t.appendChild(u.domElement),this.renderer=u;let f=new fs,d=new us(u);f.environment=d.fromScene(new Bo(u),.04).texture,d.dispose(),this.scene=f;let p=new cn(32,1,.1,100);p.position.set(6.9,3.1,7.4),this.camera=p;let m=new Fo(p,u.domElement);m.target.set(-.1,1.3,0),m.enableDamping=!0,m.dampingFactor=.08,m.enablePan=!1,m.minDistance=6,m.maxDistance=17,m.minPolarAngle=.55,m.maxPolarAngle=1.5,m.rotateSpeed=.7,m.addEventListener("start",()=>{this.userInteracting=!0,this.wake()}),m.addEventListener("end",()=>{this.userInteracting=!1,this.idleSince=performance.now()}),m.addEventListener("change",()=>this.wake()),m.update(),this.controls=m,this.baseAzimuth=m.getAzimuthalAngle(),f.add(new Ro(14674431,1053464,.9));let v=new ta(16777215,2.2);v.position.set(6,10,7),f.add(v),this.rim=new ta(new pe(i),2.4),this.rim.position.set(-8,4,-6),f.add(this.rim),this.buildGround(i),this.truck=new si,f.add(this.truck),this.buildTruck(e,a),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),document.addEventListener("visibilitychange",()=>{document.hidden?this.stop():this.wanted&&this.start()})}buildGround(t){let e=new ae(new Jn(4.9,5.05,.22,96),new Xe({color:3291725,metalness:.55,roughness:.35}));e.position.y=-.11,this.scene.add(e);let i=new ae(new Co(4.88,96),new li({map:$d([[0,"rgba(120,135,165,0.55)"],[.7,"rgba(70,80,105,0.35)"],[1,"rgba(40,46,60,0.2)"]]),transparent:!0,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.002,this.scene.add(i);let a=new ae(new cs(8.5,3.6),new li({map:$d([[0,"rgba(0,0,0,0.85)"],[.6,"rgba(0,0,0,0.45)"],[1,"rgba(0,0,0,0)"]]),transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(-.55,.01,0),this.scene.add(a),this.ringMat=new li({color:new pe(t),transparent:!0,opacity:.55,side:An,blending:ao,depthWrite:!1});let o=new ae(new Po(4.98,5.06,128),this.ringMat);o.rotation.x=-Math.PI/2,o.position.y=-.2,this.scene.add(o),this.rings=[o]}buildTruck(t,e){let i=this.truck;for(;i.children.length;)i.remove(i.children[0]);let a=new Xe({color:new pe(t),metalness:.45,roughness:.28,envMapIntensity:1.2});this.paint=a;let o=new Xe({color:1382171,metalness:.3,roughness:.6}),u=new Xe({color:2764341,metalness:.5,roughness:.5}),c=new Xe({color:14278115,metalness:1,roughness:.15}),f=new Xe({color:12568012,metalness:.9,roughness:.3}),d=new Xe({color:726048,metalness:.9,roughness:.05,envMapIntensity:1.6}),p=new Xe({color:16777215,emissive:14675967,emissiveIntensity:2.2}),m=new Xe({color:16753434,emissive:16747008,emissiveIntensity:1.6}),v=new Xe({color:16722474,emissive:16715792,emissiveIntensity:1.4}),y=new Xe({color:1118740,metalness:0,roughness:.92}),M=new si;i.add(M);let b=2.45,x=.2,g=b-x,P=1.08,E=2.65,N=2.48,z=(b+x)/2;M.add(ue(g,E,N,a,z,P+E/2,0,.16));let F=ue(g-.5,.35,N-.15,a,z-.15,P+E+.12,0,.12);M.add(F),M.add(ue(.05,1.05,2.2,d,b+.005,2.78,0,.02));let D=ue(.32,.1,2.36,o,b+.1,3.45,0);D.rotation.z=-.12,M.add(D);for(let Y=-2;Y<=2;Y++)M.add(ue(.06,.05,.12,m,b+.26,3.44,Y*.42));for(let Y of[1,-1]){M.add(ue(.95,.75,.04,d,b-.62,2.72,Y*(N/2+.005),.015)),M.add(ue(.03,1.3,.02,u,b-1.2,1.95,Y*(N/2+.01))),M.add(ue(.18,.04,.03,c,b-1.05,2.2,Y*(N/2+.02))),M.add(ue(.5,.05,.05,o,b-.05,2.95,Y*(N/2+.22)));let ut=ue(.12,.62,.26,o,b+.15,2.75,Y*(N/2+.4),.04);M.add(ut),M.add(ue(.02,.55,.2,c,b+.22,2.75,Y*(N/2+.4))),M.add(ue(.85,.06,.32,f,b-1,.62,Y*(N/2-.12))),M.add(ue(.85,.06,.32,f,b-1,.92,Y*(N/2-.12))),M.add(ue(.95,.55,.06,o,b-1,.82,Y*(N/2-.27)));let pt=new ae(new Jn(.66,.66,.4,24,1,!0,0,Math.PI),o);pt.rotation.x=Math.PI/2,pt.rotation.y=Math.PI/2,pt.position.set(1.62,.6,Y*1.05),pt.material=new Xe({color:1382171,roughness:.7,side:An}),M.add(pt)}M.add(ue(.06,.85,1.75,o,b+.01,1.72,0,.03));for(let Y=0;Y<4;Y++)M.add(ue(.03,.04,1.6,c,b+.05,1.42+Y*.2,0));M.add(ue(.36,.48,N+.04,u,b+.04,.98,0,.06)),M.add(ue(.02,.06,1.2,o,b+.23,.82,0));for(let Y of[1,-1])M.add(ue(.06,.2,.5,p,b+.2,1.08,Y*.9,.03)),M.add(ue(.03,.04,.55,p,b+.24,1.22,Y*.9)),M.add(ue(.05,.08,.12,m,b+.2,1.08,Y*1.2));M.add(ue(.03,.05,2,c,b+.02,2.2,0));let $=e==="4x2"?1:2,nt=$===1?[-2.2]:[-1.85,-3.2],T=nt[nt.length-1]-1.25,I=b-.1-T;for(let Y of[1,-1])i.add(ue(I,.3,.1,o,T+I/2,.88,Y*.44));for(let Y=T+.3;Y<b;Y+=1.1)i.add(ue(.08,.2,.8,o,Y,.88,0));let st=new ae(new ms(1.55,.62,.62,4,.22),f);st.position.set(-.55,.78,.86),i.add(st);for(let Y of[-.6,.6])i.add(ue(.06,.66,.66,o,-.55+Y,.78,.86));i.add(ue(.12,.08,.12,o,-.15,1.12,.86));let ct=new ae(new ms(.45,.5,.5,3,.12),new Xe({color:1920728,metalness:.2,roughness:.4}));ct.position.set(-1.6+($===1?.3:.55),.8,.9),$===1&&i.add(ct),i.add(ue(1,.6,.55,u,-.5,.8,-.88,.06)),i.add(ue(.6,.5,.5,f,.05,.85,-.92,.1));for(let Y of[1,-1])i.add(ue(.06,1.8,.35,a,x-.03,2.2,Y*(N/2-.17),.03));let k=$===1?-2.15:-2.5,rt=new ae(new Jn(.62,.62,.1,32),u);rt.position.set(k,1.24,0),i.add(rt),i.add(ue(.9,.18,1,o,k,1.12,0));let H=ue(.75,.11,.12,o,k-.3,1.25,0);i.add(H);let at=(Y,ut,pt)=>{let vt=new si,V=Mt=>{let Ht=new ae(new Jn(.53,.53,.32,36),y);Ht.rotation.x=Math.PI/2,Ht.position.z=Mt,vt.add(Ht);let Nt=new ae(new Lo(.44,.09,10,36),y);Nt.position.z=Mt+Math.sign(ut)*.16,vt.add(Nt);let Et=new ae(new Jn(.3,.3,.33,24),f);Et.rotation.x=Math.PI/2,Et.position.z=Mt,vt.add(Et)};pt?(V(-.17),V(.17)):V(0);let ft=new ae(new Jn(.12,.14,.12,16),c);ft.rotation.x=Math.PI/2,ft.position.z=Math.sign(ut)*(pt?.36:.2),vt.add(ft);for(let Mt=0;Mt<10;Mt++){let Ht=Mt/10*Math.PI*2,Nt=ue(.035,.035,.05,c,Math.cos(Ht)*.2,Math.sin(Ht)*.2,Math.sign(ut)*(pt?.34:.18));vt.add(Nt)}vt.position.set(Y,.53,ut),i.add(vt)};for(let Y of[1,-1])at(1.62,Y*1.05,!1);nt.forEach((Y,ut)=>{let pt=e==="6x4"||ut===0;for(let vt of[1,-1])at(Y,vt*(pt?.92:1.05),pt);i.add(ue(.14,.14,1.9,u,Y,.53,0))}),i.add(ue(.14,.14,1.9,u,1.62,.53,0));let W=new Xe({color:1382171,roughness:.7,side:An});for(let Y of[1,-1]){let ut=(nt[0]+nt[nt.length-1])/2,pt=nt.length===1?.62:1;if(nt.length===1){let vt=new ae(new Jn(pt,pt,.72,24,1,!0,0,Math.PI),W);vt.rotation.set(Math.PI/2,Math.PI/2,0),vt.position.set(ut,.62,Y*.92),i.add(vt)}else i.add(ue(2.4,.05,.72,W,ut,1.18,Y*.92));i.add(ue(.03,.55,.6,o,T+.35,.45,Y*.92)),i.add(ue(.06,.12,.4,v,T+.05,.9,Y*.95)),i.add(ue(.06,.12,.14,m,T+.05,.9,Y*1.22))}i.add(ue(.08,.1,2.3,u,T+.04,.78,0));let Q=new ae(new Jn(.08,.08,1.6,16),c);Q.position.set(x-.18,2.6,-.95),i.add(Q),this.rearX=nt,this.fifthX=k,this.defineHotspots()}defineHotspots(){let t=this.rearX;this.anchorDefs=[{id:"moteur",pos:[2.72,1.75,0],normal:[1,0,0]},{id:"cabine",pos:[1.3,3.15,1.3],normal:[0,0,1]},{id:"freins",pos:[1.62,1.35,1.3],normal:[0,0,1]},{id:"pneus_av",pos:[1.62,.5,1.3],normal:[0,0,1]},{id:"transmission",pos:[.15,.7,.9],normal:[0,0,1]},{id:"carburant",pos:[-.65,.85,1.25],normal:[0,0,1]},{id:"pneus_ar",pos:[t[0],.5,1.35],normal:[0,0,1]},{id:"sellette",pos:[this.fifthX,1.55,0],normal:null}]}setCabColor(t){this.paint.color.set(t),this.wake()}setAccent(t){this.ringMat.color.set(t),this.rim.color.set(t),this.wake()}setAxles(t,e){this.buildTruck(e,t),this.wake()}bindHotspots(t){this.hotspots=t,this.wake()}resize(){let t=this.container.clientWidth||1,e=this.container.clientHeight||1;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t/e<1.25?40:32,this.camera.updateProjectionMatrix(),this.wake()}wake(){this.dirtyUntil=performance.now()+600}start(){if(this.wanted=!0,this.running)return;this.running=!0,this.idleSince=performance.now();let t=e=>{this.running&&(this.raf=requestAnimationFrame(t),!(e-this.lastFrame<32)&&(this.lastFrame=e,this.frame(e)))};this.raf=requestAnimationFrame(t)}stop(t=!0){this.running=!1,t||(this.wanted=!1),cancelAnimationFrame(this.raf)}frame(t){let e=this.controls;if(this.autoRotate&&!this.userInteracting&&t-this.idleSince>4e3){let a=this.baseAzimuth+Math.sin((t-this.t0)/9e3)*.55,o=e.getAzimuthalAngle(),u=(a-o)*.02,c=this.camera.position.clone().sub(e.target);c.applyAxisAngle(new B(0,1,0),u),this.camera.position.copy(e.target).add(c),this.dirtyUntil=t+100}let i=.4+Math.sin(t/700)*.2;this.ringMat.opacity=i,e.update(),this.renderer.render(this.scene,this.camera),this.placeHotspots()}placeHotspots(){let t=this.container.clientWidth,e=this.container.clientHeight,i=new B,a=new B;for(let o of this.hotspots){let u=this.anchorDefs.find(p=>p.id===o.id);if(!u){o.node.style.display="none";continue}i.set(...u.pos).project(this.camera);let c=(i.x*.5+.5)*t,f=(-i.y*.5+.5)*e,d=1;u.normal&&(a.copy(this.camera.position).sub(new B(...u.pos)).normalize(),d=a.dot(new B(...u.normal))),o.node.style.display="",o.node.style.transform=`translate(${c.toFixed(1)}px, ${f.toFixed(1)}px)`,o.node.classList.toggle("behind",d<-.05)}}};var zu=[{id:"moteur",label:"Moteur",icon:"Cog",level:()=>ir("moteur")},{id:"cabine",label:"Cabine / Papiers",icon:"FileText",level:()=>ir("cabine")},{id:"freins",label:"Freins",icon:"Disc3",level:()=>ir("freins")},{id:"pneus_av",label:"Pneus AV",icon:"CircleDot",level:()=>Is(["AV"])},{id:"transmission",label:"Bo\xEEte / Pont",icon:"Settings2",level:()=>ir("transmission")},{id:"carburant",label:"Carburant",icon:"Fuel",level:()=>ir("carburant")},{id:"pneus_ar",label:"Pneus AR",icon:"CircleDot",level:()=>Is(["AR","AR1","AR2","SU"])},{id:"sellette",label:"Sellette",icon:"Link",level:()=>ir("sellette")}],Ne,Ke=null,Hu=[],Fu=!1;function Hy(){Ne=Pt("#screen-home"),Ne.innerHTML=`
    <div class="card home-truck">
      <header>
        <div class="card-title" style="flex-direction:column;align-items:flex-start;gap:.15rem">
          <h2 id="h-name"></h2>
          <div class="sub"><span class="dot" id="h-dot"></span><span id="h-status"></span></div>
        </div>
        <button class="pill" id="h-veh">${At("Truck",18)}V\xE9hicule</button>
      </header>
      <div class="stage" id="h-stage"><div class="hotspots" id="h-hotspots"></div></div>
      <footer>
        <button class="pill km-chip" id="h-km">${At("Gauge",18)}<span></span></button>
        <button class="pill km-chip" id="h-fuel">${At("Fuel",18)}Plein</button>
        <button class="pill km-chip" id="h-plate"></button>
      </footer>
    </div>
    <div class="home-side">
      <div class="card media">
        <div class="art">${At("Music")}</div>
        <div class="meta"><small>Lecture en cours</small><b id="h-music">Musique</b></div>
        <div class="controls">
          <button data-k="${Ls.PREVIOUS}" aria-label="Pr\xE9c\xE9dent">${At("SkipBack",28)}</button>
          <button class="play" data-k="${Ls.PLAY_PAUSE}" aria-label="Lecture">${At("Play",30)}</button>
          <button data-k="${Ls.NEXT}" aria-label="Suivant">${At("SkipForward",28)}</button>
        </div>
      </div>
      <div class="home-grid">
        <div class="card speed">
          <small id="h-date"></small>
          <div><div class="big" id="h-speed">0</div><div class="unit">km/h</div></div>
          <div class="row"><span>M\xE9t\xE9o</span><b id="h-weather">\u2014</b></div>
        </div>
        <div class="card quick">
          <button class="qbtn" data-go="vehicle:entretien"><span class="ic" style="background:#ea580c">${At("Wrench")}</span>Entretien</button>
          <button class="qbtn" data-go="vehicle:pneus"><span class="ic" style="background:#475569">${At("CircleDot")}</span>Pneus</button>
          <button class="qbtn" data-go="vehicle:carburant"><span class="ic" style="background:#16a34a">${At("Fuel")}</span>Conso</button>
          <button class="qbtn" data-go="nav"><span class="ic" style="background:#2563eb">${At("Navigation")}</span>GPS</button>
        </div>
        <div class="card next-card" id="h-next"></div>
      </div>
    </div>`,Pt("#h-veh",Ne).onclick=()=>Ii("vehicle",{tab:"apercu"}),Pt("#h-km",Ne).onclick=Us,Pt("#h-fuel",Ne).onclick=()=>lr(),Pt("#h-plate",Ne).onclick=()=>Ii("settings"),Pt("#h-next",Ne).onclick=()=>Ii("vehicle",{tab:"entretien"}),Ne.querySelectorAll("[data-go]").forEach(t=>{t.onclick=()=>{let[e,i]=t.dataset.go.split(":");Ii(e,i?{tab:i}:void 0)}}),Ne.querySelectorAll("[data-k]").forEach(t=>{t.onclick=()=>{Ee.mediaKey(Number(t.dataset.k)),Number(t.dataset.k)===Ls.PLAY_PAUSE&&(Fu=!Fu,t.innerHTML=At(Fu?"Pause":"Play",30))}}),Pt(".art",Ne).onclick=()=>Ee.openMusic(et.settings.musicPkg),Pt(".meta",Ne).onclick=()=>Ee.openMusic(et.settings.musicPkg);let r=Pt("#h-hotspots",Ne);Hu=zu.map(t=>{let e=sn(`<button class="hotspot" aria-label="${zt(t.label)}"><span class="sq">${At(t.icon)}</span><span class="lbl">${zt(t.label)}</span></button>`);return e.onclick=()=>Kf(t.id),r.appendChild(e),{id:t.id,node:e,def:t}}),tn.on(t=>{Pt("#h-speed",Ne).textContent=Math.round(t.speedKmh),Xy(t)}),Nn(Yd),Yd()}function Vy(){if(Ke)return!0;try{return Ke=new zo(Pt("#h-stage",Ne),{cabColor:et.truck.cabColor,accent:et.settings.accent,axles:et.truck.axles,quality:et.settings.quality}),Ke.bindHotspots(Hu),Ke.autoRotate=et.settings.autoRotate,Ke._axles=et.truck.axles,!0}catch(r){return console.error(r),Pt("#h-stage",Ne).insertAdjacentHTML("afterbegin",'<div class="map-offline">3D indisponible sur cet appareil</div>'),Ke=!1,!1}}function Gy(){Ke===null&&Vy(),Ke&&(Ke.resize(),Ke.start())}function Wy(){Ke&&Ke.stop(!1)}function Vu(r){Ne&&(Pt("#h-date",Ne).textContent=r.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"}))}function Yd(){let r=et.truck;Pt("#h-name",Ne).textContent=r.name,Pt("#h-plate",Ne).textContent=r.plate||"Immat.",Pt("#h-km span",Ne).textContent=ze(r.km);let t=zu.map(c=>c.level());Hu.forEach((c,f)=>{c.node.className=`hotspot ${t[f]}`});let e=et.maintenance.map(c=>({i:c,st:Hn(c)})),i=e.filter(c=>c.st.level==="late").length+t.filter((c,f)=>zu[f].id.startsWith("pneus")&&c==="late").length,a=e.filter(c=>c.st.level==="soon").length,o=Rs(t);Pt("#h-dot",Ne).className=`dot ${o}`,Pt("#h-status",Ne).textContent=i?`${i} entretien${i>1?"s":""} \xE0 faire`:a?`${a} entretien${a>1?"s":""} \xE0 pr\xE9voir`:"Tout est \xE0 jour";let u=e.sort((c,f)=>f.st.ratio-c.st.ratio)[0];Pt("#h-next",Ne).innerHTML=u?`<small>Prochain entretien</small><b class="lvl-${u.st.level}">${zt(u.i.name)}</b><small>${zt(ar(u.st))}</small><div class="bar ${u.st.level}"><i style="width:${Math.min(100,u.st.ratio*100)}%"></i></div>`:"<small>Aucun entretien programm\xE9</small>",Ke&&(Ke.setCabColor(r.cabColor),Ke.setAccent(et.settings.accent),Ke.autoRotate=et.settings.autoRotate,Ke._axles!==r.axles&&(Ke._axles=r.axles,Ke.setAxles(r.axles,r.cabColor)))}var Bu=0,qy=r=>r===0?"Soleil":r<=3?"Nuageux":r<=48?"Brouillard":r<=67?"Pluie":r<=77?"Neige":r<=82?"Averses":"Orage";async function Xy(r){if(!(Date.now()-Bu<1200*1e3)){Bu=Date.now();try{let e=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${r.lat.toFixed(3)}&longitude=${r.lng.toFixed(3)}&current=temperature_2m,weather_code`)).json();Pt("#h-weather",Ne).textContent=`${Math.round(e.current.temperature_2m)}\xB0 ${qy(e.current.weather_code)}`}catch{Bu=Date.now()-900*1e3}}}var Wo={};Or(Wo,{init:()=>Zy,reset:()=>Ku,show:()=>Ky});var ia=fm(Jd());var jd={dark:{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",attr:"\xA9 OpenStreetMap \xA9 CARTO",sub:"abcd"},plan:{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",attr:"\xA9 OpenStreetMap \xA9 CARTO",sub:"abcd"},sat:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attr:"\xA9 Esri",sub:""}},Wu=["dark","plan","sat"],en,fn=null,Pn=null,Xi=null,tp=!0,Go=null;function Zy(){en=Pt("#screen-nav"),en.innerHTML=`
    <div class="card nav-card">
      <div class="map" id="n-map"></div>
      <div class="nav-overlay nav-top">
        <form class="nav-search" id="n-form">
          ${At("Search",22,"muted")}
          <input id="n-q" placeholder="O\xF9 allez-vous ? (adresse, ville, entreprise\u2026)" autocomplete="off" />
          <button type="submit">${At("Navigation",18)}Go</button>
        </form>
      </div>
      <div class="speed-badge"><div><b id="n-speed">0</b><small>km/h</small></div></div>
      <div class="nav-places" id="n-places"></div>
      <div class="nav-right">
        <button class="fab" id="n-layer" aria-label="Fond de carte">${At("Layers")}</button>
        <button class="fab on" id="n-follow" aria-label="Me suivre">${At("LocateFixed")}</button>
        <button class="fab gm" id="n-gm" aria-label="Ouvrir Google Maps">${At("Map")}</button>
        <button class="fab wz" id="n-wz" aria-label="Ouvrir Waze">${At("Navigation")}</button>
      </div>
    </div>`,Pt("#n-form",en).onsubmit=r=>{r.preventDefault();let t=Pt("#n-q",en).value.trim();t&&(Pt("#n-q",en).blur(),ep(t))},Pt("#n-gm",en).onclick=()=>Ee.openMap("google"),Pt("#n-wz",en).onclick=()=>Ee.openMap("waze"),Pt("#n-follow",en).onclick=()=>{Zu(!0),tn.last&&$u(tn.last,!0)},Pt("#n-layer",en).onclick=$y,tn.on(r=>{Pt("#n-speed",en).textContent=Math.round(r.speedKmh),Yu(r)}),Nn(Qd),Qd()}function ep(r){return Ze({title:"Itin\xE9raire",body:`<p class="muted">Destination : <b style="color:var(--text)">${zt(r)}</b></p>`,actions:[{label:"Waze",icon:"Navigation",onClick:()=>Ee.navigate(r,"waze")},{label:"Google Maps",kind:"primary",icon:"Map",onClick:()=>Ee.navigate(r,"google")}]})}function Qd(){let r=Pt("#n-places",en);r.innerHTML="";for(let e of et.places){let i=sn(`<button class="pill">${At(e.name.toLowerCase().includes("maison")?"House":"MapPin",18)}${zt(e.name)}</button>`);i.onclick=()=>e.address?ep(e.address):qu(e),Da(i,()=>qu(e)),r.appendChild(i)}let t=sn(`<button class="pill">${At("Plus",18)}</button>`);t.onclick=()=>qu(null),r.appendChild(t)}function qu(r){let t=[{key:"name",label:"Nom",type:"text",value:(r==null?void 0:r.name)||""},{key:"address",label:"Adresse",type:"text",value:(r==null?void 0:r.address)||"",placeholder:"ex : 12 rue du Port, 76600 Le Havre"}];Ze({title:r?"Modifier la destination":"Nouvelle destination",body:`${ni(t)}<p class="muted" style="margin-top:.6rem;font-size:.8rem">Astuce : appui long sur une destination pour la modifier.</p>`,actions:[...r?[{label:"Supprimer",kind:"danger",icon:"Trash2",onClick:()=>{et.places=et.places.filter(e=>e!==r),ye()}}]:[],{label:"Annuler"},{label:"Enregistrer",kind:"primary",icon:"Check",onClick:e=>{let i=ii(e,t);return i.name?(r?Object.assign(r,i):et.places.push({id:zn(),...i}),ye(),!0):(Ue("Donne un nom","err"),!1)}}]})}function Zu(r){tp=r,Pt("#n-follow",en).classList.toggle("on",r)}function $u(r,t){!tp&&!t||(Pn?Pn.panTo({lat:r.lat,lng:r.lng}):fn&&fn.setView([r.lat,r.lng],t?Math.max(fn.getZoom(),15):fn.getZoom(),{animate:!0}))}function Yu(r){Pn&&window.google?Xi?Xi.setPosition({lat:r.lat,lng:r.lng}):Xi=new google.maps.Marker({map:Pn,position:r,icon:{path:google.maps.SymbolPath.CIRCLE,scale:9,fillColor:"#3b82f6",fillOpacity:1,strokeColor:"#fff",strokeWeight:3}}):fn&&(Xi?Xi.setLatLng([r.lat,r.lng]):Xi=ia.default.marker([r.lat,r.lng],{icon:ia.default.divIcon({className:"",html:'<div class="me-marker"></div>',iconSize:[22,22],iconAnchor:[11,11]})}).addTo(fn)),$u(r,!1)}var Vo=null;function Xu(){Go="leaflet",fn=ia.default.map(Pt("#n-map",en),{zoomControl:!1,attributionControl:!0}).setView([46.6,2.4],6),np(et.settings.mapStyle||"dark"),fn.on("dragstart",()=>Zu(!1)),tn.last&&(Yu(tn.last),$u(tn.last,!0))}function np(r){let t=jd[r]||jd.dark;Vo&&fn.removeLayer(Vo),Vo=ia.default.tileLayer(t.url,{attribution:t.attr,subdomains:t.sub||"abc",maxZoom:19,detectRetina:!1,updateWhenIdle:!0,keepBuffer:1}).addTo(fn)}function $y(){let r=Wu[(Wu.indexOf(et.settings.mapStyle)+1)%Wu.length];et.settings.mapStyle=r,ye(),Pn&&Pn.setMapTypeId(r==="sat"?"hybrid":"roadmap"),Pn&&r!=="sat"&&Pn.setOptions({styles:r==="dark"?ip:[]}),fn&&np(r),Ue(r==="dark"?"Carte sombre":r==="plan"?"Plan":"Satellite")}var ip=[{elementType:"geometry",stylers:[{color:"#1d2433"}]},{elementType:"labels.text.fill",stylers:[{color:"#9aa6bd"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1d2433"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#2f3a52"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#4a5a7d"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"poi",stylers:[{visibility:"off"}]}];function Yy(r){Go="google",window.__gmReady=()=>{let e=et.settings.mapStyle;Pn=new google.maps.Map(Pt("#n-map",en),{center:tn.last?{lat:tn.last.lat,lng:tn.last.lng}:{lat:46.6,lng:2.4},zoom:tn.last?15:6,disableDefaultUI:!0,mapTypeId:e==="sat"?"hybrid":"roadmap",styles:e==="dark"?ip:[],gestureHandling:"greedy"}),new google.maps.TrafficLayer().setMap(Pn),Pn.addListener("dragstart",()=>Zu(!1)),tn.last&&Yu(tn.last)},window.gm_authFailure=()=>{Ue("Cl\xE9 Google Maps refus\xE9e \u2014 carte libre utilis\xE9e","err"),Pn=null,Xi=null,Pt("#n-map",en).innerHTML="",Xu()};let t=document.createElement("script");t.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(r)}&callback=__gmReady&language=fr&region=FR`,t.async=!0,t.onerror=()=>{Xu()},document.head.appendChild(t)}function Ky(){Go||(et.settings.googleMapsKey?Yy(et.settings.googleMapsKey):Xu()),fn&&setTimeout(()=>fn.invalidateSize(),250)}function Ku(){fn&&(fn.remove(),fn=null),Pn=null,Xi=null,Go=null,Vo=null,Pt("#n-map",en).innerHTML="",Pt("#n-map",en).className="map"}var Ju={};Or(Ju,{init:()=>jy,show:()=>Qy});var Jy=[["apercu","Aper\xE7u"],["entretien","Entretien"],["pneus","Pneus"],["carburant","Carburant"],["historique","Historique"]],Zi,sa="apercu",ra="all",rp=null;function jy(){Zi=Pt("#screen-vehicle"),Zi.innerHTML=`
    <div class="card veh-main">
      <div class="veh-head">
        <div class="card-title" style="flex-direction:column;align-items:flex-start;gap:.15rem">
          <h2>V\xE9hicule</h2>
          <div class="sub" id="v-sub"></div>
        </div>
        <div class="tabs" id="v-tabs">${Jy.map(([r,t])=>`<button data-tab="${r}">${t}</button>`).join("")}</div>
      </div>
      <div class="veh-body" id="v-body"></div>
    </div>
    <div class="card veh-side">
      <div class="card-title"><h2 style="font-size:1.2rem">\xC0 surveiller</h2></div>
      <div class="list" id="v-alerts"></div>
    </div>`,Zi.querySelectorAll("[data-tab]").forEach(r=>{r.onclick=()=>{sa=r.dataset.tab,aa()}}),Nn(aa)}function Qy(r){r&&r.tab&&(sa=r.tab),aa()}function aa(){if(!Zi)return;Zi.querySelectorAll("[data-tab]").forEach(e=>e.classList.toggle("on",e.dataset.tab===sa)),Pt("#v-sub",Zi).innerHTML=`${At("Truck",16)} ${zt(et.truck.name)} \xB7 ${zt(et.truck.plate)} \xB7 ${ze(et.truck.km)}`;let r=Pt("#v-body",Zi),t=r.scrollTop;({apercu:eM,entretien:nM,pneus:iM,carburant:rM,historique:aM})[sa](r),r.scrollTop=t,tM()}function tM(){let r=Pt("#v-alerts",Zi),t=et.maintenance.map(i=>({i,st:Hn(i)})).sort((i,a)=>a.st.ratio-i.st.ratio),e=Li(et.truck.axles).map(i=>({p:i,t:et.tires.list[i.pos],st:mi(et.tires.list[i.pos])})).filter(i=>i.t&&i.st.level!=="ok");r.innerHTML=[...e.map(i=>`<div class="row-item" data-tire="${i.p.pos}"><div class="ic lvl-${i.st.level}">${At("CircleDot")}</div><div class="txt"><b>Pneu ${zt(i.p.label)}</b><small>${i.st.remainingKm>=0?`encore ${ze(i.st.remainingKm)}`:"\xE0 changer"}</small></div><div class="right lvl-${i.st.level}">${or[i.st.level]}</div></div>`),...t.map(({i,st:a})=>{var o;return`<div class="row-item" data-item="${i.id}"><div class="ic lvl-${a.level}">${At(((o=nr[i.category])==null?void 0:o.icon)||"Wrench")}</div><div class="txt"><b>${zt(i.name)}</b><small>${zt(ar(a))}</small></div><div class="right lvl-${a.level}">${or[a.level]}</div></div>`})].join(""),r.querySelectorAll("[data-item]").forEach(i=>{i.onclick=()=>{let a=et.maintenance.find(o=>o.id===i.dataset.item);a&&pc(a)}}),r.querySelectorAll("[data-tire]").forEach(i=>{i.onclick=()=>ka(i.dataset.tire)})}function eM(r){let t=rr(),e=p=>et.maintenance.find(m=>p.test(m.name)),i=e(/vidange/i),a=e(/contr[oô]le technique/i),o=e(/chrono|tachy/i),u=Is(["AV","AR","AR1","AR2","SU"]),c=(p,m,v,y="",M="")=>`<button class="stat" ${y}>${At(p)}<div style="text-align:left"><small>${m}</small><b class="${M}">${v}</b></div></button>`,f=p=>p?ar(Hn(p)):"\u2014",d=p=>p?`lvl-${Hn(p).level}`:"";r.innerHTML=`
    <div class="stats">
      ${c("Gauge","Kilom\xE9trage (toucher pour modifier)",ze(et.truck.km),'id="o-km"')}
      ${c("Fuel","Consommation moyenne",t.avg?`${Fe(t.avg)} L/100`:"\u2014",'data-tab="carburant"')}
      ${c("Droplet","Prochaine vidange",f(i),'data-tab="entretien"',d(i))}
      ${c("ShieldCheck","Contr\xF4le technique",f(a),'data-tab="entretien"',d(a))}
      ${c("Clock","Chronotachygraphe",f(o),'data-tab="entretien"',d(o))}
      ${c("CircleDot","\xC9tat des pneus",or[u==="ok"&&!Object.keys(et.tires.list).length?"none":u],'data-tab="pneus"',`lvl-${u}`)}
      ${c("Euro","Co\xFBt gasoil au km",t.costPerKm?`${Fe(t.costPerKm,3)} \u20AC`:"\u2014",'data-tab="carburant"')}
      ${c("Droplets","AdBlue total",t.totalAdblue?`${Fe(t.totalAdblue,0)} L`:"\u2014",'data-tab="carburant"')}
      ${c("Calendar","D\xE9penses entretien",Os(et.history.reduce((p,m)=>p+(Number(m.cost)||0),0)),'data-tab="historique"')}
      ${c("Truck","Configuration",`${zt(et.truck.axles)} \xB7 ${zt(et.truck.plate)}`,'data-go="settings"')}
    </div>
    <div class="toolbar" style="margin-top:.8rem">
      <button class="btn primary" id="o-fuel">${At("Fuel",20)}Ajouter un plein</button>
      <button class="btn" id="o-km2">${At("Gauge",20)}Mettre \xE0 jour les km</button>
    </div>`,Pt("#o-km",r).onclick=Us,Pt("#o-km2",r).onclick=Us,Pt("#o-fuel",r).onclick=()=>lr(),r.querySelectorAll(".stat[data-tab]").forEach(p=>{p.onclick=()=>{sa=p.dataset.tab,aa()}}),r.querySelectorAll("[data-go]").forEach(p=>{p.onclick=()=>window.__go(p.dataset.go)})}function nM(r){let t=Object.entries(nr).filter(([i])=>i!=="pneus"),e=et.maintenance;ra!=="all"&&(e=e.filter(i=>i.category===ra)),e=[...e].sort((i,a)=>Hn(a).ratio-Hn(i).ratio),r.innerHTML=`
    <div class="toolbar">
      <button class="pill ${ra==="all"?"on":""}" data-cat="all">Tout</button>
      ${t.map(([i,a])=>`<button class="pill ${ra===i?"on":""}" data-cat="${i}">${a.label}</button>`).join("")}
      <span class="grow"></span>
      <button class="btn small primary" id="m-add">${At("Plus",18)}Ajouter</button>
    </div>
    ${e.length?Na(e):'<p class="empty">Rien ici.</p>'}
    <p class="muted" style="font-size:.78rem;margin-top:.6rem">Touchez une ligne pour modifier l\u2019intervalle, \xAB Fait \xBB pour enregistrer l\u2019intervention. Les intervalles par d\xE9faut sont indicatifs : adaptez-les \xE0 votre carnet d\u2019entretien.</p>`,r.querySelectorAll("[data-cat]").forEach(i=>{i.onclick=()=>{ra=i.dataset.cat,aa()}}),Pt("#m-add",r).onclick=()=>Ua(null),Oa(r)}function iM(r){let t=er[et.truck.axles]||er["4x2"],e=Li(et.truck.axles),i=o=>`<button class="tire ${mi(et.tires.list[o]).level} ${rp===o?"sel":""}" data-pos="${o}" aria-label="${o}"></button>`,a=t.map(o=>{let u=e.filter(f=>f.axle===o.id).map(f=>f.pos),c=u.length/2;return`<div class="axle"><div class="side">${u.slice(0,c).map(i).join("")}</div><small class="muted" style="z-index:1;background:#1a2133;padding:0 .3rem;border-radius:.3rem">${o.id}</small><div class="side">${u.slice(c).map(i).join("")}</div></div>`}).join("");r.innerHTML=`
    <div class="tire-layout">
      <div class="tire-diagram" style="min-height:${t.length*6+4}rem"><div class="cab"></div><div style="height:2rem"></div>${a}</div>
      <div class="tire-list list">
        ${e.map(o=>{let u=et.tires.list[o.pos],c=mi(u);return`<div class="row-item" data-pos="${o.pos}">
            <div class="ic lvl-${c.level}">${At("CircleDot")}</div>
            <div class="txt"><b>${zt(o.label)}</b><small>${u?`${zt([u.brand,u.model].filter(Boolean).join(" ")||"Pneu")} \xB7 ${zt(u.size||"")} \xB7 mont\xE9 le ${sr(u.mountDate)}`:"Non renseign\xE9 \u2014 touchez pour ajouter"}</small>
            ${u?`<div class="bar ${c.level}"><i style="width:${Math.min(100,c.ratio*100)}%"></i></div>`:""}</div>
            <div class="right lvl-${c.level}">${u?c.remainingKm>=0?`~${ze(c.remainingKm)}`:"\xC0 changer":"\u2014"}<small>${u&&u.depth!==""&&u.depth!=null?`${Fe(u.depth)} mm`:""}${u&&u.pressure?` \xB7 ${Fe(u.pressure)} bar`:""}</small></div>
          </div>`}).join("")}
      </div>
    </div>
    <div class="toolbar" style="margin-top:.8rem">
      <button class="btn small" id="t-life">${At("Settings2",18)}Dur\xE9e de vie par d\xE9faut : ${ze(et.tires.defaultLifeKm)} \xB7 min ${et.tires.minDepth} mm</button>
    </div>`,r.querySelectorAll("[data-pos]").forEach(o=>{o.onclick=()=>{rp=o.dataset.pos,ka(o.dataset.pos)}}),Pt("#t-life",r).onclick=()=>{let o=[{key:"defaultLifeKm",label:"Dur\xE9e de vie par d\xE9faut (km)",type:"number",value:et.tires.defaultLifeKm},{key:"minDepth",label:"Profondeur mini avant remplacement (mm)",type:"number",value:et.tires.minDepth}];Ze({title:"R\xE9glages pneus",body:ni(o),actions:[{label:"Annuler"},{label:"Enregistrer",kind:"primary",onClick:u=>{let c=ii(u,o);c.defaultLifeKm>0&&(et.tires.defaultLifeKm=c.defaultLifeKm),c.minDepth>0&&(et.tires.minDepth=c.minDepth),ye()}}]})}}function rM(r){let t=rr(),e=[...et.fuel].sort((a,o)=>o.km-a.km),i=Object.fromEntries(t.segments.map(a=>[a.id,a]));r.innerHTML=`
    <div class="stats">
      <div class="stat">${At("Gauge")}<div><small>Moyenne (plein \xE0 plein)</small><b>${t.avg?`${Fe(t.avg)} L/100`:"\u2014"}</b></div></div>
      <div class="stat">${At("Fuel")}<div><small>Derni\xE8re conso</small><b>${t.last?`${Fe(t.last)} L/100`:"\u2014"}</b></div></div>
      <div class="stat">${At("Euro")}<div><small>Total d\xE9pens\xE9</small><b>${Os(t.totalCost)}</b></div></div>
      <div class="stat">${At("Route")}<div><small>Distance suivie</small><b>${ze(t.dist)}</b></div></div>
    </div>
    <div style="margin:.8rem 0"><canvas class="chart" id="c-chart"></canvas></div>
    <div class="toolbar"><b>Pleins</b><span class="grow"></span><button class="btn small primary" id="c-add">${At("Plus",18)}Ajouter un plein</button></div>
    <div class="list">${e.length?e.map(a=>`
      <div class="row-item" data-fuel="${a.id}">
        <div class="ic">${At("Fuel")}</div>
        <div class="txt"><b>${Fe(a.liters,1)} L${a.adblue?` + ${Fe(a.adblue,0)} L AdBlue`:""}</b><small>${sr(a.date)} \xB7 ${ze(a.km)}${a.station?` \xB7 ${zt(a.station)}`:""}${a.full?"":" \xB7 partiel"}</small></div>
        <div class="right">${i[a.id]?`${Fe(i[a.id].l100)} L/100`:""}<small>${a.price?`${Os(a.liters*a.price)} \xB7 ${Fe(a.price,3)} \u20AC/L`:""}</small></div>
      </div>`).join(""):'<p class="empty">Aucun plein enregistr\xE9. Faites le plein complet, notez les km et les litres : la conso se calcule \xE0 partir du 2\u1D49 plein complet.</p>'}</div>`,Pt("#c-add",r).onclick=()=>lr(),r.querySelectorAll("[data-fuel]").forEach(a=>{a.onclick=()=>lr(et.fuel.find(o=>o.id===a.dataset.fuel))}),requestAnimationFrame(()=>sM(Pt("#c-chart",r),t.segments.slice(-20),t.avg))}function sM(r,t,e){if(!r)return;let i=window.devicePixelRatio||1,a=r.clientWidth,o=r.clientHeight;r.width=a*i,r.height=o*i;let u=r.getContext("2d");u.scale(i,i);let c=parseFloat(getComputedStyle(document.documentElement).fontSize)*.7;if(u.font=`${c}px sans-serif`,!t.length){u.fillStyle="rgba(226,232,240,.5)",u.textAlign="center",u.fillText("Le graphique de consommation appara\xEEtra apr\xE8s 2 pleins complets",a/2,o/2);return}let f=t.map(b=>b.l100),d=Math.max(...f)*1.1,p=Math.max(0,Math.min(...f)*.85),m={l:c*3,r:8,t:8,b:c*1.6},v=(a-m.l-m.r)/t.length,y=b=>m.t+(1-(b-p)/(d-p||1))*(o-m.t-m.b),M=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#3b82f6";u.fillStyle="rgba(226,232,240,.55)",u.textAlign="right",u.fillText(Fe(d,0),m.l-6,m.t+c),u.fillText(Fe(p,0),m.l-6,o-m.b),t.forEach((b,x)=>{let g=m.l+x*v+v*.18;u.fillStyle=M,u.globalAlpha=.85;let P=y(b.l100);u.beginPath(),u.roundRect?u.roundRect(g,P,v*.64,o-m.b-P,4):u.rect(g,P,v*.64,o-m.b-P),u.fill(),u.globalAlpha=1}),e&&(u.strokeStyle="#fbbf24",u.setLineDash([5,4]),u.beginPath(),u.moveTo(m.l,y(e)),u.lineTo(a-m.r,y(e)),u.stroke(),u.setLineDash([]),u.fillStyle="#fbbf24",u.textAlign="left",u.fillText(`moy. ${Fe(e)}`,m.l+4,y(e)-4))}function aM(r){r.innerHTML=et.history.length?`<div class="list">${et.history.map(t=>`
      <div class="row-item">
        <div class="ic">${At("Wrench")}</div>
        <div class="txt"><b>${zt(t.name)}</b><small>${sr(t.date)} \xB7 ${ze(t.km)}${t.note?` \xB7 ${zt(t.note)}`:""}</small></div>
        <div class="right">${t.cost?Os(t.cost):""}</div>
        <button class="icon-btn" data-del="${t.id}" aria-label="Supprimer">${At("Trash2",18)}</button>
      </div>`).join("")}</div>`:'<p class="empty">L\u2019historique se remplit quand vous validez un entretien (\xAB Fait \xBB) ou changez un pneu.</p>',r.querySelectorAll("[data-del]").forEach(t=>{t.onclick=async()=>{await Ri("Supprimer","Supprimer cette ligne de l\u2019historique ?","Supprimer")&&(et.history=et.history.filter(e=>e.id!==t.dataset.del),ye())}})}var tf={};Or(tf,{getApps:()=>Zo,init:()=>oM,refresh:()=>Xo});var _s,qo=[],ju="";function oM(){_s=Pt("#screen-apps"),_s.innerHTML=`
    <div class="card apps-card">
      <div class="apps-head">
        <h2>Applications</h2>
        <span class="muted" style="font-size:.85rem">Appui long = ajouter / retirer des favoris</span>
        <label class="search">${At("Search",20,"muted")}<input id="a-q" placeholder="Rechercher" /></label>
      </div>
      <div class="apps-scroll">
        <div class="apps-section">Favoris</div>
        <div class="app-grid favs" id="a-favs"></div>
        <div class="apps-section">Toutes les applications</div>
        <div class="app-grid" id="a-all"></div>
      </div>
    </div>`,Pt("#a-q",_s).addEventListener("input",r=>{ju=r.target.value.trim().toLowerCase(),Qu()}),Nn(Qu),Xo()}function Xo(){qo=Ee.getApps(),Qu()}function Zo(){return qo}function sp(r,t){let e=Ee.iconUrl(r.pkg),i=sn(`<button class="app">
      ${e?`<img loading="lazy" src="${e}" alt="" />`:`<div class="ph">${zt(r.label[0]||"?")}</div>`}
      <span>${zt(r.label)}</span>
      ${t?"":et.favorites.includes(r.pkg)?`<i class="star">${At("Star",14)}</i>`:""}
    </button>`),a=i.querySelector("img");return a&&(a.onerror=()=>a.replaceWith(sn(`<div class="ph">${zt(r.label[0]||"?")}</div>`))),i.onclick=()=>Ee.launchApp(r.pkg),Da(i,()=>lM(r)),i}function lM(r){let t=et.favorites.includes(r.pkg);Ze({title:r.label,body:`<p class="muted">${zt(r.pkg)}</p>`,actions:[{label:"Infos appli",icon:"Info",onClick:()=>Ee.appInfo(r.pkg)},{label:t?"Retirer des favoris":"Ajouter aux favoris",kind:"primary",icon:t?"StarOff":"Star",onClick:()=>{t?et.favorites=et.favorites.filter(e=>e!==r.pkg):et.favorites.push(r.pkg),ye(),Ue(t?"Retir\xE9 des favoris":"Ajout\xE9 aux favoris","ok")}}]})}function Qu(){if(!_s)return;let r=Pt("#a-favs",_s),t=Pt("#a-all",_s);r.innerHTML="",t.innerHTML="";let e=et.favorites.map(a=>qo.find(o=>o.pkg===a)).filter(Boolean);e.length||r.appendChild(sn('<p class="empty">Fais un appui long sur une application pour l\u2019ajouter ici.</p>')),e.forEach(a=>r.appendChild(sp(a,!0)));let i=document.createDocumentFragment();qo.filter(a=>!ju||a.label.toLowerCase().includes(ju)).forEach(a=>i.appendChild(sp(a,!1))),t.appendChild(i)}var ef={};Or(ef,{init:()=>hM,show:()=>dM});var cM=["#e8ecf1","#111318","#b91c1c","#1d4ed8","#0f766e","#f59e0b","#6b7280","#7c3aed","#065f46","#ea580c"],uM=["#3b82f6","#22d3ee","#a855f7","#ec4899","#ef4444","#f97316","#eab308","#22c55e"],fM=[["sunset","Coucher de soleil"],["night","Nuit"],["ocean","Oc\xE9an"],["red","Rouge sombre"]],bn;function hM(){bn=Pt("#screen-settings"),Nn(()=>{bn.classList.contains("active")&&op()})}function dM(){op()}var $o=(r,t)=>`<button class="switch ${t?"on":""}" data-switch="${r}" aria-label="${r}"></button>`;function ap(r,t){if(!r)return t;let e=Zo().find(i=>i.pkg===r);return e?e.label:r}function op(){let r=et.truck,t=et.settings;bn.innerHTML=`
    <div class="card settings-card">
      <div class="card-title"><h2>R\xE9glages</h2></div>
      <div class="settings-scroll">
        <section>
          <h3>${At("Truck",20)}Mon camion</h3>
          <label class="field"><span>Nom affich\xE9</span><input data-truck="name" value="${zt(r.name)}" /></label>
          <label class="field half" style="width:100%"><span>Immatriculation</span><input data-truck="plate" value="${zt(r.plate)}" /></label>
          <label class="field"><span>Configuration des essieux</span><select data-truck="axles">${Object.keys(er).map(i=>`<option ${i===r.axles?"selected":""}>${i}</option>`).join("")}</select></label>
          <div class="field"><span>Couleur de la cabine (3D)</span><div class="swatches">${cM.map(i=>`<button class="swatch ${i===r.cabColor?"on":""}" style="background:${i}" data-cab="${i}"></button>`).join("")}<input type="color" value="${zt(r.cabColor)}" data-cabpick style="width:2.4rem;height:2.4rem;border:0;background:none;padding:0" /></div></div>
        </section>
        <section>
          <h3>${At("Sun",20)}Apparence</h3>
          <div class="field"><span>Couleur d'accent</span><div class="swatches">${uM.map(i=>`<button class="swatch ${i===t.accent?"on":""}" style="background:${i}" data-accent="${i}"></button>`).join("")}</div></div>
          <label class="field"><span>Fond d'\xE9cran</span><select data-setting="wallpaper">${fM.map(([i,a])=>`<option value="${i}" ${i===t.wallpaper?"selected":""}>${a}</option>`).join("")}</select></label>
          <div class="line"><span>Rotation auto du camion</span>${$o("autoRotate",t.autoRotate)}</div>
          <div class="line"><span>Noms sous les carr\xE9s</span>${$o("hotspotLabels",t.hotspotLabels)}</div>
          <div class="line"><span>Effet verre flout\xE9 (plus gourmand)</span>${$o("glass",t.glass)}</div>
          <div class="line"><span>Plein \xE9cran (cacher la barre Android)</span>${$o("fullscreen",t.fullscreen)}</div>
          <label class="field"><span>Qualit\xE9 3D (red\xE9marrage du launcher)</span><select data-setting="quality"><option value="low" ${t.quality==="low"?"selected":""}>\xC9conomie</option><option value="auto" ${t.quality==="auto"?"selected":""}>Normale</option><option value="high" ${t.quality==="high"?"selected":""}>Haute</option></select></label>
        </section>
        <section>
          <h3>${At("Map",20)}Navigation</h3>
          <label class="field"><span>Cl\xE9 API Google Maps (facultatif)</span><input data-setting="googleMapsKey" value="${zt(t.googleMapsKey)}" placeholder="AIza\u2026" />
          <small>Sans cl\xE9 : carte libre (OpenStreetMap) + boutons pour lancer Google Maps / Waze. Avec une cl\xE9 \xAB Maps JavaScript API \xBB : vraie carte Google avec trafic directement dans l'\xE9cran.</small></label>
          <div class="line"><span>Application musique</span><button class="btn small" data-pick="musicPkg">${zt(ap(t.musicPkg,"Automatique"))}</button></div>
          <div class="line"><span>Application t\xE9l\xE9phone</span><button class="btn small" data-pick="phonePkg">${zt(ap(t.phonePkg,"Automatique"))}</button></div>
        </section>
        <section>
          <h3>${At("Smartphone",20)}Syst\xE8me</h3>
          <div class="line"><span>Param\xE8tres Android</span><button class="btn small" data-sys="android">${At("Settings",18)}Ouvrir</button></div>
          <div class="line"><span>Wi-Fi</span><button class="btn small" data-sys="wifi">${At("Wifi",18)}Ouvrir</button></div>
          <div class="line"><span>Bluetooth</span><button class="btn small" data-sys="bluetooth">${At("Bluetooth",18)}Ouvrir</button></div>
          <div class="line"><span>Launcher par d\xE9faut</span><button class="btn small" data-sys="home">${At("House",18)}Choisir</button></div>
        </section>
        <section>
          <h3>${At("Download",20)}Sauvegarde</h3>
          <p class="muted" style="font-size:.82rem">Les donn\xE9es sont enregistr\xE9es automatiquement sur l'autoradio. Pensez \xE0 exporter une copie de temps en temps.</p>
          <div class="line"><span>Exporter (dossier T\xE9l\xE9chargements)</span><button class="btn small" id="s-export">${At("Download",18)}Exporter</button></div>
          <div class="line"><span>Importer une sauvegarde</span><label class="btn small">${At("Upload",18)}Importer<input type="file" accept="application/json,.json" id="s-import" hidden /></label></div>
          <div class="line"><span>Tout r\xE9initialiser</span><button class="btn small danger" id="s-reset">${At("Trash2",18)}R\xE9initialiser</button></div>
        </section>
        <section>
          <h3>${At("Info",20)}\xC0 propos</h3>
          <p class="muted" style="font-size:.85rem">Launcher Scania \u2014 version ${zt(Ee.appVersion())}. Donn\xE9es saisies \xE0 la main (pas de liaison CAN). Les intervalles d'entretien propos\xE9s sont indicatifs.</p>
        </section>
      </div>
    </div>`,bn.querySelectorAll("[data-truck]").forEach(i=>{i.onchange=()=>{et.truck[i.dataset.truck]=i.value,ye()}}),bn.querySelectorAll("[data-setting]").forEach(i=>{i.onchange=()=>{et.settings[i.dataset.setting]=i.value.trim(),ye(),i.dataset.setting==="googleMapsKey"&&(Ku(),Ue("Carte recharg\xE9e \xE0 la prochaine ouverture"))}}),bn.querySelectorAll("[data-switch]").forEach(i=>{i.onclick=()=>{let a=i.dataset.switch;et.settings[a]=!et.settings[a],a==="fullscreen"&&Ee.setFullscreen(et.settings[a]),ye()}}),bn.querySelectorAll("[data-cab]").forEach(i=>{i.onclick=()=>{et.truck.cabColor=i.dataset.cab,ye()}});let e=Pt("[data-cabpick]",bn);e.onchange=()=>{et.truck.cabColor=e.value,ye()},bn.querySelectorAll("[data-accent]").forEach(i=>{i.onclick=()=>{et.settings.accent=i.dataset.accent,ye()}}),bn.querySelectorAll("[data-sys]").forEach(i=>{i.onclick=()=>Ee.openSettings(i.dataset.sys)}),bn.querySelectorAll("[data-pick]").forEach(i=>{i.onclick=()=>pM(i.dataset.pick)}),Pt("#s-export",bn).onclick=()=>{let i=Ee.exportBackup(JSON.stringify(et,null,2));Ue(i||"Sauvegarde export\xE9e","ok")},Pt("#s-import",bn).onchange=i=>{let a=i.target.files&&i.target.files[0];if(!a)return;let o=new FileReader;o.onload=async()=>{try{let u=JSON.parse(o.result);if(!u.truck||!u.maintenance)throw new Error("format");if(!await Ri("Importer","Remplacer toutes les donn\xE9es actuelles par cette sauvegarde ?","Importer"))return;Sl(u),Ue("Sauvegarde import\xE9e","ok")}catch{Ue("Fichier de sauvegarde invalide","err")}},o.readAsText(a)},Pt("#s-reset",bn).onclick=async()=>{await Ri("Tout r\xE9initialiser","Effacer kilom\xE9trage, entretiens, pneus, pleins et favoris ?","Tout effacer")&&($f(),Ue("R\xE9initialis\xE9"))}}function pM(r){let t=sn('<div class="app-grid"></div>'),e=sn(`<button class="app"><div class="ph">${At("Sparkles")}</div><span>Automatique</span></button>`);e.onclick=()=>{et.settings[r]="",ye(),i.close()},t.appendChild(e);for(let a of Zo()){let o=Ee.iconUrl(a.pkg),u=sn(`<button class="app">${o?`<img src="${o}" alt=""/>`:`<div class="ph">${zt(a.label[0])}</div>`}<span>${zt(a.label)}</span></button>`);u.onclick=()=>{et.settings[r]=a.pkg,ye(),i.close()},t.appendChild(u)}let i=Ze({title:r==="musicPkg"?"Application musique":"Application t\xE9l\xE9phone",body:t,wide:!0})}var Yo={home:Gu,nav:Wo,vehicle:Ju,apps:tf,settings:ef},Ko=null;function oa(r,t){var i,a,o,u;if(!Yo[r]||Ko===r&&!t)return;let e=Ko;Ko=r,Ia(".screen").forEach(c=>c.classList.toggle("active",c.id===`screen-${r}`)),Ia(".rail-btn[data-screen]").forEach(c=>c.classList.toggle("active",c.dataset.screen===r)),e&&e!==r&&((a=(i=Yo[e]).hide)==null||a.call(i)),(u=(o=Yo[r]).show)==null||u.call(o,t)}window.__go=oa;var mM={home:"House",nav:"Navigation",music:"Music",phone:"Phone",vehicle:"Truck",apps:"LayoutGrid",settings:"Settings"};Ia(".rail-btn").forEach(r=>{let t=r.dataset.screen||r.dataset.action;r.innerHTML=At(mM[t]||"Circle",28),r.addEventListener("click",()=>{r.dataset.screen?oa(r.dataset.screen):r.dataset.action==="music"?Ee.openMusic(et.settings.musicPkg):r.dataset.action==="phone"&&Ee.openPhone(et.settings.phonePkg)})});function lp(){var t;let r=new Date;Pt("#rail-time").textContent=r.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),(t=Vu)==null||t(r)}setInterval(lp,5e3);function cp(){let r=et.settings;document.documentElement.style.setProperty("--accent",r.accent),document.body.classList.toggle("glass",!!r.glass),document.body.classList.toggle("no-labels",!r.hotspotLabels),document.body.className=document.body.className.replace(/\bwp-\S+/g,"").trim(),r.wallpaper&&r.wallpaper!=="sunset"&&document.body.classList.add(`wp-${r.wallpaper}`)}Nn(cp);window.__onBack=()=>{hc()||Ko!=="home"&&oa("home")};window.__onHome=()=>{for(;hc(););oa("home")};window.__onAppsChanged=()=>Xo();Object.values(Yo).forEach(r=>{var t;return(t=r.init)==null?void 0:t.call(r)});cp();lp();Ee.setFullscreen(et.settings.fullscreen);tn.start();oa("home");})();
/*! Bundled license information:

leaflet/dist/leaflet-src.js:
  (* @preserve
   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
   *)

lucide/dist/esm/icons/bluetooth.mjs:
lucide/dist/esm/icons/calendar.mjs:
lucide/dist/esm/icons/check.mjs:
lucide/dist/esm/icons/chevron-right.mjs:
lucide/dist/esm/icons/circle-dot.mjs:
lucide/dist/esm/icons/circle.mjs:
lucide/dist/esm/icons/clock.mjs:
lucide/dist/esm/icons/cog.mjs:
lucide/dist/esm/icons/disc-3.mjs:
lucide/dist/esm/icons/download.mjs:
lucide/dist/esm/icons/droplet.mjs:
lucide/dist/esm/icons/droplets.mjs:
lucide/dist/esm/icons/eighth-notes.mjs:
lucide/dist/esm/icons/euro.mjs:
lucide/dist/esm/icons/file-text.mjs:
lucide/dist/esm/icons/fuel.mjs:
lucide/dist/esm/icons/gauge.mjs:
lucide/dist/esm/icons/house.mjs:
lucide/dist/esm/icons/info.mjs:
lucide/dist/esm/icons/layers.mjs:
lucide/dist/esm/icons/layout-grid.mjs:
lucide/dist/esm/icons/link.mjs:
lucide/dist/esm/icons/locate-fixed.mjs:
lucide/dist/esm/icons/map-pin.mjs:
lucide/dist/esm/icons/map.mjs:
lucide/dist/esm/icons/navigation.mjs:
lucide/dist/esm/icons/pause.mjs:
lucide/dist/esm/icons/phone.mjs:
lucide/dist/esm/icons/play.mjs:
lucide/dist/esm/icons/plus.mjs:
lucide/dist/esm/icons/rotate-ccw-clock.mjs:
lucide/dist/esm/icons/route.mjs:
lucide/dist/esm/icons/search.mjs:
lucide/dist/esm/icons/settings-2.mjs:
lucide/dist/esm/icons/settings.mjs:
lucide/dist/esm/icons/shield-check.mjs:
lucide/dist/esm/icons/skip-back.mjs:
lucide/dist/esm/icons/skip-forward.mjs:
lucide/dist/esm/icons/smartphone.mjs:
lucide/dist/esm/icons/sparkles.mjs:
lucide/dist/esm/icons/star-off.mjs:
lucide/dist/esm/icons/star.mjs:
lucide/dist/esm/icons/sun.mjs:
lucide/dist/esm/icons/trash.mjs:
lucide/dist/esm/icons/truck.mjs:
lucide/dist/esm/icons/upload.mjs:
lucide/dist/esm/icons/wifi.mjs:
lucide/dist/esm/icons/wrench.mjs:
lucide/dist/esm/icons/x.mjs:
lucide/dist/esm/lucide.mjs:
  (**
   * @license lucide v1.69.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
