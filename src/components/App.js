import React, { useState } from "react";
import PostList from "./PostList";

const getPostsList = () => {
  return [
    {
      id: 1,
      author: "Алексей Иванов",
      title: "Новости! Новости! Свежие новости!",
      text: "Это довольно простой тип статьи, для которой ничего не нужно придумывать, поэтому с ней справится даже новичок. Новостная статья анонсирует грядущее событие или дает отчет о прошедшем.",
      likeCounter: 0,
      dislikeCounter: 0,
      sum: 0,
    },
    {
      id: 2,
      author: "Петр Бабушкин",
      title: "Сторителлинг. Рассказ со смыслом",
      text: "Это история с реальными или вымышленными персонажами, с помощью которой до целевой аудитории доносится важная информация. В ней четко прослеживается главная мысль, способная мотивировать читателя к действию.",
      likeCounter: 0,
      dislikeCounter: 0,
      sum: 0,
    },
    {
      id: 3,
      author: "Анна Маслакова",
      title: "Обзор. Самая полная и проверенная информация",
      text: "Задача такой статьи — дать читателю детальное описание чего-либо и предоставить всю необходимую информацию. Обзор может быть о чем угодно и предполагает отличное знание тематики.",
      likeCounter: 0,
      dislikeCounter: 0,
      sum: 0,
    },
    {
      id: 4,
      author: "Зинаида Семенова",
      title: "Рецензии, отзывы, рекомендации      ",
      text: "Это достаточно серьезные типы статей для сайта. В их основе лежит личное мнение о какой-либо новости, информации, товаре или услуге. Они помогают читателю сформировать собственное мнение о предмете речи.",
      likeCounter: 0,
      dislikeCounter: 0,
      sum: 0,
    },
  ];
};

export default () => {
  const [posts, setPosts] = useState(getPostsList());

  const likeHandle = (id) => {
    const arr = [...posts];
    const idx = arr.findIndex((post) => post.id === id);
    if (idx !== -1) {
      arr[idx].likeCounter += 1;
    }
    setPosts(arr);
  };
  const dislikeHandle = (id) => {
    const arr = [...posts];
    const idx = arr.findIndex((post) => post.id === id);
    if (idx !== -1) {
      arr[idx].dislikeCounter += 1;
    }
    setPosts(arr);
  };
  const calcSum = (id) => {
    const arr = [...posts];
    const idx = arr.findIndex((post) => post.id === id);
    if (idx !== -1) {
      arr[idx].sum = arr[idx].likeCounter - arr[idx].dislikeCounter;
    }
    setPosts(arr);
  };

  return (
    <div>
      <PostList
        posts={posts}
        likeHandle={likeHandle}
        dislikeHandle={dislikeHandle}
        calcSum={calcSum}
      />
    </div>
  );
};
