<script>
import AppHeader from './components/AppHeader.vue';
// import CardsList from './components/CardsList.vue';
import CardsListContainer from './components/CardsListContainer.vue';
import axios from "axios";

export default {
  components: {
    AppHeader,
    CardsListContainer,
    // CardsList
  }
};

</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <!-- <CardsList /> -->
  <CardsListContainer />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
