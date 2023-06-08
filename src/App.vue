<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store';
import CardsListContainer from './components/CardsListContainer.vue';


export default {
  components: {
    AppHeader,
    CardsListContainer,
  },
  data() {
    return {
      store,
    }
  },

};

</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <CardsListContainer />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
