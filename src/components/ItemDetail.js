import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail(producto) {
    return(
        <div className="cardProducto">
            <h4> { producto.id } - { producto.titulo } </h4>
            <img 
                src={require(`../img/products/${producto.foto}`).default}
            />
            <p>{ producto.descripcion }</p>
            <p> ${ producto.precio } </p>
            <ItemCount
                stock={ producto.stock }
                initial="1"
            />
        </div>
    )
}

export default ItemDetail;