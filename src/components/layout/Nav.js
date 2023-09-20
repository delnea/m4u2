import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
    return(
        <nav>
        <div className="holder">
            <ul>
                <li><NavLink to="/" className={({ isActive}) => isActive ? "activo" : undefined}>Home</NavLink></li>
                <li><NavLink to="/apartamentos" className={({ isActive}) => isActive ? "activo" : undefined}>Apartamentos</NavLink></li>
                <li><NavLink to="/servicios" className={({ isActive}) => isActive ? "activo" : undefined}>Servicios</NavLink></li>
                <li><NavLink to="/galeria" className={({ isActive}) => isActive ? "activo" : undefined}>Galeria</NavLink></li>
                <li><NavLink to="/contacto" className={({ isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
            </ul>
        </div>
        </nav>
    );
}

export default Nav;