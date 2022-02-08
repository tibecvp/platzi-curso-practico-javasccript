let listaNumeros = [];

var input = document.getElementById("InputNumero");
input.addEventListener("keyup", function(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        agregarNumero();
    }
});

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function agregarNumero() {
    const input = document.getElementById("InputNumero");
    const value = input.value;
    listaNumeros.push(parseInt(value));

    mostrarLista();
    input.value = '';
    document.getElementById("PrimaryButton").disabled = false;
}

function calcularPromedio() {
    const promedio = calcularMediaAritmetica(listaNumeros);
    const showResult = document.getElementById("ShowResult");
    showResult.innerText = "EL PROMEDIO ES " + promedio;
    showResult.style.display = "block";
    showResult.style.fontWeight = "bolder";
}

function mostrarLista() {
    const lista = document.getElementById("ulNumbersList");
    /*Crea otro elemento dentro del elemento contenedor*/
    var linew = document.createElement("li");
    /*Imprime algo dentro del elemento 'li' "*/
    var contenido = document.createTextNode(listaNumeros[listaNumeros.length - 1]);
    lista.appendChild(linew);
    linew.appendChild(contenido);
}

function limpiarLista() {
    window.location.reload();
}