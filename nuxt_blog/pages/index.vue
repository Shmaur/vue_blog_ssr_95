<!--
 * @Author: huangjin
 * @Date: 2019-12-16 23:58:12
 * @LastEditTime : 2019-12-21 22:45:48
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
<template>
  <div class="container">
    <div class="container_left">
      <articleList ref="homeArticleList" class="homeArticleList" :articleList="data"></articleList>
      <pagination :handleData="handleData" :total="totalCount"></pagination>
    </div>
    <div class="container_right">
      <synthesisCard :synthesis="SynthesisData.data"></synthesisCard>
      <tagCard :tag="tag.data"></tagCard>
    </div>
  </div>
</template>

<script>
import articleList from '~/components/articleList'
import synthesisCard from '~/components/synthesisCard'
import tagCard from '~/components/tagCard'
import pagination from '~/components/pagination'
import { getArticleAll } from '~/API/home'
import { getTag,getSynthesisData } from '~/API/commonality'
export default {
  data() {
    return {
    }
  },
  components: {
    articleList,
    pagination,
    synthesisCard,
    tagCard
  },

   async asyncData(){
     let json = {
        currentPage:1,
        pagesize:8
      }
   let {data,totalCount} = await getArticleAll(json)
   let total = Number(totalCount)
   let SynthesisData=await getSynthesisData(json)
   let tag = await getTag()
    return {data,totalCount,SynthesisData,tag}
  },
methods: {
  handleData(val){
    let json = {currentPage:val,pagesize:8}
    getArticleAll(json).then(res=>{
      this.data = res.data
      this.totalCount= res.totalCount
    })
  }
},
}
</script>

<style lang="stylus" scoped>
.container
  margin 3.75rem auto
  display flex
  .homeArticleList
    width 53.125rem
  .container_left
    margin-right 20px
  .container_right
    flex 1
    width 20.625rem
    height 28.75rem
</style>
