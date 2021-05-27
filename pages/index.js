import React from "react";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { BASE_URL, FLOWERPOWER_POSTS_API } from "../constants/api";
import BlogPosts from "../components/home/BlogPosts";

const url = BASE_URL + FLOWERPOWER_POSTS_API;

export default function Home() {
    return (
        <>
            <Layout>
                <Head title="Home" />
                <Heading h1="Blogg" />
                <BlogPosts />
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    let posts = [];

    try {
        const response = await axios.get(url);

        console.log(response.data);

        posts = response.data;
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            posts: posts,
        },
    };
}
