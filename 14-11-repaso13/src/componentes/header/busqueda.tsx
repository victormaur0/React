const busqueda = (props: any) => {
    return (<div>
        <h1>{props.nombre}</h1>
        <small>{props.precio}</small>
        <p>{props.descripcion}</p>
    </div>)
}

export default busqueda;