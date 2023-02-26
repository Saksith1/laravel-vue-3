<template>
  <div class="h-screen w-screen bg-white flex items-center justify-center text-black">
    <div>
        <h1 class="w-full text-center p-20 text-[60px]" :style="{ color: colorCode }">{{ store.state.counter }}</h1>
        <div class="text-center">
            {{ store.state.counter }}
            <sup>2</sup> = {{ store.getters.counterSquare() }}
        </div>
        <div class="flex items-center">
            <button class="w-[80px] h-[60px] bg-gray-100 border-2 text-[40px] leading-[60px] block m-4" @click="store.methods.decreaseCounter">-</button>
            <button class="w-[80px] h-[60px] bg-gray-100 border-2 text-[40px] leading-[60px] block m-4" @click="store.methods.increaseCounter">+</button>
        </div>

        <div class="text-center">
            <input placeholder="Enter color code" v-model="store.state.colorCode ">
        </div>
    </div>
  </div>
</template>

<script setup>
    import {ref,inject, computed} from 'vue'
    // const counter = ref(0)

    // const decreaseCounter = () => {
    //     counter.value --
    // }

    // const incrreaseCounter = () => {
    //     counter.value ++
    // }

    const store = inject('store')

    const colorCode = computed({
        get() {
            return store.state.colorCode
        },
        set(val) {
            store.methods.setColorCode
        }
    })
</script>

<style>

</style>