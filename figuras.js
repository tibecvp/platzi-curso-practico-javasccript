// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// Pi
const PI = Math.PI;

// Perímetro o Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML
// Funciones para el Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Funciones para el Triángulo
var ladoT1 = undefined;
var ladoT2 = undefined;
var baseT = undefined;
var alturaT = undefined;

function inicializarValoresTriangulo() {
    const lado1 = document.getElementById("InputLado1Triangulo");
    ladoT1 = Number(lado1.value);
    const lado2 = document.getElementById("InputLado2Triangulo");
    ladoT2 = Number(lado2.value);
    const base = document.getElementById("InputBaseTriangulo");
    baseT = Number(base.value);
    const altura = document.getElementById("InputAlturaTriangulo");
    alturaT = Number(altura.value);
}

function calcularPerimetroTriangulo() {
    inicializarValoresTriangulo();
    const perimetro = perimetroTriangulo(ladoT1, ladoT2, baseT);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    inicializarValoresTriangulo();
    const area = areaTriangulo(baseT, alturaT);
    alert(area);
}

// Funciones para el Círculo
var radioC = undefined;

function getRadio() {
    radioC = (document.getElementById("InputCirculo")).value;
}

function calcularDiametroCirculo() {
    getRadio();
    const diametro = diametroCirculo(radioC);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    getRadio();
    const perimetro = perimetroCirculo(radioC);
    alert(perimetro);
}

function calcularAreaCirculo() {
    getRadio();
    const area = areaCirculo(radioC);
    alert(area);
}