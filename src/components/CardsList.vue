<script>


export default {
    name: "CardsList",
    props: ['card'],

}
</script>

<template>
    <!-- * card yu gi oh esempio  -->
    <div class="cardContainer">
        <img :src="card.card_images[0].image_url" alt="here a pic">
        <h3>{{ card.race }}</h3>
        <h5>{{ card.archetype }}</h5>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.cardContainer {
    background-color: $primary;
    min-height: 10rem;
    max-width: 25rem;
    margin: 1rem;
    padding: 2rem;
    @include center;
    flex-direction: column;

    h3 {
        color: white;
        font-weight: bold;
    }

    img {
        max-height: 10rem;
        object-fit: contain;
    }
}
</style>
