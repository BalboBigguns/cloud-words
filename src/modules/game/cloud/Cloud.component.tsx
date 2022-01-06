import React, { MouseEventHandler, useCallback, useState } from "react";
import generateCloudSpread from "../../../helpers/generateCloudSpread";
import Droplet from "../droplet/Droplet.component";
import CloudContainer from "./CloudContainer.component";

interface ICloudProps {
  allOptions: string[];
  correctOptions: string[];
  isValidated: boolean;
  useSelectedWords: () => [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ];
}

const Cloud: React.FC<ICloudProps> = ({
  allOptions,
  correctOptions,
  isValidated,
  useSelectedWords,
}) => {
  const [selectedWords, setSelectedWords] = useSelectedWords();
  const [dropletPositions] = useState(generateCloudSpread(allOptions.length));
  const toggleSelection = useCallback<MouseEventHandler<HTMLParagraphElement>>(
    (event) => {
      const eventTarget = event.target as HTMLParagraphElement;
      const word = eventTarget.innerText;

      if (isValidated) {
        return;
      }

      setSelectedWords((selectedWords) => {
        if (selectedWords.includes(word)) {
          return selectedWords.filter((selection) => selection !== word);
        }

        return [...selectedWords, word];
      });
    },
    [isValidated, setSelectedWords]
  );

  return (
    <CloudContainer>
      {allOptions.map((option, idx) => (
        <Droplet
          isCorrect={correctOptions.includes(option)}
          isSelected={selectedWords.includes(option)}
          isValidated={isValidated}
          position={dropletPositions[idx]}
          onClick={toggleSelection}
          key={option}
        >
          {option}
        </Droplet>
      ))}
    </CloudContainer>
  );
};

export default Cloud;
