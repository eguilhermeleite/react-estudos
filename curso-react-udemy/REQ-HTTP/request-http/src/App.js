

import { useState, useEffect } from 'react';
import Table from './components/Table';

const url = "http://localhost:3000/products";


function App() {

  // armazena o estado dos produtos
  const [products, setProducts] = useState([]);

  // faz a requisicao ao dados
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    fetchData();

  }, []);// fim de useEffect


  return (
    <div className="container pt-3">
      <h1>Lista de produtos</h1>
      <Table products={products} />
    </div>
  );
}

export default App;
