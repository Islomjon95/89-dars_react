import './App.css'
import Navbar from "./components/Navbar.jsx"
// import Modal from "./components/Modal.jsx"
// import Form from "./components/Form.jsx"
import Content from './components/Content'
import Footer from "./components/Footer.jsx"
import { useState } from 'react'

function App() {

const [product , setProduct] = useState([
  
])

const addProduct=(newproduct)=>{
  setProduct((prev)=>{
    return [...prev, newproduct]
  })
}

const cardDelete = (btnid)=>{
  setProduct((prev)=>{
    return(
      prev.filter((item)=>{
        return(btnid!==item.id)
      })
    )
  })
  
}



  return (
    <div className='App' >
    <Navbar productLength = {product.length}></Navbar>
    <Content product={product} addProduct={addProduct}>
      {product.map((product)=>{
        return(
          <div key={product.id} className="productCard">
              <img src={product.url} alt="rasm" />
              <p>Product name: <i>{product.name}</i></p> 
              <p>Product price: <i>{product.price}</i></p>
              <p>Category: <i>{product.category}</i></p>
              <p>customer: <i>{product.customer}</i></p>
              <button onClick={()=>{cardDelete(product.id)}} className='delCard'>Delete</button>
          </div>
        )
      })}

    </Content>
    <Footer></Footer>
     
    </div>
  )
}

export default App
