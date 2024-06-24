<template>
  <div class="colors-list">
    <flask-item
      v-for="(color, index) in colors"
      :key="index"
      :color="formatColor(color)"
      :size="10"
      :amount="100"
      :buttonsVisible="false"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FlaskItem from './FlaskItem.vue';

export default {
  name: 'MyColorsList',
  components: {
    FlaskItem
  },
  computed: {
    ...mapState(['colors'])
  },
  methods: {
    formatColor(color) {
      return `rgb(${color.red}, ${color.green}, ${color.blue})`;
    }
  }
}
</script>

<style lang="scss" scoped>
.colors-list {
  display: flex;
  gap: 15rem;
  justify-content: center;
}
</style>
