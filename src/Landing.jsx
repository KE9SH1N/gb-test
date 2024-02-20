import React from 'react'

import { Menubar } from './header/Menubar'
import { Navbar } from './header/Navbar'
import { Slider } from './components/Slider'
import { Products } from './components/Products'
import { Review } from './components/Review'
import { Service } from './components/Service'
import { Footer } from './footer/Footer'
import { MobielMenu } from './header/MobielMenu'
import { ScrolltoTop } from './components/ScrolltoTop'

export const Landing = () => {


  return (
      <div>
        <Navbar/>
        <Menubar/>
        <Slider/>
        <Products/>
        <Review/>
        <Service/>
        <MobielMenu/>
        <ScrolltoTop/>
        <Footer/>
      </div>
  )
}
