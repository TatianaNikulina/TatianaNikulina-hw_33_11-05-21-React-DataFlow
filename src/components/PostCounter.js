import React from "react";

export default ({
  postid,
  mylikeCounter,
  dislikeCounter,
  sum,
  likeHandle,
  dislikeHandle,
}) => {
  return (
    <div>
      <button onClick={() => likeHandle(postid)}>Like "+"</button>
      <span>{mylikeCounter}</span>
      <button onClick={() => dislikeHandle(postid)}>Dislike "-"</button>
      <span>{dislikeCounter}</span>
      <h4>Рейтинг</h4>
      <span>{sum}</span>
    </div>
  );
};
