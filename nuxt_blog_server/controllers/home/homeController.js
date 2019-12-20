/*
 * @Author: huangjin
 * @Date: 2019-12-18 21:54:46
 * @LastEditTime : 2019-12-20 23:34:38
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
const Router = require("koa-router")();
const services = require('../../services');

class homeController {
    async homeGetArticle(ctx) {
        ctx.request.body.operation = "首页获取文章列表"
        ctx.body = await services.home.homeService.homeGetArticle(ctx.request.query);
    }
}

const {
    homeGetArticle
} = new homeController()

const routers = [{
    url: `/getarticleList`,
    method: 'get',
    acc: homeGetArticle
}]


routers.forEach(item => {
    Router[item.method](item.url, item.acc)
})

module.exports = Router