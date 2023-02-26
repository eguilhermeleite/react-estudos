import CarList from "./components/CarList";
import CarListHeader from "./components/CarListHeader";

const car = [
  { id: 1, assembler: "Chevrolet", model: "El Camino", year: 1969 },
  { id: 2, assembler: "Chevrolet", model: "Camaro SS", year: 1966 },
  { id: 3, assembler: "Pontiac", model: "Firebird", year: 1967 }
]

function App() {
  return (
    <div>
      <h1 style={{paddingLeft:'50px', paddingBottom:"20px"}}>Carros</h1>
      <CarListHeader />
      <CarList car={car} />
    </div>
  );
}

export default App;
