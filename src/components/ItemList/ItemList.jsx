import Item from "../Item/Item"
import './itemList.scss'


const ItemList = ( {productos = []} ) => {

    return (
        <div className='row '>
            <h2 className="titulo">Nuestras Prendas</h2>
           

            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList