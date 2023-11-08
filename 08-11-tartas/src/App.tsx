import './App.css'
import Tarta from "./tarta.tsx"
import viteImg from "../public/vite.svg"
import reactImg from "./assets/react.svg"

function App() {
  return (
    <>
      <h1>Hola Mundo!</h1>
      <img src={viteImg} alt="Imagen Vite" />
      <Tarta />
      <img src={reactImg} alt="Imagen React" />
    </>
  )
}

export default App
