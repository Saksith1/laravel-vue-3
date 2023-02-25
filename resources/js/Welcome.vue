<template>
  <h1>{{ title }}</h1>
  <router-view/>
</template>

<script>
export default {
    data() {
        return {
            title: 'Welcome page form vue '
        }
    }
}
</script>

<style>

</style>