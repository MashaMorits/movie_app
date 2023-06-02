
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage')
    },
    {
        path: '/allfilms',
        component: () => import('@/pages/FilmsPage')
    },
    {
        path: '/films/:id',
        component: () => import('@/pages/FilmPage')
    },
    {
        path: '/favorites',
        component: () => import('@/pages/FavoritesPage')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router