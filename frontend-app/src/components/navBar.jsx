function NavBar () {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="text-xl font-bold text-blue-600">Coco Aromas</a>
                
                {/* Links */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#home" className="text-gray-700 hover:text-blue-600">Inicio</a>
                    <a href="#contacto" className="text-gray-700 hover:text-blue-600">Contacto</a>
                </div>

                {/* Botones de autenticación */}
                <div className="hidden md:flex space-x-4">
                    <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
                        Iniciar sesión
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Registrarse
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;