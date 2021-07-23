import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail(producto) {

    return(
        <div className="cardProducto">
            <h4> { productDetail.titulo } </h4>
            <img 
                src={require(`../img/products/${productDetail.foto}`).default}
            />
            <p>{ productDetail.descripcion }</p>
            <p> ${ productDetail.precio } </p>
            <ItemCount
                stock={ productDetail.stock }
                initial="1"
            />
        </div>
    )
}

export default ItemDetail;