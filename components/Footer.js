import React from 'react'
import SocialMedia from './socialMedia'

const Footer = () => {
  return (
    <div className='bg-dark flex justify-center flex-col'>
        <div className='flex justify-center'>
            <SocialMedia md={"flex mt-4 text-white"}/>
        </div>
        <div className='text-white flex justify-center text-center flex-col md:flex-row p-2'>
                <span>© Juan Lagos 2021-2022. Derechos reservados. Licencia por MIT</span>
                <span>Codigo en Github.</span>
        </div>
    </div>
  )
}

export default Footer
