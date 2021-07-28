import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Add, Remove, ShoppingCart, ShoppingBasket } from '@material-ui/icons';

export default function ItemCount({stock, initial}) {
    
    const Stock=parseInt(stock);
    const [cant,setCant] = useState(parseInt(initial));
    const [cart,setCart] = useState(true);

    const sacarProducto = () => {
        if(cant>parseInt(initial)){
            setCant(cant-1);
        }
    }

    const onAdd= () => {
        if(cant<Stock){
            setCant(cant+1);
        }
    }

    const finishCompra = () => {
        setCart(false);
    }

    return(
        <div>
            {   cart
                ? <div>
                    <form>
                    <div className="cant">
                        <button type="button" onClick={sacarProducto}><Remove /></button>
                        <input className="cantProducto" type="number" disabled value={cant} />
                        <button type="button" onClick={onAdd}><Add /></button>
                    </div>
                    <div className="cart">
                        <button type="submit" onClick={finishCompra}><ShoppingCart /> Agregar al Carrito</button>
                    </div>
                    </form>
                </div>
                    : <div className="cart">
                        <Link to={`/cart`}>
                            <Button
                            variant="contained" 
                            color="primary"
                            size="large"
                            startIcon={<ShoppingBasket />}>
                                Terminar tu compra
                            </Button>
                        </Link>
                    </div>
            }
        </div>
    )
}
