const hola = (props: any) => {
    return (
    <>
    <h1>{props.mensaje}</h1><br />
    <input value={props.mensaje} type={props.tipo}/>
    </>
    )
}

export default hola;