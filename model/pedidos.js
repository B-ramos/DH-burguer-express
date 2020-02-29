const modelCardapio = require('./cardapio')

let pedidos = [];

const listarPedidos = () => {
    let lista = "";
    for (let pedido of pedidos) {
        lista += `
        <ul>
          <li>  Item: ${pedido.nome} </li>
          <li> Categoria: ${pedido.categoria} </li>
          <li> R$: ${pedido.preco} </li>
        </ul>
        `
    }
    return lista;
}

const adicionarPedido = item => {

    let verifica = (modelCardapio.buscarItem(item))

    if (verifica != "") {
        pedidos.push(verifica[0]);
        return true
    } else {
        return false;
    }
}

const total = () => {

    let contaFinal = 0;

    for (let pd of pedidos) {
        contaFinal += pd.preco
    }       
    return contaFinal;
}

module.exports = {
    adicionarPedido,
    listarPedidos,
    total
}