<template>
  <div>
    <page-title>Color</page-title>
    <Message v-if="!isValid" class="custom-alert">
      This color is invalid! It's not RGB format...
      <i class="pi pi-exclamation-triangle"></i>
    </Message>
    <p v-if="isValid">You've picked a great color!</p>
    <flask-item v-if="isValid" class="flask__result" :color="mixtureEffectFill" :amount="100" :size="15"/>
    <div v-if="isValid" class="share-link">
      <i class="pi pi-share-alt"></i>
      <input type="text" :value="shareUrl" readonly />
    </div>
  </div>
</template>

<script>
import FlaskItem from '@/components/shared/FlaskItem.vue';
import PageTitle from '@/components/PageTitle.vue';
import Message from 'primevue/message';

export default {
  name: 'ColorShare',
  components: {
    FlaskItem,
    PageTitle,
    Message
  },
  props: {
    red: {
      type: Number,
      required: false,
      default: null
    },
    green: {
      type: Number,
      required: false,
      default: null
    },
    blue: {
      type: Number,
      required: false,
      default: null
    }
  },
  data() {
    return {
      isValid: true
    };
  },
  computed: {
    mixtureEffectFill () {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
    shareUrl () {
      return `${window.location.origin}/color/${this.red}/${this.green}/${this.blue}`;
    }
  },
  beforeMount() {
    this.validateParams();
  },
  methods: {
    validateParams() {
      const { red, green, blue } = this.$route.params;
      if (
        red === undefined || green === undefined || blue === undefined ||
        isNaN(red) || isNaN(green) || isNaN(blue) ||
        red < 0 || green < 0 || blue < 0 ||
        red > 255 || green > 255 || blue > 255
      ) {
        this.isValid = false;
      }
    }
  },
  hideAlert() {
    this.isValid = true;
  }
}
</script>

<style lang="scss" scoped>
.flask__result {
  margin: 20px auto;
}

.share-link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.share-link input {
  width: calc(100% - 2rem);
  padding: 10px;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}

.share-link i {
  font-size: 1.5rem;
  color: #637892;
  margin-right: 1rem;
}

.custom-alert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8d7da;
  border-left: 4px solid #f5c2c7;
  padding: 1rem;
  margin: 2rem 0;
}

.custom-alert i {
  margin-right: 15rem;
}
</style>
