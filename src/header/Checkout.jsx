import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { removefromCart } from '../redux/cartSlice';

export const Checkout = () => {

  const cartitems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  // console.log(cartitems);

  return (

    <div className='ct-container'>
      <h2>Checkout</h2>
      {cartitems.map(item=>{
          return( 
            <div key={item.id} className='ct-container bg-slate-700 mt-10 ct-grid-cols-3 w-[50%]'>
              <h4 className='text-white p-5'>{item.id.title}</h4>
              <div className='ct-flex-center'>
                <img src={item.id.image} alt="" className='w-[70%]' />
              </div>
              <div className='w-full ct-flex-center'>
                <button className='text-white py-2 px-1 bg-red-500 rounded-sm'
                  onClick={()=> dispatch(removefromCart(item.id))}
                  
                >Remove</button>
              </div>
            </div>
          )
      })}
      
    </div>
  )
}
