function ItemListContainer(producto) {
    return(
        <div className="cardProducto">
            <h4> { producto.id } - { producto.nombre } </h4>
            <img 
                src={ producto.foto }
            />
            <p> ${ producto.precio } </p>
        </div>
    )
}

export default ItemListContainer;