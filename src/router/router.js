import HomePage from '@/pages/HomePage'
import FilmsPage from '@/pages/FilmsPage'
import FilmPage from '@/pages/FilmPage'
import FavoritesPage from '@/pages/FavoritesPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/allfilms',
        component: FilmsPage
    },
    {
        path: '/films/:id',
        component: FilmPage
    },
    {
        path: '/favorites',
        component: FavoritesPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router