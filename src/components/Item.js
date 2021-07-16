import React from 'react';
import ItemCount from './ItemCount';

function Item(producto) {
    return(
        <div className="cardProducto">
            <h4> { producto.id } - { producto.nombre } </h4>
            <img 
                src={ producto.foto }
            />
            <p> ${ producto.precio } </p>
            <ItemCount
                stock="10"
                initial="1"
            />
        </div>
    )
}

export default Item;