/*
 * @Author: huangjin
 * @Date: 2019-12-19 00:00:30
 * @LastEditTime: 2019-12-19 00:01:02
 * @LastEditors: huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
const mysqlQuery = require('../index')
console.log(mysqlQuery)

let findUserData = (name) => {
    let _sql = 'select * from user where user_login="${name}";'
    return query(_sql)
}