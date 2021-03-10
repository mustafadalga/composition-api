import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Details = lazyLoad("Details")
const Search = lazyLoad("SearchResult")
const Tags = lazyLoad("SearchByTags")

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
}, {
    path: '/tags/:tag',
    name: 'SearchByTags',
    component: Tags,
    props: true
}, {
    path: '/search',
    name: 'search',
    component: Search,
    props: true
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

function lazyLoad(view) {
    return () =>
        import (`@/views/${view}.vue`)
}

export default router