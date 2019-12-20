/*
 * @Author: huangjin
 * @Date: 2019-12-17 23:49:08
 * @LastEditTime : 2019-12-21 02:10:40
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
let baseURL = '';
// let baseImgPath = '';


if (process.env.NODE_ENV == 'development') {
  baseURL = 'http://localhost:3005';
  // baseImgPath = 'http://localhost:3000/upload/';
} else {
  baseURL = 'http://localhost:3000';
  // baseImgPath = 'http://localhost:3000/upload/';
}

export default baseURL
