const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser=require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const passport = require('passport');
const nodemailer = require('nodemailer');
const validator = require('validator');
//middleware
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    })
  );
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: ['sdfhknmbjjd'] //store it in private folder to make more secure
}))

//initialize passport
app.use(passport.initialize());
app.use(passport.session()); 
//passport.session() acts as a middleware to alter the req object 
//and change the encrypted user value that is currently the session sig
// (from the client cookie) into a user object.
app.use(bodyParser.urlencoded({extended:true}));
app.use('/auth',authRoutes);

const url = "mongodb+srv://aditya:19172621@cluster0.wywcrgi.mongodb.net/statuschecker?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(()=>console.log("connected to db"))
    .catch(()=>console.log("error while connecting"))

const shop = require('./models/all');


//api to login and create a token and send it
// app.post("/login2",async(req,res)=>{
//     const usernameen = req.body.username;
//     const passworden = req.body.password;
//     const sho = await shop.findOne({username : usernameen});
//     if(!sho)
//     {
//         res.send({message : "user does not exist"});
//     }
//     else
//     {
//         //res.send(sho);
//         const hash = sho.password;
//         bcrypt.compare(passworden,hash,function(error,isMatch){
//             if(error){
//                 console.log(error);
//             } else if(isMatch){
//                 const id = sho._id;
//                 const token = jwt.sign({id} , "jwtSecret",{
//                     expiresIn: 300,
//                 }) //we don't write this bcoz of security reason but for now it;s ok
//                 req.session.user = sho;
//                 res.json({auth: true , token: token , result : sho});
//             }
//             else {
//                 res.send({message : "Your password does not match"});
//             }
//         })
//     }
//     //findone return the first matching documen
//     // console.log(sho);
    
// })
//api to check whether user is authenticated or not
//verifyJWT is applied for every api req. which needs user to be authenticated
//it is  a middleware
// const verifyJWT = (req,res,next) =>{
//     const token = req.headers["x-access-token"]

//     if(!token){
//         res.send("Yo, we need a token")
//     } else
//     {
//         jwt.verify(token , "jwtSecret" ,(err,decoded)=>{
//             if(err){
//                 res.json({auth: false, message: "U failed to authenticate"});
//             }else {
//                 req.userId = decoded.id; //this id is saved in 
//                 next();
//             }
//         })
//     }
// }
// app.get('/isUserAuth' , verifyJWT , (req,res)=>{
//     res.send("Yo , u r auth");
// } )


const authCheck = (req,res,next)=>{
    if(!req.user){
        res.status(200).json({
            authenticated:false,
            message: "user has not been authenticated"
        })
    }else
    {
        next();
    }
}

app.get("/",authCheck,(req,res)=>{
    console.log("helll");
    console.log(req.user);
    res.status(200).json({
        authenticated:true,
        message: "user successfully authenticated",
        user: req.user,
        cookies: req.cookies
    });
});




app.get('/shops',(req,res)=>{
   shop.find().then((result)=>{
    res.json(result);
   })
})

const JWT_SECRET = "secret";
app.post('/shops/send-mail',(req,res)=>{
    email = req.body.email;
    if(validator.isEmail(email))
    {
        category = req.body.type;
        namme = req.body.fname;
        username = req.body.username;
        password = req.body.password;
        
        phone = req.body.phone;
        stattus = true;
        const payload = {
            email: email,
            username: username,
            category: category,
            password: password,
            phone: phone,
            status: stattus,
            name: namme
        }
        const token = jwt.sign(payload,JWT_SECRET,{expiresIn: '50s'})
        const link = 'http://localhost:3002/shops/new/'+token;
        console.log(link);
        try{
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:"guptaaditya30121@gmail.com",
                pass:"bdtkobikajvmnuhm"
            }
        });
        const mailOptions = {
            from: "guptaaditya30121@gmail.com",
            to:email,
            subject:'For Reset Password',
            html:'<p> Hii ' +namme+', We have recieved a register request from your side \n with username :'+username+' and phone number'+phone+'If its you<a href='+link+'>click </a>to finally register your self'

        }
        transporter.sendMail(mailOptions,function(error,info){
            if(error)
            {console.log(error);}
            else
            {
                res.status(200).send({success:true})
                console.log("Mail has been sent-",info.response);
            }

        })}
        catch(error){
            res.status(400).send({success:false,msg:"nahi gaya"});
        }
    }
    else
    {
        res.status(404).send({success: false , msg: "Not a valid Email"})
    }
})

app.get('/shops/new/:token' , (req,res)=>{
    
    console.log(req.params.token);
    try{
        const payload = jwt.verify(req.params.token,JWT_SECRET);
        const newUser = new shop({
            category : payload.category,
            name : payload.name,
            username : payload.username,
            password : payload.password,
            email : payload.email,
            phone : payload.phone,
            status : true
        });
        newUser.save();
        res.json(newUser);
    }catch(error){
        console.log(error.message);
        res.send("something went wrong");
    }
    
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
