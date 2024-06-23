<template>
  <div>
    <!-- text between -->
    <p v-text="'And the result...'" />

    <!-- mixture effect -->
    <div class="flask__wrapper">
      <flask-item
      :color="mixtureEffectFill"
      :amount="100"
      :size="15" />
    </div>

    <!-- rgb values -->
    <p>{{ mixtureEffectFill }}</p>

    <!-- refresh btn -->
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-sync" />

    <!-- help btn -->
    <button-item
      :size="4"
      icon="pi-question"
      @click="showModal" />

    <!-- share btn -->
    <router-link :to="shareUrl">
      <button-item
        icon="pi pi-share-alt"
        :size="4"
        :movement="-0.5"
        :font-size="1.5" />
    </router-link>

    <!-- modal -->
    <fade-animation>
      <modal-item
        :visible="modalVisible"
        @cancel="hideModal">
        <template v-slot:header>
          About the app
        </template>
        <template v-slot:body>
          Mix three colors to create the perfect one!
        </template>
        <template v-slot:footer>
          <button-item icon="pi-thumbs-up" />
        </template>
      </modal-item>
    </fade-animation>
  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import ButtonItem from './shared/ButtonItem.vue'
import ModalItem from './shared/ModalItem.vue'
import modalMixin from '../mixins/modalMixin.js'
import FadeAnimation from './shared/FadeAnimation.vue'

export default {
  name: 'ResultsBox',
  mixins: [modalMixin],
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    shareUrl () {
      const [red, green, blue] = this.mixtures.map(item => Math.floor(item.amount * 2.5));
      return `/color/${red}/${green}/${blue}`;
    }
  },
  components: {
    FlaskItem,
    ButtonItem,
    ModalItem,
    modalMixin,
    FadeAnimation
  }
}
</script>

<style lang="scss" scoped>
.flask__wrapper {
  width: fit-content;
  font-size: 20rem;
  margin: 0 auto;
}

.slide-fade-enter-active {
  transition: opacity .3s;
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-enter-to {
  opacity: 1;
}

</style>
