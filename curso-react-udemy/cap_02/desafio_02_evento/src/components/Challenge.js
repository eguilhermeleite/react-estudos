import React from 'react'
/*
let x = 589;
let y = 2;

const show = () =>{
    let val = document.getElementById('val');
    val.style.display = 'block';
}

const Challenge = () => (
    <div>
        <h1>Números a multipicar:</h1>
        <h3>{x} * {y}</h3>
        <button onClick={show}>Veja o resultado</button>
        <h2 id='val' className='hidden'>{x * y}</h2>
    </div>
);
*/
let a = 25;
let b = 3;
const Challenge = () => (
    <div>
        <h1> Este é o nosso desafio!</h1>
        <h3>A: {a}</h3>
        <h3>B: {b}</h3>
        <button onClick={() => alert("A soma é: " + (a + b))}>Click p/ somar</button>
    </div>
)


export default Challenge

