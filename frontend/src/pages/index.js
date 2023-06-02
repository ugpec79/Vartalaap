import Image from 'next/image'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"

import { Login } from '@/components/Login'
import { Navbar } from '@/components/Navbar'
import { Navig } from '@/components/Navig'
import { Carousl } from '@/components/Carousl'

import { Footer } from '@/components/Footer'
import { HomePage } from '@/components/HomePage'
export default function Home() {

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Head>
          <title>Home Page</title>
        </Head>
        <div className='flex flex-col overflow-hidden'>

          <Navbar />
          <Navig />
          <div className='flex flex-row overflow-hidden justify-center'>
            <Carousl />
           
          </div>
      
            <div className='flex flex-col w-full ml-5'>
              <HomePage />


            </div>


        
          <Footer />

        </div>


      </>
    )
  }
  return (
    <>
      {/* <Navigationbar/> */}
      {/* <button onClick={() => signIn()}>Sign in</button> */}
      <Head>
        <title>Login Page</title>
      </Head>
      <Login />

      {/* <FooterBar/> */}

    </>
  )
}
