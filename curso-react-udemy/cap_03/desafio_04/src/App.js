import 'bootstrap/dist/css/bootstrap.css';
import Body from './components/Body';
import Foot from './components/Foot';
import Header from './components/Header';


let person = [
  { id: 1, name: "Godofredo Pereira", age: 17, profession: "Pintor"},
  { id: 2, name: "Marindalva da Silva", age: 43, profession: "Enfermeira"},
  { id: 3, name: "Joaquin dos Santos", age: 17, profession: "Auxiliar administrativo"},
  { id: 4, name: "Florêncio das Neves", age: 44, profession: "Cabeleireiro"},
  { id: 5, name: "Gumercinda das Couves", age: 16, profession: "Auxiliar administrativo"},
  { id: 6, name: "Eleotério Carvalhau", age: 18, profession: "Frentista"}
]

const App = () => (
  
  <div className='container'>
    <h1>Desafio 04</h1>
    <table className="table table-striped mt-5">
      <Header />
      <Body ps={person} />
      <Foot qtPerson={person.length} />
    </table>
  </div>

)

export default App;

