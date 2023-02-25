import { createApp } from "vue";

import Welcome from "./Welcome.vue"

import router from "./router/index";

const app =createApp(Welcome);

// createApp(Welcome).use(router)
// const app = createApp({
//     components: {
//         Welcome,
//     }
// });
app.use(router)
app.mount('#app')
