$("#consultar").click(function(){
	$.get( "https://dog.ceo/api/breeds/image/random", function(data) {

            var output="<ul>";
            for (var i in data.Product.ProductImage) 
            {
                output+="<li>" + data.Product.ProductImage.i.http  + "</li>";
            }
            output+="</ul>";

            $('span').html(output);
	});

$('#consultar').html(dadosjSon);
});

function getDog() {
    var selectedDog = $(".dog-selector option:selected").val();
    dogURL = selectedDog.replace(/-/g, '/');
    $.getJSON("https://dog.ceo/api/breed/" + dogURL + "/images/random", function(result) {
        $(".images-dog").html("<img src='" + result.message + "'>");
    });
}

function loadDogs() {
    $.getJSON("https://dog.ceo/api/breeds/list/all", function(result) {
        var breeds = result.message;
        firstDog = Object.keys(breeds)[0];
        $.each(breeds, function(dog, breed) {
            if (breeds[dog].length >= 1) {
                for (i = 0; i < breeds[dog].length; i++) {
                    $(".dog-selector").append('<option value="' + dog + '-' + breeds[dog][i] + '">' + breeds[dog][i] + ' ' + dog + '</option>');
                }
            } else if (breeds[dog].length < 1) {
                $(".dog-selector").append('<option value="' + dog + '">' + dog + '</option>');
            }
        });
        $.getJSON("https://dog.ceo/api/breed/" + firstDog + "/images/random", function(result) {
            $(".images-dog").html("<img src='" + result.message + "'>");
        });
    });
    
}
$(".dog-selector").change(function() {
    $(".dog-selector option:selected").each(function() {
        getDog();
    });
    
});
$(".get-dog").click(function() {
    getDog();
});
$(document).ready(function() {
    loadDogs();
});
$(function() {
    $('#edit').change(function() {
        localStorage.setItem('raça', this.value);
    });
    if(localStorage.getItem('raça')){
        $('#edit').val(localStorage.getItem('raça'));
    }
  
});
function salvaNome(){
    var nome = localStorage.setItem('#nomeCachorro');
	var nome = localStorage.getItem('#nomeCachorro');
	
  	document.getElementById('status').innerHTML=nome+"<br>"+email;
	document.getElementById('avatar').innerHTML= "<img src="+imagem+" />";
}
$(".salvarbtn").click(function(){
    alert("Dados Salvos com sucesso");
});
// consumindo a api do google fonts
$("#selectFont").click(function(){
	$.get( "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCXWEVLT4PtEGCzKOofdo5qewPpAP3QEqQ", function(data) {

            var output="<ul>";
            for (var i in data.Product.ProductImage) 
            {
                output+="<li>" + data.Product.ProductImage.i.http  + "</li>";
            }
            output+="</ul>";

            $('span').html(output);
	});

$('#selectFont').html(dadosjSon);
});
//código troca de font
$(".selectFont").change(function() {
    $(".selectFont option:selected").each(function() {
        getFont();
    });
    
});
//armazenando font em local storage
$(function() {
    $('#selectFont').change(function() {
        localStorage.setItem('Font', this.value);
    });
    if(localStorage.getItem('Font')){
        $('#selectFont').val(localStorage.getItem('Font'));
    }
    
    $('#selectCor').change(function() {
        localStorage.setItem('Cor', this.value);
    });
    if(localStorage.getItem('Cor')){
        $('#selectCor').val(localStorage.getItem('Cor'));
    }
});