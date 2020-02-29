const modelCardapio = require('../model/cardapio');

const controllerCardapio = {

    index: (req, res) => {
        res.send(`<h2>Cardapio</h2> ${modelCardapio.listarCardapio()}`);
    },
    buscar: (req, res) => {
        let nome = req.params.nome;
        let itemBuscado = modelCardapio.buscarItem(nome);
        (itemBuscado.length > 0) ?
            res.send(` ${itemBuscado.length} encontrado `) :
            res.send(`O item '${nome} ' não tem em nosso cardapio `)
    },
    BuscarPorCategoria: (req, res) => {
        let categoria = req.params.item;
        let itemBuscado = modelCardapio.buscarItemPorCategoria(categoria);
        (itemBuscado.length > 0) ?
            res.send(`Itens da categoria  ${categoria}:  ${modelCardapio.listarPorCategoria(itemBuscado)}  `) :
            res.send(`'${categoria} ' não é uma categoria valida `)
    },
    add: (req, res) => {
        let nome = req.params.nome;
        let addItem = modelCardapio.adicionarItem(nome);
        (addItem) ?
            res.send(` Item foi adicionado no cardapio`) :
            res.send(`Por favor enviar os dados corretos`)
    }


}

module.exports = controllerCardapio;