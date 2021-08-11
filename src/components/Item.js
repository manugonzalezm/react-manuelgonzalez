import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 350,
    },
});

function Item(producto) {
    
    const classes = useStyles();
    
    return(
        <div>
            <Link to={`/productos/${producto.id}`}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={ producto.nombre }
                            height="255"
                            image={producto.foto}
                            title={ producto.nombre }
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                { producto.nombre }
                            </Typography>
                            <Typography variant="h6">
                                ${ producto.precio }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    )
}

export default Item;