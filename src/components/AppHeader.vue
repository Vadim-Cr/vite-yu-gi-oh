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
header {
    padding-bottom: 2rem;

    h1 {
        background-color: white;
        padding: 2rem;


    }
}
</style>
