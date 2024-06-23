<template>
  <header>
    <h1
      class="heading"
      v-text="'RGB Color Mixture'" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.heading {
  font-size: 3rem;
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
