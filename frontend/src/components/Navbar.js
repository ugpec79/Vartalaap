import React from 'react'
export const Navbar = () => {
  return (
    <div >
        <div className='flex flex-row items-center justify-center pl-14 bg-gradient-to-r from-sky-500 to-indigo-500 p-5'>
            <img className='h-40 w-40 rounded-full bg-transparent' src='/logo.jpg'/>
            <div className='flex flex-col'>
                <h1 className='h-auto pl-3'><span className='text-5xl text-white'>वार्तालाप!</span></h1>
                <h1 className='text-xl pl-3 mt-2 text-cyan-200'>ज्ञान, विचार और संवाद का संगम !</h1>
            </div>
         
        </div>

    </div>
  )
}
