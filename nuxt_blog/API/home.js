/*
 * @Author: huangjin
 * @Date: 2019-12-21 00:20:57
 * @LastEditTime : 2019-12-21 20:48:54
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
import axios from './index'

export const getArticleAll = (params) => {
  return axios.request({
    url: '/getarticleList',
    method: 'get',
    params: params
  })
}
