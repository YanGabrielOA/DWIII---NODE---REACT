import gameService from "../services/gameServices.js";
import { ObjectId } from "mongodb";

const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requesição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para cadastrar jogos
const createGame = async (req, res) => {
  try {
    // Desestruturação
    // Capturando valores
    const { title, platform, year, price } = req.body;
    // Cadastrando no banco
    await gameService.Create(title, platform, year, price);
    res.sendStatus(201); // Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

// Função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); // Código 204 (NO CONTENT)
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST)
      // Requisição mal formada
    }
  } catch {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
//FUNCAO PARA ALTERAR O JOGO
const UpdateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      //DESESTRUTURACAO
      const { title, platform, year, price } = req.body;
      gameService.UpdateGame(id, tittle, platform, year, price);
      res.sendStatus(200)//codigo 200 (ok): requisição bem sucedida
    }else{
      res.sendStatus(400)// codigo 400(bad request): requisicao mal formulada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
// funcao para buscar um unico jogo
const GetOneGame = async (req,res)=>{
  try{
    if(ObjectId.isValid(req.params.id)){
      const id = req.params.id
      const game = await gameService.getOne(id)
      if(!game){
        res.sendStatus(404)
      }else{
      res.sendStatus(200)
      }
    }
  }catch(error){
    console.log(error)
    res.sendStatus(500).json({error:"ERRO INTERNO DO SERVIDOR"})
  }
}

export default { getAllGames, createGame, deleteGame, UpdateGame };
