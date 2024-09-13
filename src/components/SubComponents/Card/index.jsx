import React from 'react';
import styles from './Card.module.css'

const Card = ({ patrones }) => {
  return (
    <div className={styles.cardLista}>
      {patrones.map((patron) => (
        <div className={styles.card} key={patron.id}>
          <h2>{patron.nombre}</h2>
          <img src={patron.imagen} alt={patron.nombre} />
        </div>
      ))}
    </div>
  );
}

export default Card;
