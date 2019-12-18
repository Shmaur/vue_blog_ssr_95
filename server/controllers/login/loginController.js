/*
 * @Author: huangjin
 * @Date: 2019-12-18 21:54:46
 * @LastEditTime : 2019-12-18 22:15:46
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
const Router = require("koa-router")();
const services = require('../../services');

class loginController {
  async aminLogin(ctx) {
    ctx.request.body.operation = "用户登陆"
    ctx.body = await services.login.loginService.aminLogin(ctx.request.body);
  }
}

const {
  aminLogin
} = new loginController()

const routers = [{
  url: `/login`,
  method: 'get',
  acc: aminLogin
}]


routers.forEach(item => {
  Router[item.method](item.url, item.acc)
})

module.exports = Router
