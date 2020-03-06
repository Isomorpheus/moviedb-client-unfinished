import Vue from 'vue'
import router from './router'
import VueCompositionApi, { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo'
import App from './App.vue'

Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  router,
  render: h => h(App),
}).$mount('#app')
