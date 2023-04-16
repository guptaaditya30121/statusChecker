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

