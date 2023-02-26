
const Body = (props) => (

    <tbody>
        {/* map funciona como um loop */}
        {props.ps.map((psn) => (
            <tr key={psn.id}>
                <td>{psn.id}</td>
                <td>{psn.name}</td>
                <td>{psn.age}</td>
                <td>{psn.profession}</td>
                <td>{psn.age < 18 ? <b>Não</b>: "Sim"}</td>
            </tr>
        ))}
    </tbody>

)

export default Body