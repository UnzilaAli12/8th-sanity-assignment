"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Heart, Search} from 'lucide-react'



import React from 'react'

const Navbar = () => {

  return (
    <div>
     <div className='flex w-full justify-between ' >
<div className='relative mt-7 ml-2 md:ml-10' >
<Input placeholder='Search Blog' className='w-[250px] md:w-[600px] text-center text-[#CCCCCC] flex justify-center items-center text-xs rounded-full bg-[#F5F5F5] ' />
<Search className='absolute top-2 left-2' />
</div>

<div className='flex items-end gap-6 mr-6' >
<Button variant={'outline'} size={'icon'} className='rounded-full'>
  <Heart/>
</Button>


</div> 
    </div>


    </div>
  )
}

export default Navbar
