import './loginScreen.scss'
import { useContext } from "react"
import { useState } from "react"
import { LoginContext } from "../../context/LoginContext"


const LoginScreen = () => {

    const { login, user } = useContext(LoginContext)
    console.log(user)

    const [email, setEmail]   = useState('')
    const [ pass, setPass ] = useState('')
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(
            {email, pass}
        )
        
    }
     
    
    

    return (

        
        <div className="col-md-6 mb-2 ">
            <form onSubmit={handleSubmit} className="container targel contenido">
                <h1>MERCADO PRENDAS</h1>
                <input 
                    placeholder='email'
                    type={'email'}
                    className=' form-control my-2'
                    value={email}
                    onChange={handleEmailChange}
                />
                <input 
                    placeholder='contraseña'
                    type={'password'}
                    className='form-control my-2'
                    value={pass}
                    onChange={handlePassChange}
                />
                

                <button className="btn btn-dark my-2 boton" type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreen