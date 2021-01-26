import Vue from "vue";
import App from "./App.vue";
import Profile from "./Profile.vue";
import Swipe from "./Swipe.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const Bar = { template: '<div class="bar">bar</div>' };

const router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes: [
		{ path: "/profile", component: Profile },
		{ path: "/swipe", component: Swipe },
		{ path: "/bar", component: Bar },
	],
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
