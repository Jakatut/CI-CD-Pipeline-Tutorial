<template>
	<div class="emptyCard">
		<h3>{{ message }}</h3>
	</div>
</template>

<script>
export default {
	name: "EmptyCard",
	props: {
        message: {
            type: String,
            required: true
        }
	},
};
</script>

<style>
.emptyCard {
	height: 500px;
	width: 400px;
	border: solid;
	border-radius: 20px;
	text-align: center;
}
</style>
