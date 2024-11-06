import Button from '../button/Button.jsx'
import Link from '../link/Link.jsx'

function NavBar () {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                
                <div className="hidden md:flex space-x-8 items-center">
                    <Link label="COCO AROMAS"></Link>                 
                </div>

                <div className="hidden md:flex space-x-4">
                  <Button label="Registrarse"></Button> 
                  <Button label="Iniciar Sesion"></Button> 
                </div>

            </div>
        </nav>
    );
};

export default NavBar;