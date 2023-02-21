

const TabelaBody = (props) => (

    <tbody>
        {/* map funciona como um loop */}
        {props.livros.map((nomeQualquer) => (
            <tr key={nomeQualquer.id}>
                <td >{nomeQualquer.id}</td>
                <td >{nomeQualquer.titulo}</td>
                <td >{nomeQualquer.autor}</td>
                <td>
                    <button id={nomeQualquer.id} className="botao remover" onClick={()=> props.removerLinha(nomeQualquer.id)}>Remover</button>
                </td>
            </tr>
        ))}
    </tbody>

);

export default TabelaBody