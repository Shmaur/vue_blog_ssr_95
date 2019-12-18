/*
 * @Author: huangjin
 * @Date: 2019-12-18 21:50:40
 * @LastEditTime : 2019-12-18 21:53:43
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
const Router = require('koa-router')();
const controllers = require("../controllers/index")
Router.opts.prefix = '/v1/api'
const router = Router
console.log(router.routes())
const {
  login
} = controllers
const routers = [{
  url: `/login`,
  routes: login.loginController
}]

routers.forEach(item => {
  router.use(item.routes.routes(), item.routes.allowedMethods())
})

module.exports = router
