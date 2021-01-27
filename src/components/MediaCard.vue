<template>
    <div class="imageCard">
        <img :src="card.imageURL" class="mediaCardImage" />
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'MediaCard',
    props: {
        card: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style scoped>
.imageCard {
    height: 550px;
    width: 350px;
    border: solid;
    border-radius: 20px;
}
.mediaCardImage {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-style: inset;
    width: 100%;
}
</style>
