<template>
  <div>
    <div class="row">
      <div class="col m2">
      </div>
      <div class="col m10">
        <savedmessages></savedmessages>
      </div>
    </div>
  </div>
</template>

<script>
import Savedmessages from './Savedmessages/Savedmessages.vue';
export default {
  name: 'saved',
  data () {
    return {
     // msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    savedmessages: Savedmessages,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
