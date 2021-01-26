<template>
   <div class="parent">
      <h2>Parent</h2>
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
</template>

<script>

export default {
	name: "Base",
	data() {
		return {
			transitionName: "slide-left",
		};
	},
	beforeRouteUpdate(to, from, next) {
		const toDepth = to.path.split("/").length;
		const fromDepth = from.path.split("/").length;
		this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
		next();
	},
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .75s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .75s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
