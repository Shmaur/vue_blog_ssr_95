/*
 * @Author: huangjin
 * @Date: 2019-12-21 00:31:07
 * @LastEditTime : 2019-12-21 01:35:04
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
// 工具类
//格式化时间
export const dateFormater = (formater, t) => {
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
// 分享到新浪
export const shareToXl = (title, url, picurl) => {
  var sharesinastring =
    'http://v.t.sina.com.cn/share/share.php?title=' +
    title +
    '&url=' +
    url +
    '&content=utf-8&sourceUrl=' +
    url +
    '&pic=' +
    picurl
  window.open(
    sharesinastring,
    'newwindow',
    'height=400,width=400,top=100,left=100'
  )
}

// 分享到qq空间
export const shareToQq = (title, url, picurl) => {
  var shareqqzonestring =
    'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' +
    title +
    '&url=' +
    url +
    '&pics=' +
    picurl
  window.open(
    shareqqzonestring,
    'newwindow',
    'height=400,width=400,top=100,left=100'
  )
}

// 分享到qq
export const shareQQ = (title, url, picurl) => {
  var shareqqzonestring = `https://connect.qq.com/widget/shareqq/index.html?url=${url}?sharesource=qzone&title=${title}&pics=${picurl}&summary=${title}`
  window.open(
    shareqqzonestring,
    'newwindow',
    'height=400,width=400,top=100,left=100'
  )
}
