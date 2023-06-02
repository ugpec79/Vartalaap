import { signIn } from 'next-auth/react'
import React from 'react'
export const Login = () => {
  return (
    <div className='h-screen bg-cover flex flex-col items-center justify-center' style={{backgroundImage:`url('/bg.jpg')`}}   >
       <h1 className='font-serif font-extrabold text-white text-4xl mb-5'>Welcome to वार्तालाप !</h1>
       
       <h1 className='font-serif font-extrabold text-white text-2xl mb-5'>Please Sign In with Google</h1>
       <div className='h-40 w-80 bg-white rounded-xl flex items-center justify-center'>
       <button onClick={()=>{signIn()}}
    className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
    <span>Login with Google</span>
</button>
       </div>
    </div>
  )
}
