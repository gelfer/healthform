# healthform

This is a simple application to demonstrate the use of MERN (MongoDB, Express.js, React.js, and Node.js). This application allows an admin to sign up and sign in. The admin can create, update, and delete a health form for a patient. A list of all the health forms is displayed in a visually-friendly format for the admin to view. On the list page, the number of forms submitted and a search box are included. The admin can search for a form by some attributes such as name and form id.

Two database collections are needed for this application: User and Form. 
The User collection stores the credential information of an admin while the Form collection stores a patient's information such as name and address.


# Restful API Routes

Routes are set up.

api/register is a public POST route. It is an entry point for a user to sign up. Three fields are required: username, email, and password, which are then verified by express-validator for completion. Upon receiving the credential information from the user, the route will check the email against all the emails already stored in the database and throw an error if found. If the email is not found, bcrypt will hash the password and save the user's information in the database. The user's id is then extracted from the database and stored in a newly created variable called payload to be used later in othr parts of the application. Finally, jwtwebtoken will generate a token and forward it in a json format along with the payload. All users need this token to be authorized in other routes.

api/auth is a public POST route for login. An email and the matching password are required to log in. The route will check if the email exists in the database. If not, an error is thrown. If the email exists, bcrypt.compare() will check if the password that the user provided matches the one stored in the database. If all are verified, a payload variable containing the user's id will be created and forwarded to jwtwebtoken, which is responsible for signing a token.

api/forms is a private POST route for an authorized user to create a form. Before being able to access this route, the user must go through a middleware called auth.js, which I created in a folder called middleware. This middleware is like a gateway that checks if a token exists in the header. If there is a token, jwtwebtoken will verify it and decode it. The information in the token including the payload is then stored in req.user. Finally next() is called so that the route can proceed further. If the user fails the verification process in the middleware, the user needs to sign up or sign in first to acquire a token. Back to the POST route, at least 4 fields are required to create a form. If all the fields are filled and the user is authenticated, the information will be saved in the Form collection in the database and sent out to the user in the json format.
