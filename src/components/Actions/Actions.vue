<template>
	<ul>
		<li class="like-message"><a href="#"><i class="material-icons">thumb_up</i></a></li>
		<li class="save-message"><a @click="saveMessage()" href="#"><i class="material-icons">save</i></a></li>
		<li class="delete-message"><a @click="deleteMessage()" href="#"><i class="material-icons">delete</i></a></li>
	</ul>
</template>

<script>
export default {
	name: 'actions',
	methods: {
		deleteMessage(){
			this.$emit('deleteMsg');
		},
		saveMessage(){
			this.$emit('saveMsg');
		},
	}
}
</script>

<style scoped>
	ul li {
		display: inline-block;
	}

	ul {
		position:absolute;
		top:15px;
		right:15px;
	}

	.like-message a {
		color: green;
	}

	.save-message a {
		color:blue;
	}

	.delete-message a{
		color:red;
	}
</style>