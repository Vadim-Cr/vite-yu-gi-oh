<script>

import CardsList from './CardsList.vue';
export default {
    name: "CardsListContainer",
    components: {
        CardsList
    }
}

</script>


<template>
    <!-- * card yu gi oh esempio  -->
    <div class="listContainer">
        <div class="listTitle">
            <h2>Sono state trovate N carte</h2>
        </div>
        <div class="listSubContainer">
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
            <CardsList />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.listContainer {
    margin-top: 5rem;
    background-color: white;
    min-height: 70%;
    width: 100%;
    padding: 1rem;

    .listSubContainer {
        @include center;
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