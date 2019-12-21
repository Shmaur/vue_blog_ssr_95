<!--
 * @Author: huangjin
 * @Date: 2019-12-21 01:15:16
 * @LastEditTime : 2019-12-21 20:52:47
 * @LastEditors  : huangjin
 * @Description: 因为喜欢而坚持
 * @生活不止眼前的苟且，还有诗和远方
-->
 <!--分页组建 -->
<template>
  <div class="pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="8" layout="prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    handleData: {
      type: Function,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      this.handleData(val);
    },
    handleCurrentChange(val) {
      this.handleData(val);
    }
  }
};
</script>

<style lang="stylus" scoped>
.pagination
  width 100%
  height 34px
  margin auto
  .el-pagination
    margin auto
    width fit-content
    button
      color #c2c2c2 !important
</style>
