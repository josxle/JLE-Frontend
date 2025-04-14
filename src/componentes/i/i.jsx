import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './i.css';
import josxle from '../../images/josxle.png';

const I = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    ap_pat: '',
    ap_mat: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        localStorage.setItem('auth', 'true'); // guardamos que está logueado
        navigate('/x'); // redirige
      } else {
        alert('Error al crear cuenta');
      }
    } catch (err) {
      alert('Error al conectarse al servidor');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      if (response.ok) {
        localStorage.setItem('auth', 'true');
        navigate('/x');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (err) {
      alert('Error al conectarse al servidor');
    }
  };

  return (
    <div className={`container ${isRegistering ? 'register-mode' : ''}`}>
      <div className="form-box login-box">
        <h2 className='h2'>Iniciar Sesión</h2>
        <input className='input' type="text" placeholder="Correo electrónico" name="email" onChange={handleChange} />
        <input className='input' type="password" placeholder="Contraseña" name="password" onChange={handleChange} />
        <button className='b' onClick={handleLogin}>Entrar</button>
        <p className='h2'>¿No tienes cuenta? <span onClick={() => setIsRegistering(true)}>Crear cuenta</span></p>
      </div>

      <div className="slider-box">
        <div className="content">
          <img src={josxle} alt="logo" />
          <h1 >Bienvenido a Josxle</h1>
          <p>Remember. All We Need is Love.</p>
        </div>
      </div>

      <div className="form-box register-box">
        <h2 className='h2'>Crear Cuenta</h2>
        <input className='input' type="text" placeholder="Nombre" name="nombre" onChange={handleChange} />
        <input className='input' type="text" placeholder="Apellido materno" name="ap_mat" onChange={handleChange} />
        <input className='input' type="text" placeholder="Apellido paterno" name="ap_pat" onChange={handleChange} />
        <input className='input' type="email" placeholder="Correo electrónico" name="email" onChange={handleChange} />
        <input className='input' type="password" placeholder="Contraseña" name="password" onChange={handleChange} />
        <button className='b' onClick={handleRegister}>Registrarse</button>
        <p>
          ¿Ya tienes cuenta? <span onClick={() => setIsRegistering(false)}>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
};

export default I;
