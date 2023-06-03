const router = require('express').Router();
const passport = require('passport');
const CLIENT_HOME_PAGE_URL = "http://localhost:3000";


//auth login
// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
    if (req.user) {
      res.json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
        cookies: req.cookies
      });
    }
    res.json({
        success: false,
        message: "user not authenticated",
    })
  });
  
  // when login failed, send failed msg
  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate."
    });
  });
  
  // When logout, redirect to client
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL);
  });

//auth with google
// router.get('/google',(req,res)=>{
//     //handle with passport
//     res.send('logging in with google');
// });
router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));   

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
     res.redirect('http://localhost:3000/Home')
    //  res.send(req.user)
})
// router.get('/google/redirect',(req,res)=>{
//     res.send('logging out')
// })
//logout


module.exports = router;