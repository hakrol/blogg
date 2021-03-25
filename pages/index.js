import React from "react";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { BASE_URL, FLOWERPOWER_POSTS_API } from "../constants/api";

const url = BASE_URL + FLOWERPOWER_POSTS_API;

export default function Home(props) {
	return (
		<>
    <Layout>
        <Head title="Home" />
				<Heading h1="THIS IS H!"/>
          {props.posts.map((post) =>  {
          return (
            <div key={post.id}>
              <h3>{post.title.rendered}</h3>
              <div className="excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
              <a href={`post/${post.id}`}>Read more</a>
            </div>
          )
        })} 


    </Layout>
		</>
	);
}

export async function getStaticProps () {
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