import React from 'react';
import ItemCount from './ItemCount';

function Item(producto) {
    return(
        <div className="cardProducto">
            <h4> { producto.id } - { producto.nombre } </h4>
            <img 
                src={require(`../img/products/${producto.foto}`).default}
            />
            <p> ${ producto.precio } </p>
            <ItemCount
                stock={ producto.stock }
                initial="1"
            />
        </div>
    )
}

export default Item;