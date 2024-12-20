import { NavLink, Outlet } from "react-router-dom"

export const NavBar = () => {
    return (
        <div>
            <nav>
                <ul >
                    <li>
                        <NavLink to={"/"} className={'styl-list'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/super-heroes"} className={'styl-list'}>super heroes</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
