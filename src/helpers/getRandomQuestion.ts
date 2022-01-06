import questions from "../data";

const getRandomQuestion = () => {
  return questions[~~(questions.length * Math.random())];
};

export default getRandomQuestion;
