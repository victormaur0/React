import { useState } from "react";

const ejercicio = () => {

    const [precio, cambiaPrecio] = useState(100);
    const [codigo, cambioCodigo] = useState("");
    const arr = [
        { "codigo": "NAVIDAD10", "DESCUENTO": 10 },
        { "codigo": "VERANO15", "DESCUENTO": 15 },
        { "codigo": "REYES25", "DESCUENTO": 25 }
    ];

    const descuento = () => {
        arr.forEach(element => {
            (element.codigo === codigo)? cambiaPrecio(100 - (100 * (element.DESCUENTO / 100))) : cambiaPrecio(100);
        });
    }

    return (
        <>
            <h1>Ejercicio 3</h1>
            <h4>{precio}</h4>
            <input type="text" name="codigo" id="codigo" placeholder="Código descuento" onChange={e => (e.target.value === "") ? "" : cambioCodigo(e.target.value)} /> <br /><br />
            <button onClick={descuento}>Dame descuento</button>
        </>
    )
}

export default ejercicio