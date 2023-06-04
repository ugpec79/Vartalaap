import React, { useEffect, useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Navig } from '@/components/Navig'
import { Footer } from '@/components/Footer'
import { useRouter } from 'next/router'
 const UpdateBlog = () => {
    const router=useRouter();
    const [title,setTitle]=useState("");
  const [content,setContent]=useState("");

  const updateBlog=(e)=>{
    e.preventDefault();
    const q=router.query.id
    fetch(`http://localhost:8000/blogs/updateBlog/${q}`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            title:title,
            desc:content,
          
          })
        }).then((res)=>
          res.json()
        ).then((data)=>{
          alert("Updated The Blog")
          console.log(data);
        }).catch((error)=>{
          alert("Error")
          console.log(error);
        })
  }
  return (
    <div className='flex flex-col overflow-hidden'>

      <Navbar />
      <Navig />
      <div className='flex flex-col items-center justify-center'>
      <h1 class="mb-10 text-2xl my-5 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Update The Blog!</h1>
      <div class="mb-6 w-1/2">
    <label for="large-input" class="block mb-2 text-lg font-bold  text-gray-900 dark:text-white">Title</label>
    <input  onChange={(e)=>{setTitle(e.target.value)}} type="text" id="large-input" class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div
  className="w-1/2"
  id="textarea"
>
  <label for="message" class="block mb-2 text-lg font-bold  text-gray-900 dark:text-white">Content</label>
<textarea id="message" rows="6"  onChange={(e)=>{setContent(e.target.value)}} class="block p-2.5 w-11/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<button onClick={(e)=>{updateBlog(e)}} class="mt-5 mb-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Update Blog!
   </button>
</div>


      </div>
            <Footer />

    </div>
  )
}
export default UpdateBlog;