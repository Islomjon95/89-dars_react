import "./css/form.css"
import { useState } from "react"
import { v4 as unikalId } from 'uuid';

function Form({ addProduct, setShowModal  }) {
    const [newProduct, setNewProduct] = useState({
        url: "", 
        name: "", 
        price: "" , 
        category: "" , 
        customer: "", 
        id: unikalId() 
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        addProduct(newProduct)
        setShowModal(false)
    }

   
  return (
    <>
        <form className="product__form" onSubmit={handleSubmit}>
            <legend>Add new Product</legend>
            <label>
                <span>URL img:</span>
                <input required onChange={(e)=>{setNewProduct((prev)=>{return{...prev, url: e.target.value}})}} type="url" />
            </label>
            <label>
                <span>Product name:</span>
                <input required onChange={(e)=>{setNewProduct((prev)=>{return{...prev, name: e.target.value}})}} type="text" />
            </label>
            <label>
                <span>Product price:</span>
                <input required onChange={(e)=>{setNewProduct((prev)=>{return{...prev, price: e.target.value}})}} type="text" />
            </label>
            <label className="selects">
                <span className="category">Category:</span>
                <select required onChange={(e)=>{setNewProduct((prev)=>{return{...prev, category: e.target.value}})}} className="select">
                    <option>Choose category</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Tools">Tools</option>
                    <option value="Health">Health</option>
                    <option value="Sports">Sports</option>
                </select>
            </label>

            <label>
                <span>Customer:</span>
                <input required onChange={(e)=>{setNewProduct((prev)=>{return{...prev, customer: e.target.value}})}} type="text" />
            </label>

            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Form