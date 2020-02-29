const express = require('express');
const router = express.Router();

const controllerPedidos = (require('../controller/controllerPedidos'))

router.get('/', controllerPedidos.pedidos);
router.get('/add/:item', controllerPedidos.add);
router.get('/total', controllerPedidos.total);

module.exports = router;