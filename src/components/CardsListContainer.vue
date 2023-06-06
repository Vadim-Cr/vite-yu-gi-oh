<script>

import { store } from '../store';
import CardsList from './CardsList.vue';

export default {
    name: "CardsListContainer",
    components: {
        CardsList
    },
    data() {
        return {
            store: store // Assign the imported store to the local data property
        }
    },
    mounted() {
        console.log(this.store.cardsList);
    }

}

</script>


<template>
    <!-- * card yu gi oh esempio  -->
    <div class="listContainer">
        <div class="listTitle">
            <h2>Sono state trovate {{ store.cardsList.length }} carte</h2>
        </div>
        <div class="listSubContainer">
            <CardsList v-for="ygoCards in store.cardsList" :key="ygoCards.id" :card="ygoCards" />

        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.listContainer {
    margin-top: 5rem;
    background-color: white;
    width: 100%;
    padding: 1rem;

    .listSubContainer {
        @include center_between;
        flex-wrap: wrap;
    }

    h2 {
        background-color: black;
        color: white;
        padding: 1rem;
        text-align: center;
        margin-bottom: -0.01rem;
    }
}
</style>