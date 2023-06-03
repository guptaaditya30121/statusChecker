const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;

const allSchema = new Schema({
    category:{
        type: Number,
        
    },
    name:{
        type: String,
       
    },
    phone:{
        type: String,
        
    },
    status:{
        type: Boolean,
        
    },
    username:{
        type: String,
        unique: [true , "USername already Exists"],
    },
    email:{
        type: String,
        unique: [true , "You have already registered"]
    },
    //password: the salted and hashed representation of the user's password.
    password:{
        type: String,
        
    }

})

allSchema.pre("save",function(next){
    const user = this
    
    if(this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function(saltError ,salt){
            if(saltError)
            {
                
                return next(saltError)
            }
            else
            {
                bcrypt.hash(user.password,salt,function(hashError , hash){
                    if(hashError)
                    {
                        
                        return next(hashError)
                    }

                    user.password = hash
                    next()
                })
            }
        })
    }else{
        return next()
    }
})

const shop = mongoose.model("shop",allSchema);
module.exports = shop;