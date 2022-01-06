import React from "react";
import DropletContainer from "./DropletContainer.component";
import DropletHint from "./DropletHint.component";
import DropletWord from "./DropletWord.component";

interface IDropletProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  isCorrect: boolean;
  isSelected: boolean;
  isValidated: boolean;
  position: {
    x: number;
    y: number;
  };
}

const Droplet: React.FC<IDropletProps> = ({
  children,
  isCorrect,
  isSelected,
  isValidated,
  position,
  ...rest
}) => {
  return (
    <DropletContainer $position={position} {...rest}>
      <DropletHint
        $isValidated={isValidated}
        $isCorrect={isCorrect}
        $isSelected={isSelected}
      >
        {isCorrect ? "Good" : "Bad"}
      </DropletHint>
      <DropletWord
        $isCorrect={isCorrect}
        $isSelected={isSelected}
        $isValidated={isValidated}
      >
        {children}
      </DropletWord>
    </DropletContainer>
  );
};

export default React.memo(Droplet);
