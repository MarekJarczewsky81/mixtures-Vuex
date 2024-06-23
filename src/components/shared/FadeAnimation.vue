<template>
  <transition
    name="custom-transition"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>
