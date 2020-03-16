import React from "react";

const PostsCard = props => {
    const post = props.post;

    return (
        <div className="postsCard">
        <li>
            <p>{post.id}</p>
            <h3>{post.username}</h3>
            {/* <p>{post.thumbnailUrl}</p>
            <p>{post.imageUrl}</p> */}
        </li>
        </div>
    )
}


export default PostsCard;