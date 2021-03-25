import { BASE_URL, FLOWERPOWER_POSTS_API } from "../../constants/api"
import axios from "axios";
import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import Heading from "../../components/layout/Heading";
import moment from "moment";

const url = BASE_URL + FLOWERPOWER_POSTS_API;

export default function Post({ post }) {
    return (
        <Layout>
            <Head title={post.title.rendered} />
            <Heading h1={post.title.rendered} />
            <p className="date">{moment(post.date).format('DD MMMM YYYY')}</p>
            <div className="content" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        </Layout>
    )
}

export async function getStaticPaths () {
    try {
        const response = await axios.get(url);

        const posts = response.data;

        const paths = posts.map((post) => ({
            params: { id: post.id.toString() },
        }));

        return {paths: paths, fallback: false};

    } catch(error) {
        console.log(error);
    }

}

export async function getStaticProps({ params }) {
    const url = `${BASE_URL + FLOWERPOWER_POSTS_API}/${params.id}`;

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