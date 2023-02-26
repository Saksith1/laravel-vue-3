import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import VueSetup from '../pages/VueSetup.vue'
import Review from '../pages/Review.vue'
import ToDo from '../pages/ToDo.vue'
import ToDoCompositonAPI from '../pages/ToDoCompositionI.vue'
import StateMangement  from '../pages/StateManagement.vue'

const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/vue-setup',
        name:'vue-setup',
        component:VueSetup
    },
    {
        path:'/review',
        name: 'review',
        component:Review
    },
    {
        path:'/todo',
        name: 'todo',
        component:ToDo
    },
    {
        path:'/todo-composition-api',
        name: 'todoCompostionAPI',
        component:ToDoCompositonAPI
    },
    {
        path:'/state-management',
        name: 'state-management',
        component:StateMangement
    },
];

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;