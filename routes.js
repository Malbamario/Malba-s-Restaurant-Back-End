const { addItemHandler, getItemHandler, updateItemHandler, deleteItemHandler,
    addItemTransHandler, getAllItemTransHandler, updateItemTransHandler, deleteItemTransHandler } = require('./handler.js');

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
    },
    {
        method: 'POST',
        path: '/items_trans',
        handler: addItemTransHandler,
    },
    {
        method: 'GET',
        path: '/items_trans',
        handler: getAllItemTransHandler,
    },
    {
        method: 'PUT',
        path: '/items_trans',
        handler: updateItemTransHandler,
    },
    {
        method: 'DELETE',
        path: '/items_trans/{id}',
        handler: deleteItemTransHandler,
    }
];

module.exports = routes;