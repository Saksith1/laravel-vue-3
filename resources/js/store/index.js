import { reactive,readonly } from "vue"
const state = reactive({
    counter : 0,
    colorCode: 'blue'
})

const methods = {
    decreaseCounter () {
        state.counter --
    },
    increaseCounter () {
        state.counter ++
    },
    setColorCode(val) {
        state.colorCode = val
    }
}

const getters = {
    counterSquare() {
        return state.counter * state.counter
    }
}
export default {
    state,
    methods,
    getters
}