import { Link, NavLink, Outlet } from "react-router-dom";
import logoImage from "./logo.svg";
import "./Header.css";

const Header = (props) => {
  // destructuring props
  const {
    scrollToSection,
    challenge,
    solution,
    flowerLifecycle,
    contactUs,
    matchURL,
    challenge_,
    solution_,
    flowerLifecycle_,
  } = props;

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
                  <li className="active-page">
                    {!matchURL ? (
                      <NavLink onClick={() => scrollToSection(challenge)}>
                        Challenge
                      </NavLink>
                    ) : (
                      <Link to={"/"} state={{ challenge_: challenge_ }}>
                        Challenge
                      </Link>
                    )}
                  </li>
                  <li>
                    {!matchURL ? (
                      <NavLink onClick={() => scrollToSection(solution)}>
                        Solution
                      </NavLink>
                    ) : (
                      <Link to={"/"} state={{ solution_: solution_ }}>
                        Solution
                      </Link>
                    )}
                  </li>
                  <li>
                    {!matchURL ? (
                      <NavLink onClick={() => scrollToSection(flowerLifecycle)}>
                        Flower Lifecycle
                      </NavLink>
                    ) : (
                      <Link
                        to={"/"}
                        state={{ flowerLifecycle_: flowerLifecycle_ }}
                      >
                        Flower Lifecycle
                      </Link>
                    )}
                  </li>
                  <li>
                    <NavLink to={"/team"}>Team</NavLink>
                  </li>
                  <li>
                    <Link onClick={() => scrollToSection(contactUs)}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Header;
