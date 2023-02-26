<template>
  <router-view/>
</template>

<script>
import store from './store/index'
import {provide} from 'vue'
 
export default {
    setup() {
        provide('store', store)
    },
    data() {
        return {
            title: 'Welcome page form vue '
        }
    }
}
</script>

<style>

</style>