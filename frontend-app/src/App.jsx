import { useState } from 'react';
import NavBar from './components/navbar/NavBar.jsx';
import Login from './components/login/login.jsx';
import SignIn from './components/signin/SignIn.jsx';

//const [activeForm, setActiveForm] = useState('login'); // Estado para alternar entre Login y SignIn

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <div className="flex justify-center items-center flex-grow bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg md:max-w-xl lg:max-w-2x1">
          {/* {activeForm == 'login' ? <Login/> : <SignIn/>} */}

          <Login></Login>
        </div>
      </div>
    </div>
  );
}

export default App;
