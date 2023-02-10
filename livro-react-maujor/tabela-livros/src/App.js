//components
import React from "react";
import TabelaBody from "./components/TabelaBody";
import TabelaHead from "./components/TabelaHead";

const App = () => (
  <div>
    <table className="tabela">
      <TabelaHead />
      <TabelaBody />
    </table>
  </div>
);


export default App;
