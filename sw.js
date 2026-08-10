const CACHE="grandine-alert-version-1-1-17-risk-integrated";
const APP_SHELL=["./manifest.webmanifest","./assets/index-v1.1.17.js","./assets/index-v1.1.17.css","./assets/leaflet-v1.1.17.js","./assets/map-label-fix.css?v=1.1.17","./assets/countries-110m.geojson","./assets/gf-logo.png","./icons/grandine-icon-192.png","./icons/grandine-icon-512.png"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)));self.skipWaiting()});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("grandine-alert-")&&key!==CACHE).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET"||new URL(event.request.url).origin!==self.location.origin)return;
  const url=new URL(event.request.url);
  if(event.request.mode==="navigate"||url.pathname.endsWith("/version.json")||url.pathname.endsWith("/sw.js")){
    event.respondWith(fetch(event.request,{cache:"no-store"}));
    return;
  }
  event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>caches.match(event.request)));
});
self.addEventListener("notificationclick",event=>{event.notification.close();event.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(items=>{for(const item of items){if("focus" in item)return item.focus()}return clients.openWindow("./")}))});
