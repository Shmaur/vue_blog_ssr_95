<!--
 * @Author: huangjin
 * @Date: 2019-12-21 20:09:23
 * @LastEditTime : 2019-12-21 23:29:47
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
  <!--标签卡片组建 -->
<template>
  <div class="tagCard">
    <div class="tagCard_title">
      <p>标签云</p>
    </div>
    <div class="tagCard_content">
      <div class="tag_Parent" v-for="(item,index) in tag" :key="index">
        <!-- {{item.children.length}} -->
        <div class="tag_Parent_txt" :style="{color:item.tag_txt_color,background:item.tag_bg_color}">
          <span class="tag_Parent_title">{{item.tag_name}}</span>
          <div class="tag_childern" v-for="(items,index) in item.children" :key="index" v-if="item.children.length!==0" :style="{color:item.tag_txt_color,background:item.tag_bg_color}">
            <span class="tag_Parent_title">{{items.tag_name}}</span>
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
    ParentWidth:'ParentWidth',
    parentNull:""
  }
},
}
</script>

<style lang="stylus">
@import './index.styl'
</style>
