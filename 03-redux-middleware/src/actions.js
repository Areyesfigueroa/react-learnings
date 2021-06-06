import axios from "axios";

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

// export const fetchPosts = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   return {
//     type: "FETCH_POSTS",
//     payload: response.data,
//   };
// };
