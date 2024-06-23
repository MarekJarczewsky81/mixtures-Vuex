import { createStore } from 'vuex'

const store = createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ]
  },
  mutations: {
    ADD_COLOR(state, color) {
      state.colors.push(color)
    }
  }
})

export default store
