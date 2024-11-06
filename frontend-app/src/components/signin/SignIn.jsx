// components/SignIn.js
import React, { useState } from 'react';
import Button from '../button/Button';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Lógica para manejar el registro
  };

  return (

    <h1>si</h1>
    // <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSignUp}>
    //   <h2 className="text-2xl font-bold mb-4 text-center">Registrarse</h2>
    //   <div className="mb-4">
    //     <label className="block text-gray-700 mb-2">Nombre de Usuario</label>
    //     <input
    //       type="text"
    //       className="border rounded w-full py-2 px-3"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700 mb-2">Correo Electrónico</label>
    //     <input
    //       type="email"
    //       className="border rounded w-full py-2 px-3"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700 mb-2">Contraseña</label>
    //     <input
    //       type="password"
    //       className="border rounded w-full py-2 px-3"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700 mb-2">Confirmar Contraseña</label>
    //     <input
    //       type="password"
    //       className="border rounded w-full py-2 px-3"
    //       value={confirmPassword}
    //       onChange={(e) => setConfirmPassword(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <Button type="submit" label="Registrarse" setActiveForm={ () => console.log('Registrado')}></Button>
    // </form>
  );
}

export default SignIn;

