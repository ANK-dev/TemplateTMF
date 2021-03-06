$(document.body).ready(function(){
var codServico;
var addremove;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

$(document.body).on('click', '#batatas', function(){
	$('#formServico').validate({
		rules: {
			//nome: { required: true },
			//descricao: { required: true },
			//estatus: { required: true },
		},
		messages: {
			//nome: { required: 'Preencha o campo nome'},
			//descricao: { required: 'Preencha a descrição do serviço'},
			//arquivo: { required: 'Coloque uma imagem'},


		},
		submitHandler: function( form ){
			var dados = $( form ).serialize();
			var form = $('#formServico')[0]; //  [0], because you need to use standart javascript object here
			var formData = new FormData(form);
			$.ajax({
				type: "POST",
				url: "php/servico/cadastrarServico.php",
				data: formData,
				dataType: 'json',

        // Tell jQuery not to process data or worry about content-type
        // You *must* include these options!
        cache: false,
        contentType: false,
        processData: false,
        success: function( data )
        {	
						$('#cadastrarServico').hide(); // esconde o modal
	 	    			$("#returnServico").click(); // fecha o modal de fato
	 	    			ativaAlerta(data.message,1);
	 	    			$('#formServico').each (function(){
	 	    				this.reset();
	 	    			});
	 	    			sleep(2000).then(() => {
	 	    				location.reload();
	 	    			});
	 	    			//

	 	    		},
	 	    		error:function(){
	 	    			ativaAlerta(data.message,2);
	 	    		} 
	 	    	});

			return false;
		}
	});
});

$(document.body).on('click', '#statusServico', function(){
 // retorna os dados do fetch.php para preencher a tabela via ajax
 codigo = $(this).attr("value"); 
 $.ajax({  
 	url:"php/servico/mudaEstatus.php",  
 	method:"POST",
 	data:{codigo:codigo},  
 	beforeSend:function(data){  



 	},
 	success:function(data){
 		
 		$('#onoff'+codigo).html(data);
 		$('#status'+codigo).html("Inativo");
 		teste = $('#status'+codigo).attr("value"); 
 		if(teste=='Ativo'){
 			$('#status'+codigo).html("Inativo");
 			$('#status'+codigo).attr("value","Inativo");
 			$('#status'+codigo).val('Inativo');
			
 		}
 		if(teste=='Inativo'){
 			$('#status'+codigo).html("Ativo");
 			$('#status'+codigo).attr("value","Ativo");
 			$('#status'+codigo).val('Ativo');
			
 		}



		}  
	});
}); 



$(document.body).on('click', '#deletaServico', function(){
 // Ao clicar no botão deletar na tabela produtos, ele ira receber o valor do codigo do produto a ser deletado 
 codServico = $(this).attr("value"); 

});

$(document.body).on('click', '#services', function(){
$('#addremove').val('0');
$('#blah').attr('src', ''); // Clear the src
 $("#formServico").trigger('reset');

});

$(document.body).on('click', '#modificaServico', function(){

$('#blah').attr('src', ''); // Clear the src
 $("#formServico").trigger('reset');

});

	$(document.body).on('click', '#excluiServ', function(){
 // Ao clicar no botão deletar na tabela produtos, ele ira receber o valor do codigo do produto a ser deletado 
 $.ajax({  
 	url:"php/servico/excluirServico.php",  
 	method:"POST",  
 	data:{codServico:codServico},
 	dataType: 'json', 


 	success:function(data)
 	{	
						$('#excluirServico').hide(); // esconde o modal
	 	    			$("#returnExcluir").click(); // fecha o modal de fato
	 	    			ativaAlerta(data.message,1);
	 	    			sleep(2000).then(() => {
	 	    				location.reload();
	 	    			});

	 	    		},
	 	    		error:function(){
	 	    			ativaAlerta(data.message,2);
	 	    		} 




	 	    	}); 
});


$(document).on('click', '#modificaServico', function(){

codServico = $(this).attr("value");
 // retorna os dados do fetch.php para preencher a tabela via ajax 
	$.ajax({  
		url:"php/servico/modificaServico.php",  
		method:"POST",
		data:{codServico:codServico},
		dataType:"json",   
		beforeSend:function(data){  



		},
		success:function(data){  
			$('#modificanome').val(data.nome);
			$('#modificadescription').val(data.descricao);
			$('#modificacodigo').val(codServico);
 

		}  
	});
	


}); 

$(document.body).on('click', '#modificabatatas', function(){
		$('#formModifica').validate({
			rules: {
			//nome: { required: true },
			//descricao: { required: true },
			//estatus: { required: true },
		},
		messages: {
			//nome: { required: 'Preencha o campo nome'},
			//descricao: { required: 'Preencha a descrição do serviço'},
			//arquivo: { required: 'Coloque uma imagem'},


		},
		submitHandler: function( form ){
			var dados = $( form ).serialize();
			$.ajax({
				type: "POST",
				url: "php/servico/modifica.php",
				data: new FormData($('form')[1]),
				dataType: 'json',

        // Tell jQuery not to process data or worry about content-type
        // You *must* include these options!
        cache: false,
        contentType: false,
        processData: false,
        success: function( data )
        {	
						$('#modificarServicos').hide(); // esconde o modal
	 	    			$("#modificareturnServico").click(); // fecha o modal de fato
	 	    			$('#formModifica').each (function(){
	 	    				this.reset();
	 	    			});
	 	    			ativaAlerta(data.message,1);
	 	    			sleep(2000).then(() => {
	 	    				location.reload();
	 	    			});

	 	    		},
	 	    		error:function(){
	 	    			ativaAlerta(data.message,2);
	 	    		} 
	 	    	});

			return false;
		}
	});
	});


	$(document).on('click', '#previewImagens', function(){
		$( "#galeria" ).empty();
		var codServico = $(this).attr("value");
 // retorna os dados do fetch.php para preencher a tabela via ajax 
 $.ajax({  
 	url:"php/servico/pegaGaleria.php",  
 	method:"POST",
 	data:{codServico:codServico},
 	dataType:"json",   
 	beforeSend:function(){  
 	},
 	success:function(data){  
 		$.each(data, function(r) {

 			
 			$('#galeria').append('<img  src="Img/Servicos/'+data[r].nome+'" />')

 		});


 		


 	}  
 });



}); 















});

