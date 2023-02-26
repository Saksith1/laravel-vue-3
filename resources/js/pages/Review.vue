<template>
  <h1>Hello my name is {{ name }} I'm  {{ age }}</h1>
  <TestButton title="Button Click Show" @clickButton="alertHanlder"/>
</template>

<!-- <script>
import {ref} from 'vue'
export default {
    setup() {
        const name = ref('Bob')
        const age = ref(25)

        return {
            name,age
        }
    }
}
</script> -->

<script setup>
import {ref} from 'vue'
import TestButton from '../components/TestButton.vue';
    const name = ref('John')
    const age = ref(25)

    const alertHanlder = (age) =>{
        alert(age)
    }
</script>
<style>

</style>