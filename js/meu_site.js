var nome = prompt("Por favor, insira seu nome");

alert("Prazer " + nome + ", seja bem-vindo ao meu site!");

function turnOn(){

	var texto = document.getElementById("texto_neon");
	texto.className = texto.className.concat("on");

	var imagem = document.getElementById("img_neon");
	imagem.setAttribute("class", imagem.getAttribute("class").concat("on"));
}