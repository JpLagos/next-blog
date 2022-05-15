import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = (props) => {
  return (
    <div className='bg-dark flex justify-center flex-col'>
        <div className='flex justify-center'>
            <SocialMedia md={"flex mt-4 text-white"}/>
        </div>
        <div className='text-white flex justify-center text-center flex-col md:flex-row p-2'>
          {/* footer text */}
            {props.data ? `
                ${props.data.text}
                ${props.data.subText}
                `
                : 'Loading'
              }
        </div>
    </div>
  )
}

export default Footer
