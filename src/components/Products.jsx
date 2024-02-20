import React from 'react'
import { Product } from './Product'


export const Products = () => {
  return (
    <div className='font-Roboto ct-container py-1 px-4 mt-2 md:mt-6'>
        <div className='border-b-2 border-b-borderLine'>
            <h2 className=' text-4xl font-bold py-2'>All Products</h2>
        </div>
        <div>
            <Product/>
        </div>
    </div>
  )
}
