


import { useState } from 'react';
import { Link } from "react-router-dom"
import { useCartContext } from '../../context/CartContext';
import Counter from '../itemCount/ItemCount';
import './itemDetail.scss';


const ItemDetail = ({ item }) => {

    const { addToCart, isInCart } = useCartContext()
    

    const [cantidad, setCantidad] = useState(1)
   

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad,   
        }
        
        addToCart(itemToCart)
        
    }

  



    
    
    return (
        <div className="container my-5 col-md-5 conte">

            
            <div className="target">

                <figure className='figu'>

                    <img src={item.img} style={{ width: '100%' }} className="im" alt='imagen-stock'/>

                </figure>

                <div className="contenidos ">

                    <h3 className="">{item.nombre}</h3>
                    <p className="">{item.desc}</p>
                    <h4 className="">${item.precio}</h4>
                    <h4 className="">Stock disponible:{item.stock}</h4>
                
                    {
                      isInCart(item.id)
                            ? <div>
                        <Link to="/cart" className="btn btn-dark my-2 boton">Terminar mi compra</Link></div>
                      : <Counter 
                            max={item.stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                            handleAgregar={handleAgregar}
                        />
                    }
                    
                    

                </div>

                
                

            </div>
           
        </div>
    )
}

export default ItemDetail