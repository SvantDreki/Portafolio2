import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Layout