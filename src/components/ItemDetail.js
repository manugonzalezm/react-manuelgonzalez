import React from 'react';
import { Typography, Grid } from '@material-ui/core'
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
    containerDetalle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "90%"
    },
    containerDescripcion: {
        margin: "0 20px",
        padding: "50px 0 0 10px",
    },
});

function ItemDetail({ nombre, precio, foto, descripcion }) {

    const classes = useStyles();

    return(
        <Grid 
            container
        >
            <Grid
                item
                xs={6}
                className={classes.cardCenter}
            >
                <img
                    className={classes.fotoProducto}
                    src={ foto }
                    alt={ nombre }
                />
            </Grid>
            <Grid
                item
                xs={6}
                className={classes.cardCenter}
            >
            <div className={classes.containerDescripcion}>
                <Typography className={classes.titulo} variant="h5"> { nombre } </Typography>
                <Typography className={classes.descripcion} variant="body1"> { descripcion } </Typography>
                <Typography className={classes.precio} variant="h6"> ${ precio } </Typography>
            </div>
            </Grid>
        </Grid>
    )
}

export default ItemDetail;