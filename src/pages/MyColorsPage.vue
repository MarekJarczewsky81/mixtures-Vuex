<template>
  <div>
    <h1>My colors</h1>
    <ul class="mixtures">
      <li
        :key="index"
        v-for="(color, index) in colors">
        {{ color }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MyColorsPage',
  computed: {
    ...mapState(['colors']),
    colors () {
      return this.$store.state.colors
    },
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
