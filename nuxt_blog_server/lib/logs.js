/*
 * @Author: huangjin
 * @Date: 2019-12-21 00:02:20
 * @LastEditTime : 2019-12-21 00:08:04
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
import log4js from 'log4js';

const access = (ctx, message, commonInfo) => {
    const {
        method, // 请求方法 get post或其他
        url, // 请求链接
        host, // 发送请求的客户端的host
        headers, // 请求中的headers
        body,
        query,
    } = ctx.request;

    const client = {
        method,
        url,
        host,
        message,
        referer: headers['referer'], // 请求的源地址
        userAgent: headers['user-agent'], // 客户端信息 设备及浏览器信息
        request: {
            body: body,
            query: query
        }
    };

    return JSON.stringify(Object.assign(commonInfo, client))
}

const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark']

module.exports = (data) => {
    const baseInfo = {
        appLogLevel: data.appLogLevel,
        dir: data.dir,
        env: data.env,
        projectName: data.projectName,
        // serverIp: data.serverIp
    };
    const {
        env,
        appLogLevel,
        dir,
        // serverIp,
        projectName
    } = baseInfo;

    const commonInfo = {
        appLogLevel,
        projectName,
        // serverIp
    };
    const contextLogger = {};
    const appenders = {};
    appenders.cheese = {
        type: 'dateFile',
        filename: `${dir}/task`,
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true
    };
    if (env === 'dev' || env === 'local' || env === 'development') {
        appenders.out = {
            type: 'console'
        };
    }
    console.log(Object.keys(appenders))
    let config = {
        appenders,
        categories: {
            default: {
                appenders: Object.keys(appenders),
                level: appLogLevel
            }
        }
    };

    const logger = log4js.getLogger('cheese');

    return async (ctx, next) => {
        const start = Date.now();
        log4js.configure(config);
        methods.forEach((method, i) => {
            contextLogger[method] = (message) => {
                // 将入参换为函数返回的字符串
                logger[method](access(ctx, message, commonInfo));
            };
        });
        ctx.log = contextLogger;
        await next();
        const responseTime = Date.now() - start;
        logger.info(access(ctx, {
            responseTime: `响应时间为${responseTime / 1000}s`
        }, commonInfo));
    };
}