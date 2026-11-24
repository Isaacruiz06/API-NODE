
const express = require('express');
const router = express.Router();
const DetallePedidoControlador = require('../controlador/detallePedidoControlador');

// INNER JOIN + GROUP BY
router.get('/resumen', DetallePedidoControlador.obtenerResumenPorProducto);

// INNER JOIN por pedido
router.get('/con-productos/:id', DetallePedidoControlador.obtenerDetallePorPedido);

router.get('/', DetallePedidoControlador.obtenerDetalles);
router.get('/:id', DetallePedidoControlador.obtenerDetallePorId);

router.post('/', DetallePedidoControlador.crearDetalle);
router.put('/:id', DetallePedidoControlador.actualizarDetalle);
router.delete('/:id', DetallePedidoControlador.eliminarDetalle);

module.exports = router;
