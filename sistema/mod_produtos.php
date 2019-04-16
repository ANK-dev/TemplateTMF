

<style type="text/css" media="screen">

img{
	max-width:100px;
	max-height: :100px;
}
input[type=file]{
	padding:10px;
}

</style>

<h1 class="titulo_secoes"> Produtos </h1>
<p>
    <br>
    A tabela abaixo contém todos os produtos cadastrados no sistema! 
    Para Inserir, Deletar ou Editar basta clicar no respectivo botão e inserir as informações necessárias 
    para cada procedimento.
</p>


<div class="container">
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <button data-toggle="modal" data-target="#cadastrarProduto" id="products" class="mx-auto d-block btn btn-lg BotaoCadastra">Cadastrar Produto</button>
        </div>
    </div>
</div>
<br>
<div class="table-responsive">
	<table  class="table table-striped table-hover Tabela" id="tb1">
		<thead >
			<tr>
				<th style="width:6%;"> # </th>
				<th style="width:25%;"> Nome </th>
				<th style="width:36%;"> Descrição </th>
				<th style="width:17%;text-align:center"> Status </th>
				<th style="width:15%;">  </th>
			</tr>
		</thead>
		<tbody>
		<!-- Foi utilizado um foreach para pegar e gerar os dados de cada slide. O fechamento de aspas e . são utilizados para concatenar o php com html-->
		<?php 
		include ('db.class.php');
		$objDB = new db();
		$conn = $objDB->conecta_mysql();
		$query_select = "SELECT * FROM produto;";
		$result_select = mysqli_query($conn,$query_select) or die(mysql_error());
		$rows = array();
		$counter = 0;
		while($row = mysqli_fetch_array($result_select))
			$rows[] = $row;
		foreach($rows as $row){ 
			$counter = $counter+1;
			$codProduto = $row['codProduto'];
			$nome = $row['nome'];
			$descricao = $row['descricao'];
			echo '<tr class="odd gradeX">';
			echo '<td> '.$counter.' </td>';
			echo '<td>'.$nome.'</td>';
			echo '<td>'.$descricao.'</td>';
			echo '<td style="text-align:center"> Ativo </td>';
			echo '<td>
				<center>
					<button class="botaoEmail Botao" data-toggle="modal" id="modificaProduto" data-target="#modificarProduto" value="'.$codProduto.'" type="button"><i class="fa fa-pencil"></i> </button>
					<button class="botaoEmail Botao" data-toggle="modal" id="deletaProduto" data-target="#excluirProduto" value="'.$codProduto.'" type="button"><i class="fa fa-trash"></i></button>
					<button class="botaoEmail Botao" data-toggle="modal" id="previewImagens" data-target="#mostrarImagens" value="'.$codProduto.'" type="button"><i class="fa fa-image"></i></button>
				</center>';
			echo '</tr>';
			unset($estatus);
			}
			?>
		</tbody>
	</table>
</div>

<div  class="modal fade" id="cadastrarProduto"  tabindex="-1" role="dialog" aria-labelledby="modalCadastrarProdutoTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header" style="background-color: rgb(8, 21, 43);color: white;">
				<h5 class="modal-title">Cadastrar Produto:</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<form method="post" enctype="multipart/form-data"  id="formProduto" >
					<input name="filesToUpload[]" class="inpForm" id="filesToUpload" type="file" multiple="" />
					<div class="form-group">
						<label for="nomeProduto">Nome</label>
						<input type="text" name="nomeProduto" id="nomeProduto" required class="inpForm"/>
					</div>
					<div class="form-group">
						<label for="descricaoProduto">Descrição</label>
						<input type="text" name="descricaoProduto" id="descricaoProduto" required class="inpForm"/>
					</div>
			</div>
			<div class="modal-footer">
				<input type="submit" class="btn btn-success" id="potato" name="potato" value="Cadastrar"/>
				<button type="button" class="btn btn-secondary" id="returnServico" data-dismiss="modal"> Cancelar </button>
				<input type="hidden" id="addremove">
				</form>
			</div>
		</div>
	</div>
</div>				

</div>
</div>
</div>



<div  class="modal fade" id="excluirProduto" tabindex="-1" role="dialog" aria-labelledby="modalConfirmaDeleteProdutoTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header" style="background-color: rgb(8, 21, 43);color: white;">
				<h5 class="modal-title">Deseja excluir este produto?</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-footer">
				<input type="button" name="excluidProd" id="excluidProd" value="Sim" class="btn btn-danger BotaoModal">
				<button type="button" class="btn btn-secondary" id="returnProdExcluir" data-dismiss="modal"> Não </button>
			</div>
		</div>
	</div>
</div>


<div class="modal fade " id="mostrarImagens" tabindex="-1" role="dialog" aria-labelledby="modalImagensProdutoTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header" style="background-color: rgb(8, 21, 43);color: white;">
				<h5 class="modal-title">Imagens</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div id="galeria"></div>
			</div>
		</div>
	</div>
</div>

 
<script src="../js/jquery-3.3.1.js"></script>
<script src="../js/jquery.validate.min.js"></script>






