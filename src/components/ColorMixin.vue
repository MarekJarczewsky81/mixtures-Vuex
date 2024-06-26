<template>
  <div>

    <!-- mixtures list -->
    <mixtures-list
      :mixtures="mixtures"
      @increment="incrementMixture"
      @decrement="decrementMixture" />

    <!-- result box -->
    <result-box
      @refresh="refreshMixtures"
      :mixtures="mixtures" />

  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ColorMixin',
  computed: {
    ...mapGetters(['mixtures'])
  },
  methods: {
    ...mapActions([
      'incrementMixture',
      'decrementMixture',
      'refreshMixtures',
      'modifyMixture'
    ])
    // modifyMixture(index, color) {
    // this.$store.dispatch('modifyMixture', { index, color });
    // },
    // increment (index) {
    //   const mixture = this.mixtures[index]
    //   if (mixture.amount === 100) return false
    //   mixture.amount++
    // },

    // decrement (index) {
    //   const mixture = this.mixtures[index]
    //   if (mixture.amount === 0) return false
    //   mixture.amount--
    // },

    // refresh () {
    //   this.mixtures = this.mixtures.map(item => ({ ...item, amount: 50 }))
    // }
  },
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
