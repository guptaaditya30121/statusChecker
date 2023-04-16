const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser=require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

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
    const newUser = new shop({
        category : req.body.type,
        name : req.body.fname,
        username : req.body.username,
        password : req.body.password,
        phone : req.body.phone,
        status : true
    });
    newUser.save();
    res.json(newUser);
    //alert.show("succesfully registered")
   
    //res.sendFile(path.join(__dirname, '../public', 'index.html'));
})
// app.post("/login",(request,response) => {

// })
app.put('/shops/change/:id' , async(req,res)=>{
    const sho = await shop.findById(req.params.id);
    const passwordEnteredByUser = req.body.password;
    const hash = sho.password;
    bcrypt.compare(passwordEnteredByUser, hash, function(error, isMatch) {
        if (error) {
          console.log(error);
        } else if (isMatch) {
            sho.status = !sho.status;
            sho.save();
            res.status(200).end();
        } else {
          res.status(404).end();
        }
      })
    

})

app.delete('/shops/delete/:id', (req,res)=>{
    shop.findByIdAndDelete(req.params.id,()=>{
        res.json();
    })
    
})

// app.post("/register" , (req,res)=>{

// });

app.listen(3002,()=>{
    console.log('server is listening');
})
