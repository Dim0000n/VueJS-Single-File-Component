<!--template-->
<template>
    <div>
        <!--BaseUnputText template-->
        <BaseInputText
            v-model="newTodoText"
            placeholder="New todo"
            @keydown.enter="addTodo"
        />
        <!--List of TodoListItems-->
        <ul v-if="todos.length">
            <TodoListItem 
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @remove="removeTodo"
            />
        </ul>
        <!-- If there are no items in list-->
        <p v-else>
            Nothing left in the list. Add a new todo in the input above.
        </p>
    </div>
</template>

<!--script-->
<script>
//import dependences
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1 //id for next todo item

export default {
    components: {
        BaseInputText, TodoListItem //export components
    },
    data () {       //data
        return {
           newTodoText: '', //text for v-model of BaseInputText template  
           todos: [ //items
            {
                id: nextTodoId++,
                text: "Learn Vue"
            },
            {
                id: nextTodoId++,
                text: 'Learn about single-file components'
            },
            {
                id: nextTodoId++,
                text: 'Fall in love'
            }
           ] 
        }
    },
    methods: {
        //add item in list
        addTodo () {
            const trimmedText = this.newTodoText.trim() //delete space-symbol from begin and end of strgin
            if (trimmedText) { //if there is something
                this.todos.push({ //push in list
                    id: nextTodoId++,
                    text: trimmedText
                })
                this.newTodoText
            }
        },
        //remove item from list
        removetodo (idToRemove) {
            //filter array and delete cerain item
            this.todos = this.todos.filter(todo => {
                return todo.id !== idToRemove
            })
        }
    } 
}
</script>