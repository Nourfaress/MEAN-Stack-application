# MEAN-Stack-application
```bash
Authenticate application
```

# Run project 
```bash
npm start
```
# install Node Modules 
```bash
npm install
```

# in current time im still working on this project
# Node Authentication API
API for registering users with mongodb and authentication using a JWT (json web token).
This app uses passport and passport-jwt and uses a JWT strategy ..


# First commit info
setup backend Express server along with a bunch of dependencies including Mongoos, 
BCryptjs, Passport & more. and create users routes such as /register and /authenticate.

create Mongoose user model and schema with the user fields.
also complete the /register post route to sign up a new user and encrypt passwords with Bcrypt..

# Second commit info
implement Passport.js and JWT (Json Web Tokens) for authentication.
Users will be able to register with the API and get a token to be able to submit to protected routes


# Endpoints

```bash
POST /users/register
```

```bash
POST /users/authenticate   // Gives back a token
```

```bash
GET /users/profile         // Needs json web token to authorize
```
