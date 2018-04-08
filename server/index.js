const app = require('pillars');
const mosca = require('mosca');

// Load .env config.
console.info('Cargando archivos de configuración');
require('dotenv').config();

// Add routes to the pillars project.
console.info('Añadiendo rutas.');
require('./src/routes');

const formula_rt = {
	type: 'mongo',
	url: process.env.MONGODB_URI,
	pubsubCollection: 'formula_rt',
	mongo: {}
};

const settings = {
	port: parseInt(process.env.MQTT_PORT),
	host: process.env.HOST,
	backend: formula_rt
};

const server = new mosca.Server(settings);

server.on('clientConnected', client => {
	console.log('client connected', client.id);
	console.log("-------- FUCKING CONNECTED!!! ---")
});

// fired when a message is received
server.on('published', (packet, client) => {
	console.log('Published', packet.payload);
	console.log("-------- FUCKING MSG!!! ---")
});

// fired when the mqtt server is ready
server.on('ready', () => {
	// Configure pillars project and connect to mongoDB
	app.config.debug = process.env.DEBUG_MODE;
	// app.config.favicon = "favico.ico";

	app.services.get('http').configure({
		host: process.env.HOST,
		port: parseInt(process.env.WEB_PORT)
	}).start();

	console.info(`Servidor corriendo en: http://${ process.env.HOST }:${ process.env.WEB_PORT }`);
});