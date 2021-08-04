import React from 'react';
import { ShoppingCart } from '@material-ui/icons'
import { IconButton, Badge } from '@material-ui/core';
import{ useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
    const { cartContador } = useCartContext()

    return(
        <div>
            {   cartContador===0 ? <></>
                                    :
                                    <Link to='/cart'>
                                        <IconButton>
                                            <Badge badgeContent={cartContador} color="secondary">
                                                <ShoppingCart />
                                            </Badge>
                                        </IconButton>
                                    </Link>
                                }
            
        </div>
    )
}

export default CartWidget;