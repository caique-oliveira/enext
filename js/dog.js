// fazendo um get na api dog
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
// selecionando a div dog-selector e passando os parametros de src em images-dog
function getDog() {
    var selectedDog = $(".dog-selector option:selected").val();
    dogURL = selectedDog.replace(/-/g, '/');
    $.getJSON("https://dog.ceo/api/breed/" + dogURL + "/images/random", function(result) {
        $(".images-dog").html("<img src='" + result.message + "'>");
        
            localStorage.setItem('imagem', this.value);
        
        if(localStorage.getItem('imagem')){
            $('.images-dog').val(localStorage.getItem('imagem'));
        }
    });
}

//trazendo a lista completa de cachorros
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
//armazenando dados da raça em localstorage
$(function() {
    $('#edit').change(function() {
        localStorage.setItem('raça', this.value);
    });
    if(localStorage.getItem('raça')){
        $('#edit').val(localStorage.getItem('raça'));
    }
});
//armazenando dados do nome em localstorage
function salvaNome(){
    var nome = localStorage.setItem('#nomeCachorro');
	var nome = localStorage.getItem('#nomeCachorro');
	
  	document.getElementById('status').innerHTML=nome+"<br>"+email;
	document.getElementById('avatar').innerHTML= "<img src="+imagem+" />";
}
//alert de salvamento concluído
$(".salvarbtn").click(function(){
    alert("Dados Salvos com sucesso");
});

//código troca de font
$(".selectFont").change(function() {
    $(".selectFont option:selected").each(function() {
        getFont();
    });
});

//adicionando ao localstorage o campo text "nome do cachorro"
$(function salvarDados(){
$('#nomeDoCachorro').change(function() {
    localStorage.setItem('nome', this.value);
});
if(localStorage.getItem('nome')){
    $('#nomeDoCachorro').val(localStorage.getItem('nome'));
    }
});

//armazenando a font em local storage
$(function() {
    $('#selectFont').change(function() {
        localStorage.setItem('Font', this.value);
    });
    if(localStorage.getItem('Font')){
        $('#selectFont').val(localStorage.getItem('Font'));
    }
//armazenando a cor em local storage    
    $('#selectCor').change(function() {
        localStorage.setItem('Cor', this.value);
    });
    if(localStorage.getItem('Cor')){
        $('#selectCor').val(localStorage.getItem('Cor'));
    }
});
//função em javascript que converte a imagem em strig para salvar em localstorage

