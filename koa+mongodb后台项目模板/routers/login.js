const Router = require("koa-router");
const controllers = require("../controllers/index");

const router = new Router();

router.get("/login", controllers.login.login);

module.exports = router;
