const hapi = require('@hapi/hapi');
const routes = require('./routes.js')

const init = async () => {
    const server = hapi.server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: 5000,
    });

    server.route(routes);
    server.connection({ routes: { cors: true } }) 

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();