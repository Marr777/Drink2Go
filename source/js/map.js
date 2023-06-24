import '../vendor/leaflet/leaflet.js';

const mapImg = document.querySelector('.map__image');
const mapContainer = document.querySelector('.map__container');
const COORDINATES = [59.9683, 30.3173984];


export const setMap = () => {
  mapImg.style.display = 'none';
  mapContainer.classList.remove('map__container--nojs');

  const map = L.map('map').setView(COORDINATES, 18);

  const mapPin = L.icon({
    iconUrl: '../img/map-pin.svg',

    iconSize: [38, 50],
    // iconAnchor: [22, 94],
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.marker(COORDINATES, { icon: mapPin }).addTo(map);
}
