import React from 'react';
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fotoProducto: {
        width: "100%",
        height: "420px",
    },
    titulo: {
        fontSize: "2rem",
        margin: "5px 0",
    },
    descripcion: {
        fontSize: "1.1rem",
        margin: "10px 0",
    },
    precio: {
        margin: "5px"
    },
});

function ItemDetail({ nombre, precio, foto, descripcion }) {

    const classes = useStyles();

    return(
        <div>
            <img
                className={classes.fotoProducto}
                src={ foto }
                alt={ nombre }
            />
            <Typography className={classes.titulo} variant="h5"> { nombre } </Typography>
            <Typography className={classes.descripcion} variant="body1"> { descripcion } </Typography>
            <Typography className={classes.precio} variant="h6"> ${ precio } </Typography>
        </div>
    )
}

export default ItemDetail;