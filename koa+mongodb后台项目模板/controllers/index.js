/**
 * 获取 controllers 目录下除 index.js 文件之外的文件，
 * 排除 非 js 文件，将其引入添加到 controllers 对象中，
 * 随后，将 controllers 对象暴露，
 * 以后添加功能时只需要新建 js 文件即可
 */

const fs = require("fs");
const path = require("path");

const controllers = {};

const files = fs.readdirSync(__dirname).filter((file) => file != "index.js");

for (let file of files) {
  if (file.toLowerCase().endsWith(".js")) {
    const controller = require(path.resolve(__dirname, file));
    controllers[file.replace(/\.js/gi, "")] = controller;
  }
}

module.exports = controllers;
