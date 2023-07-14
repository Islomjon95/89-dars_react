import "./css/content.css"
import { useState } from "react"
import Modal from "./Modal"
function Content({product , children}) {
  const [showModal, setShowModal] = useState(false)
  const closeModal = ()=>{
    setShowModal(false)
  }
  return (
    <>
    <div className="content__product container">
      {children}
    </div>
    {showModal&&<Modal closeModal={closeModal}></Modal>}
    {product.length===0 ?<h1 className="no__content">No Product</h1> : <small></small>}
    <button onClick={()=>{setShowModal(true)}} className="create_product">Create Product</button>
    </>
  )
}

export default Content