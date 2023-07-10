import './App.css'
import Navbar from "./components/Navbar.jsx"
// import Modal from "./components/Modal.jsx"
// import Form from "./components/Form.jsx"
import Content from './components/Content'
import Footer from "./components/Footer.jsx"
import { useState } from 'react'

function App() {

const [product , setProduct] = useState([])

  return (
    <>
     <Navbar productLength = {product.length}></Navbar>
      <Content></Content>
     <Footer></Footer>
     
    </>
  )
}

export default App
