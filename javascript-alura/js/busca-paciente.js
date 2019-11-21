var buscar = document.querySelector("#buscar-paciente");

buscar.addEventListener("click", function(){
    
    var api = new XMLHttpRequest();

    api.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    api.addEventListener("load", function(){
        console.log(api.responseText);
        
    });

    api.send();
});
