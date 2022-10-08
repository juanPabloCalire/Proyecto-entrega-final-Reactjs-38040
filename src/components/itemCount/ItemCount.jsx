


const Counter = ({ max, counter, setCounter, handleAgregar}) =>
{

    
    

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    
    }

    const handleSumar = () => {
        if (counter < max ) {
            setCounter(counter + 1)
        }
    }

    
     
    
    return (
        <div className="container my-5">
            

            <button  onClick={handleRestar} className="btn btn-dark my-2 boton">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-dark my-2 boton">+</button>
            <div>
                <button onClick={handleAgregar } className="btn btn-dark my-2 boton">Agregar al carrito</button>

            </div>
           

           
            



            
        </div>
    )
}

export default Counter