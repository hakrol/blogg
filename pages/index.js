import React from "react";
// import Link from "next/link";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { FLOWERPOWER_POSTS_API } from "../constants/api";
// import moment from 'moment';

export default function Home(props) {
	return (
		<>
    <Layout>
        <Head title="Home" />
				<Heading h1="THIS IS H!"/>
          {props.posts.map((post) =>  {
          return (
            <React.Fragment key={post.id}>
            <h3 key={post.title.rendered}>{post.title.rendered}</h3>
            <div className="excerpt" key={post.excerpt.rendered} dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
            <a key={post.id} href={`post/${post.id}`}>Read more</a>
            </React.Fragment>
          )
        })} 


    </Layout>
		</>
	);
}

export async function getStaticProps () {
  let posts = [];

  try {

    const response = await axios.get(FLOWERPOWER_POSTS_API);

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