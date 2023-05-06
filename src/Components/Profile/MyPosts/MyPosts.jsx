import Post from "./Post/Post";
import React from "react";
import PostForm from "./PostForm";

const MyPosts = (props) => {

    let postsElement = props.posts.map(item => <Post key={item.id} message={item.message} likeCount={`${item.likeCount}`}/>)


    const submit = (value) => {
        props.addPost(value.PostText)
    }

  return (
    <>
      <PostForm onSubmit={submit}/>
      {postsElement}
    </>
  );
};




export default MyPosts;