import React from 'react'

export const SideBar = () => {
  return (
    <div className='flex flex-col ml-10 mt-5 break-all'>
    <div className='rounded-xl border-stone-950 w-72 mb-8'>
        <div className='bg-slate-400 w-full rounded-lg h-10 justify-items-center'>
            <h1 className='text-center pt-2 font-bold font-mono'>FACILITIES</h1>
        </div>
        <div className='ml-8 mb-3'>
           <ul className='list-disc' >
            <li>brdfiurihgfiurhihrighuirghiuriughriuhgiurngiunrfngiubrifbgvirf</li>
            <li>Fac 1</li>
            <li>Fac 1</li>
            <li>Fac 1</li>
            <li>Fac 1</li>
            <li>Fac 1</li>
           </ul>
           </div>
           </div>
           <div className='rounded-xl border-stone-950 w-72 mb-8'>
        <div className='bg-slate-400 w-full rounded-lg h-10 justify-items-center'>
            <h1 className='text-center pt-2 font-bold font-mono'>SERVICES</h1>
        </div>
        <div className='ml-8 mb-3'>
           <ul className='list-disc' >
            <li>Serv 1</li>
            <li>Serv 1</li>
            <li>Serv 1</li>
            <li>Serv 1</li>
            <li>Serv 1</li>
            <li>Serv 1</li>
           </ul>
           </div>
           </div>
    <div className='rounded-xl border-stone-950 w-72 mb-8'>
        <div className='bg-slate-400 w-full rounded-lg h-10 justify-items-center'>
            <h1 className='text-center pt-2 font-bold' style={{fontFamily:'"trebuchet MS", Arial, Helvetica, sans-serif, Tahoma, Rockwell'}}>CONTACT US</h1>
        </div>
        <div className='ml-1 mb-3'>
           <h3>Vishaka Foundation Psychiatric Center</h3>
           </div>
           </div>
    </div>
  )
}
