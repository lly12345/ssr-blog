<template>
  <div>
    <span> 首页</span>
    <nuxt-link to="/list">跳转</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // 表示中间件仅在这个页面生效
  // middleware: 'auth'
  validate({params,query}){
    console.log("validate");
    return true
  },
  asyncData({store, params}){
    console.log("asyncData");
  },
  fetch({app, store,params}){
    console.log("fetch");
  },
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  }
}
</script>
