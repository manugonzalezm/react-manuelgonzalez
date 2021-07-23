import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {Typography} from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'

function Item(producto) {
    return(
        <div className="cardProducto">
                    <Link to={`/productos/${producto.id}`}>
                    <Typography id="titleProducto" variant="h6"><FiberManualRecord /> { producto.nombre } </Typography>
                        <img 
                            src={producto.foto}
                        />
                        <Typography className="precio" variant="subtitle1"> ${ producto.precio } </Typography>
                    </Link>
                    <ItemCount
                        stock={ producto.stock }
                        initial="1"
                    />
        </div>
    )
}

export default Item;