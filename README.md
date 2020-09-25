# Init-awesome-react-app

Create React app with redux and react-router-dom setup boiler plate

Create React App works on Windows, Linux and macOS
If something doen't work or need a feature, please [file an issue](https://github.com/0-void/init-awesome-react-app/issues)

## Quick Overview

```sh
npx init-awesome-react-app my-app
cd my-app
npm start
```

Then open [http://localhost:8080](http://localhost:8080) to see your app. 
When you're ready to deploy the app to production, create a minified bundle with npm run build

### Get Started Immediately
You don't need to install or configure tools like webpack or Babel. They are preconfigured

## Creating an App
You'll need to have Node installed on your local machine, most recent version of Node is preferable

To create a new app, you may choose one of the following methods:

### npx
```sh
npx init-awesome-react-app my-app
```
npx is a package runner tool that comes with npm 5.2+ and higher

### npm 
```sh
npm install init-awesome-react-app
init-awesome-react-app my-app
cd my-app
npm start
```
Install the package and create a new app using the above methods

### Install globally
```sh
npm i -g init-awesome-react-app
init-awesome-react-app my-app
cd my-app
npm start
```
Install the package globally and create a new app. 

It will create a directory called my-app inside the current folder. 
Inside that directory, it will generate the initial project structure, boiler plate for redux and react-router-dom setup and install the transitive dependencies:

```
my-app
├── node_modules
├── package.json
├── .gitignore
├── public
|   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
    ├── store
    |    ├── action
    |        └── index.js
    |    ├── reducer
    |        └── index.js
    |    ├── type
    |        └── index.js
    |    └── store.js
    ├── screens
    |    ├── Home.js
    |    └── About.js
    └──  components
 ```
 
 Once the installation is done, you can open your project folder:
 ```sh
 cd my-app
 ```
 inside the newly created project, you can run commands:
 ### `npm start`
 
 Runs the app in development mode.
 Open http://localhost:8080 to view it in the browser
 
 The page will automatically reload if you make changes to the code. 
 You will see the build errors and lint warnings in the console.
 
 ### `npm run build
 Builds the app for production to the build foler. 
 Your app is ready to be deployed.
 
