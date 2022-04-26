const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public');

/* rutas */
const rutasMain = require('./routes/main.js')
const rutasProducts = require('./routes/products.js')

app.set('view engine', 'ejs');
/* seteo donde esta el directorio "views" */
app.set('views', __dirname + '/views');

app.use(express.static(publicPath));

/* puntos de entrada */
app.use('/', rutasMain);
app.use('/index', rutasMain);
app.use('/packages', rutasProducts);
app.use('/deals', rutasProducts);
app.use('/productDetail', rutasProducts);

/* se monta el servidor */
app.listen(process.env.PORT || 5020, () => {
    console.log('Servidor corriendo en el puerto 5020');
});