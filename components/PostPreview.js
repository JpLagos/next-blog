import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
const PostPreview = ({post}) => {
  const orig = 'http://localhost:1337'
  return (
      <Link href={`/posts/${post.id}`}>
          <div className='my-5 md:mx-0 pb-4 md:my-10 cursor-pointer border-b-2'>
            <div className='flex flex-col md:flex-row-reverse'>
              <div className='flex flex-col justify-center'>
                <h3 className='text-2xl font-bold text-darkColor m-2 hover:text-blu'>{post.attributes.title}</h3>
                <p className='text-xl text-stone-600 m-2 flex flex-wrap'>{post.attributes.description}</p>
              </div>
              <div className='hidden sm:flex m-2 align-center flex justify-center max-w-xs min-w-fit'>
                {
                  post.attributes.images.data ? post.attributes.images.data.map(formats =>(
                    <Image
                      src={orig + formats.attributes.url}
                      key={orig + formats.attributes.id}
                      alt="Picture of the author"
                      width={200}
                      height={180}
                      className="rounded"
                    />
                  )) : null
                }

              </div>
                
              </div>
          </div>
      </Link>
  )
  
  }

export default PostPreview;



