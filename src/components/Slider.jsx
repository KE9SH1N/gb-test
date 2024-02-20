import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import {Autoplay } from "swiper/modules"
import sliderImg1 from '../assets/web-slider.jpg'
import sliderImg2 from '../assets/web-slider-2.jpg'
import stillImg3 from '../assets/web-stillimg-1.jpg'

export const Slider = () => {
  return (
    <div className='ct-container w-full md:ct-grid-cols3-span2 p-4 mt-4'>
        <div className='md:w-[98%] w-full md:col-span-2 hover:cursor-pointer'>
            <Swiper className='mySwiper ct-flex-center '
                slidesPerView={1}
                loop = {true}
                autoplay={{
                     delay: 3000,
                     disableOnInteraction: true,
                }}
                modules={[Autoplay]}
            >

            <SwiperSlide>
              <div className='overflow-hidden inline-block' >
                <img src={sliderImg1} alt="webSlider img-1" className='scale-110 ct-zoom-out-hover' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=' overflow-hidden inline-block'>
                <img src={sliderImg2} alt="webSlider img-2" className=' scale-110 ct-zoom-out-hover' />
              </div>
              </SwiperSlide>
            </Swiper>
        </div>
        <div className='hidden md:block md:w-[98%] hover:cursor-pointer overflow-hidden'>
            <img src={stillImg3} alt="webStill img-1" className='ct-zoom-in-hover'/>
        </div>
    </div>
  )
}
