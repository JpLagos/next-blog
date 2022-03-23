import '../styles/globals.css'
import NavBar from '../components/NavBar'
import CurrentPageName from '../components/CurrentPageName'
import RecommendedRead from '../components/RecommendedRead'
import SideBar from "../components/SideBar";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return(
    <div className='flex flex-col h-screen'>
      <NavBar />
      <RecommendedRead/>
      {/* <CurrentPageName/> */}
      <div className='flex flex-col container mx-auto max-w-6xl lg:flex-row flex-grow'>
        <Component {...pageProps} />
        <SideBar/>
      </div>
      <Footer className="inset-x-0 bottom-0"/>
    </div>
  ) 
}

export default MyApp
