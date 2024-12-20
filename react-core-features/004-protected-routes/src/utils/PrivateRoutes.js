import { Outlet, Navigate } from "react-router-dom";

import React from 'react'

const PrivateRoutes = () => {
    const auth = { 'token': false }
    return (
        <div>
            <h1>Hello sandy</h1>
            {/* Here you can make navbar */}
            {auth.token ? <Outlet /> : <Navigate to="/login" />}
        </div>
    )
}

export default PrivateRoutes