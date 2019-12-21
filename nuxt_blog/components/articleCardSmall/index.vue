<!--
 * @Author: huangjin
 * @Date: 2019-12-21 21:44:22
 * @LastEditTime : 2019-12-21 22:19:48
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
<template>
  <div>
    <article class="synthesis_item_null" v-if="Data.length==0">
      <i class="iconfont icon-wushuju"></i>
      <p>
        {{nullData}}
      </p>
    </article>
    <article class="synthesis_item" v-for="(item,index) in Data" :key="index" v-else>
      <div class="synthesis_item_left">
        <ul class="article_infor_list_meta">
          <li class="item date">
            <i class="iconfont icon-riqi"></i>{{item.issue_Data}}</li>
          <li class="item comment browse">
            <i class="iconfont icon-pinglun"></i>{{item.commentcount}}</li>
        </ul>
        <p class="synthesis_item_title">{{item.article_title}}</p>
      </div>
      <figure class="article_img">
        <img :src="item.article_photo" v-if="item.article_photo" />
        <img src="../../static/logo.jpg" v-else/>
      </figure>
    </article>
  </div>

</template>

<script>
export default {
  props:{
    Data:{
      type:Array,
      default:[]
    },
    nullData:{
      type:String,
      default:'无数据'
    }
  }

}
</script>

<style lang="stylus">
@import './index.styl'
</style>
