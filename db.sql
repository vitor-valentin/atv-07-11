CREATE DATABASE teste_autenticacao;
USE teste_autenticacao;
CREATE TABLE tbUsers(
	idUser INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    passwordUser VARCHAR(100),
    nameUser VARCHAR(50)
);
INSERT INTO tbUsers(username, passwordUser, nameUser) VALUES ("admin", '$2b$10$xFbzFvR5kGfcn7yt5Y9ukuvZNS2m9Ggi8sq4EL8uSO4zz3oxDpkQe', 'Administrador'),
("user", '$2b$10$tqJsqOb.iSNye6MoednUtelKQALhy/zZEduwSe8UNk2W/ErWpUsF6', 'Usuário Comum'),
("vitor", '$2b$10$HUrD0spft72d9hjA5j.moO6WNCOmi/WLPm1Gk93C.qRjLusvtOYgO', 'Vitor');