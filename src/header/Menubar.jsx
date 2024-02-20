import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export const Menubar = () => {
  return (
    <nav className='bg-navBg font-Roboto font-light text-sm hidden xl:block'>
      <div className='ct-container ct-grid-cols3-span2'>
        <div className='col-span-2'>
          <ul className='ct-flex-start gap-6 text-primaryText p-3'>
            <li className=''>
              <a className='py-4 px-2 border-b-2 rounded-md md:rounded-none md:border-solid md:border-transparent border-gray hover:border-black hover:text-buttonBg smooth-hover-animation' 
                href="/">All Categories
              </a>
            </li>
            <li>
              <a className='py-4 px-2 border-b-2 rounded-md md:rounded-none md:border-solid md:border-transparent border-gray hover:border-black hover:text-buttonBg smooth-hover-animation' 
                href="/">Home
              </a>
            </li>
            <li>
              <a className='py-4 px-2 border-b-2 rounded-md md:rounded-none md:border-solid md:border-transparent border-gray hover:border-black hover:text-buttonBg smooth-hover-animation' 
                href="/">Organic Oil
              </a>
            </li>
            <li>
              <a className='py-4 px-2 border-b-2 rounded-md md:rounded-none md:border-solid md:border-transparent border-gray hover:border-black hover:text-buttonBg smooth-hover-animation' 
                href="/">Honey
              </a>
            </li>
            <li>
              <a className='py-4 px-2 border-b-2 rounded-md md:rounded-none md:border-solid md:border-transparent border-gray hover:border-black hover:text-buttonBg smooth-hover-animation' 
                href="/">Nuts & Seeds
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className='ct-flex-between gap-6 text-primaryText overflow-hidden p-3 mx-4'>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faComments} className='text-lg'/>
                <span className='ml-2 inline-block '>Help Center</span>
              </a>
            </li>

            <li>
              <a href="/">
                <FontAwesomeIcon icon={faPhoneVolume} className='text-lg'/>
                <span className='inline-block  ml-2'>09642 922 922</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}