var apiUrl = "https://api.linkpreview.net";
var key = "5ccb8dced36172100ceaeef788bccf0c8af3a20880883";


$(document).ready(function(){
	$("#form1").on("submit", function(e){
		e.preventDefault();
		$.ajax({
			url: apiUrl + "?key=" + key + "&q=" + $("#endereco").val(),
			contentType: "application/json",
			dataType: "json",
			success: function(result) {
				$("#p1").text(result.title);
				$("#p2").text(result.description);
				$("#img").attr("src", result.image);
				$("#p4").text(result.url);
			}
		});
	});
	
});
	