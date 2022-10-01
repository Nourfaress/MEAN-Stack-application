# MEAN-Stack-application
Authenticate application

# Run project 
npm start

# install node Modules 
npm install

# in current time im still working on this project
# Node Authentication API
API for registering users with mongodb and authentication using a JWT (json web token).
This app uses passport and passport-jwt and uses a JWT strategy ..


# first commit info
setup backend Express server along with a bunch of dependencies including Mongoos, 
BCryptjs, Passport & more. and create users routes such as /register and /authenticate.

create Mongoose user model and schema with the user fields.
also complete the /register post route to sign up a new user and encrypt passwords with Bcrypt

# Endpoints
POST /users/register
POST /users/authenticate   // Gives back a token
GET /users/profile         // Needs json web token to authorize
