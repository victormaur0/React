import { useRef, useState } from "react";

const busqueda = (props: any) => {

    const rutaCancion = props.cancion;
    const audioCancion = useRef(null);
    const [contador, setState] = useState(0);

    const comprar = () => {
        setState(contador => contador + 1);
    }
    const reproducir = () => {
        console.log(rutaCancion);
        if (audioCancion.current){
            //audioCancion.current.start();
            console.log(audioCancion)
        }
    }

    return (<div>
        <h1>{props.nombre}</h1>
        <small>{props.precio}</small>
        <p>{props.descripcion}</p>
        <button onClick={comprar}>Comprar</button>
        <br></br>
        {props.children}
        <span>Has comprado {contador} veces</span>
        <br></br>
        <audio ref={audioCancion} src={rutaCancion} controls></audio>
        <span onClick={reproducir}>Play</span>
    </div>)
}

export default busqueda;