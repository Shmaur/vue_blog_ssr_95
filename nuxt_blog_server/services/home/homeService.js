/*
 * @Author: huangjin
 * @Date: 2019-12-18 21:56:38
 * @LastEditTime : 2019-12-21 00:49:15
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */

// 登陆系统
const result = require("../../lib/result.js")
const MysqlHome = require('../../mysql/commonality/index')
const utils = require('../../lib/utils.js')
class homeService {
    async homeGetArticle(query) {
        try {
            console.log(query.currentPage)
            let page = 1,
                count = 10
            if (!query.currentPage || !query.pagesize) return result.paramsLack()
            page = Number(query.currentPage);
            count = Number(query.pagesize);
            let start = (page - 1) * count;
            let totalPage = 0,
                totalCount = 0;
            let countNub = await MysqlHome.getListCount("h_v_blog_articleAll");
            totalCount = countNub[0].count;
            totalPage =
                totalCount % count == 0 ? totalCount / count : totalCount / count + 1;
            //总页数= 总记录 % 每页显示条数 是否等于0 ，否则就
            let pageList = [];
            console.log(utils)
            pageList = await MysqlHome.findlimitPage('h_v_blog_articleAll', Number(start), Number(count))
            for (let i of pageList) {
                i.issue_Data = await utils.dateFormater('YYYY-MM-DD HH:mm:ss', i.issue_Data)
            }
            pageList.sort((a, b) => {
                return a.issue_Data - b.issue_Data
            })
            return result.pageData('查询成功!', "", pageList, page, count, totalCount, Math.floor(totalPage))

        } catch (error) {
            return result.failed();
        }
    }

}

module.exports = new homeService