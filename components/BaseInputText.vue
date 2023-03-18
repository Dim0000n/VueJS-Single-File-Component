<!--Template-->
<template>
    <input
        type="text"
        class="input"
        :value="value"
        v-on="listeners"
    >
</template>


<!--Script-->
<script>
export default {
    props: {
        //set 'value' variable 
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        //set 'listeners' function
        listeners () {
            return {
            // Pass all component listeners directly to input
            ...this.listeners,
            // Override input listener to work with v-model
            input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid $vue-blue;
}
</style>