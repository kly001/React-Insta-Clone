import React from "react";

const PostsCard = props => {
    console.log("props from PostsCard:", props)
    const post = props.post;

    return (
        <div className="postsCard">
        <li>
            <h3>{post.username}</h3>
            <p>{post.thumbnailUrl}</p>
        </li>
        </div>
    )
}

export default PostsCard;