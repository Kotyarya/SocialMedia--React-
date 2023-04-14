import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let newPostElement = React.createRef()
    let addPosts = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ""

    }

    let onPostChanged = () => {
        let text =newPostElement.current.value
        props.updateNewPostText(text)
    }

  return (
    <>
      <textarea ref={newPostElement} onChange={onPostChanged}/>
      <button onClick={addPosts}>Add post</button>
      {props.posts.map(item => <Post key={Math.random()} message={item.message} likeCount={`${item.likeCount}`}/>)}
    </>
  );
};

export default MyPosts;