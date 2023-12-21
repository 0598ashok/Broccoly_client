import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../css/footersidefields.css"



const Footersidefields = () => {
    
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
  return (
    <div>

<div className="desktop_menu">
      
      <ul className={`desktop-list ${isMenuOpen ? 'show' : ''}`}>
        <li><NavLink to="#">Contact Us</NavLink></li>
        <li><NavLink to="#">About Us</NavLink></li>
        <li><NavLink to="#">Delivery & Returns</NavLink></li>
        <li><NavLink to="#">Guarantee</NavLink></li>
        <li><NavLink to="#">Terms & Conditions</NavLink></li>
        <li><NavLink to="#">Privacy Policy</NavLink></li>
        <li><NavLink to="#">Security</NavLink></li>
      </ul>
    </div>



<div className="mobile_menu">
      <button className="menu-toggle" onClick={toggleMenu}>Menu</button>
      <ul className={`menu_list ${isMenuOpen ? 'show' : ''}`}>
      <li><NavLink to="#">Contact Us</NavLink></li>
        <li><NavLink to="#">About Us</NavLink></li>
        <li><NavLink to="#">Delivery & Returns</NavLink></li>
        <li><NavLink to="#">Guarantee</NavLink></li>
        <li><NavLink to="#">Terms & Conditions</NavLink></li>
        <li><NavLink to="#">Privacy Policy</NavLink></li>
        <li><NavLink to="#">Security</NavLink></li>
      </ul>
    </div>


    
    </div>
  )
}

export default Footersidefields
