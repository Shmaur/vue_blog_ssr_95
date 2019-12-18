/*
 * @Author: huangjin
 * @Date: 2019-12-18 22:24:29
 * @LastEditTime : 2019-12-19 00:00:14
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
const mysql = require('mysql')
const config = require('../config/index.js')

console.log(config)

var mysqlConfig = mysql.createPool({
  host: config.config.database.HOST,
  user: config.config.database.USERNAME,
  password: config.config.database.PASSWORD,
  database: config.config.database.DATABASE
  //port: config.database.PORT
})

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    mysqlConfig.getConnection((err, connection) => {
      if (err) {
        reject(err)
        console.log("请求失败！请重试。")
      } else {
        connection.query(sql, values, (err, rows, fields) => {
          if (err) {
            reject(err)
            console.log(err)
          } else {
            resolve(rows)
            console.log(fields)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query
}
