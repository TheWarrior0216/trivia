export class Trivia {
  constructor(data) {
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }
  get Template() {
    return `
<div class="container pt-5">
        <div class="row text-center shadow border">
          <div class="col-12">
            <h3>Mythology</h3>
            <p class="fs-4"> ${this.question} </p>
            <div class="row p-3">
              <div role= button"class="col-6">
                <p>${this.correctAnswer}</p>
              </div>
              <div class="col-6">
                <p>${this.incorrectAnswers[0]}</p>
              </div>
              <div class="col-6">
                <p>${this.incorrectAnswers[1]}</p>
              </div>
              <div class="col-6">
                <p>${this.incorrectAnswers[2]}</p>
              </div>
            </div>

          </div>
        </div>
      </div>`
  }
}
