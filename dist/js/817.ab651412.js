"use strict";(self["webpackChunkmovie_project"]=self["webpackChunkmovie_project"]||[]).push([[817],{4817:function(i,t,e){e.r(t),e.d(t,{default:function(){return _}});var n=e(6252),s=e(3577);const a={class:"container"},r={class:"film__page"},o=["src"],f={class:"film__page-info"},l={class:"film__page-description"};function c(i,t,e,c,u,m){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",r,[(0,n._)("img",{src:u.filmInfo.posterUrlPreview,alt:""},null,8,o),(0,n._)("div",f,[(0,n._)("h1",null,(0,s.zw)(u.filmInfo.nameRu),1),(0,n._)("div",l,[(0,n._)("span",null,(0,s.zw)(u.filmInfo.description),1)]),(0,n._)("button",{onClick:t[0]||(t[0]=i=>c.favorites.updateFavorites(u.filmInfo))},(0,s.zw)(m.isFav()?"Удалить из избранного":"Добавить в избранное"),1)])])])}var u=e(4857),m=e(7069),d={name:"FilmPage",data(){return{filmInfo:[]}},setup(){const i=(0,m.t)();return{favorites:i}},methods:{async fetchFilmInfo(){try{const i=await u.Z.get(`v2.2/films/${this.$route.params.id}`);this.filmInfo=i.data}catch{alert("ошибка")}},isFav(){if(this.favorites.favoritesList.find((i=>i.kinopoiskId==this.$route.params.id)))return!0}},mounted(){this.fetchFilmInfo()}},v=e(3744);const p=(0,v.Z)(d,[["render",c]]);var _=p}}]);
//# sourceMappingURL=817.ab651412.js.map