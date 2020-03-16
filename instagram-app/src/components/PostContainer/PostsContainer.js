import React from "react";

import PostsCard from "./PostsCard.js"

const PostsContainer = props => {
    console.log("Props from Posts:",props.posts)
    return (
    // Posts need to be mapped here.
       <ul>
           {props.posts.map(post => {
               return <PostsCard post={post} />
           })}
       </ul>
    )
};

export default PostsContainer;