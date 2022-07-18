var titulo = document.querySelector(".titulo");
titulo.textContent = "Teste js"

var pacientes = document.querySelectorAll(".paciente");
for (let i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var tdImc = pacientes[i].querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        console.log("Peso inválido!")
        tdImc.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        console.log("Altura inválida!")
        tdImc.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
    }

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso <= 0 || peso >= 1000) {
        return false;

    } return true;
}

function validaAltura(altura) {
    if(altura <= 0 || altura >= 3.00) {
        return false;

    } return true;
}
