const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public');

/* rutas */
const rutasMain = require('./routes/main.js');
const rutasPackages = require('./routes/packages.js');
const rutasDeals = require('./routes/deals.js');
const rutasProducts = require('./routes/products.js');
const rutasCart = require('./routes/cart.js');
const rutasAdmin = require('./routes/admin.js');

app.set('view engine', 'ejs');
/* seteo donde esta el directorio "views" */
app.set('views', __dirname + '/views');

app.use(express.static(publicPath));
/* configuracion para poder capturar la informacion de los formularios */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* puntos de entrada */
app.use('/', rutasMain);
app.use('/index', rutasMain);
app.use('/packages', rutasPackages);
app.use('/deals', rutasDeals);
app.use('/productDetail', rutasProducts);
app.use('/cart', rutasCart);
app.use('/admin', rutasAdmin);

/* se monta el servidor */
app.listen(process.env.PORT || 5020, () => {
    console.log('Servidor corriendo en el puerto 5020');
});