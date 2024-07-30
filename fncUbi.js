// Función para inicializar el mapa
function initMap(latitude, longitude) {
    // Crear el mapa centrado en las coordenadas dadas y con un zoom inicial de 12
    var map = L.map('map').setView([latitude, longitude], 12);

    // Añadir las capas de azulejos de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añadir un marcador en las coordenadas dadas
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Estás aquí.') // Añadir un popup al marcador
        .openPopup(); // Abrir el popup inmediatamente
}

// Función para obtener la ubicación del usuario
function getLocation() {
    // Verificar si el navegador soporta la geolocalización
    if (navigator.geolocation) {
        // Obtener la posición actual del usuario
        navigator.geolocation.getCurrentPosition(function(position) {
            // Llamar a initMap con las coordenadas obtenidas
            initMap(position.coords.latitude, position.coords.longitude);
        }, function() {
            // Manejar el caso en que no se pueda obtener la ubicación
            alert('No se pudo obtener la ubicación del usuario.');
        });
    } else {
        // Manejar el caso en que el navegador no soporte geolocalización
        alert('El navegador no soporta geolocalización.');
    }
}

// Llamar a getLocation cuando la página haya cargado
window.onload = getLocation;