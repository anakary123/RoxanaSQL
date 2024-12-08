function initMap(lat, lon) {
    // Crear un mapa usando Leaflet
    var map = L.map('map').setView([lat, lon], 15);
    
    // Añadir el mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    
    // Agregar un marcador
    L.marker([lat, lon]).addTo(map).bindPopup("Ubicación actual").openPopup();
}

// Intentar obtener la ubicación del cliente
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            initMap(lat, lon);
        },
        () => {
            // Si no se permite la ubicación, mostrar MasterD
            const defaultLat = 40.441344; // Latitud de MasterD
            const defaultLon = -3.704445; // Longitud de MasterD
            initMap(defaultLat, defaultLon);
        }
    );
} else {
    // Si el navegador no soporta geolocalización, usar la ubicación predeterminada
    const defaultLat = 40.441344;
    const defaultLon = -3.704445;
    initMap(defaultLat, defaultLon);
}
initMap()