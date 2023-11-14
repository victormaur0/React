//import './App.css'
import Busqueda from "./componentes/header/busqueda.tsx";
//import "./componentes/header/busqueda.css";
import productos from "./componentes/header/productos.tsx";

function App() {
  const prods = productos.map((item, index) => <Busqueda {...item} key={index}/>);

  return (
    <>
    <div className='plantilla tres'>
      {prods}
    </div>
    </>
  )
}

export default App
