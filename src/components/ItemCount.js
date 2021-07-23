import React from 'react';
import { useState } from 'react';

export default function ItemCount({stock, initial}) {
    
    const Stock=parseInt(stock);
    const [cant,setCant] = useState(parseInt(initial));

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

    return(
        <div>
            <form>
                <button type="button" onClick={sacarProducto}>-</button>
                <input type="number" disabled value={cant} />
                <button type="button" onClick={onAdd}>+</button>
                <button type="submit">Agregar al Carrito</button>
            </form>
        </div>
    )
}
