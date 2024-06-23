<template>
  <transition
    :class="['custom-slide-fade-transition', speedClass]"
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutLeft">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFadeAnimation',
  props: {
      speedClass: {
          type: String,
          default: ''
      }
  }
}
</script>

<style scoped>
.slide-fade-animation-enter-active,
.slide-fade-animation-leave-active {
  transition: all 0.5s;
}

.slide-fade-animation-enter,
.slide-fade-animation-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
