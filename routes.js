const {addItemHandler, getItemHandler, updateItemHandler, deleteItemHandler} = require('./handler.js');

const routes = [
    {
        method: 'POST',
        path: '/items',
        handler: addItemHandler,
    },
    {
        method: 'GET',
        path: '/items',
        handler: getItemHandler,
    },
    {
        method: 'PUT',
        path: '/items',
        handler: updateItemHandler,
    },
    {
        method: 'DELETE',
        path: '/items/{id}',
        handler: deleteItemHandler,
    }
];

module.exports = routes;