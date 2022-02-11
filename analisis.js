let salarios = [];
let salariosSorted = [];

// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function printResult(resultGral, resultTop10) {
    const showResult = document.getElementById("ShowResult");
    showResult.innerText =
        "LA MEDIANA GENERAL ES " +
        resultGral +
        ". LA MEDIANA DEL TOP 10 ES " +
        resultTop10 +
        ".";
    showResult.style.display = "block";
    showResult.style.fontWeight = "bolder";
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

function calcularMediana() {
    sacarSalarios();
    const resultMedianaGral = calcularMedianaGral();
    const resultMedianaTop10 = calcularMedianaTop10();
    printResult(resultMedianaGral, resultMedianaTop10);
}

// Mediana General
function sacarSalarios() {
    salarios = listaSalarios.map(
        function(personita) {
            return personita.salary;
        }
    );

    salariosSorted = salarios.sort(
        function(salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );
}


function calcularMedianaGral() {
    const medianaGeneral = medianaSalarios(salariosSorted);
    return medianaGeneral;
}


// Mediana del Top 10
function calcularMedianaTop10() {
    const spliceStart = parseInt((salariosSorted.length * 90) / 100);
    const spliceCount = parseInt(salariosSorted.length - spliceStart);
    const salariosTop10 = salariosSorted.splice(
        spliceStart,
        spliceCount
    );

    const medianaTop10 = medianaSalarios(salariosTop10);
    return medianaTop10;
}