window.onload = function() {

    const relojes = [
        "../multimedia/RelojRolexPersonalizacion1.png",
        "../multimedia/RelojOmegaPersonalizacion.png",
        "../multimedia/RelojNadalPersonalizacion.png"
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