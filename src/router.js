import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('./views/Projects.vue')
        },
        {
            path: '/projects/:slug',
            name: 'ProjectPage',
            component: () =>import('./views/ProjectPage')

        }
  

    ]
})