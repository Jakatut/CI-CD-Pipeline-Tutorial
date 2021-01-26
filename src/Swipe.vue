<template>
	<div id="swipe">
		<PageTitle title="Swipe" />
		<MediaCardStack class="card-stack" />
	</div>
</template>

<script>
import MediaCardStack from "./components/MediaCardStack.vue";
import PageTitle from "./components/PageTitle.vue";

export default {
	name: "Profile",
	components: {
		MediaCardStack,
		PageTitle,
	},
};
</script>

<style>
.card-stack {
	margin-top: 75px;
}
</style>
