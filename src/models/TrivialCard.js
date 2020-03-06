export class TrivialCard{
    constructor(json){
        this.question = json.question;
        this.rightAnswer = json.correct_answer;
        this.answers = [...json.incorrect_answers, json.correct_answer];
        this.answered = false;
        this.right = false;
        this.answerIndex = -1;
    }
} 

export default TrivialCard;