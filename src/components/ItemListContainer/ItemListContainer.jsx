import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { Navigate, useParams } from 'react-router-dom'
import { collection, getDocs, query, where, limit } from "firebase/firestore"
import { db } from "../../firebase/config"

import { useLoginContext } from "../../context/LoginContext"


const ItemListContainer = () => {
   
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const q = categoryId
            ? query(productosRef, where('category', '==', categoryId), limit(10))
            :productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc)=> ({id:doc.id,...doc.data()}) )
                console.log(productosDB);

                setProductos(productosDB)
            
            })
            .finally(() => {
                setLoading(false)
            })

        
    }, [categoryId])

    const {user} = useLoginContext()


    return (
        <>
            {
                user.logged
                ?
                
                    <div>
                        {
                            loading
                                ? <h2>Cargando..</h2>
                                :<ItemList productos={productos}/>
                        }
                    </div>
                :<Navigate to="/login"/>
                    


            }
           
        </>
     
    )
}

export default ItemListContainer

