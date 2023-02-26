import './EndScreen.css';

const EndScreen = ({retry}) => {
  return (
    <div>
      <h1>EndScreen</h1>
      <button onClick={retry}>Reiniciar</button>
    </div>
    
  )
}

export default EndScreen