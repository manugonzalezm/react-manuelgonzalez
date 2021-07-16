import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList'

function ItemListContainer(producto) {
    return(
        <div id="itemListContainer">
            <ItemList />
        </div>
    )
}

export default ItemListContainer;