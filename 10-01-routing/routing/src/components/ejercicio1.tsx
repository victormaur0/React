import { useState } from "react";

const ejercicio = () => {

    const [precio, cambiaPrecio] = useState(100);

    const descuento = () => {
        cambiaPrecio(75);
    }

    return (
        <>
            <h4>{precio}</h4>
            <button onClick={descuento}>Dame descuento</button>
        </>
    )
}
export default ejercicio