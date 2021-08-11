import React from 'react';
import Item from './Item';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 0 35px 0",
    },
});

function ItemList({products}) {

    const classes = useStyles();

    return(
        <div className="containerCards">
            {products.map(producto => {
                return(
                    <Grid 
                        item 
                        xs={4}
                        className={classes.cardCenter}
                        justify="center"
                        alignItems="center"
                    >
                        <Item
                            key = { producto.id }
                            id = { producto.id }
                            nombre = { producto.nombre }
                            precio = { producto.precio }
                            foto = { producto.foto }
                        />
                    </Grid>
                )
            })}
        </div>
    )
}

export default ItemList;

