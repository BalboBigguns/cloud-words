const calculateScore = (selectedWords: string[], correctWords: string[]) => {
  let goodAnswers = 0;
  let badAnswers = 0;

  selectedWords.forEach((word) =>
    correctWords.includes(word) ? goodAnswers++ : badAnswers++
  );
  const missedGoodAnswers = correctWords.length - goodAnswers;

  return goodAnswers * 2 - badAnswers - missedGoodAnswers;
};

export default calculateScore;
