import React ,{useState, useEffect} from 'react'
import JsonData from '../data/data.json'
import Link from 'next/link'

const SideBar = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    setData(JsonData);

  },[])
  return (
    <div className='flex align-center flex-col inline sm:hidden lg:inline w-96 my-10 mx-4'>
        <div className='bg-blu flex justify-start mt-4'>
            <span className='text-white text-xl align-center px-3 pb-1'>Tecnologias usadas:</span>
        </div>

        <div className='bg-white flex flex-wrap'>
          { 
            data.technologies ? data.technologies.map(tech=>(
               <a className='mt-3 mr-1' target="blank" key={tech.id} href={tech.url}><span className='bg-orange mt-2 mr-1 p-1 cursor-pointer'>{tech.name}</span></a>
            )) : null
          }  

        </div>
    </div>
  )
}

export default SideBar
