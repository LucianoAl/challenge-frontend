import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TarjetaCursos from './TarjetaCursos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../Styles/SlideTarjeta.css';

function SlideTarjetas() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
        <SwiperSlide><TarjetaCursos/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SlideTarjetas