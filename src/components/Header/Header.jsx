
import './Header.scss'
import { Link } from 'react-router-dom'
import Cartwidget from '../cartwidget/Cartwidget';
import {useLoginContext} from '../../context/LoginContext'

export const Header = () => {

    const {user, logout} = useLoginContext()


    return (
        <header className="bg-header container">
            <div className="header-container ">

                <Link to="/" className="header-title ">
                    
                         PRENDAS
                    
                </Link>

                <nav className="header-navbar ">
                    <Link to='/productos/sweater' className="header-navlink">
                        Sweater
                    </Link>
                    <Link to='/productos/zapatillas' className="header-navlink">
                        Zapatillas
                    </Link>
                    <Link to='/productos/campera' className="header-navlink">
                        Camperas
                    </Link>
                    <Link to='/Cart' className="header-navlink">
                        <Cartwidget />
                    </Link>
                </nav>
                <div className='login'>
                    <small> Usuario: {user.user}</small>
                
                    <button onClick={logout} className='btn btn-dark my-2  botons'>Logout</button>

                </div>
            </div>
            
        </header>
    )
}