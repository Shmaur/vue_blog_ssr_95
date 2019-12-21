/*
 * @Author: huangjin
 * @Date: 2019-12-20 23:18:12
 * @LastEditTime : 2019-12-21 22:40:24
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
// 公共类函数
const mysqlQuery = require('../index')
console.log(mysqlQuery)
// 公共查询所有函数
let findTableAllData = (table) => {
    let _sql = `select *,date_format(Create_time,'%Y-%m-%d %H:%m:%s') as Create_time,date_format(Modify_time,'%Y-%m-%d %H:%m:%s') as Modify_time from ${table};`
    return mysqlQuery.query(_sql)
}

// 公共分页查询
let findlimitPage = (table, start, count) => {
    let _sql = `select *,date_format(Create_time,'%Y-%m-%d %H:%m:%s') as Create_time,date_format(Modify_time,'%Y-%m-%d %H:%m:%s') as Modify_time from ${table} limit ${start}, ${count} ;`
    return mysqlQuery.query(_sql)
}

// 公共查询总数
let getListCount = (tableName) => {
    let _sql = `select count(*) as count from ${tableName};`
    return mysqlQuery.query(_sql)
}
module.exports = {
    findTableAllData,
    findlimitPage,
    getListCount
}