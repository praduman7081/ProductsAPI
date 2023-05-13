import express from "express"
import Product from "../db/connection.js"
import { Router } from 'express'
const router = Router()

router.get("/", (req,res) => {
  res.send("Hello from the Home page")
})

router.post("./products", (req,res) => {
  const newProduct = new Product(req.body)
  
   newProduct.save()
   .then((createProduct) => {
    // console.log(createProduct)
    res.status(201).send(createProduct);
  })
  .catch((error) => {
    res.status(400).send(error);
  });
})


// Retrieve all products
router.get('/products', (req, res) => {
    
    Product.find()
      .then((products) => {
        console.log(products)
        res.send(products);
      })
      .catch((error) => {
        res.status(500).send({ error: 'Database error' });
      });
  });

  // Retrieve a single product by ID
  router.get("./products/:id", (req,res) => {
    const productId = req.params.id;
    Product.findById(productId)
      .then((product) => {
        if (!product) {
          return res.status(404).send({ error: 'Product not found' });
        }
        res.send(product);
      })
      .catch((error) => {
        res.status(500).send({ error: 'Database error' });
      });
  })

  // Update the price of a product by ID
  router.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const newPrice = req.body.price;
  
    Product.findByIdAndUpdate(productId, { price: newPrice })
      .then((product) => {
        if (!product) {
          return res.status(404).send({ error: 'Product not found' });
        }
        res.send(product);
      })
      .catch((error) => {
        res.status(500).send({ error: 'Database error' });
      });
  });

export default router;