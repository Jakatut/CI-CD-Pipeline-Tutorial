<template>
    <div id="app">
        <div id="header">
            <h1>MatchUp</h1>
            <div v-if="!$auth.loading" class="login-logout">
                <!-- show login when not authenticated -->
                <button v-if="!$auth.isAuthenticated" @click="login">
                    Log in
                </button>
                <!-- show logout when authenticated -->
                <button v-if="$auth.isAuthenticated" @click="logout">
                    Log out
                </button>
            </div>
        </div>
        <div id="content">
            <router-view class="view"></router-view>
        </div>
        <Navigation id="navigation" v-if="!isSplashPage" />
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
    name: 'App',
    components: {
        Navigation,
    },
    computed: {
        isSplashPage() {
            console.log(this.$route);
            return this.$route.path === '/';
        },
    },
    methods: {
        login() {
            this.$auth.loginWithRedirect();
        },
        // Log the user out
        logout() {
            this.$auth.logout({
                returnTo: window.location.origin,
            });
        },
    },
};
</script>

<style>
body {
    margin: 0 !important;
}
#app {
    font-family: Avenir, HBaseelvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    text-align: center;
    display: flex;
    overflow: hidden;
    background: #06beb6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #06beb6,
        #48b1bf
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #06beb6, #48b1bf);
}
.login-logout {
    right: 0;
    position: absolute;
}
#header {
    display: flex;
    flex-direction: row;
}
#title {
    position: relative;
}
#content {
    position: absolute;
    margin-top: 75px;
}
#navigation {
    position: fixed;
    bottom: 0;
}
</style>
