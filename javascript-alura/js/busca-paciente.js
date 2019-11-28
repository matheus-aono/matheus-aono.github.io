<<<<<<< HEAD
var buscar = document.querySelector("#buscar-paciente");

buscar.addEventListener("click", function(){
    
    var api = new XMLHttpRequest();

    api.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    api.addEventListener("load", function(){
        
        var erroAjax = document.querySelector("#erro-ajax");

        if(api.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = api.responseText;
            var paciente = JSON.parse(resposta);

            paciente.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
        } else {
            erroAjax.classList.remove("invisivel");
        }

        
    });

    api.send();
=======
var buscar = document.querySelector("#buscar-paciente");

buscar.addEventListener("click", function(){
    
    var api = new XMLHttpRequest();

    api.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    api.addEventListener("load", function(){
        
        var erroAjax = document.querySelector("#erro-ajax");

        if(api.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = api.responseText;
            var paciente = JSON.parse(resposta);

            paciente.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
        } else {
            erroAjax.classList.remove("invisivel");
        }

        
    });

    api.send();
>>>>>>> d3c968bbbbf9de2e5ccd61670f493e108d86e082
});