import axios from "axios";
import HomeLastestPosts from "../components/HomeLastestPosts";
import { API_URL } from "../utils/urls";


const Home = ({posts}) => {
  return (
    <div className="md:p-0 flex justify-start">
      <div className="max-w-3xl rounded flex flex-col md:flex-row ">
        <HomeLastestPosts posts={posts} />
        
      </div>
      
    </div>
    
    ) 
  };

export default Home;

//fetch data from strapi using env variable

export async function getServerSideProps() {
  const postRes = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/posts?populate=*`);
  console.log(postRes)
  return {
    props: {
      posts: postRes.data.data
    }
  }
}
