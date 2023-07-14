import "./css/form.css"
import { useState } from "react"
import { v4 as uuidv4} from "uuid"



function Form({addProduct}) {
    const [newProduct, setNewProduct]=useState({
        url: '', 
        name: '', 
        price: '', 
        category: '', 
        customer: '',
        id: uuidv4()
    })

    

    const handleSubmit = (e)=>{
        e.preventDefault()
        addProduct(newProduct)
    }
    
  return (
    <>
        <form className="product__form" onSubmit={handleSubmit}>
            <label>
                <span>URL img:</span>
                <input onChange={(e)=>{setNewProduct((prev)=>{return {...prev, url: e.target.value}})}} type="url" />
            </label>
            <label>
                <span>Product name:</span>
                <input onChange={(e)=>{setNewProduct((prev)=>{return {...prev, name: e.target.value}})}} type="text" />
            </label>
            <label>
                <span>Product price:</span>
                <input onChange={(e)=>{setNewProduct((prev)=>{return {...prev, price: e.target.value}})}} type="text" />
            </label>
            <label className="selects">
                <span className="category">Category:</span>
                <select className="select" onChange={(e)=>{setNewProduct((prev)=>{return {...prev, category: e.target.value}})}}>
                    <option value="Clothes">Clothes</option>
                    <option value="Tools">Tools</option>
                    <option value="Health">Health</option>
                    <option value="Sports">Sports</option>
                </select>
            </label>

            <label>
                <span>Customer:</span>
                <input onChange={(e)=>{setNewProduct((prev)=>{return {...prev, customer: e.target.value}})}} type="text" />
            </label>

            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Form