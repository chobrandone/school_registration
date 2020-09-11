import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatComponent from '../components/CreateComponent.vue';
import EditComponent from '../components/EditComponent.vue';
import ListComponent from '../components/ListComponent.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: CreatComponent
    },
    {
        path: '/view',
        name: 'view',

        component: EditComponent
    },
    {
        path: '/edit/:id',
        name: 'edit',

        component: ListComponent
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router