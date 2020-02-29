const express = require('express');

const routerCardapio = require('./router/routerCardapio');
const routerPedidos = require('./router/routerPedidos');

const app = express();

app.use('/', routerCardapio)
app.use('/pedidos', routerPedidos)

app.listen(3000, ()=> {
    console.log("servidor rodando na porta 3000");
    
})