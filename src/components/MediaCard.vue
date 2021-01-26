<template>
	<div class="imageCard">
		<img :src="card.imageURL" class="mediaCardImage" />
		<h3>{{ card.title }}</h3>
		<p>{{ card.description }}</p>
	</div>
</template>

<script>
export default {
	name: "MediaCard",
	props: {
		card: {
			type: Object,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
	},
};
</script>

<style scoped>
.imageCard {
	height: 500px;
	width: 400px;
	border: solid;
	border-radius: 20px;
	text-align: center;
}
.mediaCardImage {
	user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	pointer-events: none;
	border-radius: 15px;
	height: 100%;
	width: 100%;
}
</style>
