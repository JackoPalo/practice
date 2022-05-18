 
var http = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar,peticion)
{
    function arrancarServidor(request,response){
        console.log("Se ha conectado un usario.");

        var ruta = url.parse(request.url).pathname;
        //enrutar(ruta,peticion,response);

        if (ruta == '/')
            ruta = 'inicio.html';

        var html = fs.readFileSync('www/'+ruta);

        var archivo_accesos = fs.createWriteStream('accesos.txt',{'flags':'a'})
        archivo_accesos.write(ruta + '\n')

        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(html);
        response.end();

    }

    http.createServer(arrancarServidor).listen(3000,'127.0.0.1');
    console.log('Servidor web iniciado en http://127.0.0.1:3000/');
}


exports.iniciar = iniciar;