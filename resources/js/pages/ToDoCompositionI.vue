<template>
   <div class="h-screen w-screen bg-white flex items-center justify-center">
        <div>
            <!-- <Nav/> -->
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

<script setup>

import Nav from '../components/Nav.vue'
import {ref , computed, watch} from  'vue'

const todos = ref([
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
            ]);

const swearwords = ref(['fart', 'butt hair', 'willy'])

const newTodoName = ref('')

const addTodo = () => {
    let newTodo= {
        id: Date.now(),
        name:newTodoName.value
    }
    todos.value.push(newTodo)
    newTodoName.value = ""
};
const deleteTodo = (index) => {
    todos.value.splice(index)
    console.log(index)
};

const todosCount = computed(() => {
        return todos.value.length
})

watch (newTodoName,(newValue) => {
    if(swearwords.value.includes(newValue.toLowerCase())) {
        newTodoName.value = ''
        alert('You must never say ' + newValue + '!!')
    }
})

</script>

<style>

</style>