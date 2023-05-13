import mongoose from "mongoose"
import validator from "validator"


mongoose.connect("mongodb://localhost:27017/productDB"
).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log("No connection");
});


const productSchema = new mongoose.Schema({
  
    name : {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price : {
        type: Number,
        required: true
    }
})


const Product = new mongoose.model("Product", productSchema)

export default Product;
