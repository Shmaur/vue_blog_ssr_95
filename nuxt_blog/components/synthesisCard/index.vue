<!--
 * @Author: huangjin
 * @Date: 2019-12-21 20:06:50
 * @LastEditTime : 2019-12-21 22:20:16
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
  <!--右侧综合栏组建 -->
<template>
  <div class="synthesis">
    <el-tabs v-model="activeName" class="synthesis_Tag">
      <el-tab-pane label="零壹院" name="first">
        <articleCardSmall :Data="synthesis.articleDevData" nullData="暂时没有零壹院的文章"></articleCardSmall>
      </el-tab-pane>
      <el-tab-pane label="论“色”院" name="second">
        <articleCardSmall :Data="synthesis.articleDesignData" nullData="暂时没有论“色”院的文章"></articleCardSmall>
      </el-tab-pane>
      <el-tab-pane label="斋居" name="third">
        <articleCardSmall :Data="synthesis.articleReadData" nullData="暂时没有斋居的文章"></articleCardSmall>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import articleCardSmall from '~/components/articleCardSmall'
// import { getSynthesisData } from '~/API/home'
export default {
  props:{
    synthesis:{
      type:Object,
      default:{
      }
    }
  },
  data() {
    return {
      activeName:'first'
    }
  },
  components:{
    articleCardSmall
  },
    async asyncData(){
     let json = {
        currentPage:1,
        pagesize:30
      }
  //  let data = await getSynthesisData(json)
  //  let SynthesisData=data
  //   return SynthesisData
  },
}
</script>


<style lang="stylus">
@import './index.styl'
</style>
