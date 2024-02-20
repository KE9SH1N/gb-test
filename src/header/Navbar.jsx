import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

import { useState} from 'react'

import { BD } from 'country-flag-icons/react/3x2'


import brandLogo from '../assets/Brand-Logo.png'
import { SearchBar } from './SearchBar'

import { UseSelector, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

console.log(brandLogo);
export const Navbar = () => {

  const [searchbtnState, setSearchbtnState] = useState(false);
  const [showSearchBar, setShowsearchBar] = useState(false);

  function handleClick(){
    setSearchbtnState(searchbtnState => !searchbtnState);
    setShowsearchBar(!showSearchBar);
  };

  let toggleClassCheck = searchbtnState ? 'active': null ;
  // console.log("clicked")

  const cartItem = useSelector(state => state.cart.cart)

  console.log(cartItem);

  return (
    <div>

        <div className='ct-container font-Roboto ct-flex-between md:ct-flex-between md:p-4'>
        <div className='text-buttonBar text-3xl md:hidden'>
          <FontAwesomeIcon icon={faBars} /> 
        </div>
        <div className=' w-[23%] md:w-[12%] hover:cursor-pointer'>
            <img src={brandLogo} alt="Ghorer Bazar Brand Logo" />
        </div >

        <div className='md:w-[60%] md:flex hidden'>
          <input type="search" id="default-search" 
          class="w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 dark:placeholder-gray-400 dark:text-white focus:outline-none " placeholder="Search for Product (i.e. Honey, Oil, Nuts...)" required />
        </div>

        <div className=' font-Bangali w-[5%] hidden xl:ct-flex-between text-base hover:cursor-pointer'>
          <BD title="United States" className="w-[30%]"/>
          <p>বাংলা</p>
        </div>

        <div className='md:flex md:w-[20%] md:ct-flex-around hidden xl:w-[12%]'>
          <div className='text-[#33373d]'>
            <Link to="/checkout">
              <div className='inline-block hover:cursor-pointer text-lg'>
                <FontAwesomeIcon icon={faCartShopping} />
                ({cartItem.length})
              </div>
            </Link>
            
          </div>
          <div className='text-xl text-buttonBg hover:cursor-pointer'>
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </div>



        <div className='text-placeholderText text-2xl font-semibold md:hidden relative'>

          <button onClick={handleClick} >
            <FontAwesomeIcon icon={faMagnifyingGlass} className={`${toggleClassCheck ? 'hidden':'active'}`}/>
            <FontAwesomeIcon icon={faCircleXmark} className={`${toggleClassCheck ? 'active':'hidden'}`}/>
          </button>

          
        </div>
        </div>
        {showSearchBar && <SearchBar/>}
    </div>
  )
}
