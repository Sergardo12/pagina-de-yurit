import React from 'react'
import styles from './Blog.module.css'

const Blog = () => {
  return (
    <section className={styles.blog}>
        <h1 className={styles.blogh1}>Blog</h1>
        <div className={styles.blogcuadro}>
            <h2>¿Quienes Somos?</h2>
            <p>
              Somos un equipo emprendedor de la I.E.P. Inmaculada Concepción , 
              lo cual busca promover la autoconfianza en las personas ,
              con ayuda de los tejidos (amigurumis).
            </p>
        </div>
        <div className={styles.blogcuadro}>
            <h2>¿Por qué somos un equipo?</h2>
            <p>
              Tenemos un objetivo compartido que busca motivar a las personas
              a través de los tejidos de amigurumis.
            </p>
        </div>
    </section>
  )
}

export default Blog;