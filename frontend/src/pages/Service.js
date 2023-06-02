import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Navig } from '@/components/Navig'
import { SideBar } from '@/components/SideBar'
import { Card , Button } from 'flowbite-react'
import { Carousl } from '@/components/Carousl'
import { Side } from '@/components/Side'
import { Footer } from '@/components/Footer'

import {Services} from '../components/Services'

const Service = () => {
  return (
    <div className='flex flex-col overflow-hidden '>
 
    <Navbar/>
    <Navig/>
   <div className='flex flex-col justify-center items-center'>
   <h1 class="mb-10 text-2xl my-5 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">See All The Blogs!</h1>
   <Card className='my-5'>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      Noteworthy technology acquisitions 2021
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </p>
  <Button>
    <p>
      Read more
    </p>
   
  </Button>
</Card>
<Card className='my-5'>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      Noteworthy technology acquisitions 2021
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </p>
  <Button>
    <p>
      Read more
    </p>
    
  </Button>
</Card>
<Card className='my-5'>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      Noteworthy technology acquisitions 2021
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </p>
  <Button>
    <p>
      Read more
    </p>
  
  </Button>
</Card>

   </div>
    
    <Footer/>
  
    </div>
  )
}
export default Service;