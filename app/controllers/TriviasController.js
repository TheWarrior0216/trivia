import { AppState } from "../AppState.js"
import { triviaServices } from "../services/TriviaServices.js"
import { setHTML } from "../utils/Writer.js"

export class TriviasController {
  constructor() {
    console.log(`hello world`)
    this.getQuestions()
    AppState.on('trivias', this.drawQuestions)
  }
  async getQuestions() {
    try {
      await triviaServices.getQuestions()
    }
    catch (error) {
      console.error('Oh nO')
    }
  }

  drawQuestions() {
    console.log('working')
    const questions = AppState.trivias
    let innerHTML = ''
    questions.forEach((question) => innerHTML += question.Template)
    setHTML('Cards', innerHTML)
  }
}