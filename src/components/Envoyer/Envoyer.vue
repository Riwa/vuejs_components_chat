<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s11">
          <textarea id="textarea1" class="materialize-textarea" v-model="newMessage.content"></textarea>
          <label for="textarea1">Envoyer un message</label>
        </div>
				<div class="col s1"><a @click="sendMessage"class="btn-floating btn-large waves-effect waves-light pulse purple accent-4"><i class="material-icons">send</i></a></div>
      </div>
    </form>
  </div>
</template>

<script>
	export default {
		name: 'envoyer',
		data() {
			return {
				newMessage: {
					content: '',
					created: new Date(),
				},
			}
		},
		methods: {
			sendMessage(){
				this.$emit('send', this.newMessage);
				this.newMessage = {
					content: '',
					created: new Date(),
					};
			}
		}
	}
</script>

<style scoped>

</style>