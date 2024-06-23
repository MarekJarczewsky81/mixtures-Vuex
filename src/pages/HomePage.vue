<template>
  <div>
    <MessageAnimation />
    <h1>This is a simple application about mixing Red, Green, and Blue colors together. Just click the MIXIN icon on the right and have fun!</h1>
  </div>
</template>

<script>
import MessageAnimation from '../components/shared/MessageAnimation.vue';

export default {
  name: 'HomePage',
  components: {
    MessageAnimation
  }
};
</script>

