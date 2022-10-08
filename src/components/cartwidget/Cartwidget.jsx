import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cartwidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <div>
            <i className="bi bi-cart"></i>
            <span>{cartQuantity() }</span>
            
        </div>
        
        
    );
}

export default Cartwidget;