const hapi = require('@hapi/hapi');
const routes = require('./routes.js')

const init = async () => {
    const server = hapi.server({
        host: 'localhost',
        port: 5000,
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();