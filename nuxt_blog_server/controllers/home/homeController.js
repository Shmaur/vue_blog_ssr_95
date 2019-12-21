/*
 * @Author: huangjin
 * @Date: 2019-12-18 21:54:46
 * @LastEditTime : 2019-12-21 22:33:00
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

    async homeGetSynthesisArticle(ctx) {
        ctx.request.body.operation = "首页获取综合列表数据"
        ctx.body = await services.home.homeService.homeGetSynthesisArticle(ctx.request.query);
    }
    async homeGetTags(ctx) {
        ctx.request.body.operation = "获取标签"
        ctx.body = await services.home.homeService.homeGetTags(ctx.request.query);
    }
}

const {
    homeGetArticle,
    homeGetSynthesisArticle,
    homeGetTags
} = new homeController()

const routers = [{
        url: `/getarticleList`,
        method: 'get',
        acc: homeGetArticle
    },
    {
        url: `/getSynthesisList`,
        method: 'get',
        acc: homeGetSynthesisArticle
    },
    {
        url: `/getTags`,
        method: 'get',
        acc: homeGetTags
    }
]


routers.forEach(item => {
    Router[item.method](item.url, item.acc)
})

module.exports = Router