const modelPedidos = require('../model/pedidos');

const controllerPedidos = {

    pedidos: (req, res) => {
        res.send(`Pedidos realizados: ${modelPedidos.listarPedidos()}`);
    },
    add: (req, res) => {
        let item = req.params.item;
        (modelPedidos.adicionarPedido(item)) ? 
        res.send("Item adicionado ao pedido"):
        res.send("Item não encontrado no cardapio");       
    },
    total: (req, res) => {
        let contaFinal = modelPedidos.total();
        res.send(`Total da conta R$: ${contaFinal}<br><br>
        Conferir pedidos: ${modelPedidos.listarPedidos()}
        `);
    }

}

module.exports = controllerPedidos;

