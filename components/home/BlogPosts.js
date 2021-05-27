import React from "react";
import axios from "axios";
import { BASE_URL, FLOWERPOWER_POSTS_API } from "../../constants/api";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const url = BASE_URL + FLOWERPOWER_POSTS_API;

export default function BlogPosts() {
    const [BlogList, setBlogList] = useState([]);

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await axios.get(url);

                setBlogList(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                console.log("finally");
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {BlogList.map((post) => {
                return (
                    <div key={post.id}>
                        <h3>{post.title.rendered}</h3>
                        <div
                            className="excerpt"
                            dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered,
                            }}
                        />
                        <Button href={`post/${post.id}`}>Read more</Button>
                    </div>
                );
            })}
        </>
    );
}
