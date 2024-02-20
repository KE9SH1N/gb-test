
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

export const MobielMenu = () => {

  return (
    <div className='ct-container xl:hidden relative'>
        <div className='w-full bg-white py-3 shadow-inner z-20 fixed bottom-0 left-0 right-0 '>
            <ul className='ct-grid-cols-4'>
                <li className='w-full '>
                    <Link to="/">
                        <div className='flex items-center justify-center flex-col'>
                            <p>
                                <FontAwesomeIcon icon={faHouse} className='text-xl'/>
                            </p>
                            <p className='text-xs font-semibold'>Home</p>
                        </div>
                    </Link>
                </li>
                <li className='w-full '>
                    <Link to="/">
                        <div className='flex items-center justify-center flex-col'>
                            <p>
                                <FontAwesomeIcon icon={faBorderAll} className='text-xl'/>
                            </p>
                            <p className='text-xs font-semibold'>Categories</p>
                        </div>
                    </Link>
                </li>
                <li className='w-full'>
                    <Link to="/checkout">
                        <div className='flex items-center justify-center flex-col'>
                            <p>
                                <FontAwesomeIcon icon={faCartShopping} className='text-xl'/>
                            </p>
                            <p className='text-xs font-semibold'>Cart</p>
                        </div>
                    </Link>
                </li>
                <li className='w-full'>
                    <Link to="/">
                        <div className='flex items-center justify-center flex-col'>
                            <p>
                                <FontAwesomeIcon icon={faUser} className='text-xl'/>
                            </p>
                            <p className='text-xs font-semibold'>My Account</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
