import React from 'react';
import { Typography } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'



function ItemDetail({ nombre, precio, foto, descripcion }) {

    return(
        <div className="cardProducto Detalle">
            <Typography id="titleProducto" variant="h6"><FiberManualRecord /> { nombre } </Typography>
            <img 
                src={foto}
            />
            <Typography className="descripcion" variant="body1"> { descripcion } </Typography>
            <Typography className="precio" variant="subtitle1"> ${ precio } </Typography>
        </div>
    )
}

export default ItemDetail;