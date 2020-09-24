#!/usr/bin/env node
const shell = require("shelljs");
const colors = require("colors");
const fs = require("fs");

const files = require("./inputs/useFiles");

const appName = process.argv[2];
const appDirectory = `${process.cwd()}/${appName}`;

const {
  createDirectories,
  installDependencies,
  cdIntoDirectory,
  checkNameIsValid,
  copyPackageJson,
} = require("./lib/index");

module.exports = appDirectory;
const dirs = require("./inputs/directories");

const main = async () => {
  const isValidName = checkNameIsValid(appName);
  if (!isValidName) {
    return console.log("Please enter valid app name for creating app".red);
  }
  try {
    await createDirectories(dirs);
    console.log(`creating a react app with name ${appName}\n`.magenta);
    await copyPackageJson(files, appDirectory);
    await cdIntoDirectory(appDirectory);
    console.log("Installing required dependencies...\n".cyan);
    console.log(
      "Installing React, ReactDOM, react-router-dom, redux and react-redux ...\n"
        .cyan
    );
    await installDependencies();
    console.log(`cd ${appName}\n`.cyan);
    console.log("Happy coding\n".cyan);
  } catch (err) {
    console.log("Something went wrong when creating react app");
  }
};

main();
