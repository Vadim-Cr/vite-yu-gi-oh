<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store';
import CardsListContainer from './components/CardsListContainer.vue';
import axios from "axios";

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
  methods: {
    getCards() {
      axios.get(store.apiURL)
        .then(result => {
          store.cardsList = result.data.data
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getCards()
  }
};

</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <CardsListContainer />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
