import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar'

function Home() {

    return (
        <>
            <Navbar />
            <div>
                <img src={imgHome} className='imgHome' alt="" />
            </div>
            <div className='c-f'>
                <h1>CURSOS</h1>
                <Footer />
            </div>
        
        </>
    )
}

export default Home