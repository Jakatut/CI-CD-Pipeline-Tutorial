<template>
	<div id="app">
		<div class="title">
			<h1>MatchUp</h1>
		</div>
		<div class="content">
			<transition name="fade" mode="out-in">
				<router-view class="view"></router-view>
			</transition>
		</div>
		<Navigation/>
	</div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
	name: "App",
	components: {
		Navigation,
	},
	data() {
		return {
			transitionName: "slide-left",
		};
	},
	beforeRouteUpdate(to, from, next) {
		const toDepth = to.path.split("/").length;
		const fromDepth = from.path.split("/").length;
		this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
		next();
	},
};
</script>

<style>
body {
	margin: 0 !important;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	display: flex;
}
.title {
	position: absolute;
}
.content {
	position: absolute;
}
.navigation {
	position: absolute;
	bottom: 0;
}
</style>
