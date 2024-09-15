import React from 'react'
import styles from './SobreApp.module.css'

const SobreApp = () => {
  return (
    <section className={styles.sobreapp}>
        <h1 className={styles.sobreapph1}>Sobre nuestra aplicación</h1>
        <div className={styles.sonreappLista}>
          <div className={styles.sobreappCuadro}>
              <h2>¿Cuál es nuestro objetivo de la aplicación?</h2>
              <p>
                Nuestro objetivo es fomentar la creatividad, la relajación y 
                la autoexpresión. Que mejoran la confianza personal mientras 
                los usuarios crean sus amigurumis.
              </p>
          </div>
          <div className={styles.sobreappCuadro}>
              <h2>¿Qué encuentras en la aplicación?</h2>
              <p>
                Puedes encontrar diversos amigurumis que te 
                apoyen emocionalmente para tener una buena autoestima.
              </p>
          </div>
        </div>
    </section>
  )
}

export default SobreApp;