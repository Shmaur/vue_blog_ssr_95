<!--
 * @Author: huangjin
 * @Date: 2019-12-17 00:31:34
 * @LastEditTime : 2019-12-21 20:07:48
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
   <!--网页底部组建 -->
<template>
  <footer class="footer">
    <div class="auth_signature">
      <p>因为喜欢，所以坚持</p>
      <p>努力向前，成长可见</p>
      <p>越勤奋，越努力；越自律，越优秀</p>
    </div>
    <div class="nav_url">
      <ul>
        <li>关于我</li>
        <li>版权声明</li>
        <li>联系我</li>
      </ul>
    </div>
    <p class="copyright">Copyright © 2018 版权所有 浙ICP备18020246号-1</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.footer
  height 224px
  background #333
  padding 20px
  font-size 14px
  width 100%
  color #FFF
  .auth_signature
    color #FFF
    text-align center
    display block
    line-height 28px
  .nav_url
    margin 0 auto
    margin-top 20px
    width 240px
    text-align center
    ul
      display block
      padding 0
      white-space nowrap
      overflow auto
      li
        margin 3px
        display inline-block
  .copyright
    margin-top 20px
    text-align center
</style>
