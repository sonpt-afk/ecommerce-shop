const Shoe = require("../models/Shoe")

// create new item
const addShoeService = async(name,image,countInStock) => {
    try{
        const shoe = await Shoe.findOne({name})
        if(shoe){
            console.log('tên giày đã có sẵn, chọn tên khác');
            return null;
        }
        let result = await Shoe.create({
            name: name,
            image: image,
            countInStock:countInStock
        })
        return result;
    }catch(err){
        console.log(err);
        return null;
    }
}

module.exports = {
    addShoeService
}