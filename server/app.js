const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const url = "mongodb+srv://aditya:19172621@cluster0.wywcrgi.mongodb.net/statuschecker?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(()=>console.log("connected to db"))
    .catch(()=>console.log("error while connecting"))

const shop = require('./models/all');

app.get('/shops',(req,res)=>{
   shop.find().then((result)=>{
    res.json(result);
   })
})

app.post('/shops/new' , (req,res)=>{
    const sho = new shop({
        category : req.body.category,
        hostel : req.body.hostel,
        phone : req.body.phone,
        status : req.body.status
    });
    sho.save();
    res.json(sho);
})

app.put('/shops/change/:id' , async(req,res)=>{
    const sho = await shop.findById(req.params.id);
    sho.status = !sho.status;
    sho.save();

    res.json(sho);
})

app.delete('/shops/delete/:id', (req,res)=>{
    shop.findByIdAndDelete(req.params.id,()=>{
        res.json();
    })
    
})

app.listen(3001,()=>{
    console.log('server is listening');
})