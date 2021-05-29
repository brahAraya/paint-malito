var lienzo = document.getElementById("lienzo");
var dibujo = lienzo.getContext("2d");
var alto = window.innerHeight - 50;
var ancho = window.innerWidth - 50;
var color = "blue";
var mousePresionado = false;
var xInicial;
var yInicial;
var xFinal;
var yFinal;

lienzo.setAttribute("height", alto);
lienzo.setAttribute("width", ancho);

window.addEventListener("resize", actualizarMedidas);
lienzo.addEventListener("mousedown", iniciarTrazo);
lienzo.addEventListener("mouseup", finalizarTrazo);

function actualizarMedidas() {
    alto = window.innerHeight - 50;
    ancho = window.innerWidth - 50;
    lienzo.setAttribute("height", alto);
    lienzo.setAttribute("width", ancho);
}

function iniciarTrazo() {
    lienzo.addEventListener("mousemove", obtenerCoordenadas);
    mousePresionado = true;
}

function finalizarTrazo() {
    mousePresionado = false;
}

function obtenerCoordenadas(evento) {
    if (mousePresionado === true) {
        xInicial = evento.offsetX;
        yInicial = evento.offsetY;
        xFinal = evento.offsetX;
        yFinal = evento.offsetY;
        dibujar(color, xInicial - 5, yInicial - 1, xFinal + 5, yFinal + 1, dibujo);
    }
}

function dibujar(color, xInicial, yInicial, xFinal, yFinal, dibujo) {
    dibujo.beginPath();
    dibujo.strokeStyle = color;
    dibujo.lineWidth = 10;
    dibujo.moveTo(xInicial, yInicial);
    dibujo.lineTo(xFinal, yFinal);
    dibujo.stroke();
    dibujo.closePath();
}