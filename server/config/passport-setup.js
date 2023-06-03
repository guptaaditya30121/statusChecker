const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');
//we will use mongodb id record

passport.serializeUser((user,done)=>{
    done(null,user.id)
});
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
    
});

passport.use(
// console.log("hello");
    new GoogleStrategy({
    //options for google strategy
    callbackURL: 'http://localhost:3002/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
},(accessToken , refreshToken , profile, done)=>{
    //passport callback funtion
    console.log("hello");

    User.findOne({googleId: profile.id}).then((currentUser)=>{
        if(currentUser){
            //already have the user
            console.log(currentUser);
            done(null,currentUser);
        }
        else{
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser)=>{
                console.log(newUser);
                done(null,newUser);
            })
        }
    })
     //Before creating a new user I want to check if it exists in our
    
})
)