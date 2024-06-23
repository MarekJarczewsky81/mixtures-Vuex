<template>
  <!-- mixtures -->
  <ul class="mixtures">
    <flask-item
      v-for="(mixture, index) in mixtures"
      :key="index"
      :variant="mixture.variant"
      :amount="mixture.amount"
      @increment="$emit('increment', index)"
      @decrement="$emit('decrement', index)" />
  </ul>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue';

export default {
  name: 'MixturesList',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  components: { FlaskItem }
}
</script>

<style scoped lang="scss">
.mixtures {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
</style>
