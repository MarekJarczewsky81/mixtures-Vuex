<template>
  <div class="colors-list">
    <flask-item
      v-for="(color, index) in RGBColors"
      :key="index"
      :color="color"
      :size="10"
      :amount="100"
      :buttonsVisible="false"
      :showRemoveButton="true"
      @remove="removeColor(index)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FlaskItem from './FlaskItem.vue';

export default {
  name: 'MyColorsList',
  components: {
    FlaskItem
  },
  computed: {
    ...mapGetters([ 'RGBColors' ])
  },
  methods: {
    ...mapActions(['removeColor']),
    formatColor(color) {
      return `rgb(${color.red}, ${color.green}, ${color.blue})`;
    }
  }
}
</script>

<style lang="scss" scoped>
.colors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
</style>
