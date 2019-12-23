<!--
 * @Author: huangjin
 * @Date: 2019-12-21 20:09:23
 * @LastEditTime : 2019-12-24 01:17:06
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
  <!--标签卡片组建 -->
<template>
  <div class="Card">
    <div class="Card_title">
      <p>{{title}}</p>
    </div>
    <div class="Card_search">
      <el-input placeholder="请输入文章关键字" prefix-icon="el-icon-search" v-model="input2">
      </el-input>
    </div>
    <div class="Card_content">
      <div class="card_content_title_list">
        <div class="card_content_title_item" v-for="(item,index) in titleType" :key="index">
          <div class="card_content_title_item_title">
            <span class="item_title">{{item.name}}</span>
            <span class="item_val">{{item.value}} 篇</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
  tag:{
    type:Array,
    default:[]
  }
},
data() {
  return {
    title:'文章分类',
    titleType:[{
      id:1,
      name:"全部文章",
      value:89999
    },{
      id:2,
      name:"Flutter",
      value:56
    },{
      id:3,
      name:"Html",
      value:14
    },{
      id:4,
      name:"Vue",
      value:13
    },{
      id:5,
      name:"Axios",
      value:14
    },{
      id:6,
      name:"Node",
      value:33
    },{
      id:7,
      name:"Koa2",
      value:20
    },]
  }
},
}
</script>

<style lang="stylus">
@import './index.styl'
</style>
