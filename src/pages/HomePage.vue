<template>
    <div class="home__page">
        <div class="container">
            <h1>Список фильмов, сериалов и мультфильмов</h1>
            <FilmRow title="Топ-250 фильмов"></FilmRow>
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