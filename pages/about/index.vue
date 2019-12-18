<!--
 * @Author: huangjin
 * @Date: 2019-12-18 00:34:48
 * @LastEditTime : 2019-12-19 00:37:17
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
<template>
  <div>
    <h2>About Index page</h2>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
    <h3>{{info}}</h3>
  </div>
</template>

<script>
import {getData} from '../../API/login';
export default {
  asyncData(){
   return getData().then(res=>{
     console.log(res)
  return {info:res}
   })

  }
}
</script>

<style>
</style>
