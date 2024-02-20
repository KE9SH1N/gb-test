import React from 'react'

export const DiscountTag = (props) => {

    // const isString = typeof props.data === 'string';
    // const isInteger = Number.isInteger(props.data);

    // const bgClass = isString ? 'bg-discountBg' : isInteger ? 'bg-green-500' : 'bg-discountBg';

    // console.log(props);
    // console.log(isInteger);
  return (
    <div>
        <div class="absolute top-[2%] md:top-[5%] right-[5%] px-2 py-[2px] rounded-full drop-shadow-md bg-discountBg">
            <p class="text-sm text-white font-medium capitalize">{props.discountParcentage} <span>%</span></p>
        </div>
    </div>
  )
}
