import { createContext, useContext, useState } from "react";



export const LoginContext = createContext()

const usuarios = [
    
    {
        email: 'reactjs@coder.com',
        password: 'coder'
    }
]

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        user: '',
        logged: false,
        error: ''
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true,
                   
                })
            } else {
                alert("password incorrecto")
            }
        } else {
            alert("email incorrecto")
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            
        })
    }


    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}