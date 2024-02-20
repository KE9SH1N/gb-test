import React from 'react'


export const SearchBar = () => {

  return (
    <div className='w-full my-2 md:hidden'>
        <div className='flex justify-center'>
            <input type="search" placeholder="Search Here..." className='w-[80%] px-1 py-2 border-2 border-borderLine focus:outline-none placeholder:px-2 rounded-md'/>
        </div>
    </div>
  )
}
