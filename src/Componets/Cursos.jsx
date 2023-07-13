import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import '../Styles/Cursos.css';
import TarjetaCursos from './TarjetaCursos';
import Filtros from './Filtros';
import imgCursos from '../images/prueba-cursos.png'

function Cursos() {

    return (
        <>
            <Navbar />
            <div className='filtros'>
                <div><Filtros /></div>
                <div className='encabezado'>
                    <div className='eslogan'>
                        <p>ÚNETE A NUESTRA </p>
                        <p> COMUNIDAD DE</p>
                        <p>APRENDIZAJE EN LÍNEA</p>
                    </div>
                    <img src={imgCursos} className='imgCursos' alt="" />
                </div>
            </div>
            <div className='contenedor-cursos'>
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
                <TarjetaCursos />
            </div>
            <div className='contendor-footer'>
                <div className='LOGOS'></div>
                <Footer />
            </div>
        </>
    )

}

export default Cursos