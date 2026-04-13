window.onload = function() {

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

    let indice = 0;

    const imagen = document.getElementById("imagen-reloj");

    const btnDerecha = document.querySelector(".flecha-derecha");
    const btnIzquierda = document.querySelector(".flecha-izquierda");

    btnDerecha.addEventListener("click", () => {
        indice++;
        if (indice >= relojes.length) indice = 0;

        imagen.style.opacity = 0;

        setTimeout(() => {
            imagen.src = relojes[indice];
            imagen.style.opacity = 1;
        }, 200);
    });

    btnIzquierda.addEventListener("click", () => {
        indice--;
        if (indice < 0) indice = relojes.length - 1;

        imagen.style.opacity = 0;

        setTimeout(() => {
            imagen.src = relojes[indice];
            imagen.style.opacity = 1;
        }, 200);
    });

};