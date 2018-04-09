/*global Route */
const routes = require('pillars').routes;
const paths = require('path');

// Static Files and main route
const mainRoute = new Route({
	id: 'main',
	path: '/',
	method: 'GET',
	session: true
}, gw => {
	gw.file('./src/public/index.html');
});

var pillarsDocsStatic = new Route({
	id: 'pillarsDocsStatic',
	path: '/*:path',
	directory: {
		path: paths.resolve(__dirname, '../public'),
		listing: true
	}
});

mainRoute.routes.add(pillarsDocsStatic);

// Add routes to the server
console.info('Añadiendo rutas al servidor.');
routes.add(mainRoute);
