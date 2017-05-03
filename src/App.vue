<template>
  <div id="app">
  <navbar></navbar>
  <sidebar></sidebar>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
export default {
  name: 'app',
  components: {
    navbar: Navbar,
    footerVue: Footer,
    sidebar: Sidebar,
  }
}
</script>

<style>
#app {

}
</style>
