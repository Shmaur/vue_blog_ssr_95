/*
 * @Author: huangjin
 * @Date: 2019-12-18 21:56:38
 * @LastEditTime : 2019-12-20 21:04:36
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */

// 登陆系统
const result = require("../../lib/result.js")
class loginService {
    async aminLogin({
        account,
        password
    }) {
        try {
            // if (!account || !password) return result.paramsLack()
            // 查询用户信息
            // const userInfo = await mysqljs.findDataByName(account)

            // 密码校验
            // if (userInfo.length == 0) return result.failed(`用户名或密码错误！请重新输入`);
            // const pass = await utile.getBcrypt(userInfo[0].Password, password)
            // 用户信息存在以及密码正确则继续后面的逻辑
            // console.log(userInfo[0] && pass)

            return result.success(null, 123)

        } catch (error) {
            return result.failed();
        }
    }

}

module.exports = new loginService