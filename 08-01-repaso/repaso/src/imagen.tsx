import imgsrc from './assets/react.svg'
import { useState } from 'react';

/*function img(){
    return(<img src={imgsrc} alt='Logo'></img>)
}

const img = () => {return(<img src={imgsrc} alt='Logo'></img>)}

*/

//export default img

/*export {
    img
}*/


const imagen = (props: any) => {
    const [texto, cambiaTexto] = useState("Hola Mundo!");

    const mensaje = () => {
        cambiaTexto("Adios");
    }

    return (<>
        <img src={imgsrc} alt={props.alt} onClick={mensaje}></img>
        <small>{props.alt}</small>
        <small>{texto}</small>
    </>)
}

export default imagen

