import '../styles/globals.css'
import NavBar from '../components/NavBar'
import RecommendedRead from '../components/RecommendedRead'
import SideBar from "../components/SideBar";
import Footer from '../components/Footer';
import JsonData from '../data/data.json'
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  //set data from jsonData to components via props

  const [data, setData] = useState([])
  useEffect(()=>{
    setData(JsonData);
  },[])
  return(
    <div className='flex flex-col h-screen'>
      <NavBar data={data.header} />
      <RecommendedRead/>
      <div className='flex flex-col container mx-auto max-w-6xl lg:flex-row flex-grow'>
        <Component {...pageProps} />
        <SideBar data={data.sideBar}/>
      </div>
      <Footer className="inset-x-0 bottom-0" data={data.footer}/>
    </div>
  ) 
}

export default MyApp
