import React, { useState } from 'react';
import Formulario from '../Formulario';
import Swal from 'sweetalert2';
import styles from './RegistrateForm.module.css';

const RegistrateForm = () => {
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const camposRegistro = [
    { label: 'Nombre', type: 'text', placeholder: 'Ingresa tu nombre', name: 'nombre', required: true },
    { label: 'Correo', type: 'email', placeholder: 'Ingresa tu correo', name: 'correo', required: true },
    { label: 'Contraseña', type: 'password', placeholder: 'Ingresa tu contraseña', name: 'contraseña', required: true }
  ];

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;

    // Guardar datos en localStorage
    localStorage.setItem('usuario', JSON.stringify({ nombre, correo, contraseña }));
    
   
     // Mostrar alerta de éxito
     await Swal.fire({
      title: 'Registro Exitoso!',
      text: 'Te hemos registrado correctamente. Ahora puedes iniciar sesión.',
      icon: 'success',
      timer: 3000, // La alerta se mostrará por 3 segundos
      timerProgressBar: true,
      showConfirmButton: false
    });
    setRegistroExitoso(true);
  };
  

  if (registroExitoso) {
    // Redirigir al login
    window.location.href = '/login';
  }

  return (
    <div className={styles.registrateform}>
      <div className={styles.formPrincipal}>
        <h2>Regístrate</h2>
        <Formulario campos={camposRegistro} handleSubmit={handleSubmit} />
      </div>
      <img src="./img/fotoDeRegistro.jpg" alt="fotoDeRegistro" />
    </div>
  );
};

export default RegistrateForm;