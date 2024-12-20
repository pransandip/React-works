import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Buttons'

const Header = (props) => {
    const { LOGIN, LOGOUT } = props

    return (
        <header>
            <nav>
                <ul className='list'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        {!LOGIN ?
                            <NavLink to="/login">Login</NavLink>
                            : <Button
                                primary
                                onClick={LOGOUT}
                                style={{ marginTop: '-10px', marginLeft: '-5px', fontSize: '14px' }}
                            >Logout</Button>}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header