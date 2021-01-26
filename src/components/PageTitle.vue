<template>
	<div class="title">
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
export default {
	name: "PageTitle",
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
.title {
    text-align: center;
}
</style>