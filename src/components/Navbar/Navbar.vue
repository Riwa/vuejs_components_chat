<template>
  <nav>
    <div class="nav-wrapper purple lighten-2">
      <a href="#!" class="brand-logo">Vue.js Components Chat</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#/saved">Saved messages</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="#/saved">Saved messages</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
$(document).ready(function(){
  $(".button-collapse").sideNav();
});
export default {
	name: 'navbar',
}
</script>

<style scoped>

</style>