import "./css/form.css"

function Form() {
  return (
    <>
        <form className="product__form">
            <label>
                <span>URL img:</span>
                <input type="url" />
            </label>
            <label>
                <span>Product name:</span>
                <input type="text" />
            </label>
            <label>
                <span>Product price:</span>
                <input type="text" />
            </label>
            <label className="selects">
                <span className="category">Category:</span>
                <select className="select">
                    <option value="Clothes">Clothes</option>
                    <option value="Tools">Tools</option>
                    <option value="Health">Health</option>
                    <option value="Sports">Sports</option>
                </select>
            </label>

            <label>
                <span>Customer:</span>
                <input type="text" />
            </label>

            <button>Submit</button>
        </form>
    </>
  )
}

export default Form