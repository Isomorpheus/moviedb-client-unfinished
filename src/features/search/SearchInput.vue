<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    SearchIcon,
  },

  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'update',
  },

  props: {
    value: {
      type: [String, Number],
    },
  },
}
</script>

<template>
  <div class="search-input">
    <SearchIcon class="icon" />
    <input
      v-bind="$attrs"
      :value="value"
      class="input"
      v-on="$listeners"
      @input="$emit('update', $event.currentTarget.value)"
    />
  </div>
</template>

<style scoped>
.search-input {
  border: 1px transparent solid;
  background: #181c22;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 12px;
}

.search-input:focus-within {
  border-color: #497aff;
}

.icon {
  margin-right: 6px;
  color: #aaa;
}

.input {
  height: 42px;
  flex: 1;
}
</style>
