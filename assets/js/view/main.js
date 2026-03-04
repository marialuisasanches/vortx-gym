var map = L.map("map").setView([-23.5505, -46.6333], 12);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 19,
}).addTo(map);

var blackIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var unidades = [
  {
    nome: "Jardim Paulista",
    endereco: "Rua das Palmeiras, 324 — Jardim Paulista, SP",
    coords: [-23.5674, -46.656],
  },
  {
    nome: "Vila Mariana",
    endereco: "Av. Domingos de Morais, 1.120 — Vila Mariana, SP",
    coords: [-23.5896, -46.6353],
  },
  {
    nome: "Santana",
    endereco: "Rua Padre Carvalho, 789 — Santana, SP",
    coords: [-23.51, -46.624],
  },
];

unidades.forEach((u) => {
  L.marker(u.coords, { icon: blackIcon })
    .addTo(map)
    .bindPopup(`<b>${u.nome}</b><br>${u.endereco}`);
});

document.querySelector(".back-home").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
