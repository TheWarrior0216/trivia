import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"

class TriviaServices {
  async getQuestions() {

    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple')
    console.log(response.data)
    const questions = response.data.results.map((dataPOJO) => new Trivia(dataPOJO))
    AppState.trivias = questions
    console.log(AppState.trivias)
  }


}
export const triviaServices = new TriviaServices()