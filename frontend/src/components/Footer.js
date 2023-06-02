import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg w-full m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">Home</Link>
        </li>
        <li>
            <Link href="/Aboutus" className="mr-4 hover:underline md:mr-6 ">About Us</Link>
        </li>
        <li>
            <Link href="/Service" className="mr-4 hover:underline md:mr-6">Services</Link>
        </li>
        <li>
            <Link href="/Facilities" className="mr-4 hover:underline md:mr-6">Facilities</Link>
        </li>
        <li>
            <Link href="/ContactUs" className="hover:underline">Contact Us</Link>
        </li>
        
    </ul>
    </div>
</footer>
  )
}
