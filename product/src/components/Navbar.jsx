import "./css/navbar.css"

function Navbar({productLength}) {
  return (
    <div className='navbar_container'>
        <div className="navbar-content container">
            <h1>CProduct</h1>
            <h2>{productLength>0 ? "Product: " + productLength : "NoProduct" }</h2>
        </div>

    </div>
  )
}

export default Navbar