<script>
export default {
    name: "CardsList",
}
</script>

<template>
    <!-- * card yu gi oh esempio  -->
    <div class="cardContainer">
        <img src="https://source.unsplash.com/random/800x600
                                                " alt="here a pic">
        <h3>Card name</h3>
        <h5>card character type</h5>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.cardContainer {
    background-color: $primary;
    min-height: 10rem;
    max-width: 25rem;
    margin: 3rem;
    padding: 2rem;
    @include center;
    flex-direction: column;

    img {
        max-height: 15rem;
        object-fit: contain;
    }
}
</style>
