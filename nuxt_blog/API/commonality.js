/*
 * @Author: huangjin
 * @Date: 2019-12-21 22:43:46
 * @LastEditTime: 2019-12-21 22:44:10
 * @LastEditors: huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
import axios from './index'

export const getTag = (params) => {
  return axios.request({
    url: '/getTags',
    method: 'get',
    params: params
  })
}
export const getSynthesisData = (params) => {
  return axios.request({
    url: '/getSynthesisList',
    method: 'get',
    params: params
  })
}
