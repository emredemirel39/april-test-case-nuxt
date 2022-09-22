import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { ICountry } from '~/types'


export const state = () => ({
  countries: null as null | ICountry[],
  selectedCountry: null as null | ICountry,
  errMessage: '',
  isLoading: false
})

export type ICountryState = ReturnType<typeof state>


export const getters: GetterTree<ICountryState, ICountryState>  = {

}

export const mutations: MutationTree<ICountryState> = {

    getCountries(state, responseData) {
        state.countries = responseData as ICountry[];
    },
  setSelectedCountry(state, country: ICountry) {
      state.selectedCountry = country
  }
}

export const actions: ActionTree <ICountryState, ICountryState> = {
    
    async fetchCountries({commit}) {
        const url = 'https://restcountries.com/v2/all';

      try {
        const response = await fetch(url);
        const responseData = await response.json() as ICountry [] ;

          if (response.status === 200) {
            commit('getCountries', responseData)
          } else {
            this.state.errMessage = 'Error while fetching data';
          }

    } catch (error) {
        console.log(error);
      }
    }
}