const controller = {
    show_cart :  (req, res) => {
        res.render("../views/productCart");
            },
    add_item :   (req, res) => {
        res.send("Agregar un paquete");         
            },

    delete_item : (req, res) => {
        res.send("Eliminar paquete");             
            },
    
    purchase : (req, res) => {
        res.send("Comprar");
            },

    purchase_detail: (req, res) => {
        res.send("Ver detalle de Compra");
            },
            
    cart_form :  (req, res) => {
                res.render("../views/cartForm");
                    },
    cart_final :  (req, res) => {
                    res.render("../views/cartFinal");
                            },
};
module.exports= controller;