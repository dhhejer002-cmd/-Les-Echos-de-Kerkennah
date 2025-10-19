// ==========================
// script.js
// ==========================

// Données des points d’intérêt (POI)
const POIS = [
  /* Jour 1 */
  {id:1, name:"Port de Sidi Youssef", lat:34.65726944444445, lng:10.9709, day:1, duration:"1h00", desc:`
• Centre vivant des traditions maritimes et des savoir-faire ancestraux <br>
• Observation de la fabrication traditionnelle des chrafis, technique de pêche exclusivement kerkennienne <br>
• Lieu emblématique du patrimoine immatériel de Kerkennah, alliant culture, technique et écologie.`, media:["media/sidi_youssef_1.jpg"] , video: "media/sidi youssef.mp4"},
  {id:2, name:"Ancien village de Mellita", lat:34.65169444444445, lng:11.031355555555556, day:1, duration:"1h30", desc:`•	Seul noyau urbain structuré de l’île Gharbi, essentiel pour comprendre le tissu humain insulaire.
• Village préservé, reflétant une identité marquée par l’isolement et une forte cohésion communautaire. <br>
• Artisanat traditionnel, style vestimentaire distinct et rites sociaux singuliers, témoignant d’une culture profondément enracinée.`, media:["media/mellita.jpg"]},
  {id:3, name:"Palmeraie et parcelles agricoles", lat:34.65696111111111, lng:11.082227777777778, day:1, duration:"1h00", desc:`•	La palmeraie de Kerkennah, pilier du système insulaire, structure le paysage et incarne l’identité écologique locale, tout en combinant fonctions écologiques, économiques et culturelles. <br>
•	Observation de la technique d’extraction du Legmi et des méthodes agricoles locales. <br>
•	Cultures rustiques d’oliviers et de figuiers (El Bithri, Mehdawi, El Kahli), illustrant une agriculture sobre, résiliente et durable.`, media:["media/palmeraie.jpg" , "media/palmeraie1.jpg"]},
  {id:4, name:"Maison d'hôte Mnaret Kerkennah", lat:34.681533333333334, lng:11.157961111111111, day:1, duration:"2h00", desc:`•	Niché entre mer et palmeraie, offrant un cadre authentique, harmonieux et apaisant. <br>
•	Architecture fidèle aux traditions locales, mariant matériaux naturels, sobriété des formes et ouverture sur le paysage.`, media:["media/mnaret_1.jpg"]},
  /* Jour 2 */
  {id:5, name:"Port El Attaya", lat:34.742592, lng:11.3044, day:2, duration:"1h00", desc:`•	Observation de la fabrication traditionnelle des barques kerkenniennes dans les ateliers locaux, illustrant un savoir-faire ancestral. <br>
•	Berceau de la technique de pêche écologique El Dammassa (الدماسة), unique au monde, pratiquée exclusivement à El Attaya.`, media:["media/attaya.jpg"]},
  {id:6, name:"Port de Kraten", lat:34.82873888888889, lng:11.25703611111111, day:2, duration:"45 min", desc:`•	Atmosphère lumineuse et ouverte sur l’horizon marin. <br>
•	Zone vulnérable à l’érosion, protégée par une digue rocheuse assurant la préservation des activités locales. <br>
•	Fresques murales 3D sur les espèces marines menacées, intégrant art contemporain et sensibilisation écologique. <br>
•	Conjugaison de pêche artisanale, art urbain et patrimoine vivant, reflétant mémoire, résilience et conscience environnementale.`, media:["media/kraten.jpg" , "media/kraten1.jpg" , "media/kraten2.jpg"]},
  {id:7, name:"Maison de refuge Ennajet de Bourguiba", lat:34.787758333333336, lng:11.268502777777778, day:2, duration:"1h00", desc:`•	refuge discret du président Habib Bourguiba pendant la lutte pour l’indépendance. <br>
•	Toponymie symbolique : « Ennajet » (النجاة, le salut), rappelant résistance, solidarité et délivrance. <br> 
•	Architecture austère et protectrice 
`, media:["media/ennajet_1.jpg" ,"media/sidi_founkhal_2.jpg" ,"media/ennajet.jpg"]},
  {id:8, name:"Musée El Abbasia Dar El Fehri", lat:34.71965, lng:11.243377777777778, day:2, duration:"1h00", desc:`•	Maison-musée illustrant la mémoire culturelle et historique de l’archipel. <br>
•	Architecture traditionnelle kerkennienne, authentique et immersive. <br>
•	Collections retraçant le quotidien, l’artisanat et les savoir-faire locaux. <br>
•	Hommages à des figures nationales et valorisation de l’artisanat local.
`, media:["media/abbasia.jpg" , "media/dar fehri.jpg" , "media/abbasia2.jpg"]},
  {id:9, name:"La saline / Maison du sel", lat:34.72315833333333, lng:11.246991666666667, day:2, duration:"1h15", desc:`•	Paysage ouvert où se confondent ciel, eau et cristaux de sel, offrant une expérience sensorielle unique et intemporelle. <br>
•	Activités pédagogiques et immersives : récolte du sel, parcours sur la cristallisation, atelier fleur de sel, découverte du lien sel-environnement. <br>
•	Signalétique didactique possible pour expliciter les usages culinaires, médicaux, industriels et cosmétiques du sel.`, media:["media/saline.jpg"]},
  /* Jour 3 */
  {id:10, name:"Plage Marsa 20 (Bounouma)", lat:34.76298611111111, lng:11.231452777777778, day:3, duration:"45-60 min", desc:`•	Site calme et contemplatif à l’extrémité est de l’île de Chargui, offrant un spectacle naturel unique à l’aube.<br>
•	Étape sensorielle du circuit, favorisant observation, photographie et immersion tranquille.<br>
•	Potentiel de médiation douce pour sensibilisation environnementale et lecture paysagère.
`, media:["media/marsa20.jpg"]},
  {id:11, name:"Mausolée du leader syndical et national Habib Achour à Kerkennah", lat:34.72094, lng:11.23827, day:3, duration:"1h00", desc:`•	Lieu de recueillement pour le leader syndical et national Habib Achour, symbole d’histoire et d’identité.<br>
•	Architecture sobre et monumentale : voûtes croisées, brique rouge, luminosité naturelle et harmonie avec le jardin.`, media:["media/habib achour.jpg"]},
{id:12, name:"Cépage traditionnel kerkennien", lat:34.72276944444444, lng:11.19035, day:3, duration:"1h00", desc:`•	Vigne ancienne, cultivée artisanalement sur sols pierreux (hamada), résiliente face aux conditions extrêmes. <br>
•	Savoir-faire ancestral transmis de génération en génération, reflet d’un patrimoine agricole rare.<br>
•	Production vinicole confidentielle, valorisable dans un cadre d’œnotourisme et de tourisme patrimonial.`, media:["media/vin1.jpg" , "media/vin2.jpg" , "media/vin3.jpg" , "media/vin4.jpg"]},
  {id:13, name:"Marabout Sidi Founkhal", lat:34.711, lng:11.183975, day:3, duration:"30 min", desc:`•	Petit mausolée discret sur terrain aride, symbolisant un ancrage spirituel.
•	Architecture simple mais verticale, en contraste avec l’horizontalité du paysage. <br>
•	Lieu de mémoire collective, incarnant le lien entre culture, spiritualité et environnement naturel.`, media:["media/sidi_founkhal_1.jpg"]},
  {id:14, name:"Site archéologique de Borj El Hissar", lat:34.71035, lng:11.153486111111111, day:3, duration:"1h15", desc:`•	Ancienne fortification surplombant la mer, isolée et majestueuse, aujourd’hui partiellement en ruine. <br>
•	Architecture robuste et sobre, murs épais en pierre locale et accès par rampe. <br>
•	Vue panoramique sur l’horizon marin, offrant une expérience sensorielle complète.`, media:["media/borj_hissar_1.jpg", "media/borj.jpg"]},
  {id:15, name:"Borj Mellita", lat:34.669458333333336, lng:10.997569444444444, day:3, duration:"45 min", desc:`•	Vestige circulaire atypique, éloigné des modèles défensifs connus, usage probablement civil ou communautaire. <br>
•	Construction sobre en pierre locale, intégrée harmonieusement au paysage côtier.`, media:["media/borj mellita.jpg"]}
];

// Extras (exemple : bus, hôtels)
const EXTRAS = [
  {type:'bus', name:"Station Bus Kerkennah 1", lat:34.72, lng:11.20},
  {type:'hotel', name:"Maison d'hôtes Exemple", lat:34.68, lng:11.16}
];

// Initialisation carte
const map = L.map('map', {zoomControl:true}).setView([34.72, 11.18], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Couches
const poiLayer = L.layerGroup().addTo(map);
const photosLayer = L.layerGroup().addTo(map);
const extrasLayer = L.layerGroup().addTo(map);

// Contrôle de routage
let routingControl = null;
let currentMode = 'car';

const MODE_STYLES = {
  car: {color:'#ff4d4d', weight:5},
  bike: {color:'#4da6ff', weight:4, dashArray:'6,8'},
  foot: {color:'#33cc33', weight:3, dashArray:'2,6'}
};

function createPopup(poi) {
  // Images
  const mediaHtml = poi.media && poi.media.length
    ? poi.media.map(m => `<img src="${m}" alt="${poi.name}" class="popup-media">`).join('')
    : '';

  // Vidéo
  let videoHtml = '';
  if (poi.video) {
    if (poi.video.includes('youtube.com') || poi.video.includes('youtu.be')) {
      // Vidéo YouTube
      videoHtml = `
        <div class="popup-video">
          <iframe width="250" height="150"
            src="${poi.video}"
            title="Vidéo ${poi.name}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>`;
    } else {
      // Vidéo locale (.mp4)
      videoHtml = `
        <div class="popup-video">
          <video width="250" height="150" controls>
            <source src="${poi.video}" type="video/mp4">
            Votre navigateur ne supporte pas la lecture de vidéo.
          </video>
        </div>`;
    }
  }

  // Retourne le contenu du popup
  return `
    <div class="popup-card">
      <h3>${poi.name}</h3>
      <p><strong>Jour:</strong> ${poi.day} — <strong>Durée:</strong> ${poi.duration}</p>
      <p>${poi.desc}</p>
      <div class="media">${mediaHtml}</div>
      ${videoHtml}
    </div>
  `;
}

// Ajout POIs
POIS.forEach(p=>{
  const marker = L.marker([p.lat,p.lng]).bindPopup(createPopup(p));
  marker.options.poiId = p.id;
  marker.addTo(poiLayer);

  const photoMarker = L.circleMarker([p.lat,p.lng], {radius:6}).bindPopup(`<strong>Photos — ${p.name}</strong>`);
  photoMarker.addTo(photosLayer);
});

// Ajout extras
EXTRAS.forEach(e=>{
  const icon = L.icon({iconUrl: e.type==='bus'? 'bus.png' : 'bus.png', iconSize:[2,2]});
  L.marker([e.lat,e.lng], {icon}).bindPopup(`<strong>${e.name}</strong><br>${e.type}`).addTo(extrasLayer);
});

// Liste déroulante datalist
const datalist = document.getElementById('pois-list');
POIS.forEach(p=>{
  const opt = document.createElement('option');
  opt.value = p.name;
  datalist.appendChild(opt);
});

// Modes de transport
document.querySelectorAll('.mode').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.mode').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;
  });
});

// Afficher itinéraire
document.getElementById('routeBtn').addEventListener('click', ()=>{
  const startName = document.getElementById('start').value.trim();
  const endName = document.getElementById('end').value.trim();
  if(!startName || !endName){ alert("Choisissez départ et arrivée."); return; }
  const start = POIS.find(p=>p.name===startName) || EXTRAS.find(e=>e.name===startName);
  const end = POIS.find(p=>p.name===endName) || EXTRAS.find(e=>e.name===endName);
  if(!start || !end){ alert("Points introuvables."); return; }
  showRoute([start.lat,start.lng], [end.lat,end.lng], currentMode);
});

// Affichage / masquage des stations de bus
document.getElementById('busStopsLayer').addEventListener('change', (e)=>{
  e.target.checked ? busStopsLayer.addTo(map) : map.removeLayer(busStopsLayer);
});


// Effacer itinéraire
document.getElementById('clearRoute').addEventListener('click', ()=>{
  if(routingControl){ map.removeControl(routingControl); routingControl=null; }
});

// Fonction itinéraire
function showRoute(startLatLng, endLatLng, mode){
  if(routingControl){ map.removeControl(routingControl); }
  const router = L.Routing.osrmv1({serviceUrl: 'https://router.project-osrm.org/route/v1'});
  const plan = L.Routing.plan([L.latLng(startLatLng), L.latLng(endLatLng)], {createMarker: ()=>null});
  routingControl = L.Routing.control({
    waypoints: [L.latLng(startLatLng), L.latLng(endLatLng)],
    router: router,
    plan: plan,
    show: false,
    addWaypoints: false,
    lineOptions: {
      styles: [MODE_STYLES[mode]]
    },
    routeWhileDragging: false
  }).addTo(map);

  routingControl.on('routesfound', function(e){
    const routes = e.routes;
    const summary = routes[0].summary;
    const minutes = Math.round(summary.totalTime / 60);
    document.getElementById('info').innerText = `Itinéraire: ${minutes} min — ${Math.round(summary.totalDistance/1000*100)/100} km.`;
  });

  routingControl.on('routesfound', function (e) {
  try {
    const route = e.routes && e.routes[0];
    let distanceKm = 0;
    let durationMin = 0;

    if (route && route.summary) {
      distanceKm = route.summary.totalDistance / 1000;
      // recalculer durée selon mode choisi
      if (mode === 'car') durationMin = distanceKm / 50 * 60;
      if (mode === 'bike') durationMin = distanceKm / 15 * 60;
      if (mode === 'foot') durationMin = distanceKm / 5 * 60;
    } else {
      // fallback haversine si route non calculable
      function haversineKm(a, b) {
        const R = 6371;
        const toRad = x => x * Math.PI / 180;
        const dLat = toRad(b[0] - a[0]);
        const dLon = toRad(b[1] - a[1]);
        const lat1 = toRad(a[0]);
        const lat2 = toRad(b[0]);
        const aa = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
        return R * c;
      }
      distanceKm = haversineKm(startLatLng, endLatLng);
      const tortuosity = { car: 1.15, bike: 1.25, foot: 1.05 };
      const speeds = { car: 50, bike: 15, foot: 5 };
      durationMin = Math.round((distanceKm * (tortuosity[mode] || 1.2)) / (speeds[mode] || 50) * 60);
    }

    const modeLabel = mode === 'car' ? 'Voiture / Bus' : mode === 'bike' ? 'Vélo' : 'À pied';
    document.getElementById('info').innerHTML =
      `<strong>Mode :</strong> ${modeLabel}<br>` +
      `<strong>Distance :</strong> ${distanceKm.toFixed(2)} km<br>` +
      `<strong>Durée estimée :</strong> ${Math.round(durationMin)} min`;
  } catch (err) {
    console.warn('Erreur lecture route:', err);
  }
});

}

// Filtres couches
document.getElementById('photosLayer').addEventListener('change', (e)=>{ e.target.checked ? photosLayer.addTo(map) : map.removeLayer(photosLayer); });
document.getElementById('poiLayer').addEventListener('change', (e)=>{ e.target.checked ? poiLayer.addTo(map) : map.removeLayer(poiLayer); });
document.getElementById('extrasLayer').addEventListener('change', (e)=>{ e.target.checked ? extrasLayer.addTo(map) : map.removeLayer(extrasLayer); });

document.getElementById('dayFilter').addEventListener('change', (e)=>{
  const v = e.target.value;
  poiLayer.clearLayers();
  photosLayer.clearLayers();
  POIS.filter(p=> v==='all' ? true : p.day==Number(v)).forEach(p=>{
    L.marker([p.lat,p.lng]).bindPopup(createPopup(p)).addTo(poiLayer);
    L.circleMarker([p.lat,p.lng], {radius:6}).bindPopup(`<strong>Photos — ${p.name}</strong>`).addTo(photosLayer);
  });
});

// --- Couches des arrêts de bus --- 
const busStopsLayer = L.layerGroup().addTo(map);

// Icône pour les arrêts de bus — style moderne bleu clair
const busIcon = L.icon({
  iconUrl: 'bus.png',  // <-- fichier PNG 
  iconSize: [15, 15],       // taille de l’icône
  iconAnchor: [0, 0],     // point où l’icône touche la carte
  popupAnchor: [0, -22]     // position de la bulle d’info
});



// Liste des arrêts de bus (coordonnées fournies)
const BUS_STOPS = [
  {lat:34.655543, lng:10.970402 , name:"Station de bus et taxi Sidi youssef"},
  {lat:34.654729, lng:10.975006 , name:"Cité"},
  {lat:34.653391, lng:10.980609 , name:"Sidi youssef 2"},
  {lat:34.652713, lng:10.986076 , name:"Markez"},
  {lat:34.6499501, lng:11.0251697 , name:"Mazeraa"},
  {lat:34.6506383, lng:11.0267497 , name:"école primaire Mellita"},
  {lat:34.6515786, lng:11.0293766 , name:"Mellita 2"},
  {lat:34.6516464, lng:11.0321199 , name:"Oriflame"},
  {lat:34.6518694, lng:11.0344754 , name:"Mellita 3"},
  {lat:34.6518791, lng:11.0344463 , name:"Aouled ezzdine1"},
  {lat:34.6526061, lng:11.0370732 , name:"Aouled ezzdine2"},
  {lat:34.6539825, lng:11.0405337 , name:"Aouled ezzdine3"},
  {lat:34.657375, lng:11.082322 , name:"Kantra"},
  {lat:34.656639, lng:11.087731 , name:"Aouled Yaneg2"},
  {lat:34.656154, lng:11.092888 , name:"Aouled Yaneg3"},
  {lat:34.6645774, lng:11.1275613 , name:"Barous2"},
  {lat:34.6670541, lng:11.1318845 , name:"Barous1"},
  {lat:34.6698458, lng:11.1355583 , name:"Rond point"},
  {lat:34.6759914, lng:11.1489159 , name:"Hanout mrad"},
  {lat:34.6804310, lng:11.1558079 , name:"Aouled Kacem2"},
  {lat:34.6840370, lng:11.1616724 , name:"Café Zaim"},
  {lat:34.6849772, lng:11.1645611 , name:"Aouled bou ali" },
  {lat:34.6870904, lng:11.1692139 , name:"Kalebin"},
  {lat:34.6903959, lng:11.1722964, name:"Steg" },
  {lat:34.702755, lng:11.193157 , name:"Hached"},
  {lat:34.704190, lng:11.197228 , name:"Habib achour"},
  {lat:34.7050281, lng:11.2025544, name:"Gare régionale de Kerkennah"},
  {lat:34.7088231, lng:11.2112397 , name:"Abbasiya1"},
  {lat:34.7108538, lng:11.2155145 , name:"Police ataya"},
  {lat:34.7174550, lng:11.2368206 , name:"Port ataya1"},
  {lat:34.7196942, lng:11.2415607 , name:"Thniyet port"},
  {lat:34.7207217, lng:11.2449922 , name:"Hamda jwaber"},
  {lat:34.741640, lng:11.289398 , name:"cherki2"},
  {lat:34.735747, lng:11.295815 , name:"Maamel Kacem"},
  {lat:34.7329839, lng:11.2954464 , name:"Hey gharbi"},
  {lat:34.738800, lng:11.298093 , name:"Marsa20"},
  {lat:34.761289, lng:11.267617 , name:"Jrad"},
  {lat:34.750781, lng:11.249083 , name:"Dar sasi"},
  {lat:34.754067, lng:11.246989 , name:"Mosquée Najet"},
  {lat:34.756626, lng:11.242375 , name:"Najet1"},
  {lat:34.761861, lng:11.235880 , name:"Nakhla"},
  {lat:34.773357, lng:11.224752 , name:"Aouled ezzdine1"},
  {lat:34.764129, lng:11.260095 , name:"Chayeb"},
  {lat:34.778276, lng:11.253309},
  {lat:34.780758, lng:11.253891},
  {lat:34.793049, lng:11.258931},
  {lat:34.811273, lng:11.261103},
  {lat:34.815887, lng:11.260482},
  {lat:34.817244, lng:11.259629},
  {lat:34.817942, lng:11.251875},
  {lat:34.818291, lng:11.259513},
  {lat:34.819570, lng:11.253503},
  {lat:34.821819, lng:11.256527},
  {lat:34.826317, lng:11.255170}
];

// Ajout des marqueurs des arrêts de bus
BUS_STOPS.forEach((b, i) => {
  const marker = L.marker([b.lat, b.lng], {icon: busIcon})
    .bindPopup(`🚍 Arrêt de bus ${b.name ? b.name : i+1}`)
    .addTo(busStopsLayer);
});

// Click marker info
poiLayer.on('click', function(e){
  const marker = e.layer;
  const id = marker && marker.options && marker.options.poiId;
  const poi = POIS.find(p=>p.id===id);
  if(poi) document.getElementById('info').innerText = `${poi.name} — Jour ${poi.day} — Durée: ${poi.duration}`;
});

// Adapter carte à tous POIs
map.fitBounds(POIS.map(p=>[p.lat,p.lng]), {padding:[40,40]});
// Bouton menu mobile
const menuBtn = document.getElementById('menu-toggle');
const controls = document.getElementById('controls');

if (menuBtn && controls) {
  menuBtn.addEventListener('click', () => {
    controls.classList.toggle('show');
  });

}


// === CIRCUIT TOURISTIQUE COMPLET ===
document.addEventListener("DOMContentLoaded", function() {

  // 1️⃣ Récupérer les coordonnées des 15 destinations dans l’ordre
  const fullCircuitCoords = POIS.map(p => L.latLng(p.lat, p.lng));

  // 2️⃣ Tableau pour stocker tous les contrôles de routage (segments)
  let fullCircuitRouting = [];

  // 3️⃣ LayerGroup pour les marqueurs numérotés
  const numberedMarkers = L.layerGroup();

  // 4️⃣ Vérifier que la case existe avant d’ajouter l’écouteur
  const checkbox = document.getElementById('fullCircuitLayer');
  if (checkbox) {
    checkbox.addEventListener('change', (e) => {
      // Supprimer les anciens tracés
      fullCircuitRouting.forEach(ctrl => map.removeControl(ctrl));
      fullCircuitRouting = [];

      // Supprimer les marqueurs numérotés précédents
      numberedMarkers.clearLayers();

      if (e.target.checked) {
        // OSRM gère mieux les segments, on divise le circuit en segments de 5 points
        const segmentSize = 5;
        for (let i = 0; i < fullCircuitCoords.length - 1; i += segmentSize - 1) {
          const segmentWaypoints = fullCircuitCoords.slice(i, i + segmentSize);
          if (segmentWaypoints.length < 2) continue;

          const ctrl = L.Routing.control({
            waypoints: segmentWaypoints,
            routeWhileDragging: false,
            draggableWaypoints: false,
            addWaypoints: false,
            show: false,
            createMarker: () => null,
            lineOptions: {
              styles: [{ color: "#b7bd1a", weight: 4, opacity: 0.8 }]
            },
            router: L.Routing.osrmv1({
              serviceUrl: 'https://router.project-osrm.org/route/v1'
            })
          }).addTo(map);

          fullCircuitRouting.push(ctrl);
        }

        // Ajouter les marqueurs numérotés
        POIS.forEach((p, index) => {
          const marker = L.marker([p.lat, p.lng], {
            icon: L.divIcon({
              className: 'numbered-marker',
              html: `<div style="background:#b7bd1a;color:white;border-radius:50%;width:24px;height:24px;line-height:24px;text-align:center;font-weight:bold;">${index + 1}</div>`,
              iconSize: [24, 24],
              iconAnchor: [12, 12]
            })
          }).bindPopup(`<strong>${p.name}</strong>`);
          numberedMarkers.addLayer(marker);
        });

        numberedMarkers.addTo(map);

        // Ajuster le zoom pour afficher tout le circuit
        const bounds = L.latLngBounds(fullCircuitCoords);
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    });
  } else {
    console.warn("⚠️ Élément #fullCircuitLayer introuvable dans le HTML !");
  }

});

