//import './App.css'
import Busqueda from "./componentes/header/busqueda.tsx";
//import "./componentes/header/busqueda.css";
import productos from "./componentes/header/productos.tsx";

function App() {
  const prods = productos.map((item, index) => <Busqueda {...item} key={index}>
      <h3>Disponible en:</h3>
      <ul>
        <li>Rojo</li>
        <li>Verde</li>
        <li>Amarillo</li>
        <li>Negro</li>
      </ul>
    </Busqueda>);

  return (
    <>
    <div className='plantilla tres'>
      {prods}
    </div>
    </>
  )
}

export default App
