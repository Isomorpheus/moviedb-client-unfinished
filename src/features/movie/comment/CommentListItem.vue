<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div class="comment">
    <div class="user">
      {{ comment.userId }}
    </div>
    <div class="text">
      {{ comment.text }}
    </div>
  </div>
</template>

<style scoped>
.comment {
  margin-top: 16px;
}

.user {
  color: #777;
}
</style>
