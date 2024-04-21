const mongoose=require("mongoose");

const CartSchema= new mongoose.Schema(
    {
        userId: {type: String, required: true},
        products: [
            {   _id: false,//when using addToSet even if productId is same it adds another array Object cuz each object generates with different Id
                // So turning id propety off the objects do not duplicate as long as their contents are same 
                productId:{type:String,required: true},
                quantity:{type:Number,default:1}
            }
        ]
    },
    {timestamps: true}
);

module.exports=mongoose.model("Cart",CartSchema); 