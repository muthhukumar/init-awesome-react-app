const fs = require("fs");
const shell = require("shelljs");

const copyPackageJson = (files, appDirectory) => {
  return new Promise((resolve) => {
    let promises = [];
    Object.keys(files).forEach((filename, i) => {
      promises[i] = new Promise((res) =>
        fs.writeFile(`${appDirectory}/${filename}`, files[filename], (err) => {
          if (err) return console.log(err);
          return res();
        })
      );
    });
    Promise.all(promises).then(() => resolve());
  });
};

const checkNameIsValid = (appName) => {
  return appName ? true : false;
};

const cdIntoDirectory = (appDirectory) => {
  return new Promise((resolve) => {
    const cd = shell.cd(appDirectory + "/");
    if (cd.code === 0) return resolve();
  });
};

const installDependencies = () => {
  return new Promise((resolve, reject) => {
    const install = shell.exec("npm install");
    if (install.code === 0) return resolve();
    return reject();
  });
};

const createDirectories = (dirs) => {
  return new Promise((resolve) => {
    let promises = [];
    dirs.forEach((directory, i) => {
      promises[i] = new Promise((res, rej) => {
        const makeDir = shell.mkdir("-p", directory);
        if (makeDir.code === 0) {
          res(true);
        }
        rej(false);
      });
    });
    Promise.all(promises).then(() => resolve());
  });
};

module.exports = {
  checkNameIsValid,
  cdIntoDirectory,
  copyPackageJson,
  installDependencies,
  createDirectories,
};
