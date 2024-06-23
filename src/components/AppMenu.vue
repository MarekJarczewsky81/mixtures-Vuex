<template>
  <Menubar :model="items" class="menuBar">
    <template #item="{ item, props }">
      <router-link :to="item.to" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </router-link>
    </template>
  </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar';

export default {
  name: 'AppMenu',
  components: {
    Menubar
  },
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-filter',
          to: '/mixin'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info',
          to: '/about'
        }
      ]
    };
  }
};
</script>

<style scoped>
.menuBar {
  border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107,154,212,0.3);
  overflow: hidden;
}
</style>
