const cardapio = [
    {
        nome: "X-Burguer",
        preco: 10,
        categoria: "Carne"
    },
    {
        nome: "X-Salada",
        preco: 12,
        categoria: "Carne"
    },
    {
        nome: "Refrigerante",
        preco: 5,
        categoria: "Bebidas"
    },
    {
        nome: "Cerveja",
        preco: 8,
        categoria: "Bebidas"
    },
    {
        nome: "X-vegano",
        preco: 15,
        categoria: "Vegano"
    },
    {
        nome: "Saladão",
        preco: 8,
        categoria: "Vegano"
    }
];

const listarCardapio = () => {

    let lista = "";
    for (let item of cardapio) {
        lista += `
        <ul>
          <li>  Item: ${item.nome} </li>
          <li> Categoria: ${item.categoria} </li>
          <li> R$: ${item.preco} </li>
        </ul>
        `
    }
    return lista;
}

const listarPorCategoria = item =>{
     let lista = "";
     for (let prod of item) {
        lista += `
        <ul>
          <li>  Item: ${prod.nome} </li>
          <li> Categoria: ${prod.categoria} </li>
          <li> R$: ${prod.preco} </li>
        </ul>
        `
    }
     return lista;
}

const buscarItem = nome => {

    let itemBuscado = cardapio.filter(item => {
        return item.nome.toUpperCase() === nome.toUpperCase();
    })

    return itemBuscado;
}

const buscarItemPorCategoria = categoria => {
    
    let itemBuscado = cardapio.filter( item => {
        return item.categoria.toUpperCase() === categoria.toUpperCase();
    })
    return itemBuscado;
}

const adicionarItem = (item) => {

    let separarString = item.split("&");
    
    switch (separarString.length) {
        case 3:
            let novoItem = {
                nome: separarString[0],
                preco: separarString[1],
                categoria: separarString[2]
            }
            cardapio.push(novoItem);
            return true;
            break;
        default:
            return false;        
    }
}

module.exports = {
    listarCardapio,
    buscarItem,
    adicionarItem,
    buscarItemPorCategoria,
    listarPorCategoria
}