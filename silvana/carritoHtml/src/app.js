const express = require('express');
const path = require('path');

const app = express();



app.use(express.static("./src/public/img")); 
app.use(express.static("./src/public/css"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
});
app.get('/paymentForm', (req, res) => {
    res.sendFile(path.join(__dirname, './views/paymentForm.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.listen(5020, () => {
    console.log('Servidor corriendo en el puerto 5020');
});
