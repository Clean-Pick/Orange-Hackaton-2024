const data = [
    {
      name: 'MS Moby Dick - Den Rhein erleben... BFF - Bonner Fähr- und Fahrgastschifffahrt - Bonner Schifffahrt',
      lat: 50.7329687,
      lon: 7.1096064
    },
    { 
        name: 'Phoenix Reisen GmbH', 
        lat: 50.74324, 
        lon: 7.10394 },
    { 
        name: 'Ahoi-Schiff GmbH', 
        lat: 50.7580276, 
        lon: 7.173402 },
    {
      name: 'Cruiseperts - Dein Reisebüro für Land und Mee(h)r',
      lat: 50.726727,
      lon: 7.071422999999999
    },
    {
      name: 'Bonner Personen Schiffahrt',
      lat: 50.7350624,
      lon: 7.1082918
    },
    { 
        name: 'Sir Robert Back-Office', 
        lat: 50.7432455, 
        lon: 7.0921112 },
    {
      name: 'Personenschiffahrt Siebengebirge E.G.',
      lat: 50.6953792,
      lon: 7.1580279
    },
    {
      name: 'COMPASS Kreuzfahrten GmbH',
      lat: 50.7379005,
      lon: 7.129852400000001
    },
    {
      name: 'Köln-Düsseldorfer Deutsche Rheinschiffahrt AG',
      lat: 50.6734401,
      lon: 7.191786800000001
    },
    { 
        name: 'Ms Beethoven', 
        lat: 50.7340374, 
        lon: 7.1091551 },
    {
      name: 'Reisebüro An der Oper - Rautenberg Reisen OHG - Bonn',
      lat: 50.7368491,
      lon: 7.1052597
    },
    {
      name: 'Köln-Düsseldorfer Deutsche Rheinschifffahrt',
      lat: 50.69068129999999,
      lon: 7.171719299999999
    },
    {
      name: 'KD-Ticket Office Bonn',
      lat: 50.7356054,
      lon: 7.107967299999999
    },
    { 
        name: 'Die TUI in Bonn', 
        lat: 50.7323818, 
        lon: 7.0988799 },
    { 
        name: 'KreuzfahrtSuche', 
        lat: 50.7411846, 
        lon: 7.136131799999999 },
    {
      name: 'Filia Rheni - Eventkatamaran',
      lat: 50.7348381,
      lon: 7.1086839
    },
    { 
        name: 'Filia Rheni', 
        lat: 50.7348177, 
        lon: 7.1086946 },
    {
      name: 'Reisebüro Albatros',
      lat: 50.8144463,
      lon: 7.159764399999999
    },
    {
      name: 'Weisse Flotte Rhein am Bonner Bogen - Bonner Personen Schiffahrt',
      lat: 50.7169636,
      lon: 7.1518893
    },
    {
      name: 'Poseidon Bonner Schifffahrt',
      lat: 50.73830419999999,
      lon: 7.106966
    }
]

const map = L.map('map').setView([50.735851, 7.10066], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([50.735851, 7.10066]).addTo(map);

const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png', // Icône rouge
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Ombre par défaut
    iconSize: [25, 41], // Taille de l'icône
    iconAnchor: [12, 41], // Point d'ancrage de l'icône
    shadowSize: [41, 41]  // Taille de l'ombre
});

for (let count = 0; count < data.length; count++){
    L.marker([data[count].lat, data[count].lon], { icon: redIcon }).addTo(map);
}