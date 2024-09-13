import React from 'react'
import styles from './Acceder.module.css'
import RegistrateForm from '../SubComponents/RegistrateForm'

const Acceder = () => {
  return (
    <section className={styles.acceder}>
      <h1>¿Te gustaría a tejer amigurumis?</h1>
      <h3>Regístrate ahora para acceder a nuestros tutoriales</h3>
      <div className={styles.accederdiv}>
        <RegistrateForm/>
      </div>
       
    </section>
  )
}

export default Acceder