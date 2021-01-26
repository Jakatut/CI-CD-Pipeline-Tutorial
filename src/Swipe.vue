<template>
	<div id="swipe">
		<MediaCardStack class="card-stack" />
	</div>
</template>

<script>
import MediaCardStack from "./components/MediaCardStack.vue";

export default {
	name: "Profile",
    components: {
        MediaCardStack,
    },
};
</script>

<style>
body {
	margin: 0 !important;
}
.card-stack {
	margin-top: 75px;
}
#swipe {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
}
</style>
