import React from 'react';
import ss from '../../../../public/images/ss.png';
import Image from 'next/image';
import styles from './style.module.css';
import ss2 from '../../../../public/images/ss2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Ss() {
    const settings = {
    
        infinite: true,
        speed: 500,
        autoplay: true,            // Enable autoplay
        autoplaySpeed: 2000, 
        slidesToShow: 1,
        centerMode: true, 
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };
    
      const images = [ss,ss2];
  return (
    <>
    <div className={styles.container}>
    <Slider {...settings}>
        {images.map((img, index) => (
          <div className='slidepic' key={index}>
            <Image src={img} height={350} width={750}  alt={`img${index}`} />
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}
