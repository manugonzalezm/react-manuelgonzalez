export const Productos = () =>{
    const data = [
        {
            id: 1,
            nombre: "Escritorio nórdico",
            precio: 12000,
            foto: escritorio
        },
        {
            id: 2,
            nombre: "Remera Einstein",
            precio: 1500,
            foto: remera
        },
        {
            id: 3,
            nombre: "Taza mágica Física y Química",
            precio: 800,
            foto: taza
        },
        {
            id: 4,
            nombre: "Teclado Gamer",
            precio: 6000,
            foto: teclado
        }
    ];

    return new Promise((response, reject) => {
        setTimeout(() =>{
            response(data)
        }, 2000)
    })
};