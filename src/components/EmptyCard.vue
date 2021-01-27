<template>
    <div class="emptyCard">
        <h3>{{ message }}</h3>
    </div>
</template>

<script>
export default {
    name: 'EmptyCard',
    props: {
        message: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.emptyCard {
    height: 550px;
    width: 350px;
    border: solid;
    border-radius: 20px;
}
</style>
