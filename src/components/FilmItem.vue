<template>
    <div class="film__item" >
        <img :src='film.posterUrlPreview' alt="">
    </div>
</template>
<script>
export default {
    name: 'FilmItem',
    props: {
        film: Object
    }
}
</script>
<style>
      .film__item {
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        cursor: pointer;
        transform: scale(1);
        transition: all .2s linear;
        
      }
      .film__item:hover{
        transform: scale(1.05);
        transition: all .3s linear;
      }
      .film__item img{
            width: 100%;
            height: auto;
        }
</style>