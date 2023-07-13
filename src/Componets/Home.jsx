import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar'
import '../Styles/Home.css'
import Footer from './Footer';
import imgHome from '../images/Frame.png'
import SlideTarjetas from './SlideTarjetas';


function Home() {

    return (
        <>
            <Navbar />
            <div className='paginainicio'>
                <img src={imgHome} className='imgHome' alt="" />
            </div>
            <div className='c-f'>
                <h1>CURSOS</h1>
                <div className='contenedorTarjetas'>
                <SlideTarjetas/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home