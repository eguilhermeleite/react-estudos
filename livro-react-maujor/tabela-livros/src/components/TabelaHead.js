import React from "react";

const TabelaHead = () => (

    <thead className='thead-color thhead'>
        <tr>
            <th colSpan="4" className="text-center lead text-dark thhead">Tabela de Livros</th>
        </tr>
        <tr>
            <th className="lead text-center text-dark">ISBN</th>
            <th className="lead text-center text-dark">Título</th>
            <th className="lead text-center text-dark">Autor</th>
            <th></th>
        </tr>
    </thead>


);

export default TabelaHead