<template>
    <div id="swipe">
        <MediaCardStack class="card-stack" />
    </div>
</template>

<script>
import MediaCardStack from './components/MediaCardStack.vue';

export default {
    name: 'Profile',
    components: {
        MediaCardStack,
    },
};
</script>
