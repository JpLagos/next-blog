import { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

const HomeLastestPosts = ({posts}) => {

    const [lastestPosts, setLastestPost] = useState([])
    useEffect(()=>{
        setLastestPost(posts.slice().reverse(0, 5));
    }, [posts])

    function renderPostPreview(){
        return lastestPosts.map((post)=>{
            return <PostPreview post={post} key={post.id} img={post.attributes.images.data} />
        })
    }
  return(
      <div >
          {renderPostPreview()}
      </div>

  ) 
};

export default HomeLastestPosts;
