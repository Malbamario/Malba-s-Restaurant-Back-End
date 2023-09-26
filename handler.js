const { nanoid } = require('nanoid');
const { readData, addData, updateData, writeData } = require('./data.js');

const addItemHandler = (request, h) => {
    const { name, imgUrl, unit, keterangan } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const item = {
        id, name, imgUrl, unit, keterangan, createdAt, updatedAt
    };

    addData(item);
    const response = h.response({
        status: 'success',
        message: 'Item berhasil ditambahkan',
        data: {
          itemId: id,
        },
      }).code(201);
    return response;
}

const getItemHandler = (request, h) => {
    const data = readData();
    data.items.forEach((item, index) => {
        let amount = 0;
        data.items_trans.forEach(element => {
            amount+=parseInt(element.amount);
        });
        item.amount = amount;
        data.items[index] = item;
    });
    const response = h.response({
        status: 'success',
        message: 'Item berhasil didapatkan',
        data: data.items
    });
    response.type('application/json')
    return response;
}

const updateItemHandler = (request, h) => {
    const { id, name, imgUrl, keterangan } = request.payload;
    const updatedAt = new Date().toISOString();

    const item = {
        id, name, imgUrl, keterangan, updatedAt
    };

    updateData(item);
    const response = h.response({
        status: 'success',
        message: 'Item berhasil diupdate',
      }).code(201);
    return response;
}

const deleteItemHandler = (request, h) => {
    const {id} = request.params;
    const data = readData();
    data.items = data.items.filter(el => el.id!==id);
    data.items_trans = data.items_trans.filter(el => el.idItem!==id);
    writeData(data);
    const response = h.response({
        status: 'success',
        message: 'Item berhasil dihapus',
      }).code(201);
    return response;
}

const addItemTransHandler = (request, h) => {
    const { idItem, amount, keterangan } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const itemTrans = {
        id, idItem, amount, keterangan, createdAt, updatedAt
    };

    addData(undefined, itemTrans);
    const response = h.response({
        status: 'success',
        message: 'Transaksi Item berhasil ditambah',
        data: { idItemTrans: id }
      }).code(201);
    return response;
}

const getAllItemTransHandler = (request, h) => {
    const response = h.response({
        status: 'success',
        message: 'Seluruh Transaksi Item berhasil didapatkan',
        data: readData().items_trans
    });
    response.type('application/json')
    return response;
}

const getItemTransByItemHandler = (request, h) => {
    const {itemId} = request.params;
    const response = h.response({
        status: 'success',
        message: 'Transaksi Item berhasil didapatkan',
        data: readData().items_trans.filter(el => el.itemId === itemId)
    });
    response.type('application/json')
    return response;
}

const updateItemTransHandler = (request, h) => {
    const { id, idItem, amount, keterangan } = request.payload;
    const updatedAt = new Date().toISOString();

    const itemTrans = {
        id, idItem, amount, keterangan, updatedAt
    };

    updateData(undefined, itemTrans);
    const response = h.response({
        status: 'success',
        message: 'Transaksi Item berhasil diupdate',
      }).code(201);
    return response;
}

const deleteItemTransHandler = (request, h) => {
    const {id} = request.params;
    const data = readData();
    data.items_trans = data.items_trans.filter(el => el.id!==id);

    writeData(data);
    const response = h.response({
        status: 'success',
        message: 'Transaksi Item berhasil dihapus',
      }).code(201);
    return response;
}



module.exports = { addItemHandler, getItemHandler, updateItemHandler, deleteItemHandler,
    addItemTransHandler, getAllItemTransHandler, updateItemTransHandler, deleteItemTransHandler }