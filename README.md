# Nostalga Video 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project requires node 18.17 

## Available Scripts

In the frontend/react-fe, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Setting up the backend

The backend of this project is built with express.js

to install postgres on a windows system follow the instructions here:
https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/

In the root folder of the project there is a file. `movieEdport.sql` which can be used to seed a psql database

Update the file `backend/database.js` with the postgres information for your local postgres installation

To start the back end locally use the command `npm run dev` in the backend directory









