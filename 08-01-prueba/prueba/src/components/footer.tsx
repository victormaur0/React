import imagen from './../assets/react.svg'

export default () => {
    return(
        <footer className='grid-centrar'>
            <p>Copyright {(new Date).getFullYear()}</p>
            <div className='flex-centrar'>
                <p>Hecho con React</p>
                <img src={imagen} alt='Logo React'></img>
            </div>
        </footer>
    )
}