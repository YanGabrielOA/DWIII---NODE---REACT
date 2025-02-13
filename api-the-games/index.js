import express from "express";
const app = express();

//CONFIGURANDO O EXPRESS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//CRIANDO A ROTA PRINCIPAL

app.get("/", (req, res) => res.send("API Iniciado com sucesso!!"));

//INICIANDO O SERVIDOR
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API RODANDO EM http://localhost:${port}`);
  }
});
