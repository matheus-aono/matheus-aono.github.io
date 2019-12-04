var botaoSeleciona = document.querySelector(".botao-seleciona");

botaoSeleciona.addEventListener("click", function(){

    var adm = document.querySelector(".adm");
    var funcionario = document.querySelector(".funcionario");

    if(adm.checked == true){
        setTimeout(function(){
            window.location.href = "login-adm.html";
        });
    } else if (funcionario.checked == true){
        setTimeout(function(){
            window.location.href = "login-usuario.html";
        });
    }
});