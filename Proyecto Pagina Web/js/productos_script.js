document.body.style.overflow = "hidden";
 
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

// indica si estamos en la zona de relojes (true) o no (false)
let enRelojes = true;

// página actual de relojes (cada página = 6 relojes)
let paginaActual = 0;

// bloquea el scroll para que no se ejecute muchas veces seguidas
let bloqueado = false;

// número máximo de páginas de relojes que existen
const maxPaginas = Math.floor(relojes.length / 6) - 1;

// función que muestra los relojes según la página actual
function mostrarRelojes(pagina) {

  // selecciona todas las cartas (los bloques de relojes en el HTML)
  document.querySelectorAll(".carta").forEach(carta => {

    // obtiene el índice de cada carta (0 a 5)
    const indice = carta.dataset.indice;

    // calcula qué reloj toca según la página y el índice
    const reloj = relojes[pagina * 6 + Number(indice)];

    // si no existe ese reloj, no hace nada
    if (!reloj) return;

    // cambia la imagen del reloj
    carta.querySelector("img").src = reloj.imagen;

    // cambia el nombre del reloj
    carta.querySelector("span").textContent = reloj.nombre;

    // mete la descripción en el bloque info-extra
    const info = carta.querySelector(".info-extra");
    info.innerHTML = reloj.descripcion.map(d => `<p>— ${d}</p>`).join("");
  });
}

// muestra la primera página al cargar
mostrarRelojes(0);

// bloquea el scroll normal de la página
document.body.style.overflow = "hidden";

// detecta el scroll del ratón
window.addEventListener("wheel", (e) => {

  // evita el scroll nativo del navegador
  e.preventDefault();

  // si está bloqueado, no hace nada (evita spam de scroll)
  if (bloqueado) return;

  // activa el bloqueo temporal
  bloqueado = true;
  setTimeout(() => bloqueado = false, 600);

  // ======================
  // SCROLL HACIA ABAJO
  // ======================
  if (e.deltaY > 0) {

    // si aún hay páginas de relojes, avanza
    if (paginaActual < maxPaginas) {
      paginaActual++;
      mostrarRelojes(paginaActual);
    }

    // si ya no hay más relojes, va al footer
    else {

      // desbloquea el scroll normal de la página
      document.body.style.overflow = "auto";

      // baja suavemente al footer
      document.querySelector("footer").scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  // ======================
  // SCROLL HACIA ARRIBA
  // ======================
  if (e.deltaY < 0) {

    // si no estás en la primera página, sube relojes
    if (paginaActual > 0) {
      paginaActual--;
      mostrarRelojes(paginaActual);
    }
  }

}, { passive: false });