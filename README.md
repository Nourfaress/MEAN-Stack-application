# MEAN-Stack-application
```bash
Authenticate application
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


# Run project Back-end
```bash
npm start
```
Navigate to `http://localhost:3000/`.

# install Node Modules 
```bash
npm install
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Node Authentication API
API for registering users with mongodb and authentication using a JWT (json web token).
This app uses passport and passport-jwt and uses a JWT strategy ..


# First commit info
setup backend Express server along with a bunch of dependencies including Mongoos, 
BCryptjs, Passport & more. and create users routes such as /register and /authenticate.

# Second commit info
implement Passport.js and JWT (Json Web Tokens) for authentication.
Users will be able to register with the API and get a token to be able to submit to protected routes

# Endpoints
## Running unit tests

```bash
POST /users/register
```

```bash
POST /users/authenticate   // Gives back a token
```

```bash
GET /users/profile         // Needs json web token to authorize
```
