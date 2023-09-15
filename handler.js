const { nanoid } = require('nanoid');
const { readData, addData, updateData, writeData } = require('./data.js');

const addItemHandler = (request, h) => {
    const { name, imgUrl, keterangan } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const item = {
        id, name, imgUrl, keterangan, createdAt, updatedAt
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
    const response = h.response(readData().items);
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

    writeData(data);
    const response = h.response({
        status: 'success',
        message: 'Item berhasil dihapus',
      }).code(201);
    return response;
}

module.exports = { addItemHandler, getItemHandler, updateItemHandler, deleteItemHandler }