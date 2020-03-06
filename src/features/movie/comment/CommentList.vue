<script>
import CommentListItem from './CommentListItem.vue'

export default {
  components: {
    CommentListItem,
  },

  props: {
    movie: {
      type: Object,
      required: true,
    },
  },

  // @TODO
  data() {
    return {
      commentText: '',
      comments: [],
    }
  },

  methods: {
    comment() {
      // @TODO
    },
  },
}
</script>

<template>
  <div>
    <input
      v-model="commentText"
      placeholder="Write a comment..."
      class="input"
      @keyup.enter="comment()"
    />

    <CommentListItem
      v-for="comment of comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<style scoped>
.input {
  border: 1px transparent solid;
  background: #181c22;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
}

.input:focus {
  border-color: #497aff;
}
</style>
