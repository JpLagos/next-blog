import Link from "next/link";
import React, { useState } from "react";
import SocialMedia from "./SocialMedia";

const NavBar = (props) => {
    const [isActive, setActive] = useState('false');
    const handleToggle = () =>{
        setActive(!isActive)
    }
  return (
      <nav className="bg-dark text-white py-3 font-oswald">
        <div className="container mx-auto max-w-6xl">
            <div className="flex justify-center lg:justify-between">
                <div className="flex justify-left items-center">
                    <Link href="/">
                        <h1 className="text-6xl font-bold cursor-pointer">
                            {props.data ? props.data.pageLogo : 'Loading'}
                        </h1>
                    </Link>
                </div>
                <SocialMedia md={"hidden sm:hidden mr-12"}/>
            </div>
            <div className="block flex justify-end md:justify-between px-4 lg:hidden">    

                <SocialMedia md={"hidden sm:hidden md:flex"}/>
                <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={handleToggle}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>

            <div className={isActive ? "hidden lg:inline-block lg:pt-4 lg:mt-4 w-full" : "visible absolute bg-dark w-full flex justify-end" } >
                <ul className=" flex justify-end ml-4 md:ml-0">
                    <li className="flex flex-col mr-10 md:mt-2 lg:flex-row">

                        <Link href="/" passHref>
                            <a className="text-2xl text-zinc-300 mr-3 hover:text-zinc-400 
                                        border-b-2 border-darkColor hover:border-b-2 my-1 mx-5
                                        hover:border-orange 
                                        transition ease-in-out duration-500 flex flex-row gap-1">

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 18" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                            Inicio</a>
                        </Link>

                        <Link href="/posts" passHref>
                            <a className="text-2xl text-zinc-300 mr-3 hover:text-zinc-400
                                        border-b-2 border-darkColor hover:border-b-2 my-1 mx-5
                                        hover:border-orange 
                                        transition ease-in-out duration-500 flex flex-row gap-1">

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 18" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                            Posts</a>
                        </Link>

                        <Link href="/contact" passHref>
                            <a className="text-2xl text-zinc-300 mr-3 hover:text-zinc-400
                                        border-b-2 border-darkColor hover:border-b-2 my-1 mx-5
                                        hover:border-orange 
                                        transition ease-in-out duration-500 flex flex-row gap-1">

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 18" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Contacto</a>
                        </Link>
                    </li>
                </ul>
            </div>
          </div>            
      </nav>
  )
};
export default NavBar;


