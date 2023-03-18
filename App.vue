<!--Template-->
<template>
    <div id="app">
        <h1>My Todo App!</h1>
        <TodoList/>
    </div>
</template>


<!--Script-->
<script>
//import TodoList-component
import TodoList from 'components/TodoList.vue'

//export TodoList-component
export default {
    components: {
        TodoList
    }
}
</script>

<style lang="scss">
@import './variables.scss';

*, *::before, *::after {
    box-sizing: border-box;
}

</style>