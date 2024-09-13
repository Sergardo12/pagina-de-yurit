import React from 'react';
import styles from './MasAdelante.module.css';
import Card from '../SubComponents/Card';
import Amigurumis from '../../data/patrones.json';

const MasAdelante = () => {
  const patronesLimitados = Amigurumis.patrones.slice(0,6)
  return (
    <section className={styles.patrones}>
        <h1 className={styles.patronesH1}>Lo que se viene más adelante...</h1>
        <Card patrones={patronesLimitados} />
    </section>
  );
}

export default MasAdelante;
