const express = require('express');

//rotas
const router = express.Router();
router.get('/', (req, res)=>{
    res.send('olá mundo 2.1');
});

// configurações
const app = express();
app.use('/', router);

module.exports = app;