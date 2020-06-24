const express = require('express')
const app = express();
const hbs = require('hbs'); //miderworl es una capa intermedia entre dos interfaces 
require('./hbs/helpers');

const puerto = process.env.PORT || 3000; //el puerto

app.use(express.static(__dirname + '/public')); //para hacer una pagina estatica
//colocar las carpetas css se dirige a todas las paginas que tengo

hbs.registerPartials(__dirname + '/views/parciales'); //para los hbs
app.set('view engine', 'hbs'); //renderizar el hbs
app.get('/', (req, res) => {
    res.render('home', { //enviar un objetos con datos 
        nombre: "Oscar",
        pagina: 'Home'
    });
}); //se renderiza al archivo home

app.get('/about', (req, res) => {
    res.render('about', {
        pagina: 'About'
    }); //se renderiza al archivo home
});


app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
})

//para isntalar handelbars  npm install hbs --save
//para modificar cunado corro archivos hbs  nodemon.cmd .\server.js -e hbs,html,css