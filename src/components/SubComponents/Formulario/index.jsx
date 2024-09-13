import React from 'react';
import styles from './Formulario.module.css'

const Formulario = ({ campos, handleSubmit }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {campos.map((campo, index) => (
        <div key={index}>
          <label>{campo.label}</label>
          <input
            type={campo.type}
            placeholder={campo.placeholder}
            name={campo.name}
            required={campo.required}
          />
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
