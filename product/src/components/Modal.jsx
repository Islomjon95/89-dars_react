import "./css/modal.css"
import Form from "./Form"
import  ReactDOM from "react-dom"

function Modal({setShowModal, addProduct }) {
  return ReactDOM.createPortal((
    <div className="modal__back">
     <div className="modal">
         <Form addProduct={addProduct} setShowModal={setShowModal}></Form>
     </div>
    </div>
   ), document.body)
}

export default Modal