import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
        const user = JSON.parse(localStorage.getItem("USER") || "");
        let auth = {'token': user.account ? true : false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/log-in"/>
    )
}

export default PrivateRoutes