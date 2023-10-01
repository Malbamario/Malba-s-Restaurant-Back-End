const fs = require('fs')

const readData = () => {
    try{
        const data = fs.readFileSync('./data.json');
        return JSON.parse(data.toString());
    } catch(err){
        console.log(`Error on load the data!`);
    }
}

const writeData = (data) => {
    try{
        fs.writeFileSync('./data.json', JSON.stringify(data));
        return 'Data saved';
    } catch(err){
        console.log('Error on write the data!');
        return `${err}`;
    }
}

const addData = (item=undefined, item_trans=undefined) => {
    const data = readData();
    if(item) data.items.push(item);
    if(item_trans) data.items_trans.push(item_trans);
    return writeData(data);
}

const updateData = (newItem=undefined, item_trans=undefined) => {
    const data = readData();
    if(newItem){
        data.items.forEach((item, index) => {
            if(newItem.id===item.id){
                data.items[index] = newItem;
                data.items[index].createdAt = item.createdAt;
            }
        });
    }

    if(item_trans){
        data.items_trans.forEach((item, index) => {
            if(item.idItem===item_trans.idItem) {
                data.items_trans[index] = item_trans;
                data.items_trans[index].createdAt = item.createdAt;
            }
        });
    }
    return writeData(data);
}

module.exports = { readData, writeData, addData, updateData };