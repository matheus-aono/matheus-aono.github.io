var botaoLogin = document.querySelector(".botao-login");

botaoLogin.addEventListener("click", function(){
    var usuario = document.querySelector(".login");
    
    if(usuario.value == "matheus"){
        alert("Logado com sucesso!");
        setTimeout(function(){
            window.location.href = "http://www.devmedia.com.br/";
        }, 1000);
        
    } else {
        alert("Login incorreto!");
        
    }
});