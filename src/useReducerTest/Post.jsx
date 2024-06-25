import { useReducer, useState } from "react";
import { ACTION_TYPES } from './postActionTypes';
import { INITIAL_STATE, postReducer } from './postReducer';

// import { INITIAL_STATE, postReducer } from "./PostReducer";
// import { ACTION_TYPES } from "./postActionTypes";
// https://www.youtube.com/watch?v=RZPAQV7JvNU

const Post = () => {
  // USING USESTATE

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [post, setPost] = useState({});

  // const handleFetch = () => {
  //   setLoading(true);
  //   setError(false);
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setPost(data);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setError(true);
  //     });
  // };

  //USING USEREDUCER

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log("res:"+res.json)
        return res.json();
      })
      .then((data) => {
        console.log("data:"+data)
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        console.log("err:"+err)
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };

  return (
    //USING USESTATE

    // <div>
    //   <button onClick={handleFetch}>
    //     {loading ? "Wait..." : "Fetch the post"}
    //   </button>
    //   <p>{post?.title}</p>
    //   <span>{error && "Something went wrong!"}</span>
    // </div>


    //USING USEREDUCER
    
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  );
};

export default Post;