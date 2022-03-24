import axios from "axios";
import HomeLastestPosts from "../components/HomeLastestPosts";
import { API_URL } from "../utils/urls";


const Home = ({posts}) => {
  console.log(API_URL)
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
  const postRes = await axios.get(`${API_URL}/api/posts?populate=*`);
  console.log(postRes)
  return {
    props: {
      posts: postRes.data.data
    }
  }
}
