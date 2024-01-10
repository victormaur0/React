import './App.css'
import Imagen from './imagen.tsx'
import Ejercicio1 from './ejercicio1.tsx'
import {useState } from 'react'



function App() {
  const [precio, cambiaPrecio] = useState(100);
  const [valorInput, cambioValorInput] = useState(0);

  const descuento = (porcentaje?: number) => {
    console.log(valorInput);
    (porcentaje == undefined) ? cambiaPrecio(75) : cambiaPrecio(100 - (100 * (porcentaje / 100)));
    //cambiaPrecio(precio - (precio*(porcentaje!/100)))
    //cambiaPrecio(75);
  }

  return (
    <>
      <h1>Hola Mundo!</h1>
      <h2>Otra cosa</h2>
      <Imagen alt="Prueba">
      </Imagen>
      <br></br>
      <Ejercicio1 precio={precio} funcion={() => descuento()} /> <br />
      <input type='number' value={valorInput === 0 ? 0 : valorInput} onChange={e => cambioValorInput(parseInt(e.target.value))} />
      <Ejercicio1 precio={precio} funcion={() => descuento(valorInput)} />
    </>
  )
}

export default App
