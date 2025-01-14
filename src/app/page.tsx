import client  from "@/sanity/lib/client";
import Image from "next/image";
import Link from 'next/link';
import Header from '@/app/components/Header'
import Navbar from '@/app/components/Navbar'

export interface Blog{
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default async function Home() {

const data: Blog =await client.fetch(`*[_type == "blog"]{
  title,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url
}[0]`)
 
  return (
    <div>
      <Header/>
      <Navbar/>
    <div className="h-screen flex justify-center items-center">
    <Link href={`/blog/${data.slug}`} target="_blank">
      <div className='p-2 shadow-lg rounded-md max-w-80 hover:scale-105 active:scale-100 transition-all cursor-pointer'>
        <Image
        src={"/wp4956751.jpg"}
        alt={"Image"}
        width={300}
        height={400}
        
        
        />
        <div className="p-2 " >
          <h2 className="text-lg font-bold mb-3">{data.title}</h2>
          <p className="text-sm line-clamp-1">{data.description}</p>
        </div>
      </div>
      </Link>
    </div>
    </div>
      );
}
