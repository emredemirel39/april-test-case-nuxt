<script lang="ts">

export default {
    name: 'CountryModal',
    props: [
        'handleModal',
        'isModalOpen',
        'selectedCountry'
    ],
    data() {
        return {
           //selectedCountry: window.$nuxt.$store.state.countries.selectedCountry 
        }
    },
    computed: {
        // selectedCountry() {
        //     return window.$nuxt.$store.state.countries.selectedCountry
        // }
    },
    methods: {
        handleInner(e: Event) {
            e.stopPropagation();
        }
    },
     mounted() {

     },
}

</script>

<template>
     <div @click="handleModal" :class="isModalOpen ? 'modal-visible' : 'modal-hidden' ">
        <div class="modal-inner" @click="handleInner">
        <img :src="selectedCountry?.flags?.png" alt="flag">
        <h1>{{selectedCountry?.name}}</h1>
        <h1>{{selectedCountry?.capital}}</h1>
        <h1>{{selectedCountry?.region}}</h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal-hidden{
    opacity: 0;
    pointer-events: none;
    max-width: 0;
    max-height: 0;
}

.modal-visible{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    pointer-events: auto;
}

.modal-inner{
    padding: 4rem;
    background-color: white;
    width: fit-content;
    height: fit-content;
}
</style>