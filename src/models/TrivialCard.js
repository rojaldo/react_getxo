export class TrivialCard{
    constructor(json){
        this.question = json.question;
        this.rightAnswer = json.correct_answer;
        this.answers = [...json.incorrect_answers, json.correct_answer];
    }
} 

export default TrivialCard;