import Vue from 'vue';
import App from './App.vue';
import Profile from './Profile.vue';
import Swipe from './Swipe.vue';
import Matches from './Matches.vue';
import VueRouter from 'vue-router';
import { Auth0Plugin } from './auth';
import { domain, clientId } from '../auth_config.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        );
    },
});

library.add(faUserSecret);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/profile', component: Profile },
        { path: '/swipe', component: Swipe },
        { path: '/matches', component: Matches },
    ],
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
