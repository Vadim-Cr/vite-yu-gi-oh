<script>
import AppHeader from './components/AppHeader.vue';
import CardsList from './components/CardsList.vue';
import axios from "axios";

export default {
  components: {
    AppHeader,
    CardsList
  }
};

</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <CardsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
