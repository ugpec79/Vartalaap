import Image from 'next/image'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"

import { Login } from '@/components/Login'
import { Navbar } from '@/components/Navbar'
import { Navig } from '@/components/Navig'
import { Carousl } from '@/components/Carousl'

import { Footer } from '@/components/Footer'
import { useRouter } from 'next/router'
import { Button } from 'flowbite-react'

export default function BlogPage() {
    const router=useRouter();
  const { data: session } = useSession()
  return (
    <div className='flex flex-col w-screen overflow-hidden'>
 
    <Navbar/>
    <Navig/>
    <div className='flex flex-row  justify-center overflow-hidden'>
    <Carousl/>

    </div>
   
    <div className='flex flex-col w-screen ml-5 break-words justify-center items-center'>
    <h1 class="mb-10 text-2xl my-5 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Title!</h1>
    <p className='w-11/12 h-fit text-center my-5 mx-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare. Augue neque gravida in fermentum et sollicitudin ac. At augue eget arcu dictum varius duis at. In eu mi bibendum neque egestas congue quisque egestas diam. Sit amet porttitor eget dolor morbi non arcu. Viverra nibh cras pulvinar mattis nunc. Sed elementum tempus egestas sed sed risus pretium quam. Blandit libero volutpat sed cras ornare arcu dui. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. A pellentesque sit amet porttitor eget dolor morbi. Varius sit amet mattis vulputate enim nulla aliquet. Congue eu consequat ac felis donec.

Placerat duis ultricies lacus sed turpis. Tortor consequat id porta nibh venenatis. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis ultricies. Mauris sit amet massa vitae tortor. Sit amet nulla facilisi morbi tempus. Sed id semper risus in hendrerit gravida rutrum quisque. Laoreet non curabitur gravida arcu ac tortor dignissim. Sodales ut etiam sit amet. Tristique sollicitudin nibh sit amet. Sit amet nisl suscipit adipiscing. Viverra nam libero justo laoreet sit amet cursus. Mauris nunc congue nisi vitae. Risus sed vulputate odio ut. Fermentum leo vel orci porta non pulvinar neque laoreet. Et ultrices neque ornare aenean euismod elementum.

Pulvinar mattis nunc sed blandit libero volutpat sed cras. Urna molestie at elementum eu facilisis sed odio morbi quis. Commodo nulla facilisi nullam vehicula ipsum a. At quis risus sed vulputate odio ut. Nunc congue nisi vitae suscipit. Pellentesque habitant morbi tristique senectus et netus. Eget duis at tellus at urna condimentum. Neque sodales ut etiam sit amet nisl purus in. Scelerisque purus semper eget duis at tellus at. Posuere ac ut consequat semper viverra nam libero justo laoreet. Tellus cras adipiscing enim eu turpis egestas.

Pellentesque diam volutpat commodo sed egestas. Fermentum odio eu feugiat pretium nibh. Lectus arcu bibendum at varius. Sed id semper risus in hendrerit gravida. Sed libero enim sed faucibus turpis in eu mi. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Risus feugiat in ante metus dictum at. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Facilisis volutpat est velit egestas dui id ornare arcu odio.

Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Feugiat in fermentum posuere urna. Id aliquet lectus proin nibh nisl condimentum. Et netus et malesuada fames ac turpis. Eu tincidunt tortor aliquam nulla facilisi. Accumsan tortor posuere ac ut consequat semper viverra nam. Eget mi proin sed libero enim sed faucibus turpis. Quam quisque id diam vel quam. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Amet tellus cras adipiscing enim eu turpis egestas. Et ultrices neque ornare aenean euismod elementum nisi quis. Pellentesque habitant morbi tristique senectus. Dui id ornare arcu odio ut. At tempor commodo ullamcorper a lacus vestibulum sed. Volutpat sed cras ornare arcu dui vivamus arcu. Pellentesque pulvinar pellentesque habitant morbi. Tortor vitae purus faucibus ornare suspendisse sed. Eget arcu dictum varius duis at.</p>

    <div className='flex flex-row justify-center items-center mb-10'><span className='font-bold text-xl'>By</span> <img className='h-5 w-5 rounded-full mx-2' src='/logo.jpg'/> <span className='font-bold text-xl'>Ujjawal Gupta</span></div>
    <div className='flex flex-row justify-center mb-10 '>
  <Button className='mr-5' >
    Update A Blog!
  </Button>
  <Button >
    Delete A Blog!
  </Button>
</div>
    </div>
    <div className='flex flex-col ml-40'>
    <h1 className='font-extrabold text-3xl hover:underline'>Comments</h1>
    <div className='flex flex-row my-5'>
            <img className='h-10 w-10 rounded-full bg-transparent' src='/logo.jpg'/>
            <div className='flex flex-col'>
                <h1 className='h-auto pl-3'><span className='text-3xl text-black'>Ujjawal Gupta</span></h1>
                <h1 className='text-xl  mt-2 break-words my-6 w-11/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare. Augue neque gravida in fermentum et sollicitudin ac. At augue eget arcu dictum varius duis at. In eu mi bibendum neque egestas congue quisque egestas diam. Sit amet porttitor eget dolor morbi non arcu. Viverra nibh cras pulvinar mattis nunc. Sed elementum tempus egestas sed sed risus pretium quam. Blandit libero volutpat sed cras ornare arcu dui. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. A pellentesque sit amet porttitor eget dolor morbi. Varius sit amet mattis vulputate enim nulla aliquet. Congue eu consequat ac felis donec.

Placerat duis ultricies lacus sed turpis. Tortor consequat id porta nibh venenatis. Fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis ultricies. Mauris sit amet massa vitae tortor. Sit amet nulla facilisi morbi tempus. Sed id semper risus in hendrerit gravida rutrum quisque. Laoreet non curabitur gravida arcu ac tortor dignissim. Sodales ut etiam sit amet. Tristique sollicitudin nibh sit amet. Sit amet nisl suscipit adipiscing. Viverra nam libero justo laoreet sit amet cursus. Mauris nunc congue nisi vitae. Risus sed vulputate odio ut. Fermentum leo vel orci porta non pulvinar neque laoreet. Et ultrices neque ornare aenean euismod elementum.

Pulvinar mattis nunc sed blandit libero volutpat sed cras.</h1>
            </div>
         
        </div>

        <form >
   
       
    
   
    <div className='mb-6 ml-6'>
    <label htmlFor="message" className="block mb-2 text-lg font-semibold font-medium text-gray-900 dark:text-white">Write Your Comments</label>
<textarea id="message" rows="4" onChange={(e)=>{setMessage(e.target.value)}} className="block p-2.5 w-11/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
    </div>
    
    <button onClick={(e)=>{handleSubmit(e)}} className="text-white ml-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
    <Footer/>
  
    </div>
  )
}