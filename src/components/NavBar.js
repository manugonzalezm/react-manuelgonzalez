import React from 'react';
import logoTienda from '../img/logoTienda.png';

export default function NavBar() {
    return(
        <div>
            <nav className="menu">
                <img src={logoTienda} id="logo"/>
                <h1>TiendaCiencia</h1>
                <ul className="menu">
                    <li>
                        <a href="index.js">Home</a>
                    </li>
                    <li>
                        <a href="index.js">Productos</a>
                    </li>
                    <li>
                        <a href="index.js">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}