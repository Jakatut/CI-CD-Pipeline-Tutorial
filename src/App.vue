<template>
	<div id="app">
		<h1>MatchUp</h1>
		<div class="footer">
			<router-link to="/profile" custom v-slot="{ navigate, href, route }">
				<a :href="href" @click="navigate">
					<button class="footer-link">{{ route.fullPath }}</button>
				</a>
			</router-link>
			<router-link to="/swipe" custom v-slot="{ navigate, href, route }">
				<a :href="href" @click="navigate">
					<button class="footer-link">{{ route.fullPath }}</button>
				</a>
			</router-link>
			<router-link to="/matches" custom v-slot="{ navigate, href, route }">
				<a :href="href" @click="navigate">
					<button class="footer-link">{{ route.fullPath }}</button>
				</a>
			</router-link>
		</div>
		<transition name="fade" mode="out-in">
			<router-view class="view"></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: "App",
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
	display: flex;
	justify-content: center;
}
.footer {
	position: absolute;
	bottom: 0;
}
</style>
