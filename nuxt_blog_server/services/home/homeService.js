/*
 * @Author: huangjin
 * @Date: 2019-12-18 21:56:38
 * @LastEditTime : 2019-12-21 22:42:14
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
            let data = [];
            console.log(utils)
            let pageList = await MysqlHome.findlimitPage('h_v_blog_articleAll ORDER BY issue_Data desc', Number(start), Number(count))
            for (let i of pageList) {
                i.issue_Data = await utils.dateFormater('YYYY-MM-DD HH:mm:ss', i.issue_Data)
                data.push({
                    author: i.author,
                    article_title: i.article_title,
                    article_excerpt: i.article_excerpt,
                    commentcount: i.commentcount,
                    id: i.id,
                    article_photo: i.article_photo,
                    tag_name: i.tag_name,
                    tag_bg_color: i.tag_bg_color,
                    tag_txt_color: i.tag_txt_color,
                    viewcount: i.viewcount,
                    issue_Data: i.issue_Data
                })
            }
            return result.pageData('查询成功!', "", data, page, count, totalCount, Math.floor(totalPage))

        } catch (error) {
            return result.failed();
        }
    }
    async homeGetSynthesisArticle(query) {
        try {
            if (!query.currentPage || !query.pagesize) return result.paramsLack()
            let articleDevPageList = await MysqlHome.findlimitPage('h_v_blog_articleDev ORDER BY issue_Data desc', 0, 5)
            let articleDesignPageList = await MysqlHome.findlimitPage('h_v_blog_articleDesign ORDER BY issue_Data desc', 0, 5)
            let articleReadPageList = await MysqlHome.findlimitPage('h_v_blog_articleRead ORDER BY issue_Data desc', 0, 5)
            let articleDevPageListData = []
            let articleDesignPageListData = []
            let articleReadPageListData = []
            for (let i of articleDevPageList) {
                i.issue_Data = await utils.dateFormater('YYYY-MM-DD HH:mm:ss', i.issue_Data)
                articleDevPageListData.push({
                    article_title: i.article_title,
                    commentcount: i.commentcount,
                    id: i.id,
                    article_photo: i.article_photo,
                    issue_Data: i.issue_Data
                })
            }
            for (let i of articleDesignPageList) {
                i.issue_Data = await utils.dateFormater('YYYY-MM-DD HH:mm:ss', i.issue_Data)
                articleDesignPageListData.push({
                    article_title: i.article_title,
                    commentcount: i.commentcount,
                    id: i.id,
                    article_photo: i.article_photo,
                    issue_Data: i.issue_Data
                })
            }
            for (let i of articleReadPageList) {
                i.issue_Data = await utils.dateFormater('YYYY-MM-DD HH:mm:ss', i.issue_Data)
                articleReadPageListData.push({
                    article_title: i.article_title,
                    commentcount: i.commentcount,
                    id: i.id,
                    article_photo: i.article_photo,
                    issue_Data: i.issue_Data
                })
            }
            let data = {
                articleDevData: articleDevPageListData,
                articleDesignData: articleDesignPageListData,
                articleReadData: articleReadPageListData
            }
            return result.success('查询成功!', data)

        } catch (error) {
            return result.failed();
        }
    }
    // 遍历树
    trees(data, value) {
        var result = [],
            temp
        for (var i in data) {
            if (data[i].Parent_ID == value) {
                let obj = {
                    id: data[i].id,
                    tag_name: data[i].tag_name,
                    Parent_ID: data[i].Parent_ID,
                    tag_bg_color: data[i].tag_bg_color,
                    tag_txt_color: data[i].tag_txt_color,
                    tag_type: data[i].tag_type
                }
                temp = this.trees(data, data[i].id);
                if (temp.length > 0) {
                    obj.children = temp;
                }
                result.push(obj);
            }
        }
        return result;
    }
    async homeGetTags(query) {
        try {
            let tagListData = await MysqlHome.findTableAllData('h_Tag')
            let TagTress = await this.trees(tagListData, 0)
            return result.success('查询成功!', TagTress)

        } catch (error) {
            return result.failed();
        }
    }
}

module.exports = new homeService