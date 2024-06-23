<template>
  <div>

    <!-- mixtures list -->
    <mixtures-list
      :mixtures="mixtures"
      @increment="increment"
      @decrement="decrement" />

    <!-- result box -->
    <result-box
      @refresh="refresh"
      :mixtures="mixtures" />

  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'

export default {
  name: 'ColorMixin',
  data: () => ({
    mixtures: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }]
  }),
  methods: {
    increment (index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 100) return false
      mixture.amount++
    },

    decrement (index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 0) return false
      mixture.amount--
    },

    refresh () {
      this.mixtures = this.mixtures.map(item => ({ ...item, amount: 50 }))
    }
  },
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
