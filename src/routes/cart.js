/* Sistema de Ruteo */

const path = require('path');
const express= require('express');
const router= express.Router(); /* Router permiete crear rutas montables y desmontables */
/* el metodo HTTP es llamado desde Router */
// validar formulario
const {body} = require("express-validator")
const validator_cart_form =[
    //select
    body("mayores").notEmpty().withMessage("Debes indicar cuantos mayores viajaran"), 
    body("menores").notEmpty().withMessage("Debes indicar cuantos menores viajaran"), 

    body("first_name").notEmpty().withMessage("Debes ingresar un nombre"), 
    body("last_name").notEmpty().withMessage("Debes ingresar un apellido"), 
    body("birth_date").notEmpty().isDate().withMessage("Debes ingresar una fecha de nacimiento"),
    body("age").notEmpty().withMessage("Debes ingresar la edad"),
    body("identity_document").notEmpty().isLength({min: 6 ,max:10}).withMessage("Debes ingresar un numero de documento"),
    body("home").notEmpty().withMessage("Debes ingresar un domicilio"),
    body("postal_code").notEmpty().withMessage("Debes ingresar un código postal"),
    body("province").notEmpty().withMessage("Debes indicar una Provincia de residencia"),
    body("email").isEmail().notEmpty().withMessage("Debes ingresar un email válido"),
    body("phone_number").notEmpty().isLength({min: 6 ,max:10}).withMessage("Debes ingresar un número de teléfono valido"),
  
    //radio
    body("payment_method").notEmpty().withMessage("Indica como quieres pagar"),
    body("payment_method").notEmpty().withMessage("Indica como quieres pagar"),
    body("card_number").notEmpty().isLength({min:16, max:16}).withMessage("Ingresa los 16 dígitos ubicados en el frente de la tarjeta"),
    body("name_card_holder").notEmpty().withMessage("Ingresa el nombre del titular de la tarjeta"),
    body("expiration").notEmpty().isLength({min:4, max:4}).withMessage("Ingresa la fecha de vencimiento de la tarjeta"),
    body("security_code").notEmpty().isLength({min:3, max:4}).withMessage("Ingresa el código de seguridad de la tarjeta"),

]

const cart_controller = require('../controllers/cart_controller.js');
const { default: isMobilePhone } = require('validator/lib/isMobilePhone');

/* rutas con controladores */


//mostrar Carrito//
router.get("/", cart_controller.show_cart);

//agregar un paquete desde el detalle
router.get("/add/:id", cart_controller.add_item);


//eliminar un paquete/
router.post("/delete/:id", cart_controller.delete_item);

//comprar//
router.get("/purchase", cart_controller.purchase);

//detalle de compra//
router.get("/purchaseDetail", cart_controller.purchase_detail );

//formulario de compra/
router.get("/cartForm", cart_controller.cart_form );
//procesar formulario compra
router.post("/cartForm",validator_cart_form, cart_controller.process_cart_form );

//formulario de compra/
router.get("/add/:id/cartForm", cart_controller.cart_form );



//detalle de compra//
router.get("/cartFinal", cart_controller.cart_final );




module.exports = router