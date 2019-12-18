/*
 * @Author: huangjin
 * @Date: 2019-12-19 00:39:04
 * @LastEditTime : 2019-12-19 00:43:07
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
import axios from './index'

export const getData = () => {
  return axios.request({
    url: '/login',
    method: 'get'
  })
}
