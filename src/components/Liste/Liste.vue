<template>
	<div>
	  <ul class="collection messages-list">
			<message @deleteMsg="deleteMsg(message)" @saveMsg="saveMsg(message)" v-for="message in messages" :key="message.id" :msg="message"></message>
  	</ul>
		<envoyer @send="pushMessage($event)"></envoyer>
	</div>
</template>

<script>
import Message from './../Message/Message.vue';
import Envoyer from './../Envoyer/Envoyer.vue';
export default {
	name: 'liste',
	data() {
		return {
			messages: [],
			savedMessages: [],
			url: 'http://localhost:3000/messages',
		}
	},
	created() {

		this.$http.get(this.url).then(function (reponse) {
			this.messages = reponse.body;
			//console.log(reponse.body);
		});
	},
	components: {
		message: Message,
		envoyer: Envoyer,
	}, 
	methods: {
		pushMessage(content){
			this.$http.post(this.url, content).then(function(reponse) {
				console.log('message pushed');
				this.messages.push(content);
			});
		},
		deleteMsg(message){
			console.log(message);
			console.log('Message deleted');
			this.$http.delete(this.url+'/'+ message.id).then(function(reponse){
				this.messages.splice(this.messages.indexOf(message), 1);
			});
		},
		saveMsg(message){
			this.$http.post('http://localhost:3000/savedMessages', message).then(function(reponse){
				
			});
		}
	}
}
</script>

<style scoped>
	.messages-list {
		height: 700px;
		overflow-y:auto;
		overflow-x:hidden;
	}
</style>