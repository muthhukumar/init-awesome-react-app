const appDirectory = require("../index");

const dirs = [
  appDirectory,
  `${appDirectory}/public`,
  `${appDirectory}/src`,
  `${appDirectory}/src/components`,
  `${appDirectory}/src/screens`,
  `${appDirectory}/src/store`,
  `${appDirectory}/src/store/action`,
  `${appDirectory}/src/store/reducer`,
  `${appDirectory}/src/store/type`,
];

module.exports = dirs;
