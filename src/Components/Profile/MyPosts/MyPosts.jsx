import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let newPostElement = React.createRef()

    let postsElement = props.posts.map(item => <Post key={item.id} message={item.message} likeCount={`${item.likeCount}`}/>)


    let onAddPosts = () => {
        if (newPostElement.current.value === "") {
            return
        }
        props.addPost()
        newPostElement.current.value = ""
    }

    let onPostChanged = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


  return (
    <>
      <textarea ref={newPostElement} onChange={onPostChanged}/>
      <button onClick={onAddPosts}>Add post</button>
      {postsElement}
    </>
  );
};

export default MyPosts;