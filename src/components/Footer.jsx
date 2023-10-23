import { useState } from "react";
import '../styles/Footer.css';

const Footer = () => {

    // _____________________________________________________________________________
    const [inputValue, setInputValue] = useState('');
    // _____________________________________________________________________________

    // _____________________________________________________________________________
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    // _____________________________________________________________________________
    const handleValue = () => {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥");
        }
    }
    // _____________________________________________________________________________

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>
                Laissez-nous votre mail :
            </div>
            <input
                placeholder="Entrez votre mail ici !"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleValue}
            />
        </footer>
    );
};

export default Footer;