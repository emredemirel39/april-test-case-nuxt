<template>
  <div>
    <div class="search-section__wrapper">
      <input class="search-section__search-input" :value="searchValue" @input="onSearch" placeholder="Search..." type="text">
    <div class="search-section__filter-wrapper">
      <span>
      <label for="">Search by name</label>
      <input value="name" @input="handleFilter" name="filter" type="radio" />
    </span>
    <span>
      <label for="">Search by capital</label>
      <input value="capital" @input="handleFilter" name="filter" type="radio" />
    </span>
    <span>
      <label for="">Search by region</label>
      <input value="region" @input="handleFilter" name="filter" type="radio" />
    </span>
    </div>
    </div>
    <div class="navigate">
      <div class="navigate__btn-box">
        <button @click="handlePrev" >prev</button>
        <button @click="handleNext" >next</button>
      </div>
      <div class="navigate__display-style">
        <div>
          <label for="">Box style</label>
          <input @click="handleDisplayStyle" value="country-box" name="displayStyle" checked type="radio">
        </div>
        <div>
          <label for="">List style</label>
          <input @click="handleDisplayStyle" name="displayStyle" value="country-row" type="radio">
        </div>
      </div>
    </div>

    <ul :class="displayStyle === 'country-box' ? 'country-box-list' : 'country-row-list'">
      <li :class="displayStyle" v-for="country in countries" @click="handleModal(country)" :key="country.alpha3Code">
        <img :src="country.flags.png" alt="flag">
        <h1>{{country.name}}</h1>
        <p><b>Capital:</b> {{country.capital}}</p>
        <p><b>Region:</b> {{country.region}}</p>
      </li>
    </ul>
			<CountryModal v-bind:selectedCountry="selectedCountry" v-bind:isModalOpen="isModalOpen" v-bind:handleModal="handleModal" />
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { ICountry } from '../types';

export default Vue.extend({
    layout: "test",
    name: "IndexPage",
    data() {
        return {
            searchValue: "",
            filterValue: "",
            displayStyle: "country-box",
            page: 1,
            perPage: 10,
            pages: [] as number[],
            isModalOpen: false
        };
    },
    computed: {
      countryDataLength() {
        return this.$store.state.countries.countries.length;
      },
      selectedCountry() {
        return this.$store.state.countries.selectedCountry as ICountry
      },
      countries(): ICountry[] {
        let countries = this.$store.state.countries.countries as ICountry[];
        if (this.filterValue === "region") {
          countries = countries!.filter(country => country.region!.toLowerCase().includes(this.searchValue.toLowerCase()));
        }
        if (this.filterValue === "name") {
          countries = countries!.filter(country => country.name!.toLowerCase().includes(this.searchValue.toLowerCase()));
        }
        if (this.filterValue === "capital") {
          countries = countries.filter(country => country.capital?.toLowerCase().includes(this.searchValue.toLowerCase()));
        }
        return this.paginate(countries);
      },   
    },
    methods: {
      handleModal(country: ICountry | null) {
        this.$store.commit('countries/setSelectedCountry', country)
        this.isModalOpen = !this.isModalOpen;
      },
      onSearch(e: Event) {
        const target = (<HTMLInputElement>e.target);
        if (this.filterValue === "") {
          alert("You need to select filter type for search!");
          target.value = "";
          this.searchValue = "";
          return;
        }
        this.searchValue = target.value;
      },
      handleDisplayStyle(e: Event) {
        const target = (<HTMLInputElement>e.target);
        this.displayStyle = target.value;
      },
      handleFilter(e: Event) {
        const target = (<HTMLInputElement>e.target);
        this.filterValue = target.value;
      },
      async fetchData() {
        const url = "https://restcountries.com/v2/all";
        try {
          const response = await fetch(url);
          const responseData = await response.json();
          this.$store.commit("countries/getCoun", responseData);
        }
        catch (error) {
          console.log(error);
        }
        },
        handleNext() {
          if (this.page === Math.ceil(this.countryDataLength / this.perPage)) {
            this.page = 1;
          }
          else {
            this.page++;
          }
        },
        handlePrev() {
          if (this.page === 1) {
            return;
          }
          else {
            this.page--;
          }
        },
        paginate(data: ICountry[]) {
          let page = this.page;
          let perPage = this.perPage;
          let from = (page * perPage) - perPage;
          let to = (page * perPage);
          return data.slice(from, to);
        }
    },
    async asyncData() {
      //await this.$store.dispatch('countries/fetchCountries');
    },
    async fetch() {
      await this.$store.dispatch("countries/fetchCountries");
    },
})
</script>

<style scoped lang="scss">

  .search-section{

    &__wrapper{
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      align-items: center;
      margin-top: 1rem;
    }

    &__search-input{
      width: 600px;
      height: 40px;
      padding-left: 14px;

      @media (max-width: 630px){
        width: 320px;
      }

      @media (max-width: 330px){
        width: 120px;
      }
    }

    &__filter-wrapper{
      display: flex;
      width: 600px;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 630px){
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 320px;
      }

      span{
        display: flex;
        flex-direction: column;
        align-items: center;

        imput{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  .navigate{
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 20px 0;
    gap:20px;

    &__btn-box{
      display: flex;
      gap: 8px;

      button{
        padding: 2px 8px;
        height: 100%;
      }
    }

    &__display-style{
      display: flex;
      flex-direction: column;
      gap: 8px;

    }
  }

  .country-box-list{
    width:100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 20px;
  }

  .country-row-list{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    gap:20px;

    // @media (max-width: 480px) {
    //   width: 100%;
    //   align-items: center;
    // }
  }

  .country-box{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 220px;
    cursor: pointer;

    img{
      width: 120px;
    }
  }

  .country-row{
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    gap:8px;
    cursor: pointer;

    img{
      width: 80px;
    }

    @media (max-width: 700px){
        display: grid;        
        grid-template-areas: 
          "flag name name"
          "flag capital region"
        ;
        img{
          grid-area: flag;
        }
        h1{
          grid-area: name;
          font-size: 22px;
        }
        p:nth-child(3){
          grid-area: capital;
        }
        p:last-child{
          grid-area: region;
        }
    }
    @media (max-width: 480px){
      display: grid;        
        grid-template-areas: 
          "flag name"
          "flag capital"
          "flag region"
        ;
        img{
          grid-area: flag;
        }
        h1{
          grid-area: name;
        }
        p:nth-child(3){
          grid-area: capital;
        }
        p:last-child{
          grid-area: region;
        }

      img{
        width: 120px;
      }

      h1{
        font-size: 20px;
      }
    }
  }
</style>
