import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home.vue';
import projects from './views/projects.vue';
import projectPage from './views/projectPage';
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/projects',
            name: 'projects',
            component: projects
        },
        {
            path: '/projects/:slug',
            name: 'projectPage',
            component: projectPage

        }
  

    ]
})