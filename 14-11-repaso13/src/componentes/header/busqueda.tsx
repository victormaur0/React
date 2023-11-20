import { useRef, useState, useEffect} from "react";

const busqueda = (props: any) => {

    const rutaCancion = props.cancion;
    const audioCancion = useRef(rutaCancion);
    const [contador, setState] = useState(0);

    const comprar = () => {
        setState(contador => contador + 1);
    }
    const reproducir = () => {
        console.log(rutaCancion);
        if (audioCancion.current){
            audioCancion.current.play();
        }
    }

    useEffect(()=>{
        if (audioCancion.current){
            audioCancion.current.src = rutaCancion;
        }
    })

    return (<div>
        <h1>{props.nombre}</h1>
        <small>{props.precio}€</small>
        <p>{props.descripcion}</p>
        <button onClick={comprar}>Comprar</button>
        <br></br>
        {props.children}
        <span>Has comprado {contador} veces</span>
        <br></br>
        <audio ref={audioCancion} controls></audio>
        <span onClick={reproducir}>Play</span>
    </div>)
}

export default busqueda;