const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

/*
Rotas / Recursos
*/

/*
* Méttodos HTTP:
*
* GET: Buscar uma Informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar informação no back-end
*/

/**
* Tipos de parâmetros
* Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
* Route Params: Parâmetros utilizados para indetificar recursos
* Request Body: Corpo da raquisição, ultilizado oara criar ou alterar recursos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microdft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */