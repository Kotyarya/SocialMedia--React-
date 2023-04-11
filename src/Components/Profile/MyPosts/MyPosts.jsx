import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi!", likeCont: 45 },
    { id: 2, message: "its my first message", likeCont: 0 },
  ];
  return (
    <>
      <textarea></textarea>
      <button>Add post</button>
      <Post
        message={postData[0].message}
        likeCount={`${postData[0].likeCont}`}
      />
      <Post
        message={postData[1].message}
        likeCount={`${postData[1].likeCont}`}
      />
    </>
  );
};

export default MyPosts;
