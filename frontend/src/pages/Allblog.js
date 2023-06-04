import React, { useEffect, useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Navig } from '@/components/Navig'
import { Card , Button } from 'flowbite-react'

import { Footer } from '@/components/Footer'

import {Services} from '../components/Services'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Allblog = () => {
  const router=useRouter()
  const [blogs,setBlogs]=useState([])
  const {data:session}=useSession();
  useEffect(()=>{
    if(router.isReady){
    fetch("http://127.0.0.1:8000/blogs/getBlogs",{
      method:"GET"
    }).then((res)=>
      res.json()
    ).then((data)=>{
      console.log(data)
      setBlogs(data.blogs);
    })
  }
  },[router.isReady])

  return (
    <div className='flex flex-col overflow-hidden '>
 
    <Navbar/>
    <Navig/>
   <div className='flex flex-col justify-center items-center'>
   <h1 className="mb-10 text-2xl my-5 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">See All The Blogs!</h1>

   {blogs?.map((blog)=>{
    return(
    <Card className='my-5 '>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      {blog.title}
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
  
     {blog.content}
    </p>

  <Button>
    <Link href={`/blogs/getBlog/${blog.id}`}>
      Read more
    </Link>
   
  </Button>
</Card>)
   })}


   </div>
    
    <Footer/>
  
    </div>
  )
}
export default Allblog;