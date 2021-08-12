import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Add, Remove, AddShoppingCart } from '@material-ui/icons';

export default function ItemCount({ cant, sacarProducto, onAdd, finishCompra }) {

    return(
        <div>
            <form id="containerCount" onSubmit={finishCompra}>
                <div id="controlsCount">
                    <Button onClick={sacarProducto}><Remove /></Button>
                    <TextField 
                        id="cant"
                        type="number"
                        value={cant}
                        inputProps={{
                            readOnly: true,
                        }}
                    />
                    <Button onClick={onAdd}><Add /></Button>
                </div>
                <div id="cart">
                    <Button type="submit"><AddShoppingCart /> Agregar al Carrito</Button>
                </div>
            </form>
        </div>
    )
}
