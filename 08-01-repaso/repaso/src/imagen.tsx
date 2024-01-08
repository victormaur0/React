import imgsrc from './assets/react.svg'

/*function img(){
    return(<img src={imgsrc} alt='Logo'></img>)
}

const img = () => {return(<img src={imgsrc} alt='Logo'></img>)}

*/

//export default img

export default (props: any)=>(
    <>
        <img src={imgsrc} alt={props.alt}></img>
        <small>{props.alt}</small>
        
    </>
)


/*export {
    img
}*/