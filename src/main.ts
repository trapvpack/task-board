import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      cardId: Number,
      cardOnDelete: Number,
      cardOnEdit: Number,
      columnIdOnEdit: Number
    }
  },
  getters: {
    getCardID(state) {
      return state.cardId
    }
  }
})
const app = createApp(App)

//app.use(createPinia())
app.use(store)
app.mount('#app')
