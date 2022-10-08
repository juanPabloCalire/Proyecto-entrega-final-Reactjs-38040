
import {  useCartContext } from "../../context/CartContext";
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import "./cart.scss"


const Cart = () => {
    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    if (cart.length === 0) {
        return ( 
        
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <Link to="/" className="btn border-dark my-2">Ir a comprar</Link>
            </div>
        )
    }
    

    return (
        <div className="container my-5 col-md-5 conte">
            <div className="targets">
                <h2 className="contenidos">
                    Tus compras
                </h2>
                <div>
                    <hr/>

                </div>
                

                {cart.map((item) => ( 
                    
                    
                    <div className=" contenidos" key={item.id} >
                    
                        <h3>
                            {item.nombre}
                        </h3>
                        <p>
                            Precio: $ {item.precio}
                        </p>
                        <p>
                            Cantidad: {item.cantidad}
                        </p>
                        
                       <div>
                            <button onClick={() => removeItem(item.id)} className="btn border-dark my-2"><BsFillTrashFill /></button>
                        </div>
                    
                        <hr/>

                    </div>

                ))}
                <div className="contenidos">
                    <h4> 
                  Total: ${cartTotal()}
                        
                  </h4>
                  <button onClick={emptyCart} className="btn btn-dark my-2 boton"> 
                    Vaciar carrito
                    </button>
                    <div>
                        <Link className="btn btn-dark my-2 boton mx-3" to="/checkout">Terminar mi compra</Link>

                    </div>
                    

                </div>

                

            </div>

            
             
        </div>
    )
}
export default Cart; 