const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

// consign ajuda com a importação dos modulos das pastas abaixo
consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando 2 ...')
})