var botonIniciar = document.querySelectorAll(".btnPopup");
var botonCerrar = document.getElementById("close");
botonIniciar.forEach(botonIniciar => {
    botonIniciar.addEventListener('click', (event) => {
        var popup = document.getElementById("popup")
        popup.style.visibility = "visible";
        document.body.style.overflow = "hidden";
    });
});
botonCerrar.addEventListener('click', (event) => {
    popup.style.visibility = "hidden";
    document.body.style.overflow = "auto";
});
