import React from "react";
import PostPreview from "./PostPreview";

const AllPost = ({posts}) =>{

    function renderPostPreview(){
        return posts.map((post)=>{
            console.log(post)
            return <PostPreview post={post} key={post.id} img={post.attributes.images.data}/>
        })
    }

    return(
        <div>
            {renderPostPreview()}
        </div>

    )
}

export default AllPost