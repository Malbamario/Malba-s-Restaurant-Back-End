const hapi = require('@hapi/hapi');
const routes = require('./routes.js')

const init = async () => {
    const server = hapi.server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: 5000,
        "routes": {
            "cors": {
                "origin": ["*"],
                "headers": ["Accept", "Content-Type"],
                "additionalHeaders": ["X-Requested-With"]
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();