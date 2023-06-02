<template>
    <div class="container">
        <div class="film__page">
            <img :src="filmInfo.posterUrlPreview" alt="">
            <div class="film__page-info">
                <h1>{{ filmInfo.nameRu }}</h1>
                <div class="film__page-description">
                    <span>{{ filmInfo.description }}</span>
                </div>
                <button
                    @click="favorites.updateFavorites(filmInfo)"
                >{{isFav() ? 'Удалить из избранного' : 'Добавить в избранное'}}</button>
            </div>   
        </div>     
    </div>
</template>


<script>

import api from '@/api/api'
import { useFavoritesStore } from '@/store/favorites'
export default {
    name: 'FilmPage',
    data() {
        return {
            filmInfo: [],            
        }
    },
    setup() {
        const favorites = useFavoritesStore()
        
        return {favorites}
    },
    methods: {
        async fetchFilmInfo() {
            try {
                const response = await api.get(`v2.2/films/${this.$route.params.id}`)           
                this.filmInfo = response.data

            } catch {
                alert('ошибка')
            }
        },

        isFav() {            
            if(this.favorites.favoritesList.find(el => el.kinopoiskId == this.$route.params.id)) {
                return true
            }
        }
    },
    mounted() {
        this.fetchFilmInfo()
    }
}
</script>

<style>
    .film__page{
        display: flex;
        gap: 20px;
    }

    .film__page-info{
        text-align: left;
    }
    .film__page-description{
        text-align: left;
        margin-bottom: 5px;
    }
    .film__page-description span{
        margin-right: 5px;
    }
</style>