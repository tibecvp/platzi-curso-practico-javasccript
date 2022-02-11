let listaNumeros = [];

var input = document.getElementById("InputNumero");
input.addEventListener("keyup", function(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        agregarNumero();
    }
});

function agregarNumero() {
    const input = document.getElementById("InputNumero");
    const value = input.value;
    if (value != "") {
        listaNumeros.push(parseInt(value));
        mostrarLista();
        input.value = '';
        document.getElementById("PrimaryButton").disabled = false;
    }
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

// MODA

function calcularModa() {
    const listaNumerosCount = {};

    listaNumeros.map(
        function(elemento) {
            if (listaNumerosCount[elemento]) {
                listaNumerosCount[elemento] += 1;
            } else {
                listaNumerosCount[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(listaNumerosCount).sort(
        function(valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];
    printResult(moda);
}

function printResult(moda) {
    const showResult = document.getElementById("ShowResult");
    showResult.innerText =
        "LA MODA ES " +
        moda[0] +
        ", se repite " +
        moda[1] +
        " veces.";
    showResult.style.display = "block";
    showResult.style.fontWeight = "bolder";
}