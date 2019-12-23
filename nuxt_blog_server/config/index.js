/*
 * @Author: huangjin
 * @Date: 2019-12-18 22:25:58
 * @LastEditTime : 2019-12-24 01:24:06
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
const fs = require('fs')
const path = require('path')
const publicKey = fs.readFileSync(path.join(__dirname, './blog_public_key.pem'));