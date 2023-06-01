<template lang="">
    <div class='favorites__page'>
        <div class="container">
            <h1>Избранные фильмы и сериалы</h1>
            <div class="favorites__page-wrap">
                <FilmItem 
                    v-for="film in favorites.favoritesList" 
                    :key="film.imdbId" 
                    :film="film"
                    @click="$router.push(`/films/${film.kinopoiskId}`)">
                </FilmItem>
            </div>  
        </div>      
    </div>
</template>

<script>
import { useFavoritesStore } from '@/store/favorites'
import FilmItem from '@/components/FilmItem.vue'
export default {
    setup() {
        const favorites = useFavoritesStore()            
        return {favorites}
    },
    components: {
        FilmItem
    }
}
</script>

<style>
    .favorites__page-wrap{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 15px; 
    }
</style>