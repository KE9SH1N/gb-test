import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const ScrolltoTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollTop = () => {
    const scrollStep = window.scrollY / 25;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, -scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };


    const toggleVisibility =()=>{
        if(window.scrollY>300){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    };

    useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

    // window.addEventListener('scroll', toggleVisibility);

  return (
    <div className=''>
        {/* {isVisible && ( */}
        <button 
        className={`right-[5%] md:right-[1%] bottom-[10%] lg:bottom-[2%]  xl:w-14 xl:h-14 w-10 h-10 rounded-full shadow-inner drop-shadow-2xl bg-white z-30 fixed ct-flex-center cursor-pointer medium-hover-animation
         ${isVisible ? 'translate-x-0' : 'translate-x-[150px]'}`}
            onClick={scrollTop} title='Scroll to top'>
            <FontAwesomeIcon icon={faAngleUp} className='' />
        </button>
      {/* )} */}
    </div>
  )
}
