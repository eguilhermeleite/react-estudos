//components
import React, { Component } from "react";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";
import TabelaHead from "./components/TabelaHead";

class App extends Component {

  state = {
    livros: [
      {
        id: '978-85-7522-632-2',
        titulo: 'CSS Grid Layout',
        autor: 'Maurício Samy Silva'
      },
      {
        id: '978-85-7522-677-3',
        titulo: 'Node Essencial',
        autor: 'Ricardo R. Lencheta'
      },
      {
        id: '978-85-7522-512-7',
        titulo: 'Aprendendo Material Design',
        autor: 'Kyle Mew'
      },
      {
        id: '978-85-4300-479-2',
        titulo: 'Java Como Programar',
        autor: 'Paul Deitel, Harvey Deitel'
      },
      {
        id: '978-85-7522-677-3',
        titulo: 'Node Essencial',
        autor: 'Ricardo R. Lencheta'
      },
      {
        id: '978-85-7522-512-7',
        titulo: 'Aprendendo Material Design',
        autor: 'Kyle Mew'
      },
      {
        id: '978-85-4300-479-2',
        titulo: 'Java Como Programar',
        autor: 'Paul Deitel, Harvey Deitel'
      },
      {
        id: '978-85-7522-677-3',
        titulo: 'Node Essencial',
        autor: 'Ricardo R. Lencheta'
      },
      {
        id: '978-85-7522-512-7',
        titulo: 'Aprendendo Material Design',
        autor: 'Kyle Mew'
      }


    ]
  };

  render() {
    return (
      <div className="table-responsive-sm container">
        <table className="table table-hover">
          <TabelaHead />
          <TabelaBody livros={this.state.livros} />
          <TabelaFoot />
        </table>
      </div>

    );
  }
}

/*
const App = () => (
  <div>
    <table className="tabela">
      <TabelaHead />
      <TabelaBody />
      <TabelaFoot />
    </table>
  </div>
);
*/

export default App;
