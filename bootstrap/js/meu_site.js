
  function sorteia(){

    return Math.round(Math.random() * 10);
  }

  function sorteiaNumeros(quantidade){

    var segredos = [];

    var numero = 1;

    while(numero <= quantidade){

      var numeroAleatorio = sorteia();

      if(numeroAleatorio != 0){

        var achou = false;

        for(var posicao = 0; posicao < segredos.length; posicao++){

          if(segredos[posicao] == numeroAleatorio){
            achou = true;
            break;
          }
        }

          if(achou == false){
          segredos.push(numeroAleatorio);
          numero++;
          }
      }
    }

    return segredos;
  }

  var segredos = sorteiaNumeros(4);
  var input = document.querySelector("input");
  input.focus();

  function verifica(){
    var achou = false;

    for(var posicao = 0; posicao < segredos.length; posicao++){

      if(input.value == segredos[posicao]){

        alert("Você Acertou!");
        achou = true;
        break;
      }
    }

    if(achou == false){
      alert("Você Errou!");
    }

    input.value = "";
    input.focus();
  }

  var button = document.querySelector("button");
  button.onclick = verifica;

  console.log(segredos);

  $("#div_interna1").hide();
  $("#toggle").click(function(){
    $("#div_interna1").toggle(1000);
  });

  $("#tabela_filmes2").hide();
  $("#botao_filmes").click(function(){
    $("#tabela_filmes2").toggle(1000);
  });

  $("#div_lista").hide();
  $("#botao_esportes").click(function(){
    $("#div_lista").toggle(1000);
  });

  $("#div_lista2").hide();
  $("#botao_hobbies").click(function(){
    $("#div_lista2").toggle(1000);
  });

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
