var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", filtraPorNome);

function filtraPorNome() {

    var pacientes = document.querySelectorAll(".paciente");
    if (campoFiltro.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++ ) {
    
            var tdNomePaciente = pacientes[i].querySelector(".info-nome");
            var nomePaciente = tdNomePaciente.textContent;
            var nomeFiltrado = campoFiltro.value;
            var expressao = new RegExp(nomeFiltrado, "i");

            if (!expressao.test(nomePaciente)) {
                pacientes[i].classList.add("invisivel");
            } else {
                pacientes[i].classList.remove("invisivel");
            }
        }
    } else {
    
        for (var i = 0; i < pacientes.length; i++ ) {
            pacientes[i].classList.remove("invisivel");
            
        }
    }
}
