import React from 'react';
import { useCartContext } from '../context/CartContext'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Cart() {
    const { cartItems, clearCart, cartPrecio, removeItem } = useCartContext();
    
    return(
        <div id="carrito">
            <Typography variant="h3">Carrito</Typography>
            {cartItems.length > 0 ? cartItems.map((item, index) => (
                <div className="containerCarts">
                    <img className="miniaturaProd" src={item.foto} />
                    <Typography variant="body1" key={index}>
                        {item.nombre} x {item.cant}
                    </Typography>
                    <Button color="secondary" onClick={()=>removeItem(item,item.cant)} variant="contained">
                        Eliminar
                    </Button>
                </div>
                ))
            :   
            <>
            <Typography variant="h5">No hay productos</Typography>
            <Link to='/productos'>
                <Button variant="contained" color="primary">Volver al Home</Button>
            </Link>
            </>
            }
            {cartItems.length > 0 &&
                <div id="botonesCart">
                    <Button color="primary" onClick={clearCart} variant="contained">
                        Limpiar carrito
                    </Button>
                    {cartPrecio!==0 &&
                        <Typography
                        variant="h5"
                        >
                            Total= ${cartPrecio}
                        </Typography>
                    }  
                    <Button id="comprar" variant="contained">
                        Comprar
                    </Button>
                </div>
            }
        </div>
    );
}

export default Cart;