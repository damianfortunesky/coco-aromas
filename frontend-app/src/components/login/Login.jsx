// components/Login.jsx
import React, { useState } from 'react';
import Button from '../button/Button';

function Login() {
 
  return (
    // <form className="space-y-4">
    //   <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
    //   <div>
    //     <label className="block text-gray-700 mb-1">Correo Electrónico</label>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => console.log(e)}
    //       required
    //       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
    //       placeholder="ejemplo@correo.com"
    //     />
    //   </div>
    //   <div>
    //     <label className="block text-gray-700 mb-1">Contraseña</label>
    //     <input
    //       type="password"
    //       value="sxxx"
    //       onChange={(e) => console.log(e)}
    //       required
    //       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
    //       placeholder="********"
    //     />
    //   </div>   
      
    // </form>
    <form className="space-y-4">
      <h2>Iniciar Sesión</h2>
      <div>
        <label className="block text-gray-700 mb-1">Correo Electrónico</label>
        <input
          type="email"
          value="email"
          onChange={(e) => console.log(e)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="ejemplo@correo.com"
          />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Contraseña</label>
        <input
          type="password"
          value="password"
          onChange={(e) => console.log(e)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="ejemplo@correo.com"
          />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Confirmar Contraseña</label>
        <input
          type="password"
          value="password"
          onChange={(e) => console.log(e)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="ejemplo@correo.com"
          />
      </div>
    </form>
  );
}

export default Login;
