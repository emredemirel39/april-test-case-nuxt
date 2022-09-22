import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface IList {
    text: string,
    done: boolean
}

export const state = () => ({
    list: [] as IList [] | any []
});

export type ITodosStatae = ReturnType<typeof state>

export const mutations: MutationTree<ITodosStatae>  = {
  add(state, text) {
    state.list!.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list!.splice(state.list!.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}