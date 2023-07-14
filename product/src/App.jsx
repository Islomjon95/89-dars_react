import './App.css'
import Navbar from "./components/Navbar.jsx"
// import Modal from "./components/Modal.jsx"
// import Form from "./components/Form.jsx"
import Content from './components/Content'
import Footer from "./components/Footer.jsx"
import { useState } from 'react'

function App() {

const [product , setProduct] = useState([
  {url: "https://picsum.photos/350/350?random=1", name: "T-short", price: "45$" , category: "clothes" , customer: "Diyor", id: "1"},
  {url: "https://picsum.photos/350/350?random=2", name: "T-short", price: "45$" , category: "clothes" , customer: "Diyor", id: "2"},
  {url: "https://picsum.photos/350/350?random=3", name: "T-short", price: "45$" , category: "clothes" , customer: "Diyor", id: "3"},
  {url: "https://picsum.photos/350/350?random=4", name: "T-short", price: "45$" , category: "clothes" , customer: "Diyor", id: "4"},
  {url: "https://picsum.photos/350/350?random=5", name: "T-short", price: "45$" , category: "clothes" , customer: "Diyor", id: "5"},
  {url: "https://picsum.photos/350/350?random=6", name: "T-short", price: "45$" , category: "clothes" , customer: "Diyor", id: "6"},
  {url: "https://picsum.photos/350/350?random=7", name: "T-short", price: "45$" , category: "clothes" , customer: "Diyor", id: "7"},
  {url: "https://picsum.photos/350/350?random=8", name: "T-short", price: "45$" , category: "clothes" , customer: "Diyor", id: "8"}
])

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
    <>
    <Navbar productLength = {product.length}></Navbar>
    <Content product={product}>
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
     
    </>
  )
}

export default App
