const selectorIzquierdo = document.getElementById("selector-izquierdo");
const imgIzquierdo      = document.getElementById("imgIzquierdo");
const selectorDerecho   = document.getElementById("selector-derecho");
const imgDerecho        = document.getElementById("imgDerecho");
const precioIzquierdo   = document.getElementById("precioIzquierdo");
const precioDerecho     = document.getElementById("precioDerecho");
const resultado         = document.getElementById("resultado");
 
const imagenes = {
    opcion1: "../multimedia/RolexDateJust.png",
    opcion2: "../multimedia/AudemarsPiguet.png",
    opcion3: "../multimedia/OmegaSeamaster.png",
    opcion4: "../multimedia/PetekPhilippeNautilus.png",
    opcion5: "../multimedia/TagHeuer.jpg",
    opcion6: "../multimedia/JaguarSaphire.png",
    opcion7: "../multimedia/rolex_submariner.png",
    opcion8: "../multimedia/iwc_pilot.png",
    opcion9: "../multimedia/zenith_elite.png",
    opcion10: "../multimedia/hublot.png",
    opcion11: "../multimedia/breitling.png",
    opcion12: "../multimedia/cartier.png"
};
 
const precios = {
    opcion1: { nombre: "Rolex DateJust",            precio: 9500   },
    opcion2: { nombre: "Audemars Piguet Royal Oak", precio: 35000  },
    opcion3: { nombre: "Omega Seamaster",           precio: 6000   },
    opcion4: { nombre: "Patek Philippe Nautilus",   precio: 120000 },
    opcion5: { nombre: "Tag Heuer",                 precio: 3000   },
    opcion6: { nombre: "Jaguar Saphire",            precio: 1200   },
    opcion7: { nombre: "Rolex Submariner",          precio: 8500   },
    opcion8: { nombre: "IWC Pilot",                 precio: 13000  },
    opcion9: { nombre: "Zenith Elite",              precio: 6200   },
    opcion10: { nombre: "Hublot Classic",           precio: 10000 },
    opcion11: { nombre: "Breitling Navitimer",      precio: 7000   },
    opcion12: { nombre: "Cartier Santos",           precio: 8300   }
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
        }else {
            resultado.innerHTML =
                "Ambos relojes tienen el mismo precio de <strong>" + relojIzq.precio + " €</strong>.";
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