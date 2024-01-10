import { useState } from "react";

const ejercicio = () => {

    const [precio, cambiaPrecio] = useState(100);
    const [valorInput, cambioValorInput] = useState(0);

    const descuento = () => {
        cambiaPrecio(100 - (100 * (valorInput / 100)));
    }

    return (
        <>
        <h1>Ejercicio 2</h1>
            <h4>{precio}</h4>
            <input type='number' value={valorInput === 0 ? "" : valorInput} onChange={e => cambioValorInput(parseInt((e.target.value === "")? "0" : e.target.value))} />
            <button onClick={descuento}>Dame descuento</button>
            
        </>
    )
}

export default ejercicio