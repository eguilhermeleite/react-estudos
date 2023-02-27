import './EndScreen.css';



const EndScreen = ({ retry, score }) => {
 
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>Você acertou <span>{score}</span> palavra(s)</h2>
      <button onClick={retry}>Reiniciar</button>
    </div>

  )
}

export default EndScreen