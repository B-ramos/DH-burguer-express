const express = require('express');
const router = express.Router();

const controllerCardapio = (require('../controller/controllerCardapio'))

router.get('/', controllerCardapio.index);
router.get('/cardapio/buscar/:nome', controllerCardapio.buscar);
router.get('/cardapio/buscar/categoria/:item', controllerCardapio.BuscarPorCategoria);
router.get('/cardapio/add/:nome', controllerCardapio.add);

module.exports = router;