import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/shrimp/detail/:id',
            name: 'shrimp.detail',
            component: Detail
        }
    ]
})

export default router