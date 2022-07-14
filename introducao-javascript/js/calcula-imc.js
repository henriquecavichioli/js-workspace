var titulo = document.querySelector(".titulo");
titulo.textContent = "Teste js"

var pacientes = document.querySelectorAll(".paciente");
for (let i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var tdImc = pacientes[i].querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        console.log("Peso inválido!")
        tdImc.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");

    }
    
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!")
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
        
    }

}