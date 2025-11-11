require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const logarController = require("./controllers/logar");
const deslogarController = require("./controllers/deslogar");
const verificaAutenticacao = require("./controllers/verificarAutenticacao");
const util = require("util");
const connection = require("./models/db");
const query = util.promisify(connection.query).bind(connection);

const app = express();

async function getUsers() {
    try {
        const res = await query("SELECT * FROM tbUsers");
        let users = [];
        res.forEach((element) => {
            users.push({
                id: element.idUser,
                username: element.username,
                password: element.passwordUser,
                name: element.nameUser,
            });
        });
        return users;
    } catch (err) {
        console.error("DEU ERRO NO MYSQL: ", err);
    }
}

app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());
app.use(cookieParser());

app.post("/api/login", async (req, res) =>
    logarController(req, res, await getUsers())
);
app.post("/api/logout", deslogarController);

app.get("/api/verifica", verificaAutenticacao, (req, res) => {
    res.json({ message: "Acesso permitido à rota protegida", user: req.user });
});

app.listen(8080, async () => {
    console.log(`Servidor rodando em http://localhost:8080`);
});
