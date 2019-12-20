/*
 * @Author: huangjin
 * @Date: 2019-12-21 00:37:56
 * @LastEditTime : 2019-12-21 00:44:03
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
class Utils {
    dateFormater(formater, t) {
        let date = t ? new Date(t) : new Date(),
            Y = date.getFullYear() + '',
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
        // dateFormater('YYYY-MM-DD HH:mm', t) ==> 2019-06-26 18:30
        // dateFormater('YYYYMMDDHHmm', t) ==> 201906261830
        return formater.replace(/YYYY|yyyy/g, Y)
            .replace(/YY|yy/g, Y.substr(2, 2))
            .replace(/MM/g, (M < 10 ? '0' : '') + M)
            .replace(/DD/g, (D < 10 ? '0' : '') + D)
            .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
            .replace(/mm/g, (m < 10 ? '0' : '') + m)
            .replace(/ss/g, (s < 10 ? '0' : '') + s)
    }
}
module.exports = new Utils()