CREATE DATABASE teste_autenticacao;
USE teste_autenticacao;

CREATE TABLE usuarios (
	idUsuarios INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50),
    usuario VARCHAR (50),
    senha VARCHAR (30)
);

INSERT INTO usuarios (nome, usuario, senha) VALUES
('Thales', 'Thales Belle', '123456789'),
('Julia Maria', 'Prof Ju', '112233445'),
('Osnir', 'Rei Osnir', '223344556');

SELECT * FROM usuarios;