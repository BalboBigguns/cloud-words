import React, { FormEvent, useRef } from "react";
import PrimaryButton from "../modules/common/Input/PrimaryButton.component";
import TextField from "../modules/common/Input/TextField.component";
import CenteredContainer from "../modules/common/Layout/CenteredContainer.component";
import Title from "../modules/common/Typography/Title.component";
import NicknameForm from "../modules/login/NicknameForm.component";

interface ILoginViewProps {
  setUserName: (name: string) => void;
}

const LoginView: React.FC<ILoginViewProps> = ({ setUserName }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setUserName(inputRef.current.value);
    }
  };
  return (
    <CenteredContainer>
      <Title>Wordcloud game</Title>
      <NicknameForm onSubmit={handleSubmit}>
        <TextField
          placeholder="Enter your nickname here..."
          required
          ref={inputRef}
        />
        <PrimaryButton type="submit"> Play </PrimaryButton>
      </NicknameForm>
    </CenteredContainer>
  );
};

export default LoginView;
