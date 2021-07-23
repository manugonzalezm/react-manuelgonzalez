import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function Item(producto) {
    return(
        <div className="cardProducto">
            <Link to={`/productos/${producto.id}`}>
            <h4> { producto.nombre } </h4>
                <img 
                    src={require(`../img/products/${producto.foto}`).default}
                />
                <p> ${ producto.precio } </p>
            </Link>        
            <ItemCount
                stock={ producto.stock }
                initial="1"
            />
        </div>
    )
}

export default Item;