const selectorIzquierdo = document.getElementById("selector-izquierdo");
const imgIzquierdo      = document.getElementById("imgIzquierdo");
const selectorDerecho   = document.getElementById("selector-derecho");
const imgDerecho        = document.getElementById("imgDerecho");
const precioIzquierdo   = document.getElementById("precioIzquierdo");
const precioDerecho     = document.getElementById("precioDerecho");
const resultado         = document.getElementById("resultado");
 
const imagenes = {
    opcion1: "../../Recursos Proyecto/Imagenes/RolexDateJust.png",
    opcion2: "../../Recursos Proyecto/Imagenes/AudemarsPiguet.png",
    opcion3: "../../Recursos Proyecto/Imagenes/OmegaSeamaster.png",
    opcion4: "../../Recursos Proyecto/Imagenes/PetekPhilippeNautilus.png",
    opcion5: "../../Recursos Proyecto/Imagenes/TagHeuer.jpg",
    opcion6: "../../Recursos Proyecto/Imagenes/JaguarSaphire.png"
};
 
const precios = {
    opcion1: { nombre: "Rolex DateJust",           precio: 8500   },
    opcion2: { nombre: "Audemars Piguet Royal Oak", precio: 35000  },
    opcion3: { nombre: "Omega Seamaster",           precio: 6000   },
    opcion4: { nombre: "Patek Philippe Nautilus",   precio: 120000 },
    opcion5: { nombre: "Tag Heuer",                 precio: 3000   },
    opcion6: { nombre: "Jaguar Saphire",            precio: 1200   }
};
 
function actualizarComparacion() {

    const valorIzq = selectorIzquierdo.value;
    const valorDer = selectorDerecho.value;
 
    const relojIzq = precios[valorIzq];
    const relojDer = precios[valorDer];
 
    if (relojIzq && precioIzquierdo) {
        precioIzquierdo.textContent = "Precio: " + relojIzq.precio + " €";
    }
 
    if (relojDer && precioDerecho) {
        precioDerecho.textContent = "Precio: " + relojDer.precio + " €";
    }

    // Comparar precios y muestra el resultado

    if (relojIzq && relojDer && resultado) {
        if (relojIzq.precio > relojDer.precio) {
            resultado.innerHTML =
                "El reloj más caro es <strong>" + relojIzq.nombre + "</strong> (" + relojIzq.precio + " €).<br>" +
                "El más barato es <strong>" + relojDer.nombre + "</strong> (" + relojDer.precio + " €).";
 
        } else if (relojIzq.precio < relojDer.precio) {
            resultado.innerHTML =
                "El reloj más caro es <strong>" + relojDer.nombre + "</strong> (" + relojDer.precio + " €).<br>" +
                "El más barato es <strong>" + relojIzq.nombre + "</strong> (" + relojIzq.precio + " €).";
        }
    }
}
 
selectorIzquierdo.addEventListener("change", () => {
    const valor = selectorIzquierdo.value;
 
    if (imagenes[valor]) {
        imgIzquierdo.setAttribute("src", imagenes[valor]);
    }
 
    actualizarComparacion();
});
 
selectorDerecho.addEventListener("change", () => {
    const valor = selectorDerecho.value;
 
    if (imagenes[valor]) {
        imgDerecho.setAttribute("src", imagenes[valor]);
    }
 
    actualizarComparacion();
});