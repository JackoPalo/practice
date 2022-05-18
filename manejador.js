function inicio (response){
    console.log('solicitud para inicio');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>ContenidoPagina1</h1>');
}

function pagina1 (response){
    console.log('solicitud para pagina 1');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>ContenidoPagina1</h1>');
}

function salida (response){
    console.log('solicitud para salida');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>Contenido de salida</h1>');
}

function favicon (response){
    console.log('solicitud para favicon');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>Favicon</h1>');
}

exports.pagina1 = pagina1;
exports.salida = salida;
exports.favicon = favicon;
exports.inicio = inicio;






