<template>
  <div class="page">
    <h1>Kodilla - Kurs Vue - Marek Jarczewski - 06.2024</h1>
    <p>This app was built with Vue.js</p>
    <p>It uses PrimeVue components and SCSS styles</p>
    <img
      :class="{ 'animate__animated animate__jackInTheBox': animateLogo }"
      @animationend="animationEnded"
      @click="triggerAnimation"
      src="@/assets/vuejs.png"
      alt="Vue logo"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'AboutPage',
  setup() {
    const animateLogo = ref(false);

    const triggerAnimation = () => {
      animateLogo.value = true;
    };

    const animationEnded = () => {
      animateLogo.value = false;
    };

    onMounted(() => {
      animateLogo.value = true;
    });

    return {
      animateLogo,
      triggerAnimation,
      animationEnded
    };
  }
};
</script>

<style>

img {
  width: 650px;
  height: auto;
  margin-top: 2rem;
}

</style>
