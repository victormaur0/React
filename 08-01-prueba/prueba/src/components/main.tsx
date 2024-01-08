import logo_html from './../assets/html.png'
import logo_css from './../assets/css.png'
import logo_js from './../assets/js.png'
import logo_php from './../assets/php.png'

const frases = [
    "El optimismo es la fe que conduce al logro. Nada se puede hacer sin esperanza y confianza.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
    "No importa cuántas veces fracases, solo tienes que tener éxito una vez.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
    "No importa cuántas veces caigas, lo importante es cuántas veces te levantes",
    "El éxito no es la clave de la felicidad, la felicidad es la clave del éxito",
    "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes al no intentarlo",
    "El único límite es el que te pones a ti mismo",
    "No importa lo lento que vayas, siempre y cuando no te detengas"
]

export default () => {
    return(
        <main className='grid-centrar'>
            <img src={logo_html} alt="Logo HTML" />
            <img src={logo_css} alt="Logo CSS" />
            <img src={logo_js} alt="Logo JS" />
            <img src={logo_php} alt="Logo PHP" />
            <p>{frases[Math.round((Math.random() * (frases.length-1)))]}</p>
        </main>
    )
}