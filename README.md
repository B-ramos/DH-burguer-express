# DH-Burguer-express



## Incializando o prjeto
* Ao dar um pull ou clonar este repositório e trabalhar com esse projeto, lembre-se de rodar o comando NPM  INSTALL para instalar todas as dependências do projeto.



### Rota Cardápio: (Exibe o cardápio)
* Rota cardapio http://localhost:3000/


### Rota buscar (Verifica se tem o item no cardápio passando o nome):
* http://localhost:3000/cardapio/buscar/nomeDoItem


### Rota  buscar por categoria ( Retorna todos item cadastrados na categoria)
* http://localhost:3000/cardapio/buscar/categoria/nomeDaCategoria


## Rota adicionar item no cardápio ( Adiciona um item no cardápio) 
- (obrigatório passar 3 parametros separados pelo simbolo "&" na ordem nome&preco&categória )
* http://localhost:3000/cardapio/add/nome&valor&categoria


### Rota adcionar item ao pedido
* http://localhost:3000/pedidos/add/nomeDoItem


### Rota Pedido (Exibe todos itens do seu pedido)
* http://localhost:3000/pedidos


### Rota total (Exibe o valor de seu pedido e mostra todos itens para verificar)
* http://localhost:3000/pedidos/total