const http = require('http'); //extraendo la libreria a mi proyecto

http.createServer((req, res) => {
    // res.write("hola mundo desde la web"); //ricuest
    //para leer un jason
    res.writeHead(200, { 'Content-Type': 'application/json' }); //para hacer la cabezera  

    let content = {
            nombre: "Oscar",
            edad: 24,
            url: req.url
        }
        //envia un json al cliente
    res.write(JSON.stringify(content))
    res.end(); //finaliza respons

}).listen(8000); //puerto

console.log("escuchando el puerto 8000");