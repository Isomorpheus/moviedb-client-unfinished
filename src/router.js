import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './features/HomePage.vue'
import MovieDetails from './features/movie/MovieDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/movies/:id',
    name: 'movie',
    component: MovieDetails,
    props: true,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
