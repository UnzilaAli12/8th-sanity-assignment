
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
      <div className='w-full h-[60px] flex  items-center justify-between bg-yellow-500  ' >
        <h1 className='font-extrabold text-2xl text-amber-800 ml-1 md:ml-3' >myBLOG.COM</h1>
        <ul className="flex gap-3 md:gap-8 font-extrabold md:font-bold text-[11px] md:text-lg font-serif ml-2 md:ml-0 mr-2 md:mr-10">
        <li className="cursor-pointer sm:underline hidden md:block hover:text-white"><Link href="/">Home</Link></li>
        <li className="cursor-pointer sm:underline hover:text-white"><Link href="/About" target="_blank">About</Link></li>
        <li className="cursor-pointer sm:underline hover:text-white"><Link href="/All-Blogs" target="_blank"> All Blogs </Link></li>
        <li className="cursor-pointer sm:underline hover:text-white"><Link href="/Category" target="_blank">Category</Link></li>
        <li className="cursor-pointer sm:underline hover:text-white"><Link href="/Contact" target="_blank">Contact</Link></li>
        <li className="cursor-pointer sm:underline hidden md:block hover:text-white"><Link href="/SignUp" target="_blank">Sign Up</Link></li>
        <li className="cursor-pointer sm:underline hidden md:block hover:text-white"><Link href="/SignIn" target="_blank">Sign Ip</Link></li>
      </ul>
      </div>


</header>
     </div>
  
  )
}

export default Header
