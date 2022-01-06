import React, { useState } from "react";
import EndView from "./views/End.view";
import GameView from "./views/Game.view";
import LoginView from "./views/Login.view";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyle from "./style/global";

const App: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [points, setPoints] = useState<number | null>(null);
  const resetGame = () => {
    setUserName("");
    setPoints(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      {!userName && points === null && <LoginView setUserName={setUserName}/>}
      {userName && points === null && <GameView setPoints={setPoints}/>}
      {userName && points !== null && <EndView resetGame={resetGame} name={userName} points={points}/>}
    </ThemeProvider>
  );
};

export default App;
