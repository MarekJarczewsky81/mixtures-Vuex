<template>
  <div class="my_colors_page">
    <h1>My colors</h1>
    <my-colors-list />
  </div>
</template>

<script>
import MyColorsList from '@/components/shared/MyColorsList.vue';

export default {
  name: 'MyColorsPage',
  components: {
    MyColorsList
  }
}
</script>

<style lang="scss" scoped>
.my-colors-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f4f8;
}

.my-colors-page h1 {
  font-size: 2rem;
  color: #637892;
  margin-bottom: 2rem;
}
</style>
