import React from 'react'
import { ReviewSlider } from './ReviewSlider'

export const Review = () => {
  return (
    <div className=' font-Roboto ct-container py-1 px-4 mt-6'>
        <div className='text-center'>
            <h2 className=' text-[40px] font-bold py-2 text-sectionheadText '>Customer Review</h2>
        </div>

        <ReviewSlider/>
    </div>
  )
}
