let listaSalarios = [];

disableSubmit();

function disableSubmit() {
    var input = document.getElementById("InputName");
    input.addEventListener("keyup", function(event) {
        if (event.key == 'Enter') {
            event.preventDefault();
            agregarSalario();
        }
    });

    var input = document.getElementById("InputSalary");
    input.addEventListener("keyup", function(event) {
        if (event.key == 'Enter') {
            event.preventDefault();
            agregarSalario();
        }
    });
}

function agregarSalario() {
    const inputName = document.getElementById("InputName");
    const valueName = inputName.value;
    const inputSalary = document.getElementById("InputSalary");
    const valueSalary = inputSalary.value;
    if (valueName != "" && valueSalary != "") {
        listaSalarios.push({
            name: valueName,
            salary: parseInt(valueSalary)
        });
        mostrarLista();
        inputName.value = '';
        inputSalary.value = '';
        inputName.focus();
        document.getElementById("PrimaryButton").disabled = false;
    }
}

function mostrarLista() {
    // MOSTRAR NOMBRE EN LA LISTA
    const listaName = document.getElementById("ulNameList");
    /*Crea otro elemento dentro del elemento contenedor*/
    var linewName = document.createElement("li");
    /*Imprime algo dentro del elemento 'li' "*/
    var contenidoName = document.createTextNode(listaSalarios[listaSalarios.length - 1].name);
    listaName.appendChild(linewName);
    linewName.appendChild(contenidoName);

    // MOSTRAR SALARIO EN LA LISTA
    const listaSalaryFront = document.getElementById("ulSalaryList");
    /*Crea otro elemento dentro del elemento contenedor*/
    var linewSalaryFront = document.createElement("li");
    /*Imprime algo dentro del elemento 'li' "*/
    var contenidoSalaryFront = document.createTextNode(listaSalarios[listaSalarios.length - 1].salary);
    listaSalaryFront.appendChild(linewSalaryFront);
    linewSalaryFront.appendChild(contenidoSalaryFront);
}

function limpiarLista() {
    window.location.reload();
}