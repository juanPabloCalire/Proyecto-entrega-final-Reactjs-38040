import { Link } from 'react-router-dom'
import './item.scss' 


const Item = ( {producto} ) => {

    return (
        <div className='col-md-3 mb-4 '>
            <div className='targe'>

                <figure className=''>
                    <img src={producto.img} style={{ width: '100%' }} alt='imagen-stock'/>
                </figure>
                <div className='contenido'>
                    <h4 className=''>{producto.nombre}</h4>
                    <p className=''>Precio: {producto.precio}</p>
                    <Link to={`/item/${producto.id}`} className="btn btn-dark my-2 boton" >Ver más
                    </Link>

                </div>

            </div>
            
            
        </div>
       
    )
}

export default Item