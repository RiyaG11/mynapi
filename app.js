let express = require('express');
let app = express();
let port = process.env.PORT||9001;
let Mongo = require('mongodb')
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbConnect,getData,postData,updateOrder,deleteOrder} = require('./controller/dbController');

//middleware->supporting library
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hii From express')
})

app.get('/category', async (req,res)=>{
    let query = {};
    let collection = "category"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/item', async (req,res)=>{
    let query = {};
    let collection = "item";
    let output = await getData(collection,query);
    res.send(output)
})
app.get('/product', async(req,res)=>{
    let query = {}
    if(req.query.categoryId && req.query.itemId && req.query.subitemId){
        query={category_id: Number(req.query.categoryId), item_id: Number(req.query.itemId), subitem_id: Number(req.query.subitemId)}
    }
    else if(req.query.categoryId && req.query.itemId){
        query={category_id: Number(req.query.categoryId), item_id: Number(req.query.itemId)}
    }
    else if(req.query.categoryId){
        query={category_id: Number(req.query.categoryId)}
    }
    else if(req.query.itemId){
        query={item_id: Number(req.query.itemId)}
    } 
    else if(req.query.subitemId){
        query={subitem_id: Number(req.query.subitemId)}
    }
    else{
        query={}
    }
    let collection = "product";
    let output = await getData(collection,query);
    res.send(output)
})


app.get('/filter/:subitemId', async(req,res)=>{
    let subitemId = Number(req.params.subitemId);
    let Brand = req.query.Brand
    let lPrice = Number(req.query.lPrice)
    let hPrice = Number(req.query.hPrice)
    if(Brand){
        query = {
            subitem_id: subitemId,
            Brand: Brand
        }
    }
    else if(lPrice && hPrice){
        query={
            subitem_id: subitemId,
            $and:[{Price:{$gt:lPrice,$lt:hPrice}}]
        }
    }
    else{
        query= {}
    }
    let collection = "product";
    let output = await getData(collection,query);
    res.send(output)
})


app.get('/details/:id',async(req,res)=>{
    let id = new Mongo.ObjectId(req.params.id)
    let query = {_id:id}
    let collection = "product";
    let output = await getData(collection,query);
    res.send(output)
})

 //   let id = Number(req.param.id);
   // let query = {product_id:id}

   app.get('/orders',async(req,res)=>{
    let query = {};
    if(req.query.email){
        query = {email:req.query.email}
    }else{
        query = {}
    }
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output)
})

app.post('/placeOrder',async(req,res)=>{
    let data = req.body;
    let collection = "orders";
    console.log(">>>",data)
    let response = await postData(collection,data)
    res.send(response)
})


//{"id":[11,12,13]}
app.post('/productDetails',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {product_id:{$in:req.body.id}};
        let collection = 'product';
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send('Please pass data in form of array')
    }
})


app.put('/updateOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let output = await updateOrder(collection,condition,data)
    res.send(output)
})

app.delete('/deleteOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let output = await deleteOrder(collection,condition)
    res.send(output)
})


//const { Collection } = require('mongodb');


app.listen(port,(err)=>{
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})              