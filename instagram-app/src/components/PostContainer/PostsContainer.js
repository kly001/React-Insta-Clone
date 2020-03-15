import React from "react";

import PostsCard from "./PostsCard.js"

const Posts = props => {
    console.log(props.posts)
    return (
  

       <ul>
           {props.posts.map(post => {
               return <PostsCard post={post} />
           })}

       </ul>
    )
};

export default Posts;