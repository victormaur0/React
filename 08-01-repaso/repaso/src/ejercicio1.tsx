const ejercicio = (props: any) => {

    return (
        <>
            <h4>{props.precio}</h4>
            <button onClick={props.funcion}>Dame descuento</button>
        </>
    )
}

export default ejercicio