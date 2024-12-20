import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    const [LOGIN, setLOGIN] = useState('')

    useEffect(() => {
        const login = localStorage.getItem('login')
        setLOGIN(login)
        if (!login) {
            navigate('/login')
        }
    }, [])

    const logOut = () => {
        localStorage.setItem('login', '')
        navigate('/login')
    }
    return (
        <div>
            <Header LOGIN={LOGIN} LOGOUT={logOut} />
            <Component />
        </div>
    )
}

export default Protected