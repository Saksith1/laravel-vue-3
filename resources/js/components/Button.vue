<template>
  <button @click="buttonClickedHanlder(35)">{{ title }}</button>
</template>

<!-- <script>
export default {
    props:{
        title:{
            type: String,
            default: 'No text'
        }
    }
}
</script> -->

<script setup>
    const props = defineProps({
        title:{
            type:String,
            default:'No Title'
        }
    })

    const emit = defineEmits(['buttonClicked'])

    const buttonClickedHanlder = (age) => {
        emit('buttonClicked',age)
    }

</script>

<style>

</style>