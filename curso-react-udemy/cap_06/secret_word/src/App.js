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

//funcao principal
function App() {

  //inicializacao e state das variaveis 
  const [gameStage, setGameState] = useState(stages[0].name);
  const [wds] = useState(WordsList);

  //palavara escolhida
  const [pickedWord, setPickedWord] = useState("");
  //categoria escolhida 
  const [pickedCategory, setPickedCategory] = useState("");
  //lista de letras que formam a palavra
  const [letters, setLetters] = useState([]);
  //letras acertadas
  const [guessLetters, setGuessLetters] = useState([]);
  //letras erradas
  const [wrongLetters, setWrongLetters] = useState([]);
  //tentativas
  const numGuesses = 5;
  const [guesses, setGuesses] = useState(numGuesses);
  //pontuacao
  const [score, setScore] = useState(0);

  //funcao para escolher a categoria e a palavra
  const pickWordAndCategory = useCallback(() => {

    //captura as categorias do array WordsList
    const categories = Object.keys(wds);
    //escolhe uma categoria aleatoriamente dentro do array WordsList
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //captura a palavra aleatoriamente dentro da categoria 
    const word = wds[category][Math.floor(Math.random() * wds[category].length)];

    return { word, category }

  }, [wds])//fim da funcao

  //funcoes dos botoes
  //direciona para a tela GameScreen 
  const startGame = useCallback(() => {

    clearLettersStates();

    //funcao definida para escolher a palavra e categoria
    const { word, category } = pickWordAndCategory();

    //array para cada letra da palavra
    let wordLetters = word.split("");
    //define lowerCase para as letras
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //set para os states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    console.log(category, word, wordLetters);


    setGameState(stages[1].name);
  }, [pickWordAndCategory])//fim startGame 

  //direciona para a tela EndScreen 
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    if (guessLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessLetters((actualGuessLetters) => [
        ...actualGuessLetters,
        normalizedLetter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }

  }// fim verifyLetter 

  const clearLettersStates = () => {
    setGuessLetters([]);
    setWrongLetters([]);
  }

  // win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // quando o tamanho dos arrays forem iguais
    if (guessLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 1));
      startGame();
    }

  }, [guessLetters, letters, startGame]);


  //quando as tentativas acabarem
  useEffect(() => {
    if (guesses <= 0) {
      clearLettersStates();
      setGameState(stages[2].name);
    }
  }, [guesses])


  //direciona para a tela StartScreen 
  const retry = () => {
    setScore(0);
    setGuesses(numGuesses);
    setGameState(stages[0].name);
  }//fim retry

  const initial = () => {
    window.onload(retry);
  }

  window.onload = ()=>{
    retry();
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen start={startGame} />}
      {gameStage === "game" && <GameScreen
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessLetters={guessLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === "end" && <EndScreen retry={retry} score={score} />}
    </div>
  );
}



export default App;
