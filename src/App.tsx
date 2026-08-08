import { useEffect, useRef, useState } from "react";

type Point={lat:number;lon:number};
type Trend={time:string;score:number};
type ModelResult={name:string;score:number;level:"basso"|"attenzione"|"elevato"};
type Risk={level:"basso"|"attenzione"|"elevato";score:number;title:string;detail:string;temp:number;rain:number;gust:number;trend:Trend[];models:ModelResult[];confidence:number;agreement:number};
type ForecastData={current:{temperature_2m:number};hourly:{time:string[];precipitation:number[];cape:number[];weather_code:number[];wind_gusts_10m:number[];precipitation_probability:number[]}};
type RadarFrame={url:string;tileUrl:string;time:number};

async function getRadar(p:Point):Promise<RadarFrame[]>{
  const res=await fetch("https://api.rainviewer.com/public/weather-maps.json",{cache:"no-store"});
  if(!res.ok)throw new Error();
  const data=await res.json(),frames=(data?.radar?.past??[]).slice(-6);
  if(!frames.length)throw new Error();
  return frames.map((frame:{path:string;time:number})=>({url:`${data.host}${frame.path}/256/6/${p.lat}/${p.lon}/2/1_1.png`,tileUrl:`${data.host}${frame.path}/256/{z}/{x}/{y}/2/1_1.png`,time:frame.time}));
}

function LiveRadarMap({point,frame}:{point:Point|null;frame:RadarFrame|null}){
  const el=useRef<HTMLDivElement>(null),map=useRef<any>(null),radarLayer=useRef<any>(null);
  useEffect(()=>{if(!el.current||!point)return;let cancelled=false;(async()=>{const L=await import("leaflet");if(cancelled||!el.current)return;map.current=L.map(el.current,{zoomControl:false,attributionControl:false,dragging:false,scrollWheelZoom:false,doubleClickZoom:false,boxZoom:false,keyboard:false,touchZoom:false,zoomSnap:.1,zoomAnimation:false}).setView([point.lat,point.lon],6);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,className:"baseMapTiles"}).addTo(map.current);if(frame)radarLayer.current=L.tileLayer(frame.tileUrl,{opacity:.88,zIndex:5,className:"radarTiles",maxNativeZoom:6,maxZoom:19}).addTo(map.current);
    const rings=[50,100,150].map(km=>L.circle([point.lat,point.lon],{radius:km*1000,color:"#a8f6ef",weight:1.4,opacity:.7,fill:false,interactive:false}).addTo(map.current));
    const radians=point.lat*Math.PI/180;
    [50,100,150].forEach(km=>{const lat=point.lat+(km/111.32)*.7071,lon=point.lon+(km/(111.32*Math.cos(radians)))*.7071;L.marker([lat,lon],{interactive:false,icon:L.divIcon({className:"distanceMapLabel",html:`${km} km`,iconSize:[54,24],iconAnchor:[27,12]})}).addTo(map.current)});
    const size=()=>{map.current?.invalidateSize();map.current?.fitBounds(rings[2].getBounds(),{padding:[8,8],animate:false})};setTimeout(size,80)})();return()=>{cancelled=true;map.current?.remove();map.current=null}},[point?.lat,point?.lon]);
  useEffect(()=>{if(!map.current||!frame)return;(async()=>{const L=await import("leaflet");if(radarLayer.current)map.current.removeLayer(radarLayer.current);radarLayer.current=L.tileLayer(frame.tileUrl,{opacity:.88,zIndex:5,className:"radarTiles",maxNativeZoom:6,maxZoom:19}).addTo(map.current)})()},[frame?.tileUrl]);
  return <div ref={el} className="leafletRadar" aria-label="Cartina geografica con precipitazioni radar"/>;
}

function TrendMarketChart({items}:{items:Trend[]}){
  const pts=items.map((item,index)=>({x:24+index*(70/Math.max(1,items.length-1)),y:Math.max(8,58-Math.min(100,item.score)*.5),...item}));
  const line=pts.map(p=>`${p.x},${p.y}`).join(" "),area=`M ${pts[0].x} 60 L ${pts.map(p=>`${p.x} ${p.y}`).join(" L ")} L ${pts.at(-1)?.x??92} 60 Z`;
  return <div className="marketChart" role="img" aria-label="Andamento del rischio temporalesco nelle prossime quattro ore">
    <div className="marketPlot"><div className="marketCanvas"><svg viewBox="0 0 100 68" aria-hidden="true"><defs><linearGradient id="riskLine" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#18aa78"/><stop offset=".52" stopColor="#f1b832"/><stop offset="1" stopColor="#ef4c43"/></linearGradient><linearGradient id="riskArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ef6558" stopOpacity=".25"/><stop offset="1" stopColor="#1caf80" stopOpacity=".03"/></linearGradient></defs>
      <rect className="marketZoneHigh" x="0" y="4" width="100" height="18"/><rect className="marketZoneMid" x="0" y="22" width="100" height="18"/><rect className="marketZoneLow" x="0" y="40" width="100" height="20"/><path className="marketGrid" d="M0 4H100 M0 22H100 M0 40H100 M0 60H100"/><text className="axisLabel axisHigh" x="3" y="11"><tspan x="3">RISCHIO</tspan><tspan x="3" dy="5">ALTO</tspan></text><text className="axisLabel axisLow" x="3" y="51"><tspan x="3">RISCHIO</tspan><tspan x="3" dy="5">BASSO</tspan></text><path className="marketArea" d={area}/><polyline className="marketLine" points={line}/>{pts.map(p=><g key={p.time}><circle cx={p.x} cy={p.y} r="2.35"/><text x={p.x} y={Math.max(5,p.y-4.2)}>{p.score}</text></g>)}</svg><div className="marketTimes">{items.map(item=><span key={item.time}>{item.time}</span>)}</div></div></div>
  </div>;
}

function CarPickerMap({center,onSelect}:{center:Point;onSelect:(p:Point)=>void}){
  const el=useRef<HTMLDivElement>(null),onSelectRef=useRef(onSelect);onSelectRef.current=onSelect;
  useEffect(()=>{if(!el.current)return;let cancelled=false,map:any;(async()=>{const L=await import("leaflet");if(cancelled||!el.current)return;map=L.map(el.current,{zoomControl:true,attributionControl:true}).setView([center.lat,center.lon],14);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; OpenStreetMap'}).addTo(map);let marker:any=L.circleMarker([center.lat,center.lon],{radius:10,color:"white",weight:3,fillColor:"#ed3f36",fillOpacity:1}).addTo(map);map.on("click",(e:any)=>{const p={lat:e.latlng.lat,lon:e.latlng.lng};marker.setLatLng(e.latlng);onSelectRef.current(p)});setTimeout(()=>map.invalidateSize(),80)})();return()=>{cancelled=true;map?.remove()}},[center.lat,center.lon]);
  return <div ref={el} className="carPickerMap" aria-label="Mappa per scegliere la posizione dell'auto"/>;
}

async function checkWeather(p:Point):Promise<Risk>{
  const get=async(model:string)=>{const q=new URLSearchParams({latitude:String(p.lat),longitude:String(p.lon),timezone:"auto",forecast_days:"2",models:model,current:"temperature_2m",hourly:"precipitation,cape,weather_code,wind_gusts_10m"});const res=await fetch("https://api.open-meteo.com/v1/forecast?"+q);if(!res.ok)throw new Error();return res.json();};
  const bestQ=new URLSearchParams({latitude:String(p.lat),longitude:String(p.lon),timezone:"auto",forecast_days:"2",current:"temperature_2m",hourly:"precipitation_probability,wind_gusts_10m"});
  const [ecmwf,icon,gfs,best]=await Promise.all([get("ecmwf_ifs025"),get("icon_seamless"),get("gfs_seamless"),fetch("https://api.open-meteo.com/v1/forecast?"+bestQ).then(r=>{if(!r.ok)throw new Error();return r.json();})]);
  const scoreModel=(d:ForecastData)=>{const start=Math.max(0,d.hourly.time.findIndex((t:string)=>new Date(t)>=new Date()));const one=(i:number)=>{const r=Number(d.hourly.precipitation[i]??0),c=Number(d.hourly.cape[i]??0),g=Number(d.hourly.wind_gusts_10m[i]??0),th=Number(d.hourly.weather_code[i])>=95;return Math.min(100,(th?35:0)+(r>=5?20:r>=1?10:0)+(c>=1500?30:c>=700?18:c>=300?8:0)+(g>=65?15:g>=45?8:0));};return{start,scores:[0,1,2,3].map(o=>one(start+o))};};
  const raw=[{name:"ECMWF",data:scoreModel(ecmwf)},{name:"ICON",data:scoreModel(icon)},{name:"GFS",data:scoreModel(gfs)}];
  const models=raw.map(m=>{const score=Math.max(...m.data.scores);return{name:m.name,score,level:(score>=65?"elevato":score>=30?"attenzione":"basso") as ModelResult["level"]};});
  const mean=Math.round(models.reduce((sum,m)=>sum+m.score,0)/models.length),spread=Math.max(...models.map(m=>m.score))-Math.min(...models.map(m=>m.score));
  const agreement=models.filter(m=>Math.abs(m.score-mean)<=15).length,confidence=Math.min(79,35+agreement*12+(spread<=15?10:spread<=30?4:0));
  const score=mean,start=raw[0].data.start,trend=[0,1,2,3].map(offset=>({time:new Date(ecmwf.hourly.time[start+offset]).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"}),score:Math.round(raw.reduce((sum,m)=>sum+m.data.scores[offset],0)/3)}));
  const bestStart=Math.max(0,best.hourly.time.findIndex((t:string)=>new Date(t)>=new Date())),rain=Math.max(0,...best.hourly.precipitation_probability.slice(bestStart,bestStart+4).map(Number)),gust=Math.max(...raw.flatMap(m=>m.data.scores.map((_:number,i:number)=>Number((m.name==="ECMWF"?ecmwf:m.name==="ICON"?icon:gfs).hourly.wind_gusts_10m[m.data.start+i]??0))));
  const common={score,temp:Number(best.current.temperature_2m),rain,gust,trend,models,confidence,agreement};
  if(score>=65)return{level:"elevato",title:"Temporali forti possibili",detail:"Più modelli indicano condizioni favorevoli a temporali forti e possibile grandine. Manca ancora la conferma del radar.",...common};
  if(score>=30)return{level:"attenzione",title:"Situazione da controllare",detail:"I modelli rilevano alcuni segnali favorevoli a temporali con possibile grandine nelle prossime ore.",...common};
  return{level:"basso",title:"Nessun rischio concreto rilevato",detail:"I modelli non mostrano condizioni favorevoli alla grandine nelle prossime ore.",...common};
}

export default function Home(){
  const [view,setView]=useState<"radar"|"risk">("radar");
  const [point,setPoint]=useState<Point|null>(null),[car,setCar]=useState<Point|null>(()=>{
    if(typeof window==="undefined")return null;
    const saved=localStorage.getItem("grandine-car");
    return saved?JSON.parse(saved) as Point:null;
  });
  const [risk,setRisk]=useState<Risk|null>(null),[carRisk,setCarRisk]=useState<Risk|null>(null);
  const [radarFrames,setRadarFrames]=useState<RadarFrame[]>([]),[radarFrame,setRadarFrame]=useState(0),[radarError,setRadarError]=useState(false);
  const [carPicker,setCarPicker]=useState(false),[draftCar,setDraftCar]=useState<Point|null>(null);
  const [busy,setBusy]=useState(false),[note,setNote]=useState("Tocca il pulsante per controllare la zona.");
  const [nextUpdate,setNextUpdate]=useState(0),[remaining,setRemaining]=useState(900);
  const [installPrompt,setInstallPrompt]=useState<any>(null),[installHelp,setInstallHelp]=useState(false),[isInstalled,setIsInstalled]=useState(false);
  const [startHelp,setStartHelp]=useState(()=>typeof window!=="undefined"&&localStorage.getItem("grandine-start-guide-v1")!=="done");
  const [navHelp,setNavHelp]=useState(false);
  useEffect(()=>{
    if("serviceWorker" in navigator)navigator.serviceWorker.register("./sw.js").catch(()=>undefined);
    const standalone=window.matchMedia("(display-mode: standalone)").matches||(navigator as any).standalone===true;
    setIsInstalled(standalone);
    const before=(event:any)=>{event.preventDefault();setInstallPrompt(event)};
    const installed=()=>{setIsInstalled(true);setInstallPrompt(null)};
    window.addEventListener("beforeinstallprompt",before);window.addEventListener("appinstalled",installed);
    return()=>{window.removeEventListener("beforeinstallprompt",before);window.removeEventListener("appinstalled",installed)};
  },[]);
  useEffect(()=>{
    const saved=localStorage.getItem("grandine-car");
    if(!saved)return;
    const savedPoint=JSON.parse(saved) as Point;
    checkWeather(savedPoint).then(setCarRisk).catch(()=>undefined);
  },[]);
  useEffect(()=>{if(radarFrames.length<2)return;const timer=window.setInterval(()=>setRadarFrame(i=>(i+1)%radarFrames.length),900);return()=>window.clearInterval(timer)},[radarFrames.length]);
  useEffect(()=>{if(!point||!nextUpdate)return;const timer=window.setInterval(()=>{const left=Math.ceil((nextUpdate-Date.now())/1000);if(left<=0){checkWeather(point).then(setRisk).then(()=>setNote("Aggiornamento automatico completato.")).catch(()=>setNote("Aggiornamento automatico non riuscito."));getRadar(point).then(r=>{setRadarFrames(r);setRadarFrame(0);setRadarError(false)}).catch(()=>setRadarError(true));if(car)checkWeather(car).then(setCarRisk).catch(()=>undefined);setNextUpdate(Date.now()+600000);setRemaining(600);}else setRemaining(left);},1000);return()=>window.clearInterval(timer);},[point,car,nextUpdate]);
  const locate=()=>{setBusy(true);setNote("Rilevamento della posizione…");navigator.geolocation.getCurrentPosition(async g=>{const p={lat:g.coords.latitude,lon:g.coords.longitude};setPoint(p);const results=await Promise.allSettled([checkWeather(p),getRadar(p)]);if(results[0].status==="fulfilled"){setRisk(results[0].value);setNote("Controllo aggiornato.")}else setNote("Posizione trovata, dati meteo non disponibili.");if(results[1].status==="fulfilled"){setRadarFrames(results[1].value);setRadarFrame(0);setRadarError(false)}else setRadarError(true);setNextUpdate(Date.now()+600000);setRemaining(600);setBusy(false)},()=>{setNote("Permesso posizione non concesso.");setBusy(false)},{enableHighAccuracy:true,timeout:12000});};
  const saveCar=async()=>{if(!point){setNote("Prima rileva la posizione.");return}setCar(point);localStorage.setItem("grandine-car",JSON.stringify(point));setCarRisk(risk);setNote("Posizione auto salvata su questo telefono.");};
  const openCarPicker=()=>{const start=car??point??{lat:44.4949,lon:11.3426};setDraftCar(start);setCarPicker(true)};
  const startWithLocation=()=>{localStorage.setItem("grandine-start-guide-v1","done");setStartHelp(false);locate()};
  const closeStartHelp=()=>{localStorage.setItem("grandine-start-guide-v1","done");setStartHelp(false)};
  const confirmCarPicker=async()=>{if(!draftCar)return;setCar(draftCar);localStorage.setItem("grandine-car",JSON.stringify(draftCar));setCarPicker(false);setNote("Posizione auto scelta sulla mappa e salvata.");try{setCarRisk(await checkWeather(draftCar))}catch{/* Mantiene la posizione anche se il meteo non risponde. */}};
  const fmt=(p:Point)=>p.lat.toFixed(4)+", "+p.lon.toFixed(4);
  const radar=radarFrames[radarFrame]??null;
  const radarTime=(f:RadarFrame|null)=>f?new Date(f.time*1000).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"}):"--:--";
  const radarProgress=radarFrames.length>1?(radarFrame/(radarFrames.length-1))*100:0;
  const installApp=async()=>{if(installPrompt){await installPrompt.prompt();const choice=await installPrompt.userChoice;if(choice.outcome==="accepted")setIsInstalled(true);setInstallPrompt(null)}else setInstallHelp(true)};
  return <main>
    <header><img className="brandIcon" src="./icons/app-icon.svg" alt="Icona radar e grandine"/><div><h1>Grandine Alert</h1><small>APP METEO LOCALE</small></div><button className="info" onClick={()=>setNavHelp(true)} aria-label="Come usare Radar e Rischio">i</button></header>
    {!isInstalled&&<section className="installCard installCardTop"><img src="./icons/app-icon.svg" alt="Icona Grandine Alert: nuvola, grandine e automobile"/><div><small>INSTALLA GRANDINE ALERT</small><h3>Portala sulla schermata Home</h3><p><b>Su iPhone:</b> apri con Safari, tocca <b>Condividi □↑</b> e scegli <b>Aggiungi alla schermata Home</b>.</p><button onClick={installApp}>Mostra come installare</button></div></section>}
    {view==="radar"?<div className="appPage radarPage"><section className="hero"><div className="heroCopy"><span className="live">● {radar?"RADAR ANIMATO":"CONTROLLO POSIZIONE"}</span><h2>Il cielo cambia. <em>Tu puoi anticiparlo.</em></h2><p>{point?"Ultima ora di precipitazioni entro 150 km dal telefono.":"Attiva la posizione per vedere le precipitazioni intorno a te."}</p></div><div className={"radar "+(radar?"active":"idle")}>{point?<LiveRadarMap point={point} frame={radar}/>:<div className="radarImage"/>}<div className="labelSweep"/><div className="sweep"/><div className="cross"/><span className="north">N</span><b className="centerDot" aria-label="Posizione del telefono"/></div>{radar?<div className="radarPlayback"><div className="playbackTimes"><span>{radarTime(radarFrames[0])}</span><b>▶ {radarTime(radar)}</b><span>{radarTime(radarFrames.at(-1)??null)}</span></div><div className="playbackTrack"><i style={{width:radarProgress+"%"}}/><em style={{left:radarProgress+"%"}}/></div><small>50 minuti fa <strong>→</strong> immagine più recente</small></div>:<div className="radarStatus">{radarError?"Radar momentaneamente non disponibile":"In attesa del GPS"}</div>}</section>
    <section className="radarGuide"><div className="guideTitle"><span>◉</span><div><small>COME LEGGERE IL RADAR</small><h3>Intensità e spostamento</h3></div></div><p>Il punto rosso è il telefono. I cerchi geografici indicano distanze reali di 50, 100 e 150 km. L’animazione mostra gli ultimi 50 minuti: il movimento delle macchie indica la direzione dei fenomeni.</p><div className="radarLegend"><span><i className="weak"/>Debole</span><span><i className="moderate"/>Moderata</span><span><i className="strong"/>Forte</span><span><i className="extreme"/>Molto forte</span></div><p className="guideNote"><b>Grandine:</b> rosso o viola indicano una cella intensa, ma non confermano da soli la grandine.</p></section>
    {!point&&<button className="primary radarLocate" onClick={locate} disabled={busy}>{busy?"Controllo in corso…":"Attiva posizione e radar"}</button>}</div>:<div className="appPage riskPage"><div className="pageHeading"><small>PREVISIONE LOCALE</small><h2>Rischio grandine</h2><p>Modelli e condizioni previste nelle prossime quattro ore.</p></div><section className={"risk "+(risk?.level??"waiting")}>
      {risk&&<div className="riskGauge" aria-label={`Indice di rischio ${risk.score} su 100`}><div className="gaugeArc"><i style={{transform:`rotate(${180+risk.score*1.8}deg)`}}/></div><div className="gaugeValue"><b>{risk.score}</b><span>su 100</span></div><div className="gaugeLabels"><span>BASSO</span><span aria-hidden="true"/><span>ALTO</span></div></div>}
      <div className="riskTop"><div className="orb">{risk?risk.level==="basso"?"✓":"!":"⌖"}</div><div><small>{risk?risk.level.toUpperCase():"IN ATTESA"}</small><h3>{risk?.title??"Localizzazione necessaria"}</h3></div></div>
      <p>{risk?.detail??"Autorizza la posizione per eseguire il primo controllo."}</p>
      {risk&&<><div className="metrics"><b>{Math.round(risk.temp)}°<small>Temperatura</small></b><b>{risk.rain}%<small>Pioggia</small></b><b>{Math.round(risk.gust)}<small>Raffiche km/h</small></b></div><div className="trend"><div className="trendTitle"><b>Prossime 4 ore</b><span>indice temporalesco</span></div><TrendMarketChart items={risk.trend}/></div><div className="reliability"><div className="reliabilityHead"><div><small>AFFIDABILITÀ DELLA STIMA</small><b>{risk.confidence}/100</b></div><span>{risk.agreement} modelli su 3 concordano</span></div><div className="confidenceBar"><i style={{width:risk.confidence+"%"}}/></div><div className="modelList">{risk.models.map(model=><div key={model.name}><strong>{model.name}</strong><span className={model.level}>{model.score}</span></div>)}</div><p>Confronto modelli attivo · radar mostrato separatamente, non ancora incluso nel punteggio</p></div></>}
    </section>
    <section className="position"><div className="pin">⌖</div><div><small>POSIZIONE DEL TELEFONO</small><strong>{point?fmt(point):"Non ancora rilevata"}</strong><span>{note}</span></div>{risk&&<i>{risk.score}</i>}</section>
    <button className="primary" onClick={locate} disabled={busy}>{busy?"Controllo in corso…":point?"Aggiorna posizione e rischio":"Usa la mia posizione"}</button>
    {point&&<div className="autoRefresh"><span>↻ Aggiornamento automatico</span><b>{String(Math.floor(remaining/60)).padStart(2,"0")}:{String(remaining%60).padStart(2,"0")}</b></div>}
    <section className="car"><div className="carPic"><span>▰</span></div><div><small>AUTO PARCHEGGIATA</small><h3>{car?"Posizione auto salvata":"La tua auto è altrove?"}</h3><p>{car?fmt(car)+" · "+(carRisk?.title??"da controllare"):"Salva il punto in cui ti trovi oppure sceglilo direttamente sulla cartina."}</p><div className="carActions"><button onClick={saveCar}>{car?"Salva auto qui":"Usa posizione attuale"}</button><button className="mapButton" onClick={openCarPicker}>⌖ Scegli sulla mappa</button></div></div></section></div>}
    <footer><div className="signature"><div className="gfMonogram" role="img" aria-label="Monogramma GF"/><strong>Grandine Alert</strong><span>Versione 0.13.3 · PWA</span><small>© 2026 Gabriele Facchini</small></div><p>Cartografia © OpenStreetMap · radar RainViewer · previsioni Open-Meteo. Il rischio è una stima e non garantisce presenza o assenza di grandine.</p></footer>
    <nav className="bottomNav" aria-label="Navigazione principale"><button className={view==="radar"?"active":""} onClick={()=>{setView("radar");window.scrollTo({top:0,behavior:"smooth"})}}><span>◉</span>Radar</button><button className={view==="risk"?"active":""} onClick={()=>{setView("risk");window.scrollTo({top:0,behavior:"smooth"})}}><span>⚠</span>Rischio</button></nav>
    {carPicker&&draftCar&&<div className="mapModal" role="dialog" aria-modal="true" aria-label="Scegli posizione auto"><div className="mapSheet"><div className="mapSheetHead"><div><small>POSIZIONE AUTO</small><h2>Tocca il punto sulla mappa</h2></div><button onClick={()=>setCarPicker(false)} aria-label="Chiudi">×</button></div><CarPickerMap center={car??point??draftCar} onSelect={setDraftCar}/><div className="selectedCoords"><span>⌖ Punto selezionato</span><b>{fmt(draftCar)}</b></div><button className="confirmMap" onClick={confirmCarPicker}>Conferma posizione auto</button></div></div>}
    {installHelp&&<div className="installModal" role="dialog" aria-modal="true" aria-label="Installa Grandine Alert"><div className="installSheet"><button className="installClose" onClick={()=>setInstallHelp(false)} aria-label="Chiudi">×</button><img src="./icons/app-icon.svg" alt=""/><small>INSTALLAZIONE SU IPHONE</small><h2>Portala sulla schermata Home</h2><ol><li>Apri questa pagina con <b>Safari</b>.</li><li>Tocca il pulsante <b>Condividi</b> □↑.</li><li>Scegli <b>Aggiungi alla schermata Home</b>.</li><li>Attiva <b>Apri come app web</b> e tocca Aggiungi.</li></ol><button className="installDone" onClick={()=>setInstallHelp(false)}>Ho capito</button></div></div>}
    {navHelp&&<div className="startModal" role="dialog" aria-modal="true" aria-label="Spiegazione dei pulsanti Radar e Rischio"><div className="startSheet navHelpSheet"><button className="installClose" onClick={()=>setNavHelp(false)} aria-label="Chiudi">×</button><small>COME USARE L’APP</small><h2>Radar e Rischio</h2><p>I due pulsanti in fondo mostrano informazioni diverse ma complementari.</p><div className="navExplain radarExplain"><b>◉</b><span><strong>Radar</strong><small>Mostra sulla cartina dove stanno piovendo i temporali e come si sono spostati negli ultimi 50 minuti.</small></span></div><div className="navExplain riskExplain"><b>⚠</b><span><strong>Rischio</strong><small>Stima la possibilità di grandine nella tua posizione durante le prossime quattro ore.</small></span></div><p className="navHelpNote">Il radar mostra ciò che sta accadendo; Rischio indica ciò che potrebbe accadere.</p><button className="startNow" onClick={()=>setNavHelp(false)}>Ho capito</button></div></div>}
    {startHelp&&!point&&<div className="startModal" role="dialog" aria-modal="true" aria-label="Come avviare Grandine Alert"><div className="startSheet"><img src="./icons/app-icon.svg" alt="Nuvola con grandine sopra un’auto"/><small>PRIMO AVVIO</small><h2>Attiva la tua posizione</h2><p>Per mostrare radar e rischio grandine nella tua zona, Grandine Alert deve conoscere la posizione del telefono.</p><div className="startStep"><b>1</b><span>Tocca il pulsante <strong>Attiva posizione e radar</strong>.</span></div><div className="startStep"><b>2</b><span>Quando l’iPhone lo richiede, scegli <strong>Consenti</strong>.</span></div><div className="startTabs"><span><b>◉ Radar</b> temporali in atto</span><span><b>⚠ Rischio</b> previsione 4 ore</span></div><button className="startNow" onClick={startWithLocation}>⌖ Attiva posizione e radar</button><button className="startLater" onClick={closeStartHelp}>Lo farò più tardi</button></div></div>}
  </main>
}
