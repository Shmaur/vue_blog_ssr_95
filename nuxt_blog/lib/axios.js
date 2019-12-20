/*
 * @Author: huangjin
 * @Date: 2019-06-26 20:18:42
 * @LastEditTime : 2019-12-21 01:27:45
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import getToken from './auth'
import baseURL from '../config/index'

console.log(baseURL)

axios.defaults.baseURL = baseURL + '/v1/api'
console.log(axios.defaults)
class HttpRequeset {
  // constructor(baseUrl = baseURL) {
  //   this.baseUrl = baseUrl
  //   this.queue = {}
  // }
  getInsideConfig() {
    const config = {
      // baseUrl: this.baseUrl,
      headers: {},
      timeout: 200000
    }
    return config
  }
  interceptors(instance) {
    instance.interceptors.request.use(config => {
      if (getToken.getToken()) {
        config.headers['Authorization'] = 'Bearer ' + getToken.getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      let code = res.data.code
      console.log(res)
      if (code === 200) {
        return res.data
      } else {
        Message.error(res.data.msg)
      }
    }, error => {
      let code = 0
      console.log(code)
      try {
        console.log(error.response)
        code = error.response
      } catch (e) {
        if (error.toString().indexOf('Error: timeout') !== -1) {
          Message.error('网络请求超时')
          return Promise.reject(error)
        }
        if (error.toString().indexOf('Error: Network Error') !== -1) {
          Message.error('网络请求错误')
          return Promise.reject(error)
        }
      }
      if (code === 401) {
        MessageBox.confirm(
          '登录状态已过期，您可以继续留在该页面，或者重新登录',
          '系统提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          // store.dispatch('LogOut').then(() => {
          //   location.reload() // 为了重新实例化vue-router对象 避免bug
          // })
        })
      } else if (code === 403) {
        // router.push({
        //   path: '/401'
        // })
      } else {
        const errorMsg = error.response.data.message
        if (errorMsg !== undefined) {
          Message.error(errorMsg)
        }
      }
      return Promise.reject(error)
    })
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequeset
