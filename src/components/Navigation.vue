<template>
	<div class="navigation">
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
</template>

<script>
export default {
	name: "Navigation",
};
</script>
