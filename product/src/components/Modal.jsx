import "./css/modal.css"
import Form from "./Form"
import  ReactDOM from "react-dom"

function Modal({closeModal}) {
  return ReactDOM.createPortal((
    <div className="modal__back">
     <div className="modal">
         <Form></Form>
         <button onClick={closeModal} className="close">Close</button>
     </div>
    </div>
   ), document.body)
}

export default Modal