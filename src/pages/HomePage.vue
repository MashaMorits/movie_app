<template>
    <div class="home__page">
        <div class="container">
            <h1>Список фильмов, сериалов и мультфильмов</h1>
            <FilmRow title="Топ-250 фильмов" fetchURL="v2.2/films/top?type=TOP_250_BEST_FILMS&page=1"></FilmRow>
            <FilmRow title="Топ-100 популярных фильмов" fetchURL="v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"></FilmRow>
            <RouterView></RouterView>
        </div>
    </div>    
</template>
<script>
import FilmRow from '@/components/FilmRow.vue';

export default {
    name: 'HomePage',
    components: {
    FilmRow
  }
}
</script>
<style>
    
</style>