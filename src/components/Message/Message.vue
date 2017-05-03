<template>
    <li class="collection-item avatar">
      <img src="../../assets/yuna.jpg" alt="" class="circle">
      <span class="title">{{ msg.content }}</span>
      <p>{{ msg.created }}</p>
      <actions @deleteMsg="deleteMsg" @saveMsg="saveMsg"></actions>
    </li>
</template>

<script>
import Actions from '../Actions/Actions.vue';
export default {
	name: 'message',
	props: ['msg'],
  components: {
    actions: Actions,
  },
  methods: {
    deleteMsg(){
			console.log('deleteMsg transmitted to child');
      this.$emit('deleteMsg');
		},
    saveMsg(){
      this.$emit('saveMsg');
    }
  }
}
</script>

<style scoped>
  li p {
    font-size:10px;
    color:rgb(173, 173, 173);
  }

</style>