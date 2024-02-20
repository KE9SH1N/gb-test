import React from 'react'
import { FooterMenu } from './FooterMenu'
import { FooterCredit } from './FooterCredit'

export const Footer = () => {
  return (
    <div className='bg-footerBg' >
        <div className=''>
            <FooterMenu/>
            <FooterCredit/>
        </div>
    </div>
  )
}
