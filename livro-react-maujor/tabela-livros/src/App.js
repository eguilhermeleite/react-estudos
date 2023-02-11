//components
import React, { Component } from "react";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";
import TabelaHead from "./components/TabelaHead";

class App extends Component {
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody />
        <TabelaFoot />
      </table>
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
