<template lang="pug">
  #app.bg-gray-400.h-screen
    .w-full
      .flex.flex-row
        Sidebar
        Home
        Rightbar
    Footer
</template>

<script>
import Sidebar from './components/common/Sidebar.vue'
import Rightbar from './components/common/Rightbar.vue'
import Home from './views/Home.vue'
import Footer from './components/common/Footer.vue'
export default {
  name: 'App',
  components: {
    Sidebar,
    Home,
    Rightbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
