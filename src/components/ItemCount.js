import React from 'react';
import { Button } from '@material-ui/core';
import { Add, Remove, AddShoppingCart } from '@material-ui/icons';


export default function ItemCount({ cant, sacarProducto, onAdd, finishCompra }) {

    return(
        <div>
            <form>
                <div className="cant">
                    <button type="button" onClick={sacarProducto}><Remove /></button>
                    <input className="cantProducto" type="number" disabled value={cant} />
                    <button type="button" onClick={onAdd}><Add /></button>
                </div>
                <div className="cart">
                    <Button type="submit" onClick={finishCompra}><AddShoppingCart /> Agregar al Carrito</Button>
                </div>
            </form>
        </div>
    )
}
