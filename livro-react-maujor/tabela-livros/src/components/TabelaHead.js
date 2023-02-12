import React from "react";

const TabelaHead = (props) => (

    <thead>
        <tr>
            <th colSpan="4">Tabela de Livros em React</th>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Título
                <div className="container-setinhas">
                    <div onClick={() => props.ordenarDecrescente()}>
                        &#129093;
                    </div>

                    <div onClick={() => props.ordenarCrescente()}>
                        &#129095;
                    </div>
                </div>
            </th>
            <th>Autor
                <div className="container-setinhas">
                    <div onClick={() => props.ordenarDecrescenteAutor()}>
                        &#129093;
                    </div>

                    <div onClick={() => props.ordenarCrescenteAutor()}>
                        &#129095;
                    </div>
                </div>
            </th>


            <th></th>
        </tr>
    </thead>


);

export default TabelaHead