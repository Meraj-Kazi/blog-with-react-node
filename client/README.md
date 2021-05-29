# Blog App with React, NodeJS

### Starting note:
To create a full stack blog we can break the task into 3 major tasks:
1. Design a UI.
2. Create the backened and DB.
3. Merge UI with backened & DB. 

Soon I'll break these three major tasks into some more small pieces so that it becomes easier for me to code.


## How to run the project

Frontend:
> cd client
> npm install
> npm start
(Your frontend starts running on localhost:3000)

Backend:
> cd api
> npm install
> npm start
(Your backend starts running on localhost:5000, though you won't see anything there)

(MongoDB cloud api connention is in dot env file which is ignored by git because of the .gitignore file. You need that file as that contains the database connection link. Without that, you won't be able to get connection with mongoDB.)

There are 2 ways to solve this.
1. Ask me to give my secret connection link through mail.
2. Create yours. It's total easy process:
> Go to mongodb website
> Create an account for free trial which never ends unless you hit limit.
> Create a cluster.
> Create a user
> Click on `connect` to connect with this code.
> Create a `.env` file inside api folder.
> inside that, write MONGO_URL = mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.wrpkf.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority
> SAVE




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

