import axios from "axios";
import HomeLastestPosts from "../components/HomeLastestPosts";


const Home = ({posts}) => {
  
  return (

    <div className="md:p-0 flex justify-start">
      <div className="max-w-3xl rounded flex flex-col md:flex-row ">
        {/* <HomeHeader/> */}
        <HomeLastestPosts posts={posts} />
        
      </div>
      
    </div>
    
    ) 
  };

export default Home;

export async function getServerSideProps() {
  const postRes = await axios.get('http://localhost:1337/api/posts?populate=*');

  return {
    props: {
      posts: postRes.data.data
    }
  }
}
