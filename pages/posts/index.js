import React from "react";
import AllPost from "../../components/AllPost";
import axios from "axios";
import { API_URL } from "../../utils/urls";

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
    const PostRes = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/posts?populate=*`);

    return {
        props: {
            posts : PostRes.data.data
        },
    };
}