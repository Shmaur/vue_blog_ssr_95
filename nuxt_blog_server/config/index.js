/*
 * @Author: huangjin
 * @Date: 2019-12-18 22:25:58
 * @LastEditTime : 2019-12-21 02:16:22
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
const fs = require('fs')
const path = require('path')
const publicKey = fs.readFileSync(path.join(__dirname, './blog_public_key.pem'));

const config = {
    database: {
        DATABASE: 'shmaur',
        USERNAME: 'shmaur',
        PASSWORD: 'shmaur199520',
        PORT: '3306',
        HOST: '114.55.211.251'
    },
    upPaht: 'dist/upFile',
    JWts: {
        publicKey: publicKey,
        secret: 'shmaur',
        expiresIn: '4h' //超时设置 m分钟 h小时 d 天
    },
    HTTP_server_host: "114.55.211.251",
    API_server_port: "3000"
}
module.exports = {
    config
}