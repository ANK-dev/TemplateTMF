-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 13/02/2019 às 15:11
-- Versão do servidor: 5.7.21-1
-- Versão do PHP: 5.6.26-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bdTMF`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `campanha`
--

CREATE TABLE `campanha` (
  `codCampanha` bigint(20) NOT NULL,
  `tag` varchar(50) NOT NULL,
  `assunto` varchar(150) NOT NULL,
  `mensagem` text NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `codCliente` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `status` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `mensagem`
--

CREATE TABLE `mensagem` (
  `codMsg` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(150) NOT NULL,
  `mensagem` text NOT NULL,
  `data` datetime NOT NULL,
  `respondido` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `mensagem`
--

INSERT INTO `mensagem` (`codMsg`, `nome`, `telefone`, `email`, `mensagem`, `data`, `respondido`) VALUES
(49, 'Marco', '(31) 23123-1231', 'marco@gmail.cbr', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tellus vel sem facilisis iaculis sed eu tortor. Vestibulum lobortis nisl non nunc tincidunt pretium et nec turpis. Curabitur commodo, dolor mollis malesuada tristique, felis turpis posuere turpis, id iaculis magna elit eu justo. Duis iaculis velit eros, sit amet dictum ipsum mattis id. Mauris posuere, felis vitae fermentum vehicula, felis dolor pellentesque quam, et finibus urna erat eget ligula. Curabitur bibendum et nibh et fringilla. Aenean nec lobortis turpis.\r\n\r\nMaecenas imperdiet quam vel est sollicitudin lobortis. Integer et eleifend eros. Curabitur sed aliquam mauris. Maecenas gravida rutrum sem ut commodo. Maecenas eu ex fringilla, vehicula sem vitae, elementum risus. Nulla aliquam tempus ipsum, ut gravida sapien tristique id. Vestibulum laoreet, magna id varius tempus, mi neque feugiat metus, eu tristique lorem purus ac nulla. Cras lacus libero, tempor sit amet ornare in, lacinia in justo.', '2019-02-13 13:07:26', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `sobre`
--

CREATE TABLE `sobre` (
  `indicador1qt` int(11) NOT NULL,
  `indicador2qt` int(11) NOT NULL,
  `indicador3qt` int(11) NOT NULL,
  `indicador4qt` int(11) NOT NULL,
  `indicador1` varchar(20) NOT NULL,
  `indicador2` varchar(16) NOT NULL,
  `indicador3` varchar(18) NOT NULL,
  `indicador4` varchar(18) NOT NULL,
  `textoSobre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `sobre`
--

INSERT INTO `sobre` (`indicador1qt`, `indicador2qt`, `indicador3qt`, `indicador4qt`, `indicador1`, `indicador2`, `indicador3`, `indicador4`, `textoSobre`) VALUES
(23, 6, 10, 15, 'projetos entregues', 'anos no mercado', 'produtos próprios', 'opções de serviço', 'Lorem ipsum dolor sit amet, consecttur adipiscing elit. Donec rutrum feugiat augue. Aenean ac laoreet mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce egestas augue sit amet posuere volutpat. Ut a leo ut risus accumsan luctus id eu velit. Curabitur sodales pharetra lectus sit amet luctus. Integer dignissim laoreet velit non cursus. Suspendisse sit amet neque scelerisque, vehicula libero ac, fermentum neque. Integer lacinia pulvinar massa, sit amet egestas turpis pulvinar a. Suspendisse hendrerit, ligula vel sagittis dignissim, odio lectus porta mauris, non sagittis velit arcu nec eros. Etiam non dui eu diam blandit mattis sit amet eu diam!');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `codUsuario` int(11) NOT NULL,
  `login` varchar(15) NOT NULL,
  `senha` varchar(32) NOT NULL,
  `nome` varchar(15) NOT NULL,
  `cargo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `usuario`
--

INSERT INTO `usuario` (`codUsuario`, `login`, `senha`, `nome`, `cargo`) VALUES
(1, 'sandro', 'd4fa73a393db574d78e880f0f9b87ddd', 'Sandro Lopes', 'Chefe'),
(2, 'admin', 'ac596daee40a92d6afa930c164953cf7', 'Serra Jr', 'Admin');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `campanha`
--
ALTER TABLE `campanha`
  ADD PRIMARY KEY (`codCampanha`);

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`codCliente`);

--
-- Índices de tabela `mensagem`
--
ALTER TABLE `mensagem`
  ADD PRIMARY KEY (`codMsg`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`codUsuario`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `campanha`
--
ALTER TABLE `campanha`
  MODIFY `codCampanha` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `codCliente` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `mensagem`
--
ALTER TABLE `mensagem`
  MODIFY `codMsg` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `codUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
