import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
  const isAuth = localStorage.getItem('auth') === 'true';
  return isAuth ? children : <Navigate to="/" />;
};

export default RutaProtegida;
