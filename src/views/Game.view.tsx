import React, { useCallback, useState } from "react";
import PrimaryButton from "../modules/common/Input/PrimaryButton.component";
import CenteredContainer from "../modules/common/Layout/CenteredContainer.component";
import Heading from "../modules/common/Typography/Heading.component";
import GameContainer from "../modules/game/GameContainer.component";
import questions from "../data";
import Cloud from "../modules/game/cloud/Cloud.component";

const getRandomQuestion = () => {
  return questions[~~(questions.length * Math.random())];
};

const calculatePoints = (selectedWords: string[], correctWords: string[]) => {
  let goodAnswers = 0;
  let badAnswers = 0;

  selectedWords.forEach((word) =>
    correctWords.includes(word) ? goodAnswers++ : badAnswers++
  );
  const missedGoodAnswers = correctWords.length - goodAnswers;

  return goodAnswers * 2 - badAnswers - missedGoodAnswers;
};

interface IGameViewProps {
  setPoints: (points: number) => void;
}

const GameView: React.FC<IGameViewProps> = ({ setPoints }) => {
  const [{ question, all_words: allWords, good_words: goodWords }] = useState(
    getRandomQuestion()
  );
  const [isValidated, setIsValidated] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const handleButtonClick = () => {
    if (!isValidated) {
      setIsValidated(true);
    }

    if (isValidated) {
      const gameScore = calculatePoints(selectedWords, goodWords);
      setPoints(gameScore);
    }
  };

  const useSelectedWords = useCallback(
    () =>
      [selectedWords, setSelectedWords] as [
        string[],
        React.Dispatch<React.SetStateAction<string[]>>
      ],
    [selectedWords]
  );

  return (
    <CenteredContainer>
      <Heading>{question}</Heading>
      <GameContainer>
        <Cloud
          allOptions={allWords}
          correctOptions={goodWords}
          isValidated={isValidated}
          useSelectedWords={useSelectedWords}
        />
      </GameContainer>
      <PrimaryButton onClick={handleButtonClick}>
        {!isValidated ? "check answers" : "finish game"}
      </PrimaryButton>
    </CenteredContainer>
  );
};

export default GameView;
