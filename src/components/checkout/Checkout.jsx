import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection} from 'firebase/firestore'
import { db } from "../../firebase/config"

const Checkout = () => {

    const { cart, cartTotal, terminarCompra,  } = useCartContext()
    const [orderId, setOrderId] = useState(null) 

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion:'',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
                
            
        }
        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) { 
            alert("Email incorrecto")
            return 
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                terminarCompra()
        })
    }

     if (orderId) {
        return (
            <div className="container my-5">
                <h2>Compra exitosa!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
     }
    
    
    if (cart.length === 0) {
        return <Navigate to="/"/>
    }


    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder="Tu nombre" />
                <input
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    type={'email'}
                    className="my-3 form-control"
                    placeholder="Email" />
                <input
                    name="direccion"
                    value={values.direccion}
                    onChange={handleInputChange}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder="Dirección" />
                
                <button type="submit" className="btn btn-dark my-2 boton">Enviar</button>
            </form>
        </div>

    )
}
export default Checkout