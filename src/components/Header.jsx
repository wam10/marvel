/* eslint-disable no-unused-vars */
import logo from '../Logo/logo.jpg'
import estilos from '../Styles/style.css'
export function Header({ characters, setCharacters }){
    let resetearCharacters = () => {
        setCharacters(null)
    }
    return (
        <header className='cabecera'>
            <img className="logo" src={ logo } alt="Logo Marvel" />
            <span onClick={resetearCharacters} className='margen'>HOME</span>
            <span onClick={characters}  className="text_oro">PERSONAJES</span>            
        </header>
    );
}