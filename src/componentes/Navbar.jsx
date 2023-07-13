import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../estilos/Navbar.css'
import imgNav from '../imagenes/logoNormalVioleta.png'

function Navbar() {

  return (
    <>

      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <img src={imgNav} className='imgNav' alt="" />
        </div>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cursos
                </p>
                <ul className="dropdown-menu">
                  <li><p className="dropdown-item">Desarrollo Web</p></li>
                  <li><p className="dropdown-item">Marketing</p></li>
                  <li><p className="dropdown-item">Artes Digitales</p></li>
                  <li><p className="dropdown-item">Informatica/Ofimatica</p></li>
                  <li><p className="dropdown-item">Digital Proyect Manager</p></li>
                  <li><p className="dropdown-item">Programación</p></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Comunidad
                </p>
                <ul className="dropdown-menu">
                  <li><p className="dropdown-item">Nosotros</p></li>
                  <li><p className="dropdown-item">Preguntas Frecuentes</p></li>
                </ul>
              </li>
              <li className="nav-item">
                <p className="nav-linkI">Iniciar Sesion</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar