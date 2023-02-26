import { useState } from "react";



const MyComponent = () => {

    {/*atribui 1 a variavel my e ao clicar no botao incrementa 1 */ }
    const [my, setMy] = useState(1);
   
    return (
        <div>
            <h2>My number initial: 1</h2>
            <h3>Current Number: {my}</h3>
            <button onClick={() => setMy(my + 1)}>Change value</button>
            <h2>button pressed {my - 1} times</h2>

        </div>
    )
}

export default MyComponent