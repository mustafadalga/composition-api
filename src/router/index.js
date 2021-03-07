import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/posts/:id',
    name: 'Details',
    component: () => lazyLoading('Details.vue'),
    props: true
}, {
    path: '/tags/:tag',
    name: 'SearchByTags',
    component: () => lazyLoading('SearchByTags.vue'),
    props: true
}, {
    path: '/search',
    name: 'search',
    component: () => lazyLoading('SearchResult.vue'),
    props: true
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

function lazyLoading(page) {
    return import (`@/views/${page}`)
}

export default router