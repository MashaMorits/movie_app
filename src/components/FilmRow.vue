<template>
    <div class="film__row">
        <h2>{{ props.title }}</h2>  
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

<script setup>

    import api from '@/api/api'
    import FilmItem from './FilmItem.vue'
    import { ref } from 'vue'
    import { defineProps } from 'vue'
    import { onMounted } from 'vue'       

    const props = defineProps({

        title: String,
        fetchURL: String

    })
        
    let films = ref([])

    async function fetchFilms() {

        try {
            const response = await api.get(`${props.fetchURL}`)           
            films.value = response.data.films.slice(0, 6)

        } catch {
            alert('ошибка')
        }
        
    }
        

    onMounted(() => fetchFilms()) 

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