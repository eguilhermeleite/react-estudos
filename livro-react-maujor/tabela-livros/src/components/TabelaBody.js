

const TabelaBody = props => (

    <tbody className="tdbody">
        {props.livros.map((livro, index) => (
            <tr key={livro.id}>
                <td className="text-center">{livro.id}</td>
                <td className="text-center">{livro.titulo}</td>
                <td className="text-center">{livro.autor}</td>
                <td>
                    <button type="button" class="ml-3 btn btn-warning">Remover</button>
                </td>
            </tr>
        ))}
    </tbody>

);

export default TabelaBody