This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

React project 3

## Setup The API Server

This project uses [json-server](https://github.com/typicode/json-server) to provide a local REST service that uses a `.json` file as its data source. For more information on how to use json-server, there is an egghead video available: [Egghead.io free video tutorial - Creating demo APIs with json-server](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)



### Install json-server

You can install it globally with `npm i -g json-server`. This is a one-time setup.



### Running json-server

Be sure to `cd` into the project's root directory. From there, run:  

* `json-server -p 8080 db.json`
  * This will run the server on port `8080` and use `db.json` as the data source

## Running the Project

In a separate terminal session from the API server, you can start the React application with the included npm script

* `npm start`

This will run the `webpack-dev-server` that is configured through `create-react-app`

## Running the tests

In a separate terminal session, you can start the unit tests with the included npm script

* `npm test`