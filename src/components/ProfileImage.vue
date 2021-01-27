<template>
    <div id="profile-image">
        <div id="circular-enclosure">
            <img :src="imageURL" alt="profile-image" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileImage',
    props: {
        imageURL: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
img {
    border-radius: 50%;
}
</style>
