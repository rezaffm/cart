export const state = () => {
  categoies: [];
}

export const getters = {
  categories(state) {
    return state.categoies
  }
}


export const mutations = {
  SET_CATEGORIES(state, categoies) {
    state.categoies = categoies
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let response = await this.$axios.$get('categories')

    commit('SET_CATEGORIES', response.data)
  }
}
