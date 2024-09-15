import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation} from "react-router-dom";
import React from "react"
import styles from './Header.module.css'
import NavHeader from "../SubComponents/NavHeader";


const Header = () =>{

    const location = useLocation();

     // Determinar si el botón de "Iniciar Sesión" debe mostrarse
  const showLoginButton = location.pathname !== '/patrones';
  const showBlogButton = location.pathname === '/';
    return (
        <header className={styles.Header}>
             <ScrollLink to="home" smooth = {true} duration={500}>
                <img src="/img/logo.jpg" alt="Logo" />
            </ScrollLink>
            <nav className={styles.navBar}>
                <ScrollLink to="home" smooth={true} duration={500}>
                    Inicio
                </ScrollLink>
                {
                    showBlogButton && (
                        <ScrollLink to="blog" smooth={true} duration={500}>
                            Blog
                        </ScrollLink>
                )}
                {
                     showLoginButton && (
                        <NavHeader url="/login">
                            Iniciar Sesion
                        </NavHeader>)
                }
                
            </nav>
        </header>
           
        
    )
   

}
export default Header;