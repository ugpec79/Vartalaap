import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export const Navig = () => {
  return (
    <div className='flex flex-row justify-center bg-none py-1'>
    
        <Link href='/'><div className='px-10 text-xl bg-transparent hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white hover:rounded-full p-5'><button>Home</button></div></Link>
        <Link href='/Aboutus'><div className='px-10 text-xl bg-transparent hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white hover:rounded-full p-5'><button>About Us</button></div></Link>
        <Link href='/Createblog'><div className='px-10 text-xl bg-transparent hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white hover:rounded-full p-5'><button>Create a Blog!</button></div></Link>
        <Link href='/Allblog'><div className='px-10 text-xl bg-transparent hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white hover:rounded-full p-5'><button>All Blogs</button></div></Link>
        <Link href='/ContactUs'><div className='px-10 text-xl bg-transparent hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white hover:rounded-full p-5'><button>Have Reviews?</button></div></Link>
        <button onClick={()=>{signOut()}}><div className=' rounded-full px-10 ml-5 text-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:text-black p-5'>Sign Out</div></button>
    </div>

  )
}
