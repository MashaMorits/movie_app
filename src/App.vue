<template>
  <AppHeader></AppHeader>
  <div class="app">
    
  </div>
  <router-view></router-view>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  width: 100%;
  max-width: 1300px;
  padding: 0 15px;
  margin: 0 auto;
}

button{
  background: green;
  color: white;
  text-transform: uppercase;
  padding: 7px 15px;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
}

h1{
  margin-bottom: 20px;
}
</style>
