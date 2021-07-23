import React from 'react';
import Item from './Item';

function ItemList({products}) {
    return(
        <div className="containerCards">
                    <Item
                        key = { products.id }
                        id = { products.id }
                        nombre = { products.nombre }
                        precio = { products.precio }
                        foto = { products.foto }
                        stock = { products.stock }
                    />
        </div>
    )
}

export default ItemList;

