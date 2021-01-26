<template>
	<div class="cards">
		<vue-swing
			@throwout="throwout"
			@throwin="throwin"
			:config="config"
			ref="vueswing"
		>
			<GameCard
				:class="index == currentIndex ? 'top-card' : 'card'"
				v-for="(card, index) in cards.slice(0, displayLimit)"
				:key="index"
				:card="card"
				:index="index"
			/>
		</vue-swing>
		<EmptyCard message="No more cards." :class="cards.length == 0 ? 'top-card' : 'card bottom-card'"/>
	</div>
</template>
    
<script>
import VueSwing from "vue-swing";
import GameCard from "./MediaCard.vue";
import EmptyCard from "./EmptyCard";

export default {
	components: {
		VueSwing,
		GameCard,
        EmptyCard,
	},
	data() {
		return {
			displayLimit: 5,
			currentIndex: 0,
			cards: [
				{
					title: "Title1",
					description: "Description1",
					imageURL:
						"https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg",
				},
				{
					title: "Title2",
					description: "Description2",
					imageURL:
						"https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg",
				},
			],
			currentCard: 0,
			config: {
				allowedDirections: [VueSwing.Direction.LEFT, VueSwing.Direction.RIGHT],
				minThrowOutDistance: 120,
				maxRotation: 80,
			},
		};
	},
	methods: {
		remove() {
			this.swing();
			setTimeout(() => {
				this.cards.pop();
			}, 100);
		},
		swing() {
			const cards = this.$refs.vueswing.cards;
			cards[this.currentIndex].throwOut(
				Math.random() * 100 - 50,
				Math.random() * 100 - 50
			);
		},
		throwout() {
			this.cards.pop();
		},
        throwin(){
        },
	},
};
</script>

<style scoped>
.cards {
	position: relative;
}
.card {
	position: absolute;
	top: 0;
	opacity: 1;
}
.top-card {
	z-index: 9;
}
.bottom-card {
    z-index: -1;
}
</style>
