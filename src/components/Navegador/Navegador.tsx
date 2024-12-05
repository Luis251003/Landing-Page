import logo from '../../assets/images/logo.svg';
import styles from './navegador.module.css';
import menu from '../../assets/images/icon-hamburger.svg'
import close from '../../assets/images/icon-close.svg'
import { useEffect, useState } from 'react';

type screenSize={
    width: number;
    height: number;
}

interface props {
    screenSize: screenSize;
}

const Navegador = ({screenSize}:props)=>{

    const [isOpen, setIsOpen] = useState(false);

    const handleButton = ()=>{
        setIsOpen(!isOpen);
    }

    const setMenu = () =>{
        if(screenSize.width>=768){
            setIsOpen(false);
        }
    }

    useEffect(()=>{
        setMenu();
    },[screenSize])

    return(
        <nav className={styles.nav}>
            <div className={'content ' + styles.nav__content}>
                <div className="nav__logo">
                    <img src={logo} alt="" />
                </div>
                <div className={`${styles.nav__enlaces} ${isOpen ? styles.active : null}` }>
                    <ul className={styles.nav__ul}>
                        <li><a className={styles.nav__enlace} href='#'>Home</a></li>
                        <li><a className={styles.nav__enlace} href='#'>About</a></li>
                        <li><a className={styles.nav__enlace} href='#'>Contact</a></li>
                        <li><a className={styles.nav__enlace} href='#'>Blog</a></li>
                        <li><a className={styles.nav__enlace} href='#'>Careers</a></li>
                    </ul>
                </div>
                <div className="nav__button__container">
                    <button className={styles.button__nav + ' button__primary'}>Request Invite</button>
                    <button className={styles.button__menu} onClick={handleButton}> <img src={isOpen ? close : menu} alt=""/> </button>
                </div>
            </div>
        </nav>
    );
}
export default Navegador;