const app = require('pillars');
const mongoose = require('mongoose');

// Load .env config.
console.info('Cargando archivos de configuración');
require('dotenv').config();

// Add routes to the pillars project.
console.info('Añadiendo rutas.');
require('./src/routes');

// Configure pillars project and connect to mongoDB
app.config.debug = process.env.DEBUG_MODE;
// app.config.favicon = "favico.ico";

console.info(`Conectan con la base de datos MongoDB en ${ process.env.MONGODB_URI }`);
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }, err => {
	if (err) {
		throw new Error(`Error conectandose a la base de datos: ${err}`);
	}

	console.info('Conexión a base de datos realizada con exito. Iniciando servidor...');

	app.services.get('http').configure({
		host: process.env.HOST,
		port: process.env.PORT
	}).start();

	console.info(`Servidor corriendo en: http://${ process.env.HOST }:${ process.env.PORT }`);
});

