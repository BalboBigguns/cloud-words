import React, { MouseEventHandler, useCallback, useState } from "react";
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

const createCloud = (wordCount: number) => {
  const gridSize = 80 / wordCount;
  const verticalNodes = [];
  const horizontalNodes = [];

  for (let i = 0; i < wordCount; i++) {
    verticalNodes.push(gridSize * i + 10);
    horizontalNodes.push(gridSize * i);
  }

  const positions = [];

  for (let i = 0; i < wordCount; i++) {
    const [verticalPosition] = verticalNodes.splice(
      ~~(verticalNodes.length * Math.random()),
      1
    );
    const [horizontalPosition] = horizontalNodes.splice(
      ~~(horizontalNodes.length * Math.random()),
      1
    );

    positions.push({ x: horizontalPosition, y: verticalPosition });
  }

  return positions;
};

const Cloud: React.FC<ICloudProps> = ({
  allOptions,
  correctOptions,
  isValidated,
  useSelectedWords,
}) => {
  const [selectedWords, setSelectedWords] = useSelectedWords();
  const [dropletPositions] = useState(createCloud(allOptions.length));

  const toggleSelection = useCallback<MouseEventHandler<HTMLParagraphElement>>(
    (e) => {
      const eventTarget = e.target as HTMLParagraphElement;
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
