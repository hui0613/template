/**
 * 读取 controllers 目录下的所有路由文件，进行封装后返回，供 app.js 中使用
 */

const fs = require("fs");
const path = require("path");
const Router = require("koa-router");

module.exports = function () {
  const router = new Router();

  let files = fs.readdirSync(path.join(__dirname, "..", "routers"));

  // 过滤 js 文件

  let fs_file = files.filter((file) => {
    return file.endsWith(".js");
  });

  for (let file of fs_file) {
    console.log(require(path.join(__dirname, "..", "routers", file)));
    let stack = require(path.join(__dirname, "..", "routers", file)).stack;
    for (let i = 0; i < stack.length; i++) {
      router.stack.push(stack[i]);
    }
  }
  return router;
};
