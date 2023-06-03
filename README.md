It contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser.
backend gets value of form with heading as name.

I cant store password as a plain text in my database because if my database is leaked than
so I hash it and its very difficult to know the password from hashed data

I have used bcrypt.js npm package for encryption
https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt
refer this for detail

Whenever a new user is added to the database, the model will be used to tell Mongoose what kind of data needs to be included.Next, we need to add a Mongoose pre middleware function to the model we just created. This middleware needs to salt and hash passwords before they are saved to the database.

Pre middleware functions are executed one after another, when each middleware calls next.


I have used premiddleware in this , this will be called before any user document is saved or changed.And has the overall purpose of hashing the password whenever a user document is saved to the database with a new password value.

In the code above, we use the next() method. This tells Mongoose to end the middleware and move on to the next step in the process.

I have made this project using express js

I could have use useState to send the data of form to backend this would have make the work easier than i don't have to create different 
link to send props . By using form action I am basically redirecting
to backend so from backend I have to redirect again to frontend
and also to show messages at the top so I used different link
to pass prop 
I tried using form action but it was giving difficulties in showing messages and also I have to basically merge front end and backend
to keep them apart i used usestate



Unexpected token '<', "<!DOCTYPE "... is not valid JSON
this error came. error is caused when your server returns HTML

alert is blocking code it first executes than allows next line
but toast is not ... so if we use redirect with it than 
it will get redirected and we will not be able to see message


I am using Java web token for login logout page.
as the user tries to login and send its email and password
if its find user matching with the required user than it returns jwt token
which is stored as cookies and the viewer can see the logged in required
page untill jwt is stored in cookies
It consists of three parts header , payload, verify signature



OAuth(or Open Authorization) is one of the approaches for authenticating a user in an application. It makes it much easier and faster for an end-user to choose a social login(Google, Outlook, or Twitter, etc) to signup on an application rather than the traditional (email/password) signup form.

I registered on microsoft azure.

passport-->It is an authentication middleware and can be easily configured with express. 
We will be setting up token-based redirection basis social login in our app.


The flow of my app is like 
-> first on click to signin , I will go to backend than beckend will initiate google 
auth procedure and than id is encrypted and stored as cookie 
-> than I transfer the connection to front-end
->now front-end will check for the cookie






Session --> series of request and response each associated woth the same user
HTTP is a stateless protocol meaning that each request to an applucation can be understood in isolation without any context from previous request.So need to 
remember user across different requests. Session stored in cookie creates
In effect, this creates a stateful protocol on top of HTTP.


app.use(passport.initialize())
app.use(passport.session())
they call serialize and deserialize after every request
An HTTP cookie contains encrypted data about the user and how the long sessions last
Serialization is when the user gets encrypted from the database and sends it back to the browser as a cookie.
Deserialization is to refresh the Express session’s record of the current user (from `req.user`) using the latest data from the database.



Application architecture
This is how our login flow will look like:
https://www.codingdeft.com/_next/image/?url=https%3A%2F%2Fcodingdeft-images.s3.amazonaws.com%2Fpublic%2Fimg%2Fposts%2Freact-authentication-mern-node-passport-express-mongo%2FDiagram_Login_Registration.png&w=2048&q=75
Login and Registration Architecture
This is how an authenticated request would look like:
https://www.codingdeft.com/_next/image/?url=https%3A%2F%2Fcodingdeft-images.s3.amazonaws.com%2Fpublic%2Fimg%2Fposts%2Freact-authentication-mern-node-passport-express-mongo%2FDiagram_Fetch_My_Details.png&w=2048&q=75
Authenticated Request


first question that came to my mind was jwt vs cookies


Usually JWT expiry time is kept low, to prevent attcks from outside 
becoz if once stolen csn use our information. We keep refresh Tokens in cookies
Refresh token is stored to database and we have to check against our database
Also, since refreshToken is stored in the database, we can invalidate a user session easily by deleting the refresh token or marking it is invalid in the database.

mongoose - ODM for mongoDB.(OBLECT DATA MODELLING)

difference between authorisation and authentication

SMTP->Simple Mail Transfer Protocol