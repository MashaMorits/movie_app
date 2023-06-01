<template>
    <div class="film__row">
        <h2>{{ title }}</h2>  
        <div class="film__row-wrap">
            <FilmItem 
                v-for="(film, index) in films" 
                :key="film.id" 
                :film="film" 
                :index="index" 
                @click="$router.push(`/films/${film.filmId}`)"
                >
            </FilmItem>
        </div>      
        <button
            @click="$router.push(`/allfilms`)"
        >
            Смотерть ещё
        </button>
    </div>
        
    
</template>

<script>
import api from '@/Api/api'
import FilmItem from './FilmItem.vue'
export default {
    name: 'FilmRow',
    data() {
        return {
            films: []
        }
    },
    components: {
        FilmItem
    },
    props: {
        title: String
    },
    methods: {
        async fetchFilms() {
            try {
                const response = await api.get(`v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`)  
                console.log(response.data.films)            
                this.films = response.data.films.slice(0, 6)

            } catch {
                alert('ошибка')
            }
        }
    },
    mounted() {
        this.fetchFilms()
    }
}
</script>


<style>
    .film__row{
        margin-top: 30px;
    }
    .film__row-wrap{
        display: flex;
        gap: 10px;
        margin-top: 30px;
    }
</style>