import React from 'react';
import '../Styles/TarjetaCursos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgTarjeta from '../images/NOSOTROS_IMG.png'
import { FaClock, FaLaptop } from 'react-icons/fa'

function TarjetaCursos() {
    return (
        <>
            <div className="card">
                <img src={imgTarjeta} className='card-img-top' alt="imgCurso" />
                <div className="card-body">
                    <p>Categoria</p>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-text">descripcion breve del curso </h6>
                    <span><FaClock size='15px' color='#39065B'/> Duración</span>
                    <span><FaLaptop size='15px' color='#39065B'/> Modalidad</span>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </>
    )
}

export default TarjetaCursos