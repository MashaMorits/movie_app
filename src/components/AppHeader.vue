<template>
    <header class='header'>
        <div class="container">
            <nav class="header__navigation">
                <router-link to="/">Главная</router-link>
                <router-link to="/favorites">Избранное<sup>{{ favorites.favoritesList.length }}</sup></router-link>
            </nav> 
        </div>
               
    </header>
</template>
<script setup>
    import { useFavoritesStore } from '@/store/favorites'
    const favorites = useFavoritesStore()
</script>
<style>
    .header{
        display: flex; 
        height: 60px;
        align-items: center;
        width: 100%;
        background: green;
        margin-bottom: 50px;
    }  
    .header__navigation{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .header__navigation a{
        color: white;
        text-decoration: none;
    }  
</style>