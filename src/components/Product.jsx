import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import { ButtonCart } from './ButtonCart'

import { productsDetail } from '../productsData'
import { DiscountTag } from './DiscountTag'

export const Product = () => {

  return (
    <div className='ct-grid-cols-2 mt-5 lg:ct-grid-cols-4 xl:ct-grid-cols-5 cursor-pointer relative'>
        {
            productsDetail.map(product =>{
                return(
                    <div className='hover:-translate-y-2 smooth-hover-animation transform' key={product.id}>
                        <div className='border border-borderLine p-2 '>
                            <div className='relative'>
                                <img src={product.image} alt={product.title}/>

                                {
                                    product.status && product.status.length != null && 
                                    <div class="absolute top-[2%] md:top-[5%] right-[5%] px-2 py-[2px] bg-green-500 rounded-full drop-shadow-md">
                                        <p class="text-sm text-white font-medium capitalize"><span>{product.status}</span></p>
                                    </div>          
                                }
                                
                                {
                                    product.DiscountParcentage && product.DiscountParcentage.length > 0 && 
                                    <DiscountTag discountParcentage ={product.DiscountParcentage} />
                                }

                            </div>
                            <div>
                                <h3 className='mt-2 font-medium text-lg' ><span className=' text-base line-clamp-1'>{product.title}</span></h3>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className=' text-starMark text-xs' />
                                    <FontAwesomeIcon icon={faStar} className=' text-starMark text-xs' />
                                    <FontAwesomeIcon icon={faStar} className=' text-starMark text-xs' />
                                    <FontAwesomeIcon icon={faStar} className=' text-starMark text-xs' />
                                    <FontAwesomeIcon icon={faStar} className=' text-starMark text-xs' />
                                </div>
                                
                            </div>
                            <div>
                            <h4 className='my-2'>
                                <span className=' line-through text-lineThrough text-sm mr-2' >৳{product.regularPrice}</span>
                                <span className='text-buttonBg font-semibold'>৳{product.CurrentPrice}</span>
                            </h4>
                            </div>

                            <ButtonCart id={product.id} title = {product.title} image={product.image}/>
                        </div>
                    </div>
                )
                
            })
        }
    </div>
  )
}
