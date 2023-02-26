<template>
   <div class="h-screen w-screen bg-white flex items-center justify-center">
        <div>
            <Nav/>
            <p class="text-center text-black p-2">You have {{ todosCount }} Todo</p>
            <input class="p-2 border-2 border-green-600" placeholder="Add a Todo" v-model="newTodoName" @keyup.enter="addTodo" />
            <ul>
                <li v-for="(todo ,index) in todos" :key="todo.id" class="border-2 text-green-600 border-green-600 flex justify-between items-center p-2 mt-2 mb-2">
                    <span>{{ todo.name }}</span>
                    <button class="text-red-600" @click="deleteTodo(index)">Delete</button>
                </li>
            </ul>
        </div>
   </div>
</template>

<script>

import Nav from '../components/Nav.vue'

export default {
    data() {
        return{
            newTodoName : '',
            todos: [
                {
                    id: 1,
                    name: 'One'
                },
                {
                    id: 2,
                    name: 'Two'
                },
                {
                    id: 3,
                    name: 'Three'
                }
            ],
            swearwords : ['fart', 'butt hair', 'willy']
        }
    },
    components  : {
        Nav
    },
    methods: {
        addTodo() {
            let newTodo= {
                id: Date.now(),
                name:this.newTodoName
            }
            this.todos.push(newTodo)
        },
        deleteTodo(index) {
            this.todos.splice(index)
            console.log(index)
        },
    },
    computed: {
        todosCount() {
            return this.todos.length
        }
    },
    watch: {
        newTodoName(newValue) {
            if(this.swearwords.includes(newValue.toLowerCase())) {
                this.newTodoName = ''
                alert('You must never say ' + newValue + '!!')
            }
        }
    }
}
</script>

<style>

</style>