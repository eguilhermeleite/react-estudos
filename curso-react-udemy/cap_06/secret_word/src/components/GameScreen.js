import './GameScreen.css';

const GameScreen = ({verify}) => {
  return (
    <div>
      <h1>GameScreen</h1>
      <button onClick={verify}>Finalizar</button>
    </div>

  )
}

export default GameScreen