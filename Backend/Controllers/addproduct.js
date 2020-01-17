const product = require("../Models/product");

var addProduct =  (req , res ,next)=>{
   const title = req.body.title;

   const description = req.body.description;

   
   product.create(
      {title :title,
      description :description}

   ).then(res =>{

      console.log("product added successfully")
   }).catch(err =>{
      console.log("err occured during inserting ")
   });
    console.log("hello");
    res.send("product has been added to database ");
 }


 module.exports  ={
    addProduct : addProduct
 }