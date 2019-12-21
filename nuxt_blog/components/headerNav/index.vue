<!--
 * @Author: huangjin
 * @Date: 2019-12-17 00:39:59
 * @LastEditTime : 2019-12-21 20:07:56
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
 -->
   <!--导航组建 -->
<template>
  <nav class="header">
    <span class="logo">
      <nuxt-link to="/">九五斋居</nuxt-link>
    </span>
    <div class="navList">
      <ul>
        <li v-for="(item,index) in navList" :key="index" :class="{'navActive': navindex == item.id}">
          <nuxt-link :to="{path:item.classify_router}">{{item.classify_name}}</nuxt-link>
        </li>
      </ul>
    </div>
    <!-- <twoTypeNavVue ref="twoTypeNav" :typeNav="typeNav"></twoTypeNavVue> -->
  </nav>
</template>

<script>
export default {
data() {
  return {
      navindex: null,
      navList: [{
        id:0,
        classify_name:"零壹院",
        classify_router:"about"
      },{
        id:1,
        classify_name:"论“色”院",
        classify_router:""
      },{
        id:2,
        classify_name:"观影院",
        classify_router:""
      },{
        id:3,
        classify_name:"上客堂",
        classify_router:""
      },{
        id:4,
        classify_name:"斋居",
        classify_router:""
      },{
        id:5,
        classify_name:"共享厅",
        classify_router:""
      },{
        id:6,
        classify_name:"关于",
        classify_router:"/about"
      },]
    }
},
}
</script>
<style lang='stylus' socped>
.header
  background rgba(0, 0, 0, 0.8)
  font-size 17px
  position fixed
  left 0
  top 0
  z-index 99
  width 100%
  box-shadow 0px 5px 40px 0px rgba(19, 19, 19, 0.2)
  .logo
    position absolute
    cursor pointer
    left 10px
    top 0px
    font-size 14px
    height 44px
    line-height 44px
    padding 0 20px
    color #fff
  .navList
    max-width 980px
    margin 0 auto
    // padding: 0 22px;
    position relative
    z-index 2
    box-sizing content-box
    ul
      width 1200px
      height 44px
      margin 0 auto
      width auto
      display flex
      padding 0
      justify-content space-between
      user-select none
      .navActive
        color rgb(255, 166, 0)
        a
          opacity 0.5
      li
        list-style none
        float left
        width 100%
        cursor pointer
        box-sizing border-box
        display inline-block
        position relative
        height 44px
        z-index 1
        opacity 1
        transition opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)
        vertical-align top
        line-height 3.14286
        font-size 14px
        a
          text-decoration none
          color #fff
          width 100%
          display inline-block
          text-align center
          &:hover
            opacity 0.5
.content
  width 100%
  display inline-block
  // transition: all 0.5s ease;
  margin-top 44px
.slide-left-enter, .slide-right-leave-active
  opacity 0
  -webkit-transform translate(100%, 0)
  transform translate(100%, 0)
.slide-left-leave-active, .slide-right-enter
  opacity 0
  -webkit-transform translate(-100%, 0)
  transform translate(-100% 0)
</style>
