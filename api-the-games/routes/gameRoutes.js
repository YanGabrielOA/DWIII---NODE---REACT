import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// Endpoint para listar todos os games (rota)
gameRoutes.get("/games", gameController.getAllGames);

// Endpoint para cadastrar um jogo
gameRoutes.post("/games", gameController.createGame);

// Endpoint para deletar um jogo
gameRoutes.delete("/games/:id", gameController.deleteGame)

gameRoutes.put("/games/:id",gameController.UpdateGame)

export default gameRoutes;
