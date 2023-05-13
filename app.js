import express from "express"
import "./db/connection.js"
import  productRouter  from "./routers/products.js"
import cors from "cors"
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(productRouter)

app.listen(port, () =>{
    console.log(`apps running on the port ${port}`)
})