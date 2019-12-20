<!--
 * @Author: huangjin
 * @Date: 2019-12-16 23:58:12
 * @LastEditTime : 2019-12-21 01:31:24
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
<template>
  <div class="container">
    <div>
      <articleList ref="homeArticleList" class="homeArticleList" :articleList="data"></articleList>
    </div>
  </div>
</template>

<script>
import articleList from '~/components/articleList'
import { getArticleAll } from '~/API/home'
export default {
  data() {
    return {
    }
  },
  components: {
    articleList
  },

   async asyncData(){
     let json = {
        currentPage:1,
        pagesize:10
      }
   let data = await getArticleAll(json)
    return data
  }

}
</script>

<style lang="stylus" scoped>
.container
  margin-top 60px
  margin 0 auto
  .homeArticleList
    max-width 53.125rem
</style>
