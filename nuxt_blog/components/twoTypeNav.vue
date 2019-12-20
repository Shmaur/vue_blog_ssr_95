<template>
    <transition name="el-zoom-in-top">
        <section class="type_nav transition-box" v-show="typeshow" @mouseleave="leave">
            <div class="type_nav_wrapper">
                <ul class="type_nav_items">
                    <li class="type_nav_item" v-for="(item,index) in typeNav" :key="index" @click="toggleType(item)" :class="{'active':activeval == item.id}">
                        <span>{{item.classify_name}}</span>
                    </li>
                </ul>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    props:{
        typeNav:{
            type:Array
        }
    },
  data() {
    return {
      typeshow: false,
      activeval:Number
    //   typeNav: []
    };
  },
  computed:{
     gettwoID(){
         return this.$store.getters.gettwoID.id
     }
  },
  mounted(){
    //   this.activeval=Number(sessionStorage.getItem("settwoID"))
  },
  methods: {
    toggleType(item) {
      let _ = this;
    //   console.log(_.$route.path)
      _.$http.get("findfistclassifyid",{params:{id:item.parentID}}).then(res=>{
          if (res.data.data.classify_router !== _.$route.path) {
              _.$router.push(res.data.data.classify_router)
          }
          _.$store.commit("settwoRouteID",res.data.data)
          _.$store.commit("settwoID",item)
        //   sessionStorage.setItem("settwoRouteID",item.parentID)
        //   sessionStorage.setItem("settwoID",item.id)
           _.activeval=item.id
      })
      
    },
    leave(){
        this.typeshow = false
    }
  },
  watch:{
     gettwoID(){
         this.activeval = this.gettwoID
     }
  }
};
</script>

<style lang="scss" scoped>
.type_nav {
  background: rgba(27, 27, 27, 0.7);
  padding: 0;
  top: 43px;
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 60px;

  margin-bottom: 16px;
  z-index: 9998;
  .type_nav_wrapper {
    position: relative;
    z-index: 1;
    max-width: 980px;
    margin: 0 auto;
    .type_nav_items {
      white-space: nowrap;
      margin: 0 30px;
      padding: 0;
      overflow-x: auto;
      overflow-y: hidden;
      line-height: 60px;
      font-size: 14px;
      color: #FFF;
      display: flex;
      justify-content: space-between;
      .type_nav_item {
        list-style: none;
        span {
          &:hover {
            cursor: pointer;
            color: #f17909;
          }
        }
      }
    }
  }
}
.active {
  color: #f17909;
}
</style>
