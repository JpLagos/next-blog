import React from "react";
import AllPost from "../../components/AllPost";
import axios from "axios";

const posts = ({posts}) => {
    return (
        <div className="md:p-0 flex justify-start">
            <div className="max-w-3xl rounded flex flex-col md:flex-row ">
                <AllPost posts={posts}/>
            </div>
        </div>
    )
};
export default posts

export async function getServerSideProps() {
    const PostRes = await axios.get(`https://strapi-lagos.herokuapp.com/api/posts?populate=*`);

    return {
        props: {
            posts : PostRes.data.data
        },
    };
}