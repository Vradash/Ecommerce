const router= require("express").Router();
const Product= require("../models/product");

//CREATE
router.post("/",async (req,res)=>{
    const newProduct= new Product(req.body);

    try{
        const savedProduct=await newProduct.save();
        res.status(201).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
    // req.statusCode(200).json({"nothing": nothing2})
});

//GET PRODUCT
router.get("/find/:id",async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
});


//GET ALL PRODUCTS
router.get("/",async (req,res)=>{
    // const qNew=req.query.new;
    const qCategory=req.query.category;
    const qCompany=req.query.company;
    try{
        let products;
        // if(qNew){
        //     products=await Product.find().sort({createdAt: -1}).limit(5);
        // }
        // else 
        if(qCategory){
            products=await Product.find({
                categories: qCategory,
                company: qCompany
                // {
                //     $in: [qCategory]
                // }
            });
        }else{
            products=await Product.find();
        }
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;