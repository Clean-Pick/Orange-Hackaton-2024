const apiKey = "0e80ed0e5b7b2b67dd60162abfc4fbda";

// Géocodage direct (adresse vers coordonnées)
async function geocodeAddress(address) {
    const url = `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${encodeURIComponent(address)}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }
        const data = await response.json();
        console.log("Géo direct (endroit) :", data);
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API :", error.message);
    }
}

// Géocodage inverse (coordonnées vers adresse)
async function reverseGeocode(lat, lon) {
    const url = `http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${lat},${lon}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }
        const data = await response.json();
        console.log("Géo inverse (position) :", data);
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API :", error.message);
    }
}

//MAP MAP MAP

// Initialisation de la carte Leaflet
const map = L.map('map').setView([48.858844, 2.294351], 13); // Coordonnées de départ : Tour Eiffel

// Ajouter les tuiles de base à la carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
}).addTo(map);

// Fonction pour géocoder une adresse et l'afficher sur la carte
async function geocodeAddress(address) {
    const url = `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${encodeURIComponent(address)}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            const location = data.data[0]; // Premier résultat
            const { latitude, longitude, label } = location;

            // Afficher un marqueur sur la carte
            L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup(`<strong>${label}</strong>`)
                .openPopup();

            // Centrer la carte sur la position trouvée
            map.setView([latitude, longitude], 13);
            console.log(`Résultat géocodage :`, location);
        } else {
            console.warn('Aucun résultat trouvé pour cette adresse.');
        }
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API :", error.message);
    }
}

// Fonction pour tester le géocodage d'une adresse
// geocodeAddress();
