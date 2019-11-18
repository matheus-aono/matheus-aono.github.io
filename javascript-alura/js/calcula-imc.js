<<<<<<< HEAD
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var infoImc = paciente.querySelector(".info-imc");

    var infoPeso = paciente.querySelector(".info-peso");
    var peso = infoPeso.textContent;

    var infoAltura = paciente.querySelector(".info-altura");
    var altura = infoAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaPeso(altura);

    if(!pesoValido){
        pesoValido = false;
        infoImc.textContent = "Peso inválido";
        infoImc.classList.add("peso-invalido");
        infoPeso.classList.add("peso-invalido");
    }

    if(!alturaValida){
        alturaValida = false;
        infoImc.textContent = "Altura inválida";
        infoImc.classList.add("altura-invalida");
        infoAltura.classList.add("altura-invalida");
    }

    if(pesoValido && alturaValida){
        var contaImc = calculaImc(peso, altura);
        infoImc.textContent = contaImc;
    } 
}

function validaPeso(peso){
    if(peso > 0 && peso <= 300){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){

    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(3);;
}



=======
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
        infoPeso.classList.add("peso-invalido");
    }

    if(altura <= 0 || altura >= 2.50){
        alturaValida = false;
        infoImc.textContent = "Altura inválida";
        infoAltura.classList.add("altura-invalida");
    }

    if(pesoValido && alturaValida){
        var contaImc = calculaImc(peso, altura);
        infoImc.textContent = contaImc;
    } 
}

function calculaImc(peso, altura){

    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(3);;
}



>>>>>>> 966d778eceb515e91ace71b33299cbf360f5b2c9
