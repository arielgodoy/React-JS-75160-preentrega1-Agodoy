import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ cartCount }) => {  // Recibe cartCount como prop
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
      <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/logo.png" alt="Logo" width="40" height="40" className="me-2" />
          RestoBar-Bazul
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`} style={{ fontSize: "1.5rem", color: "white" }}></i>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
            <li className="nav-item"><Link to="/productos" className="nav-link">Productos</Link></li>
            <li className="nav-item"><Link to="/contacto" className="nav-link">Contacto</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">Nosotros</Link></li>
          </ul>
          <div className="ms-3 position-relative">
            <Link to="/carrito" className="nav-link text-white position-relative">
              <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount} {/* Muestra la cantidad de ítems */}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
