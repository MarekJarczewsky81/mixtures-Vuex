<template>
  <div class="error-page">
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

p {
  font-size: 24px;
}
</style>
