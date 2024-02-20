import React from 'react'

import safePayment from '../assets/secure-payment-icon.png'
import easyDelivery from '../assets/money-notes-receiving-dollar-color-icon.png'
import natural from '../assets/go-green-icon.png'



export const Service = () => {
  return (
    <div className='hidden xl:block mt-20 bg-navBg font-Bangali'>
        <div className='ct-container grid grid-cols-3 py-10'>
            <div className='ct-flex-start'>
                <img src={safePayment} alt="Safe Payment" className='w-[15%]'/>
                <div className='ml-3'>
                    <p className='font-medium text-2xl text-tertiaryText'>নিরাপদ পেমেন্ট</p>
                    <span className='text-sm text-placeholderText'>বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন</span>
                </div>
            </div>

            <div className='ct-flex-start'>
                <img src={easyDelivery} alt="Cash On Delivery" className='w-[15%]'/>
                <div className='ml-3'>
                    <p className='font-medium text-2xl text-tertiaryText'>গ্রিন ডেলিভারি</p>
                    <span className='text-sm text-placeholderText' >৩-৫ দিনের মধ্যে আপনার পণ্য পৌছে যাবে</span>
                </div>
            </div>

            <div className='ct-flex-start'>
                <img src={natural} alt="100% Natural" className='w-[15%]'/>
                <div className='ml-3'>
                    <p className='font-medium text-2xl text-tertiaryText'>১০০% ন্যাচারাল</p>
                    <span className='text-sm text-placeholderText'>প্রাকৃতিক উপাদান ব্যবহার করতে আমরা প্রতিশ্রুতিবদ্ধ</span>
                </div>
            </div>
        </div>
    </div>
  )
}
