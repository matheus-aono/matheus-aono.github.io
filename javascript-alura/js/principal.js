var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var infoImc = paciente.querySelector(".info-imc");

    var infoPeso = paciente.querySelector(".info-peso");
    var peso = infoPeso.textContent;

    var infoAltura = paciente.querySelector(".info-altura");
    var altura = infoAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 300){
        pesoValido = false;
        infoImc.textContent = "Peso inválido";
    }

    if(altura <= 0 || altura >= 2.50){
        alturaValida = false;
        infoImc.textContent = "Altura inválida";
    }

    if(pesoValido && alturaValida){
        var contaImc = peso / (altura * altura);
        infoImc.textContent = contaImc.toFixed(3);
    } 
}





