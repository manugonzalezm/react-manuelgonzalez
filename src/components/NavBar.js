import React from 'react';
import logoTienda from '../img/logoTienda.png';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom'
import { Button,Menu,MenuItem } from '@material-ui/core/Button';

export default function NavBar() {
    return(
        <div>
            <nav className="menu">
                <img src={logoTienda} id="logo"/>
                <h1>TiendaCiencia</h1>
                <ul className="menu">
                    <li>
                        <Link to="/">Productos</Link>
                    </li>
                    <li>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Categorías
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem><Link to="/categoria/tazas">Tazas</Link></MenuItem>
                    <MenuItem><Link to="/categoria/indumentaria">Indumentaria</Link></MenuItem>
                    <MenuItem><Link to="/categoria/muebles">Muebles y accesorios</Link></MenuItem>
                    </Menu>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    );
}