/*
 * @Author: huangjin
 * @Date: 2019-12-19 00:16:22
 * @LastEditTime : 2019-12-19 00:22:39
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
import Cookies from 'js-cookie'
const TokenKey = "Blog_Auth"
export default {
  getToken: () => {
    return Cookies.get(TokenKey)
  },
  setToken: (token, rememberMe) => {
    if (rememberMe) {
      return Cookies.set(TokenKey, token, {
        expires: 1
      })
    } else return Cookies.set(TokenKey, token)
  },
  removeToken: () => {
    return Cookies.remove(TokenKey)
  }
}
