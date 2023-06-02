import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Navig } from '@/components/Navig'

import { Footer } from '@/components/Footer'


import { Contact } from '@/components/Contact'
export const ContactUs = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
 
    <Navbar/>
    <Navig/>
    
    

    <div className='flex flex-col w-full ml-5'>
  
    <Contact/>
    
    </div>


    <Footer/>
  
    </div>
  )
}
export default ContactUs;