import Link from 'next/link'
import React from 'react'

export const Side = () => {
  return (
    <div className='flex flex-col mt-5 w-fit'>
        <div>
        <h1> Welcome to Vishaka Foundation</h1>
        </div>
        <br></br>
        <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>
        <h1>-SAIL</h1>
        <h1>-Gail</h1>
        <h1>-HSIDC</h1>
        </div>
        <div className='mt-8'>
            <Link href='/ContactUs'><button className='w-40 h-10 rounded-xl bg-green-300'>Contact Us</button></Link>
        </div>
    </div>
  )
}
