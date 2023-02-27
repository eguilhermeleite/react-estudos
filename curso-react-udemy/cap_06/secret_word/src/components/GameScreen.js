import './GameScreen.css';
import { useState, useRef } from 'react';

const GameScreen = ({ verifyLetter, pickedWord, pickedCategory, letters, guessLetters, wrongLetters, guesses, score }) => {

  const [letter, setLetter] = useState("");

  const letterInputRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação atual: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className='tip'>
        A dica é: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      <div className='wordContainer'>

        {letters.map((letter, i) =>
          guessLetters.includes(letter) ? (
            <span key={i} className='letter'>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}

      </div>
      <div className="letterContainer">
        <p>Advinhe uma letra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name='letter' ref={letterInputRef} onChange={(evt) => setLetter(evt.target.value)} value={letter} maxLength='1' required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras erradas já utilizadas</p>
            {wrongLetters.map((letter, i) =>(
              <span key={i}><b>{letter}&emsp;</b></span>
            ))}
      </div>
    </div>

  )
}

export default GameScreen