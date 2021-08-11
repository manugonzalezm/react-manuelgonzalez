import React from 'react';
import { useState } from 'react';
import CartWidget from './CartWidget';
import {Button,
        AppBar,
        Toolbar,
        Typography,
        makeStyles,
        Menu,
        MenuItem } from '@material-ui/core';
import {OfflineBolt,
        Store,
        Category,
        Contacts } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    title: {
        marginRight:300
    },
    marca:{
        fontSize: "2.5rem",
    },
}))

export default function NavBar() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return(
                <div>
                    <AppBar>
                        <Toolbar>
                            <Link to="/" className={classes.title}>
                                <Typography className={classes.marca} variant="h1">
                                    <OfflineBolt fontSize="large"/>
                                    TiendaCiencia
                                </Typography>
                            </Link>
                            <div id="botones">
                                <Link to="/productos">
                                    <Button 
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<Store/>}
                                    >
                                        Productos
                                    </Button>
                                </Link>
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Category/>}
                                    onClick={handleOpenMenu}
                                    aria-controls='categorias'
                                    disableRipple
                                >
                                    Categorías
                                </Button>
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Contacts/>}
                                >
                                    Contacto
                                </Button>
                                            <CartWidget />
                            </div>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.offset}></div>

                    <Menu 
                    id='categorias' 
                    onClose={handleMenuClose} 
                    anchorEl={anchorEl} 
                    open={Boolean(anchorEl)}
                    >
                        <Link to="/categorias/muebles">
                            <MenuItem onClick={handleMenuClose}>Muebles</MenuItem>
                        </Link>
                        <Link to="/categorias/indumentaria">
                            <MenuItem onClick={handleMenuClose}>Indumentaria</MenuItem>
                        </Link>
                        <Link to="/categorias/accesorios">
                            <MenuItem onClick={handleMenuClose}>Accesorios</MenuItem>
                        </Link>
                        <Link to="/categorias/tazas">
                            <MenuItem onClick={handleMenuClose}>Tazas</MenuItem>
                        </Link>
                    </Menu>
                </div>
    );
}