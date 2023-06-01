import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
     favoritesList: []
  }),
  
  actions: {
    updateFavorites(film) {
      
      if (this.favoritesList.find(el => el.kinopoiskId === film.kinopoiskId)) {

        this.favoritesList = this.favoritesList.filter(item => item.kinopoiskId != film.kinopoiskId)

      } else {
        
        this.favoritesList.push(film)

      }
     
    },
  },
})