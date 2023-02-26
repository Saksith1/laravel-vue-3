<template>
  <button @click="alertHanlder">{{ title }}</button>
</template>

<!-- <script>
export default {
    props:{
        title:{
            type:String,
            default:'No Tittle'
        }
    }
}
</script> -->

<script setup>
    const props = defineProps({
        title:{
            type:String,
            default:'No Tittle'
        }
    })

    const emit = defineEmits(['clickButton'])

    const alertHanlder = () => {
        emit('clickButton',25)
    }


</script>

<style>

</style>