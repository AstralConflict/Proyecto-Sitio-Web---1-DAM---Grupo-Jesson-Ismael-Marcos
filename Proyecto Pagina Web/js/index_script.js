const seccionPrincipal = document.getElementById("seccionPrincipal");
const imagen = document.querySelector("#seccionPrincipal .imagenFondo");
const cartaReloj = document.querySelector("#seccionPrincipal .cartaReloj");

const puntoImagen = { x: 390, y: 660 };

function modificarPosicion() {
  
  // Obetenemos las dimensiones del contenedor en este momento.
  const anchuraContenedor = seccionPrincipal.clientWidth;
  const alturaConetenedor = seccionPrincipal.clientHeight;

  // Obetenemos las dimensiones de la imagen.
  const anchuraImagen = imagen.naturalWidth;
  const alturaImagen = imagen.naturalHeight;

  // Calculamos la escala a la que se habra redimensionado la imagen para ocupar el contenedor entero.
  const escalaImagen = Math.max(anchuraContenedor / anchuraImagen, alturaConetenedor / alturaImagen);

  // Calculamos las dimensiones de la imagen ya redimensionada a la escala que calculamos.
  const anchoReEscalado = anchuraImagen * escalaImagen;
  const altoReEscalado = alturaImagen * escalaImagen;

  // Calculamos donde empieza la imagen dentro del contenedor, que varia por razon del centrado de la imagen, para luego sumarle el punto de la imagen al que queremos apuntar.
  const desplazamientoImagenX = (anchuraContenedor - anchoReEscalado) / 2;
  const desplazamientoImagenY = (alturaConetenedor - altoReEscalado) / 2;

  // Empezando la imagen en el punto 0,0, calculamos la posicion final de la carta sumandole el punto de la imagen al que queremos apuntar, multiplicado por la escala a la que se habra redimensionado la imagen.
  const posicionFinalX = desplazamientoImagenX + puntoImagen.x * escalaImagen;
  const posicionFinalY = desplazamientoImagenY + puntoImagen.y * escalaImagen;

  // Finalmente posicionamos la carta en la posicion que hemos calculado.
  cartaReloj.style.left = `${posicionFinalX}px`;
  cartaReloj.style.top = `${posicionFinalY}px`;

  // Centramos la carta en el punto al que la hemos movido.
  cartaReloj.style.transform = "translate(-50%, -50%)";
}

// Posicionar la carta al cargar la imagen.
imagen.addEventListener("load", modificarPosicion);

// Posicionar la carta si la carta ya esta cargada.
if (imagen.complete && imagen.naturalWidth) {
  modificarPosicion();
}

// Podicionar la carta al cambiar el tamaño de la ventana.
window.addEventListener("resize", modificarPosicion);


/* Desvanecimiento Scroll */
const contenedorSticky = document.getElementById("contenedorSticky");

function desvanecerAlScrollear() {

  const posicion = contenedorSticky.getBoundingClientRect(); // Obetenemos la posicion del contenedorSticky respecto a la ventana.

  let scrollHecho = -posicion.top; // Guarda la posicion del contenedor respecto a la parte de arriba de la ventana, dado que la posicion sera negativa dado que al hacer scroll va hacia abajo la vonvertimos en positiva con el -.
  console.log(scrollHecho);

  if (scrollHecho < 200) { // Limite minimo para el desvanecimiento.
      scrollHecho = 0;
  }

  if (scrollHecho > 700) { // Limite maximo para el desvanecimiento.
      scrollHecho = 700;
  }

  imagen.style.opacity = 1 - (scrollHecho / 900); // Le restamos opacidad a la imagen en funcion del scroll, con un limite de 900 para que no se vuelva completamente transparente.
  carta.style.opacity = 1 - (scrollHecho / 700); // Le restamos opacidad a la carta en funcion del scroll, con un limite de 700 para que no se vuelva completamente transparente.

}

window.addEventListener("scroll", desvanecerAlScrollear);