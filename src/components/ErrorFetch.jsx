import logo from '/public/image/International_Pokémon_logo.svg.webp'
import ball from '/public/image/poke-ball-vector_low.png'
const ErrorFetch = () => {

    return (
        <div className="Error">
            <div className='content__img'>
            <img className='logo__pokemon' src={logo} alt="logo" />
            <img className='logo__ball' src={ball} alt="ball" />
        </div>
        <span>DIGITA EL NOMBRE DE SU POKEMON</span>
        </div>
    )
}

export default ErrorFetch