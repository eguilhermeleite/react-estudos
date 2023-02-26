//css
import './App.css';

//react
import { useCallback, useEffect, useState } from 'react';

//components
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

// data
import { WordsList } from './data/WordsList';

/////////////////////////////////////////////////////////

// estagios do jogo
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

function App() {
  {/*inicializacao e state das variaveis */ }
  const [gameStage, setGameState] = useState(stages[0].name);
  const [wds] = useState(WordsList);

  {/*funcoes dos botoes*/ }
  {/*direciona para a tela GameScreen */ }
  const startGame = () => {
    setGameState(stages[1].name);
  }

  {/**direciona para a tela EndScreen */ }
  const verifyLetter = () => {
    setGameState(stages[2].name);
  }

  {/**direciona para a tela StartScreen */ }
  const retry = () => {
    setGameState(stages[0].name);
  }

  return(
    <div className="App">
      {gameStage === "start" && <StartScreen start={startGame} />}
      {gameStage === "game" && <GameScreen verify={verifyLetter} />}
      {gameStage === "end" && <EndScreen retry={retry} />}
    </div>
  );
}



export default App;
