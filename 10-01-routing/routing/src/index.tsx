import './App.css'
import {Link} from 'react-router-dom'

function Index() {

  return (
    <>
      <h1>Hola Mundo!</h1>
      <Link to="/ejercicio1">Ejercicio 1</Link><br />
      <Link to="/ejercicio2">Ejercicio 2</Link><br />
      <Link to="/ejercicio3">Ejercicio 3</Link><br />
    </>
  )
}

export default Index
