const mongoose=require("mongoose");

const ProductSchema= new mongoose.Schema(
    {   
        head: {type: String, required: true, unique:true},
        title: {type: String, required: true, unique:true},
        desc: {type: String, required: true},
        img: {type: Array, required: true},
        categories: {type: String, required: true},
        attributes: {type:Object},
        rating: {type: Number, required: true},
        // size: {type: String},
        colour: {type: String},
        price: {type: Number, required: true},

    },
    {timestamps: true}
);

module.exports=mongoose.model("Product",ProductSchema); 