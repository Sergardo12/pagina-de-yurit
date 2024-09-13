import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home}>
        <div className={styles.homeInfo}>
          <h1 className={styles.infoh1}>Tejiendo tu valor; un hilo de amor propio a la vez.</h1>
          <div className={styles.infodescription}>
            <h3>En que te ayuda el tejido en tu autoestima</h3>
            <p>
                Tejer fortalece la autoestima al ofrecer un sentido de logro, 
                promover la paciencia y permitir la expresion creativa. Cada 
                puntada es un paso hacia laautovaloración, donde el ritmo 
                repetitivo calma la mente y refuerza la confianza en uno mismo. 
                Crear algo con tus manos te recuerda que eres capaz valioso y llena de potencial.
            </p>
          </div>
         
        </div>
        <img src="./img/home.png" alt="imagenHome" />
    </section>
  )
}

export default Home