import { GetterTree, ActionTree, MutationTree } from 'vuex'


export const state = () => ({
  counter: 0,
  announcement: null
})

export type ICountryState = ReturnType<typeof state>


export const getters: GetterTree<ICountryState, ICountryState>  = {
  getCounter(state) {
    return state.counter
  },
  myGetter(state) {
    return state.counter;
  }
}

export const mutations: MutationTree<ICountryState> = {
  increment(state) {
    state.counter++
  }
}

export const actions: ActionTree <ICountryState, ICountryState> = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
}