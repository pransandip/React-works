import React from 'react'
import '../style/Header.css'

const Header = () => {
  return (
    <div className="header">
     <div className="navbar">
         <div className="container">
         <h1 className="logo lg-heading text-light">TW</h1>
         <ul className="nav-items">
             <li className="nav-item"><a href="#">Home</a></li>
             <li className="nav-item"><a href="#">About</a></li>
             <li className="nav-item"><a href="#">Contact</a></li>
         </ul>
         </div>
     </div>
     <div className="header-content">
         <h1 className="lg-heading text-light main-heading">Power the World</h1>
         <p className="text-light">power the world, exprience the greatness, it's the best gift given by nature</p>
         <a href="#" className="btn btn-primary text-red">Explore Sources</a>
     </div>
    </div>
  )
}
export default Header