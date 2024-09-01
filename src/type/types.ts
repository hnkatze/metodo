


type AnswerQuestion = {
    questionId: string;
    questionText: string;
    answer: AnswerOption[];
  }
  
type  AnswerOption = {
    option: string;
    votes: number;
  }
  
  type Question = AnswerQuestion;
  