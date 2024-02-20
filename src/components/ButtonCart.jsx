import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

import { addtoCart } from '../redux/cartSlice'

export const ButtonCart = (id, title, image) => {
  const dispatch = useDispatch()
  return (
    <div className=''>
      <div >
        <button className='hidden lg:block border border-buttonBg bg-buttonBg rounded-lg w-full py-2 text-cardtagText text-[15px] font-medium up uppercase cursor-pointer'
          onClick={() => dispatch(addtoCart({id, title, image}))}
        >
            add to cart
        </button></div>
        <button className='lg:hidden border border-buttonBg bg-buttonBg rounded-t-lg md:rounded-md w-full py-2 mt-2'
          onClick={()=> dispatch(addtoCart({id, title, image}))}
        >
            <FontAwesomeIcon icon={faCartPlus} className='text-cardtagText text-lg'/>
        </button>
    </div>
  )
}
