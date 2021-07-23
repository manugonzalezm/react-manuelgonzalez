import React from 'react';
import { useState } from 'react';
import { Add, Remove, ShoppingCart } from '@material-ui/icons';

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
                <div className="cant">
                    <button type="button" onClick={sacarProducto}><Remove /></button>
                    <input className="cantProducto" type="number" disabled value={cant} />
                    <button type="button" onClick={onAdd}><Add /></button>
                </div>
                <div className="cart">
                    <button type="submit"><ShoppingCart /> Agregar al Carrito</button>
                </div>
            </form>
        </div>
    )
}
