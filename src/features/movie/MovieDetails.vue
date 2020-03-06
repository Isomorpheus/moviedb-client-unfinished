<script>
import { ArrowLeftIcon } from 'vue-feather-icons'
import MovieDetailsLikes from './MovieDetailsLikes.vue'
// import CommentList from './comment/CommentList.vue'

export default {
  components: {
    ArrowLeftIcon,
    MovieDetailsLikes,
    // CommentList,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  // @TODO
  data() {
    return {
      loading: true,
      movie: null,
    }
  },
}
</script>

<template>
  <div class="movie-details">
    <router-link :to="{ name: 'home' }" class="back">
      <ArrowLeftIcon class="icon" />
      Go back
    </router-link>

    <div v-if="loading" class="loading">Loading movie...</div>

    <template v-else>
      <h1 class="name">{{ movie.name }}</h1>
      <div class="content">
        <div class="details">
          <div class="poster">
            <img :src="movie.poster" alt="movie poster" class="poster" />
          </div>
        </div>

        <div class="social">
          <MovieDetailsLikes :movie="movie" />

          <!-- <hr />

          <CommentList :movie="movie" /> -->
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.movie-details {
  margin: 32px;
}

.back {
  display: flex;
  align-items: center;
  color: #999;
}

.back:hover {
  color: #bbb;
}

.back .icon {
  margin-right: 2px;
}

.content {
  display: flex;
}

.details {
  flex: none;
}

.name {
  font-size: 42px;
  font-weight: 300;
  margin: 16px 0;
}

.poster {
  width: 320px;
  height: 480px;
  border-radius: 8px;
  background: #444;
}

.social {
  margin-left: 32px;
  flex: 1;
}
</style>
