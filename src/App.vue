<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  created(){

      let routeList = this.$router.options.routes;
      console.log(routeList)
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
