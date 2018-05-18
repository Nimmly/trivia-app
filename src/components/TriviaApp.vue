<template>
  <div class="container">
    <ul>
      <li 
        v-for="trivia in trivias"
        :key="trivia.id"
        @click="toogleTrivia(trivia.id)"
        >{{ trivia.question }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name:'TriviaApp',
  data(){
    return {
      selectedTriviasIds:[]
    }
  },
  computed:{
    ...mapGetters({
      trivias: 'getTrivias'
    })
  },
  methods:{
    ...mapActions([
      'fetchTrivias'
    ]),
    toogleTrivia(triviaId){
      let triviaIdIndex = this.selectedTriviasIds.indexOf(triviaId)
      let isSelectedTriviasId = triviaIdIndex > -1
      if (isSelectedTriviasId){
        return this.selectedTriviasIds.splice(triviaIdIndex, 1)
      }
      this.selectedTriviasIds.push(triviaId)
    }
  },
  created(){
    this.fetchTrivias()
  }

}
</script>

<style>

</style>
