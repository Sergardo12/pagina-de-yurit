export const isAuthenticated = () => {
    // Verifica si hay un usuario en el localStorage
    return localStorage.getItem('usuario') !== null;
  };