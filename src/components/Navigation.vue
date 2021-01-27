<template>
    <div class="navigation">
        <div class="footer-link">
            <router-link to="profile" v-slot="{ navigate, href }" custom>
                <a :href="href" @click="navigate">Profile</a>
            </router-link>
        </div>
        <div class="footer-link">
            <router-link to="swipe" v-slot="{ navigate, href }" custom>
                <a :href="href" @click="navigate">Swipe</a>
            </router-link>
        </div>
        <div class="footer-link">
            <router-link to="matches" v-slot="{ navigate, href }" custom>
                <a :href="href" @click="navigate">Matches</a>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
};
</script>

<style scoped>
.navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    border: 1px black solid;
    height: 50px;
    background-color: white;
}
.footer-link {
    height: 100%;
    margin-top: 15px;
}
</style>
