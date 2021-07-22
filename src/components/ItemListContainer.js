import React from 'react';
import ItemList from './ItemList'

function ItemListContainer(producto) {
    return(
        <div id="itemListContainer">
            <ItemList />
        </div>
    )
}

export default ItemListContainer;