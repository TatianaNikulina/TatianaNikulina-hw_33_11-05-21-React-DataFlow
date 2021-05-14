import React from "react";
import Post from "./Post";

export default ({ posts, likeHandle, dislikeHandle, calcSum }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Post
            id={post.id}
            author={post.author}
            title={post.title}
            text={post.text}
            likeCounter={post.likeCounter}
            dislikeCounter={post.dislikeCounter}
            sum={post.sum}
            likeHandle={likeHandle}
            dislikeHandle={dislikeHandle}
            calcSum={calcSum}
          />
        </li>
      ))}
    </ul>
  );
};
