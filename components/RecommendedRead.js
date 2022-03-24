import React from 'react'
import Link from "next/Link"

const RecommendedRead = () => {
  return (
    <div className='w-full bg-stone-200 flex justify-center py-1'>
        <div className='max-w-6xl w-full flex flex-row justify-center md:p-5 lg:p-0 md:justify-start gap-5 md:gap-12'>
            <p className='text-base md:text-xl font-bold'>Recomendado:</p>
            <ul>
                <li className='flex gap-5 text-base md:gap-10 md:text-xl text-stone-600'>
                    <Link href="/posts/1"
                        className='border-b-2 border-stone-200 
                                        hover:border-b-2
                                        hover:border-orange 
                                        transition ease-in-out duration-500'>My first Post!
                    </Link>
                    {/* <Link href="/posts">
                        <a className='border-b-2 border-stone-200 
                                        hover:border-b-2
                                        hover:border-orange 
                                        transition ease-in-out duration-500'>Posts</a>
                    </Link><Link href="/posts">
                        <a className='border-b-2 border-stone-200 
                                        hover:border-b-2
                                        hover:border-orange 
                                        transition ease-in-out duration-500'>Posts</a>
                    </Link> */}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default RecommendedRead