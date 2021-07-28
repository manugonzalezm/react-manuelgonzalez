import React from 'react';
import Item from './Item';

function ItemList({products}) {
    return(
        <div className="containerCards">
            {products.map(producto => {
                return(
                    <Item
                        key = { producto.id }
                        id = { producto.id }
                        nombre = { producto.nombre }
                        precio = { producto.precio }
                        foto = { producto.foto }
                    />
                )
            })}
        </div>
    )
}

export default ItemList;

