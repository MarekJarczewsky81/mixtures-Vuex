<template>
  <div v-if="showAlert" :class="{ 'animate__animated animate__bounce': isBouncing }">
    <Message class="custom-alert">
      Warning! This app is still in development...
      <i class="pi pi-exclamation-triangle"></i>
      <button @click="closeAlert" class="close-btn"></button>
    </Message>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Message from 'primevue/message';

export default {
  name: 'MessageAnimation',
  components: {
    Message
  },
  setup() {
    const showAlert = ref(true);
    const isBouncing = ref(false);

    const closeAlert = () => {
      showAlert.value = false;
    };

    onMounted(() => {
      setTimeout(() => {
        isBouncing.value = true;
      }, 2000); // Animacja po 2 sekundach
    });

    return {
      showAlert,
      isBouncing,
      closeAlert
    };
  }
};
</script>

<style lang="scss" scoped>
.custom-alert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffecb3;
  border-left: 4px solid #ffa000;
  padding: 1rem;
  margin: 1rem 0;
}

.custom-alert i {
  margin-right: 15rem;
}

.close-btn {
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
