# nyt-react

News site based on react and the New York Times API.

## Dependencies

A mongoDB database is required to save articles.

This app uses the following node packages:

Server
- concurrently, nodemon and express for the server
- axios and body-parser for routing GET and POST requests
- mongoose as the MongoDB ORM

Client
- react
- react-router-dom to handle routing

## Starting the app locally

Copy the files to a local directory.

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
```

After both installations complete, run the following command in your terminal:

```
yarn start
```
