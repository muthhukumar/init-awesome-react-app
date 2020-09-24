module.exports = `{
  "name": "Your-react-app-name",
  "version": "1.0.2",
  "description": "Your app description",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --hot",
    "build": "webpack --mode production"
  },
  "author": "0-void",
  "license": "MIT",
  "dependencies": {
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-redux": "7.2.1",
    "react-router-dom": "5.2.0",
    "redux": "4.0.5"
  },
  "devDependencies": {
    "@babel/core": "7.11.6",
    "@babel/preset-env": "7.11.5",
    "@babel/preset-react": "7.10.4",
    "babel-loader": "8.1.0",
    "css-loader": "4.3.0",
    "html-webpack-plugin": "4.5.0",
    "style-loader": "1.2.1",
    "webpack": "4.44.2",
    "webpack-cli": "3.3.12",
    "webpack-dev-server": "3.11.0"
  }
}`;
