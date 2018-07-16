<template>
  <div id="app">
    <a href="./home.html">{{message}}</a>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: '多页面应用'
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
