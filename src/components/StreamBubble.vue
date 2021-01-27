<template>
    <div id="stream-bubble">
        <v-icon dark>
            Netflix
        </v-icon>
    </div>
</template>

<script>
export default {
    name: 'StreamBubble',
    props: {
        type: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
#stream-bubble {
    height: 75px;
    width: 75px;
    background-color: aquamarine;
    opacity: 0.5;
    border-radius: 20%;
}
</style>
