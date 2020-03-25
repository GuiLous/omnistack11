const express = require("express")
const cors = require('cors')
const routes = require("./routes")
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/*
    GET: Buscar uma informação do backend
    POST: Criar uma informação no backend
    PUT: Alterar uma informação no backend
    DeLETE: Deletar uma informação no backend
*/

/*
    Tipos de parâmetros

    Query: parâmetros nomeados enviados na rota apos o simbolo "?" (Filtros, paginaçõa)
    Routes: parâmetros usados para indentificar recursos
    Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/



app.listen(3333)


