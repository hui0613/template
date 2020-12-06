const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser')();

// 路由获取
const controller = require('./middlewares/controller');

const app = new Koa();

// bodyParset 必须在 router 之前注册
app.use(bodyParser);

let router = controller();

app.use(router.routes());

app.use(async (ctx, next) => {
  next();
});

app.listen(3000);
