<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Reset Browser Styles */
@import url('https://unpkg.com/tailwindcss@1.2.0/dist/base.css');

html,
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #28282f;
  color: #fff;
}

.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.loading {
  text-align: center;
  color: #999;
  margin: 32px;
}

.btn {
  padding: 6px 18px;
  background: #444;
  border-radius: 4px;
}

.btn:hover {
  background: #666;
}

input {
  background: transparent;
}

hr {
  margin: 32px 0;
  border-color: #3f3f3f;
}
</style>
