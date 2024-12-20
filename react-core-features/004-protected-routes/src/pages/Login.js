import React, { useEffect, useState } from 'react'
import { Button } from '../styles/Buttons'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Login = () => {
    const navigate = useNavigate()

    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const login = localStorage.getItem('login')
        if (login) {
            navigate('/')
        }
    }, [])

    const login = () => {
        localStorage.setItem('login', true)
        navigate('/')
    }

    return (
        <div>
            <Header />
            <h1>Login</h1>
            <input type="text" name="username" id="username" onChange={e => setuserName(e.target.value)} /><br />
            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} /><br />
            <Button primary
                style={{ marginLeft: '2rem' }}
                // onClick={() => { navigate('/') }}
                onClick={() => {
                    if (userName !== '' && password !== '') {
                        login();
                    }
                }}
            >Login</Button>
            <Button
                onClick={() => { navigate(-1) }}
            >back</Button>
        </div>
    )
}

export default Login