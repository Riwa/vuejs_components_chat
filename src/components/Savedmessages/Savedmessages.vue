<template>
	<div>
	<p>Saved messages</p>
	<ul class="collection messages-list">
		<message v-for="savedMessage in savedMessages" :msg="savedMessage"></message>
	</ul>
	</div>
</template>

<script>
import Message from '../Message/Message.vue';

export default {
	name: 'savedmessages',
	components: {
		message: Message,
	},
	data() {
		return {
			url: 'http://localhost:3000/savedMessages',
			savedMessages: [],
		}
	},
	created() {

		this.$http.get(this.url).then(function (reponse) {
			this.savedMessages = reponse.body;
			console.log(this.savedMessages);
		});
	},
}
</script>

<style scoped>

</style>