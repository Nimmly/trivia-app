<template>
    <div class="container">
        <div class="card border-info mb-3" style="width: 18rem;">
            <img class="card-img-top bg-warning" :src="randomJoke.iconUrl" alt="Card image cap">
        <div class="card-body bg-dark">
            <p class="card-text text-info" v-text="randomJoke.value"></p>
            <input class="form-control mb-2"
                type="text"
                placeholder="Enter Joke category"
                @input="setCategory"
            />
            <a 
            class="btn btn-warning btn-block"
            @click="getNewJoke"
            >Get new Joke :D
            </a>
        </div> 
        </div>   
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { store } from './../store'

export default {
    name: 'Chuck',
    computed: {
        ...mapGetters({
            randomJoke: 'getRandomJoke'
        })

    },
    methods:{
        ...mapMutations([
            'setJokeCategory'
        ]),
        getNewJoke(){
            store.dispatch('fetchRandomJoke', () => {})
        },
        setCategory(event){
            this.setJokeCategory(event.target.value)
        }
    },
    /* created(){
        this.fetchRandomJoke()
    }, */
    beforeRouteEnter(to, from, next){
        store.dispatch('fetchRandomJoke', next)
    }
}
</script>

<style>

</style>
