import Hola from "./Hola.tsx";
import './App.css'

function generarNum(num: number){
  return Math.floor(Math.random()*(num + 1));
}

function App() {
  return (
    <>
      <Hola mensaje="Hola Mundo Juan!" type="text"/>
      <Hola mensaje="123456" tipo="number"/>
      <Hola mensaje="123456" tipo="password"/>
      <h1>{generarNum(5)}</h1>
    </>
  )
}

export default App
