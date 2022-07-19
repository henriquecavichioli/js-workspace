var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function() {

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++ ) {

    var tdNomePaciente = pacientes[i].querySelector(".info-nome");
    var nomePaciente = tdNomePaciente.textContent;
    var nomeFiltrado = this.value;

    console.log(`nomeFiltrado = ${nomeFiltrado}`);

    if (nomePaciente != nomeFiltrado) {
        pacientes[i].classList.add("invisivel");
    } else {
        pacientes[i].classList.remove("invisivel");
    }
}

})
