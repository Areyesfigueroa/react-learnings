import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {posts.map((el, i) => (
        <h3 key={i}>{el.title}</h3>
      ))}
    </div>
  );
};

export default Posts;
