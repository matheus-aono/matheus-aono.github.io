$(document).ready(function(){

  $("#formulario").on("submit", function(e){
          e.preventDefault();
          var len1 = $("#nome").val().length;
          var len2 = $("#sobrenome").val().length;
          if (len1 > 3 && len2 > 3) {
              localStorage.setItem("nome", $("#nome").val());
              localStorage.setItem("sobrenome", $("#sobrenome").val());
              this.submit();
          }else{
            alert("Nome e sobrenome devem conter no minimo 3 caracteres!");
          }
      });
});

