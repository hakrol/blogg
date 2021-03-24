import { FLOWERPOWER_POSTS_API } from "../../constants/api"
import axios from "axios";
import Layout from "../layout/Layout";
import Head from "../layout/Head";
import Heading from "../layout/Heading";
// import moment from "moment";

export default function Post({ post }) {
    return (
        <Layout>
            <Head title={post.title.rendered} />
            <Heading h1={post.title.rendered} />
            {/* {moment(posts.date).format('DD MMMM YYYY')} */}
            <div className="date" date={post.date} />
            <div className="content" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        </Layout>
    )
}

export async function getStaticPaths () {
    try {
        const response = await axios.get(FLOWERPOWER_POSTS_API);

        const posts = response.data;

        const paths = posts.map((post) => ({
            params: { id: post.id },
        }));

        return {paths: paths, fallback: false};

    } catch(error) {
        console.log(error);
    }

}

export async function getStaticProps({ params }) {
    const url = `${FLOWERPOWER_POSTS_API}/${params.id}`;

    let post = null;

    try {
        const response = await axios.get(url);
        post = response.data;
        console.log(post);

    } catch (error) {
        console.log(error);
    }

    return {
        props: { post: post },
    };
}