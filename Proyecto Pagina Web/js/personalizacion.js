window.onload = function() {

    // cuando carga la página ejecuto todo el código
    // así me aseguro de que el HTML ya existe

    // =========================
    // ARRAY DE RELOJES
    // =========================

    const relojes = [
        "../multimedia/RolexDateJust.png",
        "../multimedia/OmegaSeamaster.png",
        "../multimedia/PetekPhilippeNautilus.png",
        "../multimedia/AudemarsPiguet.png",
        "../multimedia/TagHeuer.jpg",
        "../multimedia/JaguarSaphire.png",
        "../multimedia/rolex_submariner.png",
        "../multimedia/iwc_pilot.png",
        "../multimedia/zenith_elite.png",
        "../multimedia/hublot.png",
        "../multimedia/breitling.png",
        "../multimedia/cartier.png"
    ];

    // esto es como una lista de imágenes que voy cambiando

    let indice = 0;
    // este número me dice qué reloj estoy mostrando ahora

    const imagen = document.getElementById("imagen-reloj");
    // cojo la imagen del HTML para poder cambiarla

    const btnDerecha = document.querySelector(".flecha-derecha");
    const btnIzquierda = document.querySelector(".flecha-izquierda");

    // botones para cambiar de reloj

    // =========================
    // CAMBIAR A LA DERECHA
    // =========================

    btnDerecha.addEventListener("click", () => {

        // cada vez que hago click avanzo una posición
        indice++;

        // si me paso del final vuelvo al principio
        if (indice >= relojes.length) indice = 0;

        // hago un efecto de apagado
        imagen.style.opacity = 0;

        setTimeout(() => {
            // espero un poco y cambio la imagen
            imagen.src = relojes[indice];

            // vuelvo a mostrarla
            imagen.style.opacity = 1;
        }, 200);
    });

    // =========================
    // CAMBIAR A LA IZQUIERDA
    // =========================

    btnIzquierda.addEventListener("click", () => {

        // retrocedo una posición
        indice--;

        // si me paso del principio voy al final
        if (indice < 0) indice = relojes.length - 1;

        // efecto de fade
        imagen.style.opacity = 0;

        setTimeout(() => {
            imagen.src = relojes[indice];
            imagen.style.opacity = 1;
        }, 200);
    });

    // =========================
    // PRECIOS DE ACCESORIOS
    // =========================

    const precios = {
        pulsera: 100,
        joya: 50,
        anillo: 80,
        caja: 120,
        "tarjeta-regalo": 30
    };

    // esto es como un “diccionario”
    // cada accesorio tiene su precio

    const inputs = document.querySelectorAll(".accesorio input");
    // cojo todos los checkbox de accesorios

    inputs.forEach(input => {

        input.addEventListener("change", function () {

            // cada vez que marco o desmarco un accesorio

            const precio = precios[this.id];
            // busco el precio según el id del checkbox

            if (!precio) return;
            // si no existe precio, no hago nada

            const contenedor = this.closest(".accesorio");
            // cojo el bloque completo del accesorio

            let etiqueta = contenedor.querySelector(".precio-extra");
            // miro si ya existe el texto del precio

            if (!etiqueta) {
                // si no existe lo creo
                etiqueta = document.createElement("div");
                etiqueta.classList.add("precio-extra");
                contenedor.appendChild(etiqueta);
            }

            if (this.checked) {
                // si está marcado, muestro el precio
                etiqueta.textContent = "+" + precio + "€";
            } else {
                // si lo desmarco, lo borro
                etiqueta.textContent = "";
            }

        });
    });

};