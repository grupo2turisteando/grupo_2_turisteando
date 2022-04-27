/* Sistema de Ruteo */

const path = require('path');
const express= require('express');
const router= express.Router(); /* Router permiete crear rutas montables y desmontables */
/* el metodo HTTP es llamado desde Router */

const cart_controller = require('../controllers/cart_controller.js');

/* rutas con controladores */


//mostrar Carrito//
router.get("/", cart_controller.show_cart);

//agregar un paquete
router.post("/add", cart_controller.add_item);

//eliminar un paquete/
router.delete("/delete", cart_controller.delete_item);

//comprar//
router.post("/purchase", cart_controller.purchase);

//detalle de compra//
router.get("/purchaseDetail", cart_controller.purchase_detail );





module.exports = router