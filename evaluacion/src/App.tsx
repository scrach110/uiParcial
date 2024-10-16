import { Header } from "./assets/Header"
import { Carta } from "./types/Carta"
import { BodyApp } from "./assets/BodyApp"
import './App.css'



const listaCarta:Carta[] = [
  {
    nombre: "juguera",
    imagen: "/img/bicicleta.png"
  },
  {
    nombre: "Juguera",
    imagen: "/img/juguera.jpeg"
  },
  {
    nombre: "Bicicleta",
    imagen: "/img/bicicleta.png"
  },
  {
    nombre: "Notebook",
    imagen: "/img/notebook.webp"
  },
  {
    nombre: "Pelota",
    imagen: "/img/pelota.jpeg"
  }
]

function App() {

  return (
    <>
      <Header/>
      <BodyApp cartas={listaCarta}/>


    </>
  )
}

export default App
