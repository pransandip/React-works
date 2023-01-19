import { Link, NavLink, Outlet } from 'react-router-dom'
import logoImage from './logo.svg';
import './Header.css';

const Header = props => {
    const { scrollToSection, challenge, solution, flowerLifecycle, contactUs } = props;
    return (
        <div>
            <header>
                <nav id="header" className="nav-header">
                    <div className="container">
                        <div className="nav-row">
                            <div className="nav-logo">
                                <Link to={"/"} className="custom-logo-link">
                                    <img src={logoImage} alt="Logo" />
                                </Link>
                            </div>
                            <div id="nav-menu-container" className="menu-container">
                                <ul className="nav-menu">
                                    <li className="active-page"><a onClick={() => scrollToSection(challenge)}>Challenge</a></li>
                                    <li><a onClick={() => scrollToSection(solution)}>Solution</a></li>
                                    <li><a onClick={() => scrollToSection(flowerLifecycle)}>Flower Lifecycle</a></li>
                                    <li><NavLink to={"/team"}>Team</NavLink ></li>
                                    <li><a onClick={() => scrollToSection(contactUs)}>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}
export default Header