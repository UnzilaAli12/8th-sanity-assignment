import React from 'react'
import Image from 'next/image'
import client from '@/sanity/lib/client'
import {Blog} from '@/app/page'
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';

interface Params{
    params:{
    slug:string
    }
}
const BlogPost = async ({params}:Params) => {
    const {slug} = params;
const data:Blog | null = await client.fetch(`*[_type == "blog" && slug.current == $slug]{
  title,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url
}[0]`, {slug} )

.catch((err) => {
console.error('Error fetching blog post:', err);
return null;
});

if (!data) {   return (
      <div>
        <Header />
        <Navbar />
        <div className="max-w-7xl my-20 mx-auto shadow-xl rounded-lg p-4 text-center">
          <h1 className="font-bold text-2xl text-red-500">Blog post not found</h1>
          <p className="text-gray-500 mt-2">The blog post you are looking for might have been removed or the slug is incorrect.</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header/>
      <Navbar/>
    <div className='max-w-7xl my-20 mx-auto shadow-xl rounded-lg p-4 flex flex-col gap-4 items-center' >
      <div>
        <Image className='rounded-md object-cover'
        src={data.imageUrl}
        alt={data.title}
        width={600}
        height={600}
        />
      </div>
      <div>
        <h1 className='font-bold text-2xl  text-center mt-2' >{data.title}</h1>
        <p className='font-medium mt-2 text-center' >{data.description}</p>
      </div>
    </div>
    </div>
  )
}

export default BlogPost
