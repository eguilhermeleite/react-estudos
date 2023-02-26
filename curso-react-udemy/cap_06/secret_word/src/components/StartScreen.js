import './StartScreen.css'


const StartScreen = ({start}) => (

    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão para iniciar o jogo</p>
        <button onClick={start}>Começar a Jogar</button>
    </div>
);

export default StartScreen