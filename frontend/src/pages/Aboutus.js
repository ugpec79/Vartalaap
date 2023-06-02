import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Navig } from '@/components/Navig'
import { SideBar } from '@/components/SideBar'
import { Carousl } from '@/components/Carousl'
import { Side } from '@/components/Side'
import { Footer } from '@/components/Footer'

import { About } from '@/components/About'
 const Aboutus = () => {
  return (
    <div className='flex flex-col w-screen overflow-hidden'>
 
    <Navbar/>
    <Navig/>
    <div className='flex flex-row  justify-center overflow-hidden'>
    <Carousl/>

    </div>
   
    <div className='flex flex-col w-full ml-5'>
    <About/>

    
    </div>
    <Footer/>
  
    </div>
  )
}
export default Aboutus;
