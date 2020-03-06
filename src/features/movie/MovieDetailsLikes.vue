<script>
import { HeartIcon } from 'vue-feather-icons'

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

  methods: {
    toggleLike() {
      // @TODO
    },
  },
}
</script>

<template>
  <div
    class="likes"
    :class="{
      liked: movie.liked,
    }"
  >
    <button class="btn" @click="toggleLike()">
      {{ movie.liked ? 'Unlike' : 'Like' }}
    </button>

    <div class="count">
      <HeartIcon class="icon" />
      {{ movie.likes }}
      likes
    </div>
  </div>
</template>

<style scoped>
.likes,
.count {
  display: flex;
  align-items: center;
}

.btn {
  margin-right: 20px;
  width: 100px;
}

.count {
  color: #ff4477;
}

.count .icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.liked .count .icon {
  fill: #ff4477;
}
</style>
