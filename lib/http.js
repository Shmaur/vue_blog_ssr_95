/*
 * @Author: huangjin
 * @Date: 2019-12-17 23:48:11
 * @LastEditTime: 2019-12-17 23:50:30
 * @LastEditors: huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 */
import {
  baseUrl
} from '../config/index'
import axios from 'axios'

export default (url = '', data = {}, type = 'GET', contentType = 'application/json') => {
  return new Promise((resolve, reject) => {
    let requestConfig = {
      method: type,
      url: baseUrl + url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': contentType
      },
      timeout: 10000
    }

    switch (type.toUpperCase()) {
      case "GET":
        requestConfig.params = data;
        break;
      case "DELETE":
        requestConfig.params = data;
        break;
      case "POST":
        requestConfig.data = data;
        break;
      case "PUT":
        requestConfig.data = data;
        break;
    }

    axios(requestConfig).then((resp) => {
      resolve(resp.data);
    }).catch((err) => {
      reject(err);
    })
  });
}
