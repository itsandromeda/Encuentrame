/*global google, funcionExito, funcionError, alert, navigator, document*/
function initMap() {
    "use strict";
    var laboratoriaLima = {
            lat: -12.1191427,
            lng: -77.0349046
        },
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 18,
            center: laboratoriaLima
        }),
        markadorLaboratoria = new google.maps.Marker({
            position: laboratoriaLima,
            map: map
        }),
        latitud,
        longitud,
        funcionExito,
        funcionError;

    function buscar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
        }
    }

    funcionExito = function (posicion) {
        latitud = posicion.coords.latitude;
        longitud = posicion.coords.longitude;

        var miUbicacion = new google.maps.Marker({
            position: {
                lat: latitud,
                lng: longitud,
                map: map
            }
        });
        map.setZoom(18);
        map.setCenter({
            lat: latitud,
            lng: longitud
        });
    };

    funcionError = function (error) {
        alert("Tenemos un problema con encontrar tu ubicación");
    };
    document.getElementById("encuentrame").addEventListener("click", buscar);
}