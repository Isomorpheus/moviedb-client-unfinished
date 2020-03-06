<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import MovieListItem from './MovieListItem.vue'
import SearchInput from '../search/SearchInput.vue'
import { useSearch } from '../search'

export default {
  components: {
    MovieListItem,
    SearchInput,
  },

  setup() {

    const { movies, loading } = useMovies()
    const { searchText, filteredItems} = useSearch(movies)
    return {
      searchText,
      loading,
      movies: filteredItems,
    }
  },
}
// should return movies and loading ( they)
function useMovies() {
  const { result, loading } = useQuery(gql`
    query allMovies {
      movies {
        id
        name
        poster
        likes
      }
    }
  `)
  // const movies = computed(() => (result.value ? result.value.movies : []))
  const movies = useResult(result, [])

  return {
    movies,
    loading,
  }
}
</script>

<template>
  <section>
    <SearchInput
      v-model="searchText"
      placeholder="Search movies..."
      class="search-input"
    />

    <div v-if="loading" class="loading">
      Loading movies...
    </div>

    <div class="movies">
      <MovieListItem v-for="movie of movies" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<style scoped>
.search-input {
  margin: 32px;
  margin-bottom: 0;
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 32px;
  justify-content: space-between;
  padding: 32px;
}
</style>
