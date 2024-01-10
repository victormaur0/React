import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './index'
import Ejercicio1 from './components/ejercicio1'
import Ejercicio2 from './components/ejercicio2'
import Ejercicio3 from './components/ejercicio3'

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Index />
  },
  {
    "path": "/ejercicio1",
    "element": <Ejercicio1 />
  },
  {
    "path": "/ejercicio2",
    "element": <Ejercicio2 />
  },
  {
    "path": "/ejercicio3",
    "element": <Ejercicio3 />
  },
])

function App(){
  return(
      <RouterProvider router={router} />
  )
}

export default App 