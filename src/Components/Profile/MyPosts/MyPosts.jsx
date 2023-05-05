import Post from "./Post/Post";
import React from "react";
import PostForm from "./PostForm";

const MyPosts = (props) => {


    let postsElement = props.posts.map(item => <Post key={item.id} message={item.message} likeCount={`${item.likeCount}`}/>)


    const submit = (value) => {
        if (value.PostText === "") {
            return
        }
        props.addPost(value.PostText)
        value.PostText = ""
    }

  return (
    <>
      <PostForm onSubmit={submit}/>
      {postsElement}
    </>
  );
};




export default MyPosts;