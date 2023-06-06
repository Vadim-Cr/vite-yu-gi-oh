<script>
export default {
    name: "AppHeader",
    props: ["message"]
};

</script>

<template>
    <header>
        <h1>{{ message }}</h1>
    </header>
</template>

<style scoped lang="scss">
h1 {
    background-color: white;
    padding: 2rem;
    height: 5rem;
}
</style>
