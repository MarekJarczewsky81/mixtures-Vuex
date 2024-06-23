<template>
  <div class="page">
    <MessageAnimation />
    <!-- color mixin -->
    <ColorMixin />
  </div>
</template>

<script>
import ColorMixin from '@/components/ColorMixin';
import MessageAnimation from '@/components/shared/MessageAnimation.vue';

export default {
  name: 'MixinPage',
  components: {
    ColorMixin,
    MessageAnimation
  }
};
</script>


