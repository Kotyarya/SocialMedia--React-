import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <>
      <textarea></textarea>
      <button>Add post</button>
      {props.posts.map(item => <Post message={item.message} likeCount={`${item.likeCont}`}/>)}
    </>
  );
};

export default MyPosts;
