import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Iniciando sesión...');
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
   
    
  };
  const handleHTTPGet = () =>{
    fetch('http://127.0.0.1:8000/api/Usuarios')
    .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    // Manipula los datos de respuesta
    console.log(data);
  })
  .catch(error => {
    // Maneja cualquier error de la solicitud
    console.error(error);
  });

  }

  const handleRegister = () => {
    const data = {
        username: username,
        password: password
      };
      
      fetch('http://127.0.0.1:8000/api/Usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          // Manipula los datos de respuesta
          console.log(data);
        })
        .catch(error => {
          // Maneja cualquier error de la solicitud
          console.error(error);
        });
    
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Usuario:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Ingresar</button>
      <button onClick={handleHTTPGet}>Probar HTTP GET</button>
      <button onClick={handleRegister}>Registrarme</button>
    </div>
  );
};

export default LoginForm;
