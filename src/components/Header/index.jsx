import { Link as ScrollLink } from "react-scroll";
import React from "react"
import styles from './Header.module.css'
import NavHeader from "../SubComponents/NavHeader";


const Header = () =>{
    return (
        <header className={styles.Header}>
             <ScrollLink to="home" smooth = {true} duration={500}>
                <img src="/img/logo.jpg" alt="Logo" />
            </ScrollLink>
            <nav className={styles.navBar}>
                <ScrollLink to="home" smooth={true} duration={500}>
                    Inicio
                </ScrollLink>
                <ScrollLink to="blog" smooth={true} duration={500}>
                    Blog
                </ScrollLink>
            </nav>
        </header>
           
        
    )
   

}
export default Header;