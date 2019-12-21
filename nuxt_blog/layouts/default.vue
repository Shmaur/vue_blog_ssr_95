<!--
 * @Author: huangjin
 * @Date: 2019-12-16 23:58:12
 * @LastEditTime : 2019-12-21 22:17:51
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
<template>
  <div>
    <headerNav></headerNav>
    <div class="content_wrapper">
      <nuxt />
    </div>

    <fooer></fooer>
  </div>
</template>
<script>
import fooer from '@/components/footer/index'
import headerNav from '@/components/headerNav/index'

export default {
  data() {
    return {
    }
  },
  components:{
    fooer,
    headerNav
  }
}
</script>
<style>
@import "//at.alicdn.com/t/font_976806_gfqmm3z2rn.css ";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.content_wrapper {
  max-width: 75rem;
  margin: 0 auto;
  margin-top: 60px;
}
</style>

