import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export const FooterCredit = () => {
  return (
    <div className='hidden md:block font-Roboto text-white font-light text-sm px-2 mb-16 xl:mb-0 relative'>
            <div className='ct-container py-5 lg:ct-flex-between space-y-5 lg:space-y-0'>
                <div className='md:ct-flex-center'>
                    <p>GhorerBazar © 2023. All rights reserved.</p>
                </div>
                <div className=''>
                    <ul className=' capitalize lg:ct-flex-start ct-flex-center space-x-10'>
                        <li>
                            <a href="/">Refund and Return policy</a>
                        </li>
                        <li>
                            <a href="/">privacy policy</a>
                        </li>
                        <li>
                            <a href="/">F.A.Qs</a>
                        </li>
                    </ul>
                </div>

                <div className=' relative '>
                    <ul className=' w-full capitalize lg:ct-flex-start md:ct-flex-center space-x-10'>
                        <li className='w-10 h-10 bg-white rounded-full relative'>
                            <a href="/"><FontAwesomeIcon icon={faFacebook} className=' text-buttonBg text-xl z-10 absolute top-[25%] right-[25%]' /></a>
                        </li>
                        <li className='w-10 h-10 bg-white rounded-full relative'>
                            <a href="/"><FontAwesomeIcon icon={faInstagram} className=' text-buttonBg text-xl z-10 absolute top-[25%] right-[28%]'/></a>
                        </li>
                        <li className='w-10 h-10 bg-white rounded-full relative'>
                            <a href="/"><FontAwesomeIcon icon={faYoutube} className=' text-buttonBg text-xl z-10 absolute top-[25%] right-[21%]'/></a>
                        </li>
                    </ul>
                </div>
        </div>
        
    </div>
  )
}
