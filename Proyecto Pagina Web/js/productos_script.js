const relojes = [
  {
    imagen: "../multimedia/RolexDateJust.png",
    nombre: "Rolex DateJust",
    descripcion: [
      "Elegancia clásica para cualquier ocasión",
      "Cristal de zafiro",
      "Resistente al agua 100m",
      "Movimiento automático suizo"
    ]
  },
  {
    imagen: "../multimedia/OmegaSeamaster.png",
    nombre: "Omega Seamaster",
    descripcion: [
      "Reloj de buceo profesional",
      "Resistente al agua 300m",
      "Válvula de helio",
      "Alta precisión suiza"
    ]
  },
  {
    imagen: "../multimedia/PetekPhilippeNautilus.png",
    nombre: "Patek Philippe Nautilus",
    descripcion: [
      "Lujo deportivo icónico",
      "Diseño exclusivo",
      "Alta relojería",
      "Acabado premium"
    ]
  },
  {
    imagen: "../multimedia/AudemarsPiguet.png",
    nombre: "Audemars Piguet Royal",
    descripcion: [
      "Diseño de alta gama",
      "Acero premium",
      "Resistencia 50m",
      "Movimiento automático"
    ]
  },
  {
    imagen: "../multimedia/TagHeuer.jpg",
    nombre: "Tag Heuer Carrera",
    descripcion: [
      "Estilo deportivo de competición",
      "Cristal zafiro",
      "Alta precisión",
      "Diseño suizo"
    ]
  },
  {
    imagen: "../multimedia/JaguarSaphire.png",
    nombre: "Jaguar Saphire",
    descripcion: [
      "Elegancia accesible",
      "Diseño moderno",
      "Resistente",
      "Estilo urbano"
    ]
  },

  // Scroll relojes nuevos
  {
    imagen: "../multimedia/rolex_submariner.png",
    nombre: "Rolex Submariner",
    descripcion: [
      "Icono del buceo",
      "Resistente 300m",
      "Alta gama",
      "Lujo deportivo"
    ]
  },
  {
    imagen: "../multimedia/iwc_pilot.png",
    nombre: "IWC Pilot",
    descripcion: [
      "Aviación profesional",
      "Diseño robusto",
      "Alta legibilidad",
      "Precisión suiza"
    ]
  },
  {
    imagen: "../multimedia/zenith_elite.png",
    nombre: "Zenith Elite",
    descripcion: [
      "Diseño minimalista",
      "Alta precisión",
      "Elegancia fina",
      "Relojería premium"
    ]
  },
  {
    imagen: "../multimedia/hublot.png",
    nombre: "Hublot Classic",
    descripcion: [
      "Diseño moderno",
      "Fusión de materiales",
      "Lujo extremo",
      "Impacto visual"
    ]
  },
  {
    imagen: "../multimedia/breitling.png",
    nombre: "Breitling Navitimer",
    descripcion: [
      "Aviación legendaria",
      "Cronógrafo preciso",
      "Diseño técnico",
      "Alta resistencia"
    ]
  },
  {
    imagen: "../multimedia/cartier.png",
    nombre: "Cartier Santos",
    descripcion: [
      "Elegancia clásica",
      "Diseño icónico",
      "Lujo francés",
      "Estilo eterno"
    ]
  }
];

// Función que cambia los relojes según la "página" de scroll
// (cada página tiene 6 relojes)
function mostrarRelojes(pagina) {

  // Selecciono todas las cartas del HTML
  document.querySelectorAll(".carta").forEach(carta => {

    // Cojo el índice de cada carta (0 a 5)
    const indice = carta.dataset.indice;

    // Calculo qué reloj toca según la página actual
    const reloj = relojes[pagina * 6 + Number(indice)];

    // Si no existe ese reloj, no hago nada
    if (!reloj) return;

    // Cambio la imagen del reloj
    carta.querySelector("img").src = reloj.imagen;

    // Cambio el nombre del reloj
    carta.querySelector("span").textContent = reloj.nombre;

    // Cojo el contenedor de descripción
    const info = carta.querySelector(".info-extra");

    // Meto las características en formato <p>
    info.innerHTML = reloj.descripcion
      .map(d => `<p>— ${d}</p>`)
      .join("");
  });
}

// Control del scroll del ratón
let paginaActual = 0;

// Calcula cuántas páginas hay en total
const maxPaginas = Math.floor(relojes.length / 6) - 1;

// Detecta cuando el usuario hace scroll
window.addEventListener("wheel", (e) => {

  // Scroll hacia abajo -> siguiente página
  if (e.deltaY > 0 && paginaActual < maxPaginas) {
    paginaActual++;
    mostrarRelojes(paginaActual);
  }

  // Scroll hacia arriba -> página anterior
  if (e.deltaY < 0 && paginaActual > 0) {
    paginaActual--;
    mostrarRelojes(paginaActual); 
  }
});

// Carga inicial (primera página de relojes)
mostrarRelojes(0);