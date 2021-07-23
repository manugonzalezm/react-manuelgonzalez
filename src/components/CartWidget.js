import React from 'react';
import { ShoppingCart } from '@material-ui/icons'
import { IconButton } from '@material-ui/core';

function CartWidget() {
    return(
        <div>
            <IconButton>
                <ShoppingCart />
            </IconButton>
        </div>
    )
}

export default CartWidget;