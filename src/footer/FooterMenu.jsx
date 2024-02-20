import React from 'react'

export const FooterMenu = () => {
  return (
    <div className='border-footerBorder border-b-2 mb-4 px-4 py-10'>
        <div className='ct-container font-Roboto md:ct-flex-between md:items-start'>
            <div className=''>
                <h4 className=' uppercase font-medium text-lg text-white'>useful links</h4>
                <ul className='mt-4'>
                    <li className='mb-2'>
                        <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Customer Support</a>
                    </li>
                    <li className='mb-2'>
                        <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">F.A.Qs</a>
                    </li>
                    <li className='mb-2'>
                        <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Contact us</a>
                    </li>
                </ul>
            </div>
        

            
                <div className=' mt-8 md:mt-0'>
                    <div className='border-b border-b-footerBorder'>
                        <h4 className=' uppercase font-medium text-lg text-white'>Company</h4>
                        <ul className='my-4'>
                            <li className='mb-2'>
                                <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">About Us</a>
                            </li>
                            <li className='mb-2'>
                                <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Blog</a>
                            </li>
                            <li className='mb-2'>
                                <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Privacy Policy</a>
                            </li>
                            <li className='mb-8'>
                                <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Refund and Returns Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='py-8'>
                        <h4 className=' uppercase font-medium text-lg text-white'>Footer Menu</h4>
                        <ul className='my-4'>
                            <li className='mb-2'>
                                <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">About Us</a>
                            </li>
                            <li className='mb-2'>
                                <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Blog</a>
                            </li>
                            <li className='mb-2'>
                                <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Privacy Policy</a>
                            </li>
                            <li className='mb-2'>
                                <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Refund and Returns Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

            
                <div className=''>
                    <h4 className=' uppercase font-medium text-lg text-white'>Quick Help</h4>
                    <ul className='mt-4'>
                        <li className='mb-2'>
                            <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Customer Support</a>
                        </li>
                        <li className='mb-2'>
                            <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">F.A.Qs</a>
                        </li>
                        <li className='mb-2'>
                            <a className='text-footermenuText hover:text-white smooth-hover-animation text-sm' href="/">Contact us</a>
                        </li>
                    </ul>
                </div>
            
                
                
            
        </div>
        
    </div>
  )
}
