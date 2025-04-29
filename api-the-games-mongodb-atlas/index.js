import express from "express";
import mongoose from "mongoose";

import Game from "./models/Games.js"

const app = express();

//IMPORTANDO AS ROTAS (ENDPOINTS) DE GAMES
import gameRoutes from "./routes/gameRoutes.js";


//CONFIGURANDO O EXPRESS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gameRoutes)

//INICIANDO CONEXAO COM O BANCO DE DADOS
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games");

//CRIANDO A ROTA PRINCIPAL

app.get("/", (req, res) => {
  //   res.send("API iniciada com sucesso!");
  const games = [
    {
      title: "Game 1",
      year: 2020,
      platform: "PC",
      price: 20,
    },
    {
      title: "Game 2",
      year: 2024,
      platform: "Playstation 5",
      price: 200,
    },
  ];
  res.json(games);
});

//INICIANDO O SERVIDOR
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API RODANDO EM http://localhost:${port}`);
  }
});
