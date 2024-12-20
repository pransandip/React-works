import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const NavHeader = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default NavHeader