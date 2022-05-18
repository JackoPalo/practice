var Servidor = require('./servidor');
var enrutador = require('./enrutador');
var manejador = require('./manejador');
var peticion  = {};

peticion['/inicio'] = manejador.inicio;
peticion['/pagina1'] = manejador.pagina1;
peticion['/salida'] = manejador.salida;
peticion['/favicon'] = manejador.favicon;

Servidor.iniciar(enrutador.enrutar, peticion)
