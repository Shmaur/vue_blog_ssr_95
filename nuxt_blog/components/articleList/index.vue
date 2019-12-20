<!--
 * @Author: huangjin
 * @Date: 2019-12-20 23:00:29
 * @LastEditTime : 2019-12-21 01:02:02
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
<template>
  <div class="article_card">
    <article class="article_card_item" v-for="(item,index) in articleList" :key="index">
      <div class="article_infor_row">
        <ul class="article_infor_list_meta">
          <li class="tag">{{item.tag_name}}</li>
          <li class="item author">
            <i class="iconfont icon-author"></i>{{item.author}}</li>
          <li class="item date">
            <i class="iconfont icon-riqi"></i>{{item.issue_Data}}</li>
          <li class="item comment">
            <i class="iconfont icon-pinglun"></i>{{item.commentcount}}</li>
          <li class="item browse">
            <i class="iconfont icon-liulan"></i>{{item.viewcount}}</li>
        </ul>
      </div>
      <header class="article_header" @click="goArticleInfo(item)">
        <h2 class="article_title">{{item.article_title}}</h2>
      </header>
      <div class="article_content" @click="goArticleInfo(item)">
        <p class="article_content_text">
          {{item.article_excerpt}}
        </p>

      </div>
      <figure class="article_img">
        <img :src="item.article_photo" v-if="item.article_photo" />
        <img src="../../static/logo.jpg" v-else/>
      </figure>
    </article>
    <article class="article_null" v-show="articleNull">
      <i class="iconfont icon-wenzhang"></i>
      <span>暂无文章</span>
    </article>
  </div>
</template>

<script>

export default {
props:{
  articleList:{
    type:Array,
    default() {
        return [];
      },
      required: true
  }
},
data() {
  return {
    articleNull:false
  }
},
}
</script>

<style lang="stylus">
@import './articleList.styl'
</style>
