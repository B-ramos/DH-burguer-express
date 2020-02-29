const express = require('express');

const routerCardapio = require('./route/routeCardapio');
const routerPedidos = require('./route/routePedidos');

const app = express();

app.use('/', routerCardapio)
app.use('/pedidos', routerPedidos)

app.listen(3000, ()=> {
    console.log("servidor rodando na porta 3000");
    
})