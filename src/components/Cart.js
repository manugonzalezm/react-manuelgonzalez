import React from 'react';
import { useCartContext } from '../context/CartContext'
import { Typography, Button } from '@material-ui/core'

function Cart() {
    const { cartItems, clearCart } = useCartContext();
    
    return(
        <div id="carrito">
            <Typography variant="h3">Carrito</Typography>
            {cartItems.length > 0 && cartItems.map((item, index) => (
                <div>
                    <Typography variant="body1" key={index}>
                        {item.nombre} x {item.cant}
                    </Typography>
                </div>
                ))}
            <Button color="primary" onClick={clearCart} variant="contained">
                Limpiar carrito
            </Button>
        </div>
    );
}

export default Cart;