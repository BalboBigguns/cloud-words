import React from "react";
import PrimaryButton from "../modules/common/Input/PrimaryButton.component";
import CenteredContainer from "../modules/common/Layout/CenteredContainer.component";
import Subtitle from "../modules/common/Typography/Subtitle.component";
import CongratulationsContainer from "../modules/end/CongratulationsContainer.component";
import TextContainer from "../modules/end/TextContainer.component";

interface IEndViewProps {
  resetGame: () => void;
  name: string;
  points: number;
}

const EndView: React.FC<IEndViewProps> = ({ resetGame, name, points }) => {
  return (
    <CenteredContainer>
      <TextContainer>
        <CongratulationsContainer>
          <Subtitle>Congratulations, {name}!</Subtitle>
          <Subtitle>Your score:</Subtitle>
        </CongratulationsContainer>
        <Subtitle $color="primary">
          {points} point{points === 1 ? "" : "s"}
        </Subtitle>
      </TextContainer>
      <PrimaryButton onClick={resetGame}>Restart</PrimaryButton>
    </CenteredContainer>
  );
};

export default EndView;
