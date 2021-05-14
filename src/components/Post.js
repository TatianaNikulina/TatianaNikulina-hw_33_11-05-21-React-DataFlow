import React from "react";
import PostCounter from "./PostCounter";

export default ({
  id,
  author,
  title,
  text,
  likeCounter,
  dislikeCounter,
  sum,
  likeHandle,
  dislikeHandle,
  calcSum,
}) => {
  return (
    <div>
      <h3>Автор статьи: {author}</h3>
      <h4>{title}</h4>
      <p>{text}</p>
      <PostCounter
        postid={id}
        mylikeCounter={likeCounter}
        dislikeCounter={dislikeCounter}
        sum={sum}
        likeHandle={likeHandle}
        dislikeHandle={dislikeHandle}
        calcSum={calcSum}
      />
    </div>
  );
};
