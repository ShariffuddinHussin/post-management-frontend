import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/auth/login.vue';
import register from '../components/auth/register.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name:'Login',
            component:login
        },
        {
            path: '/register',
            name:'Register',
            component: register
        }
    ]
})