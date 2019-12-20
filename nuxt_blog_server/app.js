/*
 * @Author: huangjin
 * @Date: 2019-12-20 20:50:57
 * @LastEditTime : 2019-12-21 00:01:48
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');
const session = require('koa-session');
const Router = require('koa-router')
const koaBody = require('koa-body')
const router = new Router()
const MainRoutes = require('./routes/index');
app.use(koaBody({
    multipart: true,
    formidable: {
        //maxFileSize: 200*1024*1024 // 设置上传文件大小最大限制，默认2M
    }
}));
onerror(app)

app.keys = ['some secret'];

const CONFIG = {
    keyy: 'koa:sess',
    maxAge: 86400000,
    overWrite: true,
    httpOnly: true,
    rolling: false,
    renew: false,
    siged: true
}
app.use(logger({
    env: app.env, // koa 提供的环境变量
    projectName: 'koa2-tutorial',
    appLogLevel: 'debug',
    dir: 'logs'
}));
app.use(router.routes())
app.use(session(CONFIG, app));
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(cors({
    origin: function (ctx) {
        //  if (ctx.url == 'test') {
        //    return '*'
        //  }
        return ctx.headers.origin
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
// routes
app.use(MainRoutes.routes(), MainRoutes.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app