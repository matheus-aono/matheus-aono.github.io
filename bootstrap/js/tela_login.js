$(document).ready(function(){

  $("#formulario").on("submit", function(e){
          e.preventDefault();
          var len1 = $("#nome").val().length;
          var len2 = $("#senha").val().length;
          if (len1 > 0 && len2 > 0) {
              localStorage.setItem("nome", $("#nome").val());
              localStorage.setItem("senha", $("#senha").val());
              this.submit();
          }else{
            alert("Nome e/ou senha inválidos!");
          }
      });
});
