import axios from "axios";
import MarkdownIt from "markdown-it/lib";
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import reactMarkdown from "react-markdown";
import { API_URL } from "../../utils/urls";
//ver que es mejor, react mark down o markdownit y renderizar correctamente el contenido que viene desde strapi.
//Page for every post that we click on 
const PostPage = ({post}) => {
    const {attributes} = post
    const orig = `${API_URL}`

    const markdown = attributes.content
    
    //mark down let us to render strapi content with tags
    // const md = new MarkdownIt()
    // const htmlContent = md.render(attributes.content);
    return(
        <div className='my-5 md:mx-0 pb-4 md:my-10 border-b-2'>
             <div className='flex flex-col md:flex-row-reverse'>
             <div className='flex flex-col justify-center'>

                 
        <article className="p-2 md:p-0 max-w-3xl">
            <header>
                <span className="m-2 font-light italic">Publicado: {attributes.date}</span>
                <h1 className="text-2xl font-bold text-darkColor m-2">{attributes.title}</h1>
                <p className="text-xl text-stone-600 m-2 flex flex-wrap">{attributes.description}</p>
                <div className='mx-auto sm:flex m-2 align-center flex justify-center max-w-xs min-w-fit'>
                {
                  attributes.images.data ? attributes.images.data.map(formats =>(
                    <Image
                    key={formats.id}
                      src={orig + formats.attributes.url}
                      alt="Picture of the author"
                      width={450}
                      height={430}
                      className="rounded"
                    />
                  )) : null
                }

              </div>

            </header>
            {/* <section className='text-xl text-stone-600 m-2 flex flex-wrap' dangerouslySetInnerHTML={{__html: htmlContent}}></section> */}
            <div className="prose-xl p-2 md:p-0">
                <ReactMarkdown className='prose'>
                    {markdown}
                </ReactMarkdown>
            </div>
        </article>
             </div>
        </div>
        </div>
    )
};

export default PostPage;

export async function getServerSideProps({params}){
    //obtain data
    const postRes = await axios.get(`${API_URL}/api/posts/${params.id}?populate=*`);
    return{
        props:{
             post: postRes.data.data
        },
    };
}

export async function getStaticPaths(){
    //obtain id
    const postRes = await axios.get(`${API_URL}/api/posts`)
    const paths = postRes.data.data.map((post)=>{
        return{params:{id: post.id.toString()}};
    });
    return{
        paths,
        fallback: false,
        /*only pages that are generated during next build (i.e. returned from the paths property of getStaticPaths) will be visible.
            if a user creates a new blog page at /post/[post-id], it will not be immediately visible afterwards, and visiting that URL will lead to a 404.*/
    };
}