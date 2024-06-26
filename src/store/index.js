import { createStore } from 'vuex'

const store = createStore({
  state: {
    mixtures: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }
    ],
    colors: []
  },
  actions: {
    incrementMixture({ commit }, index) {
      commit('INCREMENT_MIXTURE', index)
    },
    decrementMixture({ commit }, index) {
      commit('DECREMENT_MIXTURE', index)
    },
    refreshMixtures({ commit }) {
      commit('REFRESH_MIXTURES')
    },
    modifyMixture({ commit }, payload) {
      commit('MODIFY_MIXTURE', payload)
    },
    addColor({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map(item => Math.floor(item.amount * 2.5))
        commit('ADD_COLOR', { red, green, blue })
      }
    },
    removeColor ({ commit }, index) {
      commit('REMOVE_COLOR', index)
    }
  },
  getters: {
    mixtures: state => state.mixtures,
    RGBColors: state => state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`),
    colorsCount (state) {
      return state.colors.length;
    }
  },
  mutations: {
    INCREMENT_MIXTURE(state, index) {
      if (state.mixtures[index].amount < 100) {
        state.mixtures[index].amount++
      }
    },
    DECREMENT_MIXTURE(state, index) {
      if (state.mixtures[index].amount > 0) {
        state.mixtures[index].amount--
      }
    },
    REFRESH_MIXTURES(state) {
      state.mixtures = state.mixtures.map(item => ({ ...item, amount: 50 }))
    },
    MODIFY_MIXTURE(state, { index, color }) {
      if (index >= 0 && index < state.mixtures.length) {
        state.mixtures[index] = { ...state.mixtures[index], ...color }
      }
    },
    ADD_COLOR(state, color) {
      state.colors.push(color)
    },
    REMOVE_COLOR(state, index) {
      state.colors.splice(index, 1)
    }
  }
})

export default store
