var dissmissAlert = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
var mensagem = '';
var alertSuccess = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
var alertDanger = '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
var alertWarning = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';

function ativaAlerta(texto,classe){
    mensagem = '<strong>'+ texto +'</strong>';
    switch(classe){
        case 1:
            $('#containerAlert').html(alertSuccess+mensagem+dissmissAlert+'</div>');
            break;
        case 2:
            $('#containerAlert').html(alertDanger+mensagem+dissmissAlert+'</div>');
            break;
        case 3:
            $('#containerAlert').html(alertWarning+mensagem+dissmissAlert+'</div>');
            break;
        default:
            $('#containerAlert').html(alertWarning+mensagem+dissmissAlert+'</div>');
            break;
    }
}
$(document).ready(function(){
var max1;
var max2;
var max3;
var max4;
var servico1ID;
var servico2ID;
var servico3ID;
var servico4ID;
    $.ajax({  
        url:"sistema/Sobre/carregaDados.php",
        dataType:"json",
        success:function(data){
            //$('#indicador1qt').html(data.indicador1qt);
            //$('#indicador2qt').html(data.indicador2qt);
            //$('#indicador3qt').html(data.indicador3qt);
            //$('#indicador4qt').html(data.indicador4qt);
            max1 = data.indicador1qt;
            max2 = data.indicador2qt;
            max3 = data.indicador3qt;
            max4 = data.indicador4qt;
            servico1ID = data.servico1;
            servico2ID = data.servico2;
            servico3ID = data.servico3;
            servico4ID = data.servico4;
            $('#indicador1').html(data.indicador1);  
            $('#indicador2').html(data.indicador2);  
            $('#indicador3').html(data.indicador3);  
            $('#indicador4').html(data.indicador4);
            $('#textoSobre').html(data.textoSobre);
            $('#textoServicos').html(data.textoServicos);
            
            $.ajax({
                url:"sistema/php/dadosIndexServico.php",
                method:"POST",  
                data:{servico1:servico1ID,servico2:servico2ID,servico3:servico3ID,servico4:servico4ID},
                dataType:"json",
                success:function(data){
                    
                    $('#imgservico1').attr("src",'sistema/Img/Servicos/'+data[0].imagem);
                    $('#imgservico2').attr("src",'sistema/Img/Servicos/'+data[1].imagem);
                    $('#imgservico3').attr("src",'sistema/Img/Servicos/'+data[2].imagem);
                    $('#imgservico4').attr("src",'sistema/Img/Servicos/'+data[3].imagem);
                    $('#nomeservico1').html(data[0].nome);
                    $('#nomeservico2').html(data[1].nome);
                    $('#nomeservico3').html(data[2].nome);
                    $('#nomeservico4').html(data[3].nome);
                }
            });
        }  
    });
    $(window).on('scroll', function(event) {

        if($(document).scrollTop()>175){
            var numero = document.getElementById('numero1');
            var min = 1;
            var max = max1;
                var duração = 5000; // 5 segundos
                for (var i = min; i <= max; i++) {
                    setTimeout(function(nr) {
                        numero.innerHTML = nr;
                    }, i * 2000 / max, i);
                }
                $( this ).off( event );
            }
        });

    $(window).scroll(function(event){
        if($(document).scrollTop()>175){
            var numero = document.getElementById('numero2');
            var min = 1;
            var max = max2;
                var duração = 5000; // 5 segundos
                for (var i = min; i <= max; i++) {
                    setTimeout(function(nr) {
                        numero.innerHTML = nr;
                    }, i * 2000 / max, i);
                }
                $( this ).off( event );
            }
        });

    $(window).scroll(function(event){
        if($(document).scrollTop()>175){
            var numero = document.getElementById('numero3');
            var min = 1;
            var max = max3;
                var duração = 5000; // 5 segundos
                for (var i = min; i <= max; i++) {
                    setTimeout(function(nr) {
                        numero.innerHTML = nr;
                    }, i * 2000 / max, i);
                }
                $( this ).off( event );
            }
        });

    
    $(window).scroll(function(event){
        if($(document).scrollTop()>175){
            var numero = document.getElementById('numero4');
            var min = 1;
            var max = max4;
                var duração = 5000; // 5 segundos
                for (var i = min; i <= max; i++) {
                    setTimeout(function(nr) {
                        numero.innerHTML = nr;
                    }, i * 2000 / max, i);
                }
                $( this ).off( event );
            }
        });
    var $doc = $('html, body');
    
    $('.linkMenu ').click(function() {
        $('.navbar-collapse').collapse("hide");
        
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 140
        }, 500);
        return false;
    });
    
    var alturas = {};
    var i=1;

    $('.secaoSite').each(function () {
        alturas[i] = this.id; // ex: alturas['section_2'] = 600
        i++;
    });

    var numSecoes=parseInt(i) + 1;
    i=parseInt(i);

    var seccao;
    var alturaSecaoI;
    var windowTop;
    
    $(window).on('scroll', function() {

        if(windowTop >= 250 || innerWidth < 838){
            $('#logo_Menu').addClass("img_pequena");
        } else if(windowTop < 250 && innerWidth > 838){
            $('#logo_Menu').removeClass("img_pequena");
        }
        
        for(i=1;i < numSecoes; i++){
            alturaSecaoI = $('#'+alturas[i]).offset().top;
            windowTop = $(window).scrollTop() + 200;
            if(windowTop <= 400 ){
                $('.linkMenu').removeClass("link_ativo");
                $('#link_secaoSobre').addClass("link_ativo");
            }
            if(windowTop >= alturaSecaoI ){
                $('.linkMenu').removeClass("link_ativo");
                seccao = alturas[i].replace("secao","link_secao");
                $('#'+seccao).addClass("link_ativo");
            }
        }
        // if(windowTop >= 300){
        //     $('#logo_Menu').addClass("img_pequena");
        // } else if(windowTop < 300){
        //     $('#logo_Menu').removeClass("img_pequena");
        // }

    });

    //Carregando as informações da página principal

   

    //Envio de e-mail com AJAX e PHP
    
    $("form").get(0).reset();       //Limpa formulário

    var envia = function(){
        
        var postData = new FormData($('form')[0]);

        var nome= $('#nome').val();
        var telefone= $('#telefone').val();
        var email= validaEmail($('#email').val());
        var mensagem= $('#mensagem').val();

        if(nome.length!= 0 &&  telefone.length!= 0 && email != 0  && mensagem.length!= 0){

            $('#enviar').off('click');
            $('#enviar').addClass('disabled');
            $('#enviar').prepend('<img id="spinner" src="img/spinner.gif" width="20">')

            $.ajax({
                /*url:'mailer.php',
                type: 'POST',
                data: $('#formularioContato').serialize(),
                success: function(data){
                    if(data.indexOf("Erro") == -1){
                        ativaAlerta(data,1);
                    } else {
                        ativaAlerta(data,3);
                    }
                }*/
                type: 'POST',
                url: 'mailer.php',
                data: postData,
                processData: false,
                contentType: false,
                success: function(data) {
                    if(data.indexOf('Erro') == -1){
                        $('.inpForm').val('');
                        $('#sucesso').fadeIn(500);
                        setTimeout(function() {
                            $('#sucesso').fadeOut(1500);
                        }, 5000);
                        $('#enviar').removeClass('disabled');
                        $('#spinner').remove();
                        $('#enviar').on('click', envia);
                    } else {
                        $('#fracasso').fadeIn(500);
                        setTimeout(function() {
                            $('#fracasso').fadeOut(1500);
                        }, 5000);
                        $('#enviar').removeClass('disabled');
                        $('#spinner').remove();
                        $('#enviar').on('click', envia);
                    }
                }

            });
        } else {
            $('#incompleto').fadeIn(500);
            setTimeout(function() {
                $('#incompleto').fadeOut(1500);
            }, 5000);
        }
    }

    $('#enviar').on('click', envia);

    $('.containerProduto').mouseover(function(){
        $('#'+this.id+' .descricaoProduto').animate({
            opacity:1
        },150);
        $('#'+this.id+' .cardProdutosDescricao .nomeProduto').animate({
            opacity:0
        },70);
    });
    
    $('.containerProduto').mouseleave(function(){
        $('#'+this.id+' .descricaoProduto').animate({
            opacity:0
        },10);
        $('#'+this.id+' .cardProdutosDescricao .nomeProduto').animate({
            opacity:1
        },70);
    });


    

});

//Função para testar se o e-mail é válido
function validaEmail(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
}

