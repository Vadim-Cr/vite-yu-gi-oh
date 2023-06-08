<script>
import { store } from '../store';

export default {
    name: "SelectOptions",
    data() {
        return {
            store
        };
    },
    computed: {
        selectedOption: {
            get() {
                return this.store.searchOption;
            },
            set(value) {
                this.store.searchOption = value;
                this.$emit('selected', value); // Emits the 'selected' event when selectedOption changes
            }
        }
    }
};
</script>

<template>
    <div class="selector">
        <select v-model="selectedOption">
            <option value="" disabled>TYPE</option>
            <option value="Skill Card">Skill Card</option>
            <option value="Spell Card">Spell Card</option>
            <option value="Trap Card">Trap Card</option>
            <option value="Normal Monster">Normal Monster</option>
            <option value="Normal Tuner Monster">Normal Tuner Monster</option>
            <option value="Effect Monster">Effect Monster</option>
            <option value="Tuner Monster">Tuner Monster</option>
            <option value="Spirit Monster">Spirit Monster</option>
            <option value="Gemini Monster">Gemini Monster</option>
            <option value="Pendulum Tuner Effect Monster">Pendulum Tuner Effect Monster</option>
            <option value="Ritual Effect Monster">Ritual Effect Monster</option>
            <option value="Synchro Tuner Monster">Synchro Tuner Monster</option>
        </select>
    </div>
</template>
  

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.selector {
    padding: 1rem;
    width: 15rem;
}

.selector select {
    width: 100%;
    height: 2rem;
    border: none;
    font-size: 1rem;
    font-weight: bold;
}

.selector select option {
    color: black;
    font-weight: normal;
}
</style>
