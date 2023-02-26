<template>
  <h1>My name is {{ name }}, I'm {{ age }} years old</h1>
  <button @click="changeHandler">Change</button>
  <Button @click="showAlert" />
</template>

<!-- 
  components: { Button },<script>

import { ref } from 'vue'

export default {
    setup() {
        const name = ref('Bob')
        const age = ref(24)

        return {
            name, 
            age
        }
    }
}
</script> -->

<script setup>

import {ref} from 'vue'
import Button from '../components/Button.vue'


const name = ref('Bob')
const age = ref(24)

const changeHandler = () => {
    name.value = 'John'
    age.value = 21
}

const showAlert = (newAge) => {
    // alert('Child was Clicked')
    age.value = newAge
}

</script>

<style>

</style>