import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {
    let newPostElement = React.createRef()

    let addPosts = () => {
        props.dispatch(addPostActionCreator())
        newPostElement.current.value = ""
    }

    let onPostChanged = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }


  return (
    <>
      <textarea ref={newPostElement} onChange={onPostChanged}/>
      <button onClick={addPosts}>Add post</button>
      {props.posts.map(item => <Post key={item.id} message={item.message} likeCount={`${item.likeCount}`}/>)}
    </>
  );
};

export default MyPosts;