//components
import React, { Component } from "react";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";
import TabelaHead from "./components/TabelaHead";

class App extends Component {


  state = {
    livros: []
  };

  
  componentDidMount() {
    //acessa a pasta /public/api e carrega o json para o state livros
    fetch("/api/listBooks.json")
    //content negociation
      .then(response => response.json())
      //setState de livros 
      .then(livros => this.setState({ livros }))
      //captura o erro e imprime no console
      .catch(function (error) {
        console.log("Erro na requisição");
      })
      //captura o sucesso e imprime no console
      .finally(function () {
        console.log("Carregado JSON com sucesso");
      });
  }

  //remover linha
  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({ livros });
  };


  //ordenar os livros (titulo)
  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) => a.titulo > b.titulo ? 1 : 0);
    this.setState({ livros });
  }

  handleOrdenarDecrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0);
    livros.reverse();
    this.setState({ livros })
  }

  //ordenar os livros (autor)
  handleOrdenarAutorC = (autor) => {
    const livros = this.state.livros.sort((a, b) => a.autor > b.autor ? 1 : 0);
    this.setState({ livros });
  }

  handleOrdenarAutorD = (autor) => {
    const livros = this.state.livros.sort((a, b) => a.autor < b.autor ? -1 : 0);
    livros.reverse();
    this.setState({ livros });
  }

  render() {

    return (

      <div>
        <table className="tabela">
          <TabelaHead
            ordenarCrescente={this.handleOrdenarCrescente}
            ordenarDecrescente={this.handleOrdenarDecrescente}
            ordenarCrescenteAutor={this.handleOrdenarAutorC}
            ordenarDecrescenteAutor={this.handleOrdenarAutorD}
          />

          <TabelaBody livros={this.state.livros} removerLinha={this.handleRemoverLinha} />
          <TabelaFoot qdeLivros={this.state.livros.length} />
        </table>
      </div>

    );
  }
}

export default App;
