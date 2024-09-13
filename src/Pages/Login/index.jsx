import React from 'react';
import Formulario from '../../components/SubComponents/Formulario'; // Asegúrate de la ruta correcta
import styles from './Login.module.css'; // Importa los estilos
import Footer from '../../components/Footer';
import Swal from 'sweetalert2';

const Login = () => {
  // Define los campos específicos para el login
  const camposLogin = [
    { label: 'Correo', type: 'email', placeholder: 'Ingresa tu correo', name: 'correo', required: true },
    { label: 'Contraseña', type: 'password', placeholder: 'Ingresa tu contraseña', name: 'contraseña', required: true }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el login
    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;

    // Obtener datos de localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.correo === correo && usuario.contraseña === contraseña) {
      // Redirigir a la página de patrones si las credenciales son correctas
      window.location.href = '/patrones';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Correo o contraseña incorrectos.',
      });
      return;
    }
    console.log('Formulario de login enviado');
  };

  return (
    <>
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h2>Iniciar Sesión</h2>
          <Formulario campos={camposLogin} handleSubmit={handleSubmit} />
        </div>
        <img src="./img/fotologin.jpg" alt="Imagen de Login" />
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
};

export default Login;
