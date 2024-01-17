import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express()
app.use(express.json())
app.use(cors())




const { Schema } = mongoose;

const productSchema = new Schema({
  image:{type:String,require:true},
  title:{type:String,require:true},
  rating:{type:Number,require:true},
  info:{type:String,require:true},
  price:{type:Number,require:true},
});
const Products = mongoose.model('Products', productSchema);

app.get('/product',async (req,res)=>{
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error})
    }   
})

app.get('/product/:id',async (req,res)=>{
    try {
        const product = await Products.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error})
    }   
})

app.delete('/product/:id',async (req,res)=>{
    try {
        const product = await Products.findByIdAndDelete(req.params.id)
        res.status(200).json('deleted')
    } catch (error) {
        res.status(500).json({message:error})
    }   
})


app.put('/product/:id',async (req,res)=>{
    try {
        const product = await Products.findByIdAndDelete(req.params.id,req.body)
        res.status(200).json('updated')
    } catch (error) {
        res.status(500).json({message:error})
    }   
})

app.post('/product',async (req,res)=>{
    try {
        const newProduct = new Products({...req.body})
        await newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message:error})
    }   
})

const port = 8000
const url = 'mongodb+srv://tu833kmn0:mehriban098@cluster0.xewqdvo.mongodb.net/'

mongoose.connect(url).then(console.log('db connected'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})