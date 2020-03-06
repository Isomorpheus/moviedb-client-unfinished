<script>
import { HeartIcon } from 'vue-feather-icons'
import { useToggleLike } from './like'

export default {
  components: {
    HeartIcon,
  },

  props: {
    movie: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const { toggleLike } = useToggleLike()
    function like() {
      toggleLike(props.movie.id)
    }

    return { like }
  },
}
</script>

<template>
  <router-link
    :to="{
      name: 'movie',
      params: {
        id: movie.id,
      },
    }"
    class="movie"
  >
    <img :src="movie.poster" alt="movie poster" class="poster" />
    <div class="name">{{ movie.name }}</div>
    <div
      class="likes"
      :class="{
        liked: movie.liked,
      }"
      @click.stop.prevent="like()"
    >
      {{ movie.likes }}
      <HeartIcon class="icon" />
    </div>
  </router-link>
</template>

<style scoped>
.movie {
  cursor: pointer;
  position: relative;
}

.poster {
  width: 100%;
  height: 296px;
  border-radius: 8px;
  border: #28282f 2px solid;
  transition: border-color 0.15s;
  background: #444;
}

.movie:hover .poster {
  border-color: #497aff;
}

.name {
  text-align: center;
  margin-top: 4px;
}

.likes {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #28282fdd;
  padding: 4px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  color: #ff4477;
  box-shadow: 0 2px 6px #0004;
}

.likes:hover {
  background: #564b5cdd;
}

.likes .icon {
  margin-left: 6px;
}

.likes.liked .icon {
  fill: #ff4477;
}
</style>
