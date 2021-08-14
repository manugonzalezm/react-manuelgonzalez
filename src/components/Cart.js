import React from 'react';
import { useCartContext } from '../context/CartContext'
import { Typography, Button, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@material-ui/core'
import { RemoveShoppingCart, ShoppingCart, Restore, Payment, Home } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    table: {
        width: "90%",
    },
    paper: {
        opacity: 1,
        backgroundColor: 'transparent',
        margin: "25px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tituloCart: {
        margin: "20px 0 0 30px",
    },
    contenedor: {
        margin: "20px",
        marginBottom: "100px",
    },
    carritoVacio: {
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "18vh",
        justifyContent: "space-between",
        alignItems:"center",
    },
});

function Cart() {
    const { cartItems, clearCart, cartPrecio, removeItem } = useCartContext();

    const classes = useStyles();
    
    return(
        <div>
            <Container className={classes.contenedor}>
                <Typography variant="h3" className={classes.tituloCart}><ShoppingCart fontSize="large" /> Carrito</Typography>
                {cartItems.length!==0 ?
                <div>
                    <TableContainer component={Paper} className={classes.paper}>
                        <Table className={classes.table} size="small" aria-label="Tabla con productos del carrito">
                            <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="h6">Foto</Typography></TableCell>
                                <TableCell align="left"><Typography variant="h6">Nombre</Typography></TableCell>
                                <TableCell align="left"><Typography variant="h6">Cantidad</Typography></TableCell>
                                <TableCell align="left"><Typography variant="h6">Precio unit.</Typography></TableCell>
                                <TableCell align="left"><Typography variant="h5">Subtotal</Typography></TableCell>
                                <TableCell align="left"><Typography variant="h6">Eliminar</Typography></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {cartItems.length > 0 && cartItems.map((item, index) => (
                                <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    <img className="miniaturaProd" src={item.foto} alt={item.nombre} />
                                </TableCell>
                                <TableCell align="left"><Typography variant="h6">{item.nombre}</Typography></TableCell>
                                <TableCell align="left"><Typography variant="h6">x {item.cant}</Typography></TableCell>
                                <TableCell align="left"><Typography variant="h6">${item.precio}</Typography></TableCell>
                                <TableCell align="left"><Typography variant="h5">${item.precio*item.cant}</Typography></TableCell>
                                <TableCell align="left">
                                    <Button color="secondary" onClick={()=>removeItem(item,item.cant)} variant="contained">
                                        <RemoveShoppingCart />
                                    </Button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div id="botonesCart">
                        <Button color="primary" onClick={clearCart} variant="contained" startIcon={<Restore />}>
                            Limpiar carrito
                        </Button>
                        {cartPrecio!==0 &&
                            <Typography
                            variant="h5"
                            >
                                Total= ${cartPrecio}
                            </Typography>
                        }  
                        <Link to="/comprar">
                            <Button id="comprar" variant="contained" startIcon={<Payment />}>
                                Comprar
                            </Button>
                        </Link>
                    </div>
                </div>
                :
                <div className={classes.carritoVacio}>
                    <Typography variant="h5">No hay productos</Typography>
                    <Link to='/productos'>
                        <Button variant="contained" color="primary" startIcon={<Home />}>
                            Volver al Home
                        </Button>
                    </Link>
                </div>
                }
                
            </Container>
        </div>
    );
}

export default Cart;