import "./css/modal.css"
import Form from "./Form"
import  ReactDOM from "react-dom"

function Modal({closeModal , addProduct}) {
  return ReactDOM.createPortal((
    <div className="modal__back">
     <div className="modal">
         <Form addProduct={addProduct}></Form>
         <button onClick={closeModal} className="close">Close</button>
     </div>
    </div>
   ), document.body)
}

export default Modal