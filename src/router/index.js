import { createRouter, createWebHistory } from "vue-router";
import Home from "../todos/pages/TodoIndex.vue";
import Todos from "../todos/pages/component/TodosMain.vue";


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : '/',
            component : Home
        },
        {
            path : '/todos',
            component : Todos
        }
    ]
});

export default router ;