import "./css/content.css"
import { useState } from "react"
import Modal from "./Modal"
function Content({product , children , addProduct}) {
  const [showModal, setShowModal] = useState(false)
  const closeModal = (e)=>{
    if(e.target.className==="modal__back") setShowModal(false)
    if(e.key==="Escape") setShowModal(false)
  }
  return (
    <div className="content" onClick={closeModal} onKeyDown={closeModal}>
    <div className="content__product container">
      {children}
    </div>
    {showModal&&<Modal setShowModal={setShowModal} addProduct={addProduct}></Modal>}
    {product.length===0 ?<h1 className="no__content">No Product</h1> : <small></small>}
    <button onClick={()=>{setShowModal(true)}} className="create_product">Create Product</button>
    </div>
  )
}

export default Content