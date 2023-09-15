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

const addData = (item=null, item_trans=null) => {
    const data = readData();
    if(item) data.items.push(item);
    if(item_trans) data.items_trans.push(item_trans);
    return writeData(data);
}

const updateData = (item=null, item_trans=null) => {
    const data = readData();
    if(item){
        data.items.forEach((item, index) => {
            if(item.id===item.id){
                item.createdAt = item.createdAt;
                data.items[index] = item;
            }
        });
    }

    if(item_trans){
        data.items_trans.forEach((item, index) => {
            if(item.id===item_trans.id) {
                item_trans.createdAt = item.createdAt;
                data.items_trans[index] = item_trans;
            }
        });
    }
    return writeData(data);
}

module.exports = { readData, writeData, addData, updateData };