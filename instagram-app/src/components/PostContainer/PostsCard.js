import React from "react";

const PostsCard = props => {
    const post = props.post;

    return (
        <li>
            <h3>{post.username}</h3>
            <p>{post.id}</p>
        </li>
    )
}


export default PostsCard;