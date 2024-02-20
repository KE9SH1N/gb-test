import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import reviewprodcutImg from '../assets/Nutt-1.jpg'


export const ReviewSlider = () => {

  return (

    <div className=' font-Roboto ct-container py-1 px-4 mt-4'>
        <Swiper className='mySwiper'
                slidesPerView={1}
                navigation={true}
                loop = {true}
            >

                <SwiperSlide>
                    <div className='w-[80%] m-auto hover:cursor-pointer'>
                        <div className='border border-borderLine rounded-t-md'>
                            <div className='ct-flex-between px-3 pt-4 pb-2' >
                                <div className=' inline-flex'>
                                    <img className=' w-9 h-9'
                                        src={reviewprodcutImg} alt="Review Product Images" />
                                    <div>
                                        <p className=' capitalize font-bold text-sm' >Tushar Hawlader</p>
                                        <span className=' text-xs text-[#697882]' >@tushar.hawlader</span>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} className='text-lg text-[#3b5998]' />
                                </div>
                            </div>
                        </div>
                        <div className='border border-borderLine border-t-0 rounded-b-md p-3'>
                            <p className='text-sm text-placeholderText'>খুবই উন্নত মানের পণ্য। সঠিক ভাবে পণ্য হাতে বুঝে পেয়েছি এবং অর্ডার করার ৩ দিনের ভেতর ডেলিভারি এসেছে। আমি ঘরের বাজারের ব্যবহারে খুবই সন্তুষ্ট। আরও্ পণ্য ভবিষ্যতে অর্ডার করবো।</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[80%] m-auto hover:cursor-pointer'>
                        <div className='border border-borderLine rounded-t-md'>
                            <div className='ct-flex-between px-3 pt-4 pb-2' >
                                <div className=' inline-flex'>
                                    <img className=' w-9 h-9'
                                        src={reviewprodcutImg} alt="Review Product Images" />
                                    <div>
                                        <p className=' capitalize font-bold text-sm' >Tushar Hawlader</p>
                                        <span className=' text-xs text-[#697882]' >@tushar.hawlader</span>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} className='text-lg text-[#3b5998]' />
                                </div>
                            </div>
                        </div>
                        <div className='border border-borderLine border-t-0 rounded-b-md p-3'>
                            <p className='text-sm text-placeholderText'>খুবই উন্নত মানের পণ্য। সঠিক ভাবে পণ্য হাতে বুঝে পেয়েছি এবং অর্ডার করার ৩ দিনের ভেতর ডেলিভারি এসেছে। আমি ঘরের বাজারের ব্যবহারে খুবই সন্তুষ্ট। আরও্ পণ্য ভবিষ্যতে অর্ডার করবো।</p>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
    </div>
  )
}
