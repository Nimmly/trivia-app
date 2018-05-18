
import axios from 'axios'

class TriviaService{
    constructor () {
        this.client = new axios.create({
            baseURL: 'http://jservice.io/api/'
        })
    }
    getRandomTrivias(){
        return this.client.get('random', {
            params:{ count: 30 }
        })
    }
}

const triviaService = new TriviaService()

export { triviaService as TriviaService }